"use client";

import { Moon, Sun } from "lucide-react";

export const THEME_KEY = "grc360-theme";

/** Runs before first paint (inline in <head>) so the stored or system theme applies without a flash. */
export const themeBootstrap = `(function(){try{var s=localStorage.getItem("${THEME_KEY}");var d=s?s==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches;document.documentElement.classList.toggle("dark",d);}catch(e){}})();`;

/** Light / dark switch. The icon follows the `dark` class, so it is right from the first paint. */
export function ThemeToggle({ label }: { label: string }) {
  function toggle() {
    const dark = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", dark);
    try {
      localStorage.setItem(THEME_KEY, dark ? "dark" : "light");
    } catch {
      // Storage blocked: the switch still works for this page.
    }
  }
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className="relative inline-flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink-2 transition-colors hover:border-line-strong hover:bg-surface-2 hover:text-ink"
    >
      <Sun className="h-[17px] w-[17px] transition-all dark:-rotate-90 dark:scale-0" strokeWidth={1.75} />
      <Moon className="absolute h-[17px] w-[17px] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" strokeWidth={1.75} />
    </button>
  );
}
