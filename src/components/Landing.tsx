import { ArrowRight, Building2, FileSearch, Fingerprint, KeyRound, Landmark, Network, RadioTower, Server, ShieldCheck, Users } from "lucide-react";
import { CONTACT } from "@/content/contact";
import type { Content } from "@/content/types";
import { CommandCenter } from "./Screens";
import { ModuleTabs } from "./ModuleTabs";
import { DemoForm } from "./DemoForm";

const SECURITY_ICONS = [Server, Users, Fingerprint, KeyRound, FileSearch, ShieldCheck];
/** Banks, government, telecom and energy, holding groups: in the order the audience list is written. */
const AUDIENCE_ICONS = [Landmark, Building2, RadioTower, Network];

/** The whole page in one language; `/` is Azerbaijani and `/en/` English. */
export function Landing({ t }: { t: Content }) {
  const year = new Date().getFullYear();
  const home = t.locale === "az" ? "/" : "/en/";
  return (
    <>
      <header className="header">
        <div className="wrap header-row">
          <a className="logo" href={home}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/brand/grc360-mark.png" alt="" width={30} height={30} />
            GRC360
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
            <div className="rise">
              <span className="eyebrow">{t.hero.eyebrow}</span>
              <h1>
                {t.hero.titleA} <em>{t.hero.titleB}</em>
              </h1>
              <p className="lead">{t.hero.lead}</p>
              <div className="hero-ctas">
                <a className="btn btn-primary" href="#demo">
                  {t.hero.primary} <ArrowRight size={16} aria-hidden="true" />
                </a>
                <a className="btn btn-ghost" href="#modules">
                  {t.hero.secondary}
                </a>
              </div>
              <ul className="badges" aria-label={t.hero.badgesLabel}>
                {t.hero.badges.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
            <div className="rise rise-2">
              <CommandCenter s={t.screens} />
            </div>
          </div>
        </section>

        <div className="sectors">
          <div className="wrap">
            <span>{t.sectorsLabel}</span>
            {t.sectors.map((s) => (
              <span key={s}>{s}</span>
            ))}
          </div>
        </div>

        <section className="section">
          <div className="wrap">
            <div className="section-head">
              <span className="eyebrow">{t.problem.eyebrow}</span>
              <h2>{t.problem.title}</h2>
              <p className="lead">{t.problem.lead}</p>
            </div>
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
                    →
                  </span>
                  <span className="after">{p.after}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="modules" style={{ paddingTop: 0 }}>
          <div className="wrap">
            <div className="section-head">
              <span className="eyebrow">{t.platform.eyebrow}</span>
              <h2>{t.platform.title}</h2>
              <p className="lead">{t.platform.lead}</p>
            </div>
            <ModuleTabs modules={t.modules} label={t.platform.tabsLabel} screens={t.screens} />
          </div>
        </section>

        <section className="section dark-band" id="security">
          <div className="wrap">
            <div className="section-head">
              <span className="eyebrow">{t.security.eyebrow}</span>
              <h2>{t.security.title}</h2>
              <p className="lead">{t.security.lead}</p>
            </div>
            <div className="grid-3">
              {t.security.items.map((s, i) => {
                const Icon = SECURITY_ICONS[i % SECURITY_ICONS.length];
                return (
                  <div className="sec-item" key={s.title}>
                    <span className="sec-icon">
                      <Icon size={17} aria-hidden="true" />
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
            <div className="section-head">
              <span className="eyebrow">{t.audience.eyebrow}</span>
              <h2>{t.audience.title}</h2>
              <p className="lead">{t.audience.lead}</p>
            </div>
            <div className="grid-2">
              {t.audience.items.map((a, i) => {
                const Icon = AUDIENCE_ICONS[i % AUDIENCE_ICONS.length];
                return (
                  <div className="aud" key={a.title}>
                    <span className="aud-icon" aria-hidden="true">
                      <Icon size={17} />
                    </span>
                    <h3>{a.title}</h3>
                    <p>{a.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section" id="setup" style={{ paddingTop: 0 }}>
          <div className="wrap">
            <div className="section-head">
              <span className="eyebrow">{t.steps.eyebrow}</span>
              <h2>{t.steps.title}</h2>
            </div>
            <ol className="flow">
              {t.steps.items.map((s) => (
                <li key={s.title}>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section" id="faq" style={{ paddingTop: 0 }}>
          <div className="wrap">
            <div className="section-head">
              <span className="eyebrow">{t.faq.eyebrow}</span>
              <h2>{t.faq.title}</h2>
            </div>
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

        <section className="section dark-band" id="demo">
          <div className="wrap demo-grid">
            <div className="section-head" style={{ marginBottom: 0 }}>
              <span className="eyebrow">{t.demo.eyebrow}</span>
              <h2>{t.demo.title}</h2>
              <p className="lead">{t.demo.lead}</p>
              {(CONTACT.email || CONTACT.phone || CONTACT.address) && (
                <div className="contact-lines">
                  {CONTACT.email && (
                    <span>
                      <b>{t.demo.emailLabel}:</b> {CONTACT.email}
                    </span>
                  )}
                  {CONTACT.phone && (
                    <span>
                      <b>{t.demo.phoneLabel}:</b> {CONTACT.phone}
                    </span>
                  )}
                  {CONTACT.address && (
                    <span>
                      <b>{t.demo.addressLabel}:</b> {CONTACT.address}
                    </span>
                  )}
                </div>
              )}
            </div>
            <DemoForm t={t.demo.form} sectors={t.sectors} />
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap">
          <span>
            © {year} {CONTACT.company}. GRC360.
          </span>
          <span>{t.footer.tagline}</span>
        </div>
      </footer>
    </>
  );
}
