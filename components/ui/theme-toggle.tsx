"use client";

import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark" | null>(null);

  useEffect(() => {
    const root = document.documentElement;
    const stored = window.localStorage.getItem("theme");
    const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const nextTheme =
      stored === "light" || stored === "dark"
        ? stored
        : systemDark
          ? "dark"
          : "light";

    root.classList.toggle("dark", nextTheme === "dark");
    root.style.colorScheme = nextTheme;
    setTheme(nextTheme);
  }, []);

  const activeTheme = theme ?? "light";
  const nextTheme = activeTheme === "dark" ? "light" : "dark";

  const toggleTheme = () => {
    const root = document.documentElement;
    const isDark = root.classList.toggle("dark");
    const nextMode = isDark ? "dark" : "light";

    root.style.colorScheme = nextMode;
    window.localStorage.setItem("theme", nextMode);
    setTheme(nextMode);
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex h-10 items-center justify-center gap-2 rounded-lg border border-(--color-border) bg-(--color-surface) px-3 text-xs font-semibold uppercase tracking-wide text-(--color-text) transition hover:bg-(--color-accent-hover) hover:text-(--color-surface)"
      aria-label={`Switch to ${nextTheme} mode`}
      title={`Switch to ${nextTheme} mode`}
    >
      <span aria-hidden="true">{activeTheme === "dark" ? "☾" : "☀"}</span>
      {theme ? `${activeTheme === "dark" ? "Dark Mode" : "Light Mode"}` : "Theme"}
    </button>
  );
}
