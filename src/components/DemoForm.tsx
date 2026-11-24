"use client";

import { useState } from "react";
import { CONTACT } from "@/content/contact";
import type { Content } from "@/content/types";

/**
 * The demo request. The site is static, so the form writes the request into the visitor's mail app
 * (to CONTACT.email). Until an address is set, it says so instead of pretending to send.
 */
export function DemoForm({ t, sectors }: { t: Content["demo"]["form"]; sectors: string[] }) {
  const [msg, setMsg] = useState<string | null>(null);

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const get = (k: string) => String(f.get(k) ?? "").trim();
    if (!CONTACT.email) {
      setMsg(t.noAddress);
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
    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(`${t.subject}: ${get("company")}`)}&body=${encodeURIComponent(body)}`;
    setMsg(t.opened.replace("{email}", CONTACT.email));
  }

  return (
    <form className="form" onSubmit={submit}>
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
      <button type="submit" className="btn btn-primary" style={{ justifySelf: "start" }}>
        {t.submit}
      </button>
      {msg ? (
        <p className="form-msg" role="status">
          {msg}
        </p>
      ) : (
        <p className="form-note">{t.hint}</p>
      )}
    </form>
  );
}
