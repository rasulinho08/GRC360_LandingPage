import Link from "next/link";
import type { Site } from "@/site/types";
import { COMPANY } from "@/site/company";
import { Container } from "./primitives";
import { Logo } from "./Header";

type Col = { title: string; links: { label: string; href: string; external?: boolean }[] };

/**
 * The Strativu website's footer, same structure: brand column with tagline, then Platform /
 * Coverage / Company / Connect / Legal, then a base row with the legal entity and the e-mail.
 */
export function Footer({ t }: { t: Site }) {
  const p = (path: string) => `${t.prefix}${path}`;
  const cols: Col[] = [
    {
      title: t.ui.footerProduct,
      links: [
        { label: t.ui.platformOverview, href: p("/platform/") },
        ...t.modules.slice(0, 6).map((m) => ({ label: m.name, href: p(`/platform/${m.slug}/`) })),
      ],
    },
    {
      title: t.ui.footerSolutions,
      links: [
        ...t.solutions.map((s) => ({ label: s.name, href: p(`/solutions/${s.slug}/`) })),
        { label: t.ui.frameworks, href: p("/platform/compliance/#frameworks") },
      ],
    },
    {
      title: t.ui.footerCompany,
      links: [
        { label: t.ui.company, href: p("/company/") },
        { label: t.ui.security, href: p("/security/") },
        { label: t.ui.contact, href: p("/contact/") },
        { label: "strativu.com", href: COMPANY.website, external: true },
      ],
    },
    {
      title: t.ui.footerConnect,
      links: [
        { label: t.ui.email, href: `mailto:${COMPANY.email}`, external: true },
        ...(COMPANY.linkedin ? [{ label: "LinkedIn", href: COMPANY.linkedin, external: true }] : []),
        ...(COMPANY.phone ? [{ label: COMPANY.phone, href: `tel:${COMPANY.phone.replace(/\s/g, "")}`, external: true }] : []),
      ],
    },
    {
      title: t.ui.footerLegal,
      links: [
        { label: t.ui.privacy, href: COMPANY.legal.privacy, external: true },
        { label: t.ui.terms, href: COMPANY.legal.terms, external: true },
        { label: "DPA", href: COMPANY.legal.dpa, external: true },
      ],
    },
  ];

  return (
    <footer className="relative z-10 overflow-hidden border-t border-line bg-ground-2">
      <Container className="pt-14 md:pt-16">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-3 lg:grid-cols-[1.5fr_repeat(5,1fr)]">
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Logo prefix={t.prefix} />
            <p className="mt-4 max-w-[30ch] text-[14px] leading-[1.6] text-ink-2">{t.ui.footerTagline}</p>
            <a
              href={COMPANY.website}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-line bg-surface py-1.5 pl-1.5 pr-3.5 transition-colors hover:border-brand"
              aria-label={t.ui.madeBy}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/brand/strativu-mark.png" alt="" width={24} height={24} className="h-6 w-6" />
              <span className="text-[12px] text-ink-3">{t.ui.productOf}</span>
              <StrativuWordmark />
            </a>
          </div>
          {cols.map((col) => (
            <div key={col.title}>
              <h4 className="mb-4 text-[13px] font-semibold text-ink">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    {l.external ? (
                      <a
                        href={l.href}
                        target={l.href.startsWith("http") ? "_blank" : undefined}
                        rel="noreferrer"
                        className="text-[14px] text-ink-2 underline-offset-4 transition-colors duration-150 hover:text-ink hover:underline"
                      >
                        {l.label}
                        {l.href.startsWith("http") && <span aria-hidden className="ml-1 text-ink-4">↗</span>}
                      </a>
                    ) : (
                      <Link href={l.href} className="text-[14px] text-ink-2 underline-offset-4 transition-colors duration-150 hover:text-ink hover:underline">
                        {l.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col justify-between gap-3 border-t border-line pt-6 text-[13px] text-ink-3 md:flex-row md:items-center">
          <p>
            © {new Date().getFullYear()} {COMPANY.legalName} · {COMPANY.jurisdiction[t.locale]}
          </p>
          <a href={`mailto:${COMPANY.email}`} className="underline-offset-4 transition-colors hover:text-ink hover:underline">
            {COMPANY.email}
          </a>
        </div>
      </Container>

      {/* The product's name, set large, the way the Strativu site closes on its own. */}
      <div aria-hidden className="pointer-events-none mt-10 select-none pb-8 md:pb-12">
        <Container>
          <div className="flex items-end gap-[2.5vw] text-ink-4/50 dark:text-line-strong">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/brand/grc360-mark.png" alt="" className="mb-[1.2vw] h-[clamp(52px,13vw,190px)] w-auto opacity-90" />
            <span className="big-wordmark">GRC360</span>
          </div>
        </Container>
      </div>
    </footer>
  );
}

/** Strativu's own wordmark colours (from the Strativu site's Logo component). */
function StrativuWordmark() {
  return (
    <span
      className="bg-clip-text text-[15px] font-semibold leading-none tracking-[-0.02em] text-transparent"
      style={{ backgroundImage: "linear-gradient(90deg, #22b8ff 0%, #2f6fe0 100%)" }}
    >
      Strativu
    </span>
  );
}
