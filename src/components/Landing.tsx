import {
  ArrowRight,
  Building2,
  FileSearch,
  Fingerprint,
  KeyRound,
  Landmark,
  ExternalLink,
  Mail,
  MapPin,
  Network,
  Phone,
  RadioTower,
  Server,
  ShieldCheck,
  Users,
} from "lucide-react";
import { CONTACT } from "@/content/contact";
import type { Content } from "@/content/types";
import { CommandCenter } from "./Screens";
import { ModuleTabs } from "./ModuleTabs";
import { DemoForm } from "./DemoForm";

const SECURITY_ICONS = [Server, Users, Fingerprint, KeyRound, FileSearch, ShieldCheck];
/** Banks, government, telecom and energy, holding groups: in the order the audience list is written. */
const AUDIENCE_ICONS = [Landmark, Building2, RadioTower, Network];

function SectionHead({ eyebrow, title, lead }: { eyebrow: string; title: string; lead?: string }) {
  return (
    <div className="section-head">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {lead && <p className="lead">{lead}</p>}
    </div>
  );
}

/** The whole page in one language; `/` is Azerbaijani and `/en/` English. */
export function Landing({ t }: { t: Content }) {
  const year = new Date().getFullYear();
  const home = t.locale === "az" ? "/" : "/en/";
  const address = t.locale === "az" ? CONTACT.address : CONTACT.addressEn;
  return (
    <>
      <header className="header">
        <div className="wrap header-row">
          <a className="logo" href={home}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/brand/grc360-mark.png" alt="" width={30} height={30} />
            GRC360
            <small>by {CONTACT.company}</small>
          </a>
          <nav className="nav" aria-label={t.mainNavLabel}>
            {t.nav.map((n) => (
              <a key={n.href} href={n.href}>
                {n.label}
              </a>
            ))}
          </nav>
          <div className="header-actions">
            {/* Plain links on purpose: each language has its own root layout, so switching is a full page load. */}
            <div className="lang" aria-label="Language / Dil">
              {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
              <a href="/" hrefLang="az" lang="az" aria-current={t.locale === "az" ? "true" : undefined}>
                AZ
              </a>
              <a href="/en/" hrefLang="en" lang="en" aria-current={t.locale === "en" ? "true" : undefined}>
                EN
              </a>
            </div>
            <a className="btn btn-primary" href="#demo">
              {t.headerCta}
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="wrap hero-grid">
            <div>
              <a className="pill rise" href={CONTACT.website} target="_blank" rel="noreferrer">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/brand/strativu-mark.png" alt="" width={18} height={18} />
                <b>{t.hero.by}</b>
                <span>· {t.hero.eyebrow}</span>
              </a>
              <h1 className="rise rise-2">
                {t.hero.titleA} <span className="text-grad">{t.hero.titleB}</span>
              </h1>
              <p className="lead rise rise-2">{t.hero.lead}</p>
              <div className="hero-ctas rise rise-3">
                <a className="btn btn-primary" href="#demo">
                  {t.hero.primary} <ArrowRight size={17} aria-hidden="true" />
                </a>
                <a className="btn btn-ghost" href="#modules">
                  {t.hero.secondary}
                </a>
              </div>
              <ul className="badges rise rise-3" aria-label={t.hero.badgesLabel}>
                {t.hero.badges.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
            <div className="stage rise rise-3">
              <CommandCenter s={t.screens} />
            </div>
          </div>
        </section>

        <div className="ticker">
          <div className="wrap ticker-row">
            <span className="ticker-label">{t.standards.label}</span>
            <div className="ticker-track">
              <div className="ticker-items">
                {t.standards.items.map((s) => (
                  <span key={s}>{s}</span>
                ))}
                {/* A second copy makes the loop seamless; screen readers hear the list once. */}
                {t.standards.items.map((s) => (
                  <span key={`${s}-2`} aria-hidden="true">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <section className="section">
          <div className="wrap">
            <SectionHead eyebrow={t.problem.eyebrow} title={t.problem.title} lead={t.problem.lead} />
            <div className="ba">
              <div className="ba-head" aria-hidden="true">
                <span>{t.problem.beforeLabel}</span>
                <span />
                <span>{t.problem.afterLabel}</span>
              </div>
              {t.problem.rows.map((p) => (
                <div className="ba-row" key={p.before}>
                  <span className="before">{p.before}</span>
                  <span className="arrow" aria-hidden="true">
                    <ArrowRight size={16} />
                  </span>
                  <span className="after">{p.after}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section tone" id="modules">
          <div className="wrap">
            <SectionHead eyebrow={t.platform.eyebrow} title={t.platform.title} lead={t.platform.lead} />
            <ModuleTabs modules={t.modules} label={t.platform.tabsLabel} screens={t.screens} />
          </div>
        </section>

        <section className="section">
          <div className="wrap">
            <SectionHead eyebrow={t.process.eyebrow} title={t.process.title} lead={t.process.lead} />
            <ol className="process">
              {t.process.items.map((p) => (
                <li className="card" key={p.title}>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section tone" id="security">
          <div className="wrap">
            <SectionHead eyebrow={t.security.eyebrow} title={t.security.title} lead={t.security.lead} />
            <div className="grid-3">
              {t.security.items.map((s, i) => {
                const Icon = SECURITY_ICONS[i % SECURITY_ICONS.length];
                return (
                  <div className="card feature" key={s.title}>
                    <span className="icon-box" aria-hidden="true">
                      <Icon size={19} />
                    </span>
                    <h3>{s.title}</h3>
                    <p>{s.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section" id="who">
          <div className="wrap">
            <SectionHead eyebrow={t.audience.eyebrow} title={t.audience.title} lead={t.audience.lead} />
            <div className="grid-2">
              {t.audience.items.map((a, i) => {
                const Icon = AUDIENCE_ICONS[i % AUDIENCE_ICONS.length];
                return (
                  <div className="card feature" key={a.title}>
                    <span className="icon-box" aria-hidden="true">
                      <Icon size={19} />
                    </span>
                    <h3>{a.title}</h3>
                    <p>{a.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section tone" id="setup">
          <div className="wrap">
            <SectionHead eyebrow={t.steps.eyebrow} title={t.steps.title} />
            <ol className="flow">
              {t.steps.items.map((s) => (
                <li className="card" key={s.title}>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section" id="faq">
          <div className="wrap faq-grid">
            <SectionHead eyebrow={t.faq.eyebrow} title={t.faq.title} />
            <div className="faq">
              {t.faq.items.map((f) => (
                <details key={f.q}>
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="section tone demo" id="demo">
          <div className="wrap demo-grid">
            <div>
              <SectionHead eyebrow={t.demo.eyebrow} title={t.demo.title} lead={t.demo.lead} />
              <div className="contact-lines">
                {CONTACT.email && (
                  <a href={`mailto:${CONTACT.email}`} aria-label={`${t.demo.emailLabel}: ${CONTACT.email}`}>
                    <Mail size={18} aria-hidden="true" />
                    {CONTACT.email}
                  </a>
                )}
                {CONTACT.phone && (
                  <a href={`tel:${CONTACT.phone.replace(/\s/g, "")}`} aria-label={`${t.demo.phoneLabel}: ${CONTACT.phone}`}>
                    <Phone size={18} aria-hidden="true" />
                    {CONTACT.phone}
                  </a>
                )}
                {address && (
                  <span aria-label={`${t.demo.addressLabel}: ${address}`}>
                    <MapPin size={18} aria-hidden="true" />
                    {address}
                  </span>
                )}
                {CONTACT.linkedin && (
                  <a href={CONTACT.linkedin} target="_blank" rel="noreferrer">
                    <ExternalLink size={18} aria-hidden="true" />
                    LinkedIn
                  </a>
                )}
              </div>
            </div>
            <DemoForm t={t.demo.form} sectors={t.sectors} />
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap footer-grid">
          <div className="footer-brand">
            <a className="logo" href={home}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/brand/grc360-mark.png" alt="" width={30} height={30} />
              GRC360
            </a>
            <p>{t.footer.tagline}</p>
          </div>
          <div>
            <h4>{t.footer.product}</h4>
            <ul>
              {t.nav.map((n) => (
                <li key={n.href}>
                  <a href={n.href}>{n.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>{t.footer.company}</h4>
            <ul>
              <li>
                <a href={CONTACT.website} target="_blank" rel="noreferrer">
                  {t.footer.website}
                </a>
              </li>
              {CONTACT.linkedin && (
                <li>
                  <a href={CONTACT.linkedin} target="_blank" rel="noreferrer">
                    {t.footer.linkedin}
                  </a>
                </li>
              )}
              {CONTACT.email && (
                <li>
                  <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
                </li>
              )}
              {address && <li>{address}</li>}
            </ul>
          </div>
        </div>
        <div className="wrap footer-base">
          <span>
            © {year} {CONTACT.legalName}
          </span>
          <a className="made-by" href={CONTACT.website} target="_blank" rel="noreferrer">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/brand/strativu-mark.png" alt="" width={16} height={16} />
            {t.footer.madeBy}
          </a>
        </div>
      </footer>
    </>
  );
}
