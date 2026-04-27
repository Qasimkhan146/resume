import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

type ContactPayload = {
  name: string;
  email: string;
  message: string;
};

type EmailError = Error & {
  code?: string;
  response?: string;
  responseCode?: number;
};

const MAX_NAME_LENGTH = 80;
const MAX_EMAIL_LENGTH = 120;
const MAX_MESSAGE_LENGTH = 4000;

function sanitizeSingleLine(value: string) {
  return value.replace(/[\r\n]+/g, " ").trim();
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function parsePayload(input: unknown): ContactPayload | null {
  if (!input || typeof input !== "object") {
    return null;
  }

  const rawName = "name" in input ? input.name : "";
  const rawEmail = "email" in input ? input.email : "";
  const rawMessage = "message" in input ? input.message : "";

  if (
    typeof rawName !== "string" ||
    typeof rawEmail !== "string" ||
    typeof rawMessage !== "string"
  ) {
    return null;
  }

  const name = sanitizeSingleLine(rawName);
  const email = sanitizeSingleLine(rawEmail).toLowerCase();
  const message = rawMessage.trim();

  if (!name || !email || !message) {
    return null;
  }

  if (
    name.length > MAX_NAME_LENGTH ||
    email.length > MAX_EMAIL_LENGTH ||
    message.length > MAX_MESSAGE_LENGTH
  ) {
    return null;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return null;
  }

  return { name, email, message };
}

function parsePort(value: string | undefined) {
  if (!value) {
    return 587;
  }

  const parsed = Number.parseInt(value, 10);
  return Number.isNaN(parsed) ? 587 : parsed;
}

function parseSecure(value: string | undefined, port: number) {
  if (!value) {
    return port === 465;
  }

  return value.toLowerCase() === "true";
}

function getDevErrorMessage(error: unknown) {
  const e = error as EmailError;
  const parts = [
    e?.message,
    e?.code,
    e?.response,
    e?.responseCode?.toString(),
  ].filter((value): value is string => Boolean(value));

  if (parts.length === 0) {
    return "Unknown email transport error.";
  }

  return parts.join(" | ");
}

export async function POST(request: Request) {
  const payload = parsePayload(await request.json().catch(() => null));

  if (!payload) {
    return NextResponse.json(
      { message: "Please provide a valid name, email, and message." },
      { status: 400 },
    );
  }

  const smtpHost = process.env.SMTP_HOST;
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const smtpPort = parsePort(process.env.SMTP_PORT);
  const smtpSecure = parseSecure(process.env.SMTP_SECURE, smtpPort);
  const toEmail = process.env.CONTACT_TO_EMAIL ?? smtpUser;
  const configuredFromEmail = process.env.CONTACT_FROM_EMAIL;
  const configuredFromName = process.env.CONTACT_FROM_NAME;

  if (!smtpHost || !smtpUser || !smtpPass || !toEmail) {
    return NextResponse.json(
      {
        message:
          "Email service is not configured. Please set SMTP and contact environment variables.",
      },
      { status: 500 },
    );
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpSecure,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  const safeName = sanitizeSingleLine(payload.name);
  const safeEmail = sanitizeSingleLine(payload.email);
  const safeMessageHtml = escapeHtml(payload.message).replace(/\n/g, "<br/>");

  const senderEmail = configuredFromEmail || smtpUser;
  const senderName = sanitizeSingleLine(configuredFromName || "Qasim Khan");

  try {
    await transporter.verify();

    await transporter.sendMail({
      from: `${senderName} <${senderEmail}>`,
      to: toEmail,
      replyTo: safeEmail,
      subject: `New portfolio inquiry from ${safeName}`,
      text: [
        "You received a new inquiry from your portfolio website.",
        "",
        `Name: ${safeName}`,
        `Email: ${safeEmail}`,
        "",
        "Message:",
        payload.message,
      ].join("\n"),
      html: `
        <p>You received a new inquiry from your portfolio website.</p>
        <p><strong>Name:</strong> ${escapeHtml(safeName)}</p>
        <p><strong>Email:</strong> ${escapeHtml(safeEmail)}</p>
        <p><strong>Message:</strong></p>
        <p>${safeMessageHtml}</p>
      `,
    });

    return NextResponse.json({ message: "Inquiry sent successfully." });
  } catch (error) {
    console.error("[api/contact] email send failed", error);

    if (process.env.NODE_ENV !== "production") {
      return NextResponse.json(
        { message: `Email send failed: ${getDevErrorMessage(error)}` },
        { status: 500 },
      );
    }

    return NextResponse.json(
      { message: "Unable to send inquiry right now. Please try again later." },
      { status: 500 },
    );
  }
}
