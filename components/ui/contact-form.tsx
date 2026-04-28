"use client";

import { FormEvent, useState } from "react";

type ContactFormValues = {
  name: string;
  email: string;
  message: string;
};

type ContactFormState = {
  status: "idle" | "submitting" | "success" | "error";
  message: string;
};

type ContactFormProps = {
  buttonText?: string;
  helperText?: string;
  className?: string;
};

const INITIAL_VALUES: ContactFormValues = {
  name: "",
  email: "",
  message: "",
};

const INITIAL_STATE: ContactFormState = {
  status: "idle",
  message: "",
};

export function ContactForm({
  buttonText = "Send Inquiry",
  helperText,
  className,
}: ContactFormProps) {
  const [values, setValues] = useState<ContactFormValues>(INITIAL_VALUES);
  const [state, setState] = useState<ContactFormState>(INITIAL_STATE);

  const isSubmitting = state.status === "submitting";

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setState({ status: "submitting", message: "Sending your inquiry..." });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const payload = (await response.json().catch(() => null)) as
        | { message?: string }
        | null;

      if (!response.ok) {
        setState({
          status: "error",
          message: payload?.message ?? "Could not send inquiry. Please try again.",
        });
        return;
      }

      setValues(INITIAL_VALUES);
      setState({
        status: "success",
        message: payload?.message ?? "Inquiry sent successfully.",
      });
    } catch {
      setState({
        status: "error",
        message: "Network issue while sending inquiry. Please try again.",
      });
    }
  };

  return (
    <form className={className ?? "space-y-4"} noValidate onSubmit={onSubmit}>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-(--color-text)">
            Name
          </span>
          <input
            type="text"
            name="name"
            required
            maxLength={80}
            value={values.name}
            onChange={(event) =>
              setValues((prev) => ({ ...prev, name: event.target.value }))
            }
            placeholder="Your full name"
            className="w-full rounded-lg border border-(--color-border) bg-(--color-surface) px-3 py-2.5 text-sm text-(--color-text) outline-none ring-(--color-accent) transition focus:border-(--color-accent) focus:ring-1 invalid:border-(--color-accent) focus:invalid:ring-(--color-accent)"
          />
        </label>

        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-(--color-text)">
            Email
          </span>
          <input
            type="email"
            name="email"
            required
            maxLength={120}
            value={values.email}
            onChange={(event) =>
              setValues((prev) => ({ ...prev, email: event.target.value }))
            }
            placeholder="you@example.com"
            className="w-full rounded-lg border border-(--color-border) bg-(--color-surface) px-3 py-2.5 text-sm text-(--color-text) outline-none ring-(--color-accent) transition focus:border-(--color-accent) focus:ring-1 invalid:border-(--color-accent) focus:invalid:ring-(--color-accent)"
          />
        </label>
      </div>

      <label className="block">
        <span className="mb-1.5 block text-sm font-medium text-(--color-text)">
          Message
        </span>
        <textarea
          name="message"
          rows={6}
          required
          maxLength={4000}
          value={values.message}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, message: event.target.value }))
          }
          placeholder="Tell me about your project, goals, and expected timeline."
          className="w-full rounded-lg border border-(--color-border) bg-(--color-surface) px-3 py-2.5 text-sm text-(--color-text) outline-none ring-(--color-accent) transition focus:border-(--color-accent) focus:ring-1 invalid:border-(--color-accent) focus:invalid:ring-(--color-accent)"
        />
      </label>

      {helperText ? (
        <p className="text-xs text-(--color-muted)">{helperText}</p>
      ) : null}

      <p
        aria-live="polite"
        className={`text-sm ${state.status === "error"
          ? "text-rose-600"
          : state.status === "success"
            ? "text-emerald-600"
            : "text-(--color-muted)"
          }`}
      >
        {state.message}
      </p>

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex min-h-11 w-full items-center justify-center rounded-lg bg-(--color-accent) px-5 py-2.5 text-sm font-semibold text-(--color-surface) transition-all duration-200 hover:-translate-y-0.5 hover:bg-(--color-accent-hover) disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {isSubmitting ? "Sending..." : buttonText}
      </button>
    </form>
  );
}
