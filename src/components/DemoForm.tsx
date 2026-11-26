"use client";

import { useState } from "react";
import { COMPANY } from "@/site/company";
import type { Site } from "@/site/types";
import { Btn } from "./primitives";

/**
 * The demo request. It posts to the Strativu site's Formspree form; if that fails it opens the
 * visitor's mail app addressed to the company e-mail instead, and says which one happened.
 */
export function DemoForm({ t }: { t: Site["contact"]["form"] }) {
  const [msg, setMsg] = useState<{ text: string; error?: boolean } | null>(null);
  const [sending, setSending] = useState(false);

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const f = new FormData(form);
    const get = (k: string) => String(f.get(k) ?? "").trim();
    const subject = `${t.subject}: ${get("company")}`;

    if (COMPANY.formspreeId) {
      setSending(true);
      try {
        const res = await fetch(`https://formspree.io/f/${COMPANY.formspreeId}`, {
          method: "POST",
          headers: { Accept: "application/json", "Content-Type": "application/json" },
          body: JSON.stringify({ _subject: subject, source: "GRC360 site", ...Object.fromEntries(f) }),
        });
        if (res.ok) {
          form.reset();
          setMsg({ text: t.sent });
          return;
        }
      } catch {
        // Falls through to the mail app below.
      } finally {
        setSending(false);
      }
    }

    if (!COMPANY.email) {
      setMsg({ text: t.noAddress, error: true });
      return;
    }
    const l = t.bodyLabels;
    const body = [
      `${l.name}: ${get("name")}`,
      `${l.company}: ${get("company")}`,
      `${l.role}: ${get("role")}`,
      `${l.sector}: ${get("sector")}`,
      `${l.email}: ${get("email")}`,
      `${l.phone}: ${get("phone")}`,
      "",
      get("note"),
    ].join("\n");
    window.location.href = `mailto:${COMPANY.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setMsg({ text: t.opened.replace("{email}", COMPANY.email) });
  }

  const field =
    "mt-1.5 h-12 w-full rounded-[10px] border border-line bg-surface px-3.5 text-[15px] text-ink outline-none transition-[border-color,box-shadow] placeholder:text-ink-4 focus:border-brand focus:shadow-[0_0_0_3px_var(--brand-soft)]";
  const label = "block text-[13.5px] font-medium text-ink-2";

  return (
    <form onSubmit={submit} className="card grid gap-5 !bg-surface p-6 md:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className={label}>
          {t.name}
          <input name="name" required autoComplete="name" className={field} />
        </label>
        <label className={label}>
          {t.company}
          <input name="company" required autoComplete="organization" className={field} />
        </label>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className={label}>
          {t.email}
          <input name="email" type="email" required autoComplete="email" className={field} />
        </label>
        <label className={label}>
          {t.phone}
          <input name="phone" type="tel" autoComplete="tel" className={field} />
        </label>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className={label}>
          {t.role}
          <input name="role" placeholder={t.rolePlaceholder} className={field} />
        </label>
        <label className={label}>
          {t.sector}
          <select name="sector" defaultValue="" className={field}>
            <option value="" disabled>
              {t.sectorChoose}
            </option>
            {t.sectors.map((s) => (
              <option key={s}>{s}</option>
            ))}
            <option>{t.sectorOther}</option>
          </select>
        </label>
      </div>
      <label className={label}>
        {t.note}
        <textarea name="note" rows={4} placeholder={t.notePlaceholder} className={`${field} h-auto py-3`} />
      </label>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Btn type="submit" size="lg" arrow disabled={sending}>
          {t.submit}
        </Btn>
        {!msg && <p className="text-[13px] text-ink-3">{t.hint}</p>}
      </div>
      {msg && (
        <p role="status" className={`rounded-[10px] border px-4 py-3 text-[14px] ${msg.error ? "border-warn/30 bg-warn-soft text-warn" : "border-brand-line bg-brand-soft text-ink"}`}>
          {msg.text}
        </p>
      )}
    </form>
  );
}
