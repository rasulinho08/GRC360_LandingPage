"use client";

import { useState } from "react";
import { CONTACT } from "@/content/contact";
import type { Content } from "@/content/types";

/**
 * The demo request. It posts to the Strativu site's Formspree form; if that fails it opens the
 * visitor's mail app addressed to CONTACT.email instead, and says which one happened.
 */
export function DemoForm({ t, sectors }: { t: Content["demo"]["form"]; sectors: string[] }) {
  const [msg, setMsg] = useState<{ text: string; error?: boolean } | null>(null);
  const [sending, setSending] = useState(false);

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const f = new FormData(form);
    const get = (k: string) => String(f.get(k) ?? "").trim();
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

    // The Strativu site's own form endpoint: the request lands in the company inbox.
    if (CONTACT.formspreeId) {
      setSending(true);
      try {
        const res = await fetch(`https://formspree.io/f/${CONTACT.formspreeId}`, {
          method: "POST",
          headers: { Accept: "application/json", "Content-Type": "application/json" },
          body: JSON.stringify({ _subject: `${t.subject}: ${get("company")}`, source: "GRC360 landing", ...Object.fromEntries(f) }),
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

    if (!CONTACT.email) {
      setMsg({ text: t.noAddress, error: true });
      return;
    }
    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(`${t.subject}: ${get("company")}`)}&body=${encodeURIComponent(body)}`;
    setMsg({ text: t.opened.replace("{email}", CONTACT.email) });
  }

  return (
    <form className="form card" onSubmit={submit}>
      <div className="row">
        <label htmlFor="f-name">
          {t.name}
          <input id="f-name" name="name" required autoComplete="name" />
        </label>
        <label htmlFor="f-company">
          {t.company}
          <input id="f-company" name="company" required autoComplete="organization" />
        </label>
      </div>
      <div className="row">
        <label htmlFor="f-email">
          {t.email}
          <input id="f-email" name="email" type="email" required autoComplete="email" />
        </label>
        <label htmlFor="f-phone">
          {t.phone}
          <input id="f-phone" name="phone" type="tel" autoComplete="tel" />
        </label>
      </div>
      <div className="row">
        <label htmlFor="f-role">
          {t.role}
          <input id="f-role" name="role" placeholder={t.rolePlaceholder} />
        </label>
        <label htmlFor="f-sector">
          {t.sector}
          <select id="f-sector" name="sector" defaultValue="">
            <option value="" disabled>
              {t.sectorChoose}
            </option>
            {sectors.map((s) => (
              <option key={s}>{s}</option>
            ))}
            <option>{t.sectorOther}</option>
          </select>
        </label>
      </div>
      <label htmlFor="f-note">
        {t.note}
        <textarea id="f-note" name="note" rows={3} placeholder={t.notePlaceholder} />
      </label>
      <button type="submit" className="btn btn-primary" style={{ justifySelf: "start" }} disabled={sending} aria-busy={sending}>
        {t.submit}
      </button>
      {msg ? (
        <p className={msg.error ? "form-msg err" : "form-msg"} role="status">
          {msg.text}
        </p>
      ) : (
        <p className="form-note">{t.hint}</p>
      )}
    </form>
  );
}
