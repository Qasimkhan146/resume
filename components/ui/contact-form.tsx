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
          <span className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-200">
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
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none ring-blue-200 transition focus:border-blue-500 focus:ring-1 invalid:border-blue-400 focus:invalid:ring-blue-200 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:focus:border-blue-400 dark:invalid:border-gray-500"
          />
        </label>

        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-200">
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
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none ring-blue-200 transition focus:border-blue-500 focus:ring-1 invalid:border-blue-400 focus:invalid:ring-blue-200 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:focus:border-blue-400 dark:invalid:border-gray-500"
          />
        </label>
      </div>

      <label className="block">
        <span className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-200">
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
          className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none ring-blue-200 transition focus:border-blue-500 focus:ring-1 invalid:border-blue-400 focus:invalid:ring-blue-200 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:focus:border-blue-400 dark:invalid:border-gray-500"
        />
      </label>

      {helperText ? (
        <p className="text-xs text-slate-500 dark:text-slate-400">{helperText}</p>
      ) : null}

      <p
        aria-live="polite"
        className={`text-sm ${state.status === "error"
          ? "text-rose-600 dark:text-rose-400"
          : state.status === "success"
            ? "text-emerald-600 dark:text-emerald-400"
            : "text-slate-600 dark:text-slate-300"
          }`}
      >
        {state.message}
      </p>

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex min-h-11 w-full items-center justify-center rounded-lg bg-linear-to-r from-blue-600 to-cyan-600 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:from-blue-700 hover:to-cyan-700 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {isSubmitting ? "Sending..." : buttonText}
      </button>
    </form>
  );
}
