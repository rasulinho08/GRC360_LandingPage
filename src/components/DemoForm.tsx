"use client";

import { useState } from "react";
import { CONTACT, SECTORS } from "@/content/site";

/**
 * The demo request. The site is static, so the form writes the request into the visitor's mail app
 * (to CONTACT.email). Until an address is set, it says so instead of pretending to send.
 */
export function DemoForm() {
  const [msg, setMsg] = useState<string | null>(null);

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const get = (k: string) => String(f.get(k) ?? "").trim();
    if (!CONTACT.email) {
      setMsg("Əlaqə ünvanı hələ əlavə olunmayıb. Sorğu göndərilmədi.");
      return;
    }
    const body = [
      `Ad: ${get("name")}`,
      `Təşkilat: ${get("company")}`,
      `Vəzifə: ${get("role")}`,
      `Sektor: ${get("sector")}`,
      `E-poçt: ${get("email")}`,
      `Telefon: ${get("phone")}`,
      "",
      get("note"),
    ].join("\n");
    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent("GRC360 demo sorğusu: " + get("company"))}&body=${encodeURIComponent(body)}`;
    setMsg(`E-poçt proqramınız açılmalıdır. Açılmadısa, bizə ${CONTACT.email} ünvanına yazın.`);
  }

  return (
    <form className="form" onSubmit={submit}>
      <div className="row">
        <label htmlFor="f-name">
          Ad, soyad
          <input id="f-name" name="name" required autoComplete="name" />
        </label>
        <label htmlFor="f-company">
          Təşkilat
          <input id="f-company" name="company" required autoComplete="organization" />
        </label>
      </div>
      <div className="row">
        <label htmlFor="f-email">
          İş e-poçtu
          <input id="f-email" name="email" type="email" required autoComplete="email" />
        </label>
        <label htmlFor="f-phone">
          Telefon
          <input id="f-phone" name="phone" type="tel" autoComplete="tel" />
        </label>
      </div>
      <div className="row">
        <label htmlFor="f-role">
          Vəzifə
          <input id="f-role" name="role" placeholder="məs. CISO, risk meneceri" />
        </label>
        <label htmlFor="f-sector">
          Sektor
          <select id="f-sector" name="sector" defaultValue="">
            <option value="" disabled>
              Seçin
            </option>
            {SECTORS.map((s) => (
              <option key={s}>{s}</option>
            ))}
            <option>Digər</option>
          </select>
        </label>
      </div>
      <label htmlFor="f-note">
        Nəyi görmək istəyirsiniz?
        <textarea id="f-note" name="note" rows={3} placeholder="məs. risk istisnalarının təsdiqi, ISO 27001 hazırlığı" />
      </label>
      <button type="submit" className="btn btn-primary" style={{ justifySelf: "start" }}>
        Demo sifariş edin
      </button>
      {msg ? (
        <p className="form-msg" role="status">
          {msg}
        </p>
      ) : (
        <p className="form-note">Demonu sizin proseslərinizə uyğun hazırlayırıq.</p>
      )}
    </form>
  );
}
