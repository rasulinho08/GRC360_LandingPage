import { ArrowRight, Fingerprint, FileSearch, KeyRound, Server, ShieldCheck, Users } from "lucide-react";
import { AUDIENCES, CONTACT, FAQ, HERO, NAV, PROBLEMS, SECTORS, SECURITY, STEPS } from "@/content/site";
import { CommandCenter } from "@/components/Screens";
import { ModuleTabs } from "@/components/ModuleTabs";
import { DemoForm } from "@/components/DemoForm";

const SECURITY_ICONS = [Server, Users, Fingerprint, KeyRound, FileSearch, ShieldCheck];

export default function Home() {
  const year = new Date().getFullYear();
  return (
    <>
      <header className="header">
        <div className="wrap header-row">
          <a className="logo" href="#">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/brand/grc360-mark.png" alt="" width={30} height={30} />
            GRC360
          </a>
          <nav className="nav" aria-label="Əsas menyu">
            {NAV.map((n) => (
              <a key={n.href} href={n.href}>
                {n.label}
              </a>
            ))}
          </nav>
          <a className="btn btn-primary" href="#demo">
            Demo
          </a>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="wrap hero-grid">
            <div>
              <span className="eyebrow">{HERO.eyebrow}</span>
              <h1>
                Risk, uyğunluq və audit bir platformada. <em>Öz serverlərinizdə.</em>
              </h1>
              <p className="lead">{HERO.lead}</p>
              <div className="hero-ctas">
                <a className="btn btn-primary" href={HERO.primary.href}>
                  {HERO.primary.label} <ArrowRight size={16} aria-hidden="true" />
                </a>
                <a className="btn btn-ghost" href={HERO.secondary.href}>
                  {HERO.secondary.label}
                </a>
              </div>
              <ul className="badges" aria-label="Əsas xüsusiyyətlər">
                {HERO.badges.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
            <CommandCenter />
          </div>
        </section>

        <div className="sectors">
          <div className="wrap">
            <span>Kimlər üçün</span>
            {SECTORS.map((s) => (
              <span key={s}>{s}</span>
            ))}
          </div>
        </div>

        <section className="section">
          <div className="wrap">
            <div className="section-head">
              <span className="eyebrow">Problem</span>
              <h2>Excel cədvəlləri və e-poçt zəncirləri auditdən keçmir</h2>
              <p className="lead">
                Risklər, istisnalar və audit tapıntıları müxtəlif fayllarda olanda heç kim tam mənzərəni görmür. GRC360 onları
                bir sistemə, bir tarixçəyə yığır.
              </p>
            </div>
            <div className="ba">
              {PROBLEMS.map((p) => (
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

        <section className="section" id="modullar" style={{ paddingTop: 0 }}>
          <div className="wrap">
            <div className="section-head">
              <span className="eyebrow">Platforma</span>
              <h2>Bir sistem: risk, nəzarət, siyasət, uyğunluq və audit</h2>
              <p className="lead">
                Modullar bir-birinə bağlıdır: risk nəzarətə, nəzarət standarta, audit tapıntısı tapşırığa. Hər şey bir
                tarixçədə qalır.
              </p>
            </div>
            <ModuleTabs />
          </div>
        </section>

        <section className="section dark-band" id="tehlukesizlik">
          <div className="wrap">
            <div className="section-head">
              <span className="eyebrow">Suverenlik və təhlükəsizlik</span>
              <h2>Məlumatlarınız sizin serverinizdə qalır</h2>
              <p className="lead">
                GRC360 xarici buluda bağlı deyil. Bankın, qurumun və ya holdinqin öz infrastrukturunda işləyir, daxili təhlükəsizlik
                tələblərinə uyğun qurulur.
              </p>
            </div>
            <div className="grid-3">
              {SECURITY.map((s, i) => {
                const Icon = SECURITY_ICONS[i % SECURITY_ICONS.length];
                return (
                  <div className="sec-item" key={s.title}>
                    <Icon size={22} aria-hidden="true" />
                    <h3>{s.title}</h3>
                    <p>{s.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section" id="kimler-ucun">
          <div className="wrap">
            <div className="section-head">
              <span className="eyebrow">Kimlər üçün</span>
              <h2>Tənzimlənən sektorlar üçün hazırlanıb</h2>
              <p className="lead">
                Yerli qanunvericilik və beynəlxalq standartlar eyni sistemdə: öhdəlikləri, nəzarətləri və sübutları bir yerdə
                idarə edin.
              </p>
            </div>
            <div className="grid-2">
              {AUDIENCES.map((a) => (
                <div className="aud" key={a.title}>
                  <span className="hex" aria-hidden="true" />
                  <h3>{a.title}</h3>
                  <p>{a.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="qurulum" style={{ paddingTop: 0 }}>
          <div className="wrap">
            <div className="section-head">
              <span className="eyebrow">Qurulum</span>
              <h2>Demodan işə salınmağa üç addım</h2>
            </div>
            <ol className="flow">
              {STEPS.map((s) => (
                <li key={s.title}>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section" id="suallar" style={{ paddingTop: 0 }}>
          <div className="wrap">
            <div className="section-head">
              <span className="eyebrow">Suallar</span>
              <h2>Tez-tez verilən suallar</h2>
            </div>
            <div className="faq">
              {FAQ.map((f) => (
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
              <span className="eyebrow">Demo</span>
              <h2>GRC360-ı öz proseslərinizdə görün</h2>
              <p className="lead">
                Formu doldurun. Sizinlə əlaqə saxlayıb təşkilatınızın risk və uyğunluq prosesinə uyğun demo təşkil edəcəyik.
              </p>
              {(CONTACT.email || CONTACT.phone || CONTACT.address) && (
                <div className="contact-lines">
                  {CONTACT.email && (
                    <span>
                      <b>E-poçt:</b> {CONTACT.email}
                    </span>
                  )}
                  {CONTACT.phone && (
                    <span>
                      <b>Telefon:</b> {CONTACT.phone}
                    </span>
                  )}
                  {CONTACT.address && (
                    <span>
                      <b>Ünvan:</b> {CONTACT.address}
                    </span>
                  )}
                </div>
              )}
            </div>
            <DemoForm />
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap">
          <span>
            © {year} {CONTACT.company}. GRC360.
          </span>
          <span>Risk, uyğunluq və audit platforması</span>
        </div>
      </footer>
    </>
  );
}
