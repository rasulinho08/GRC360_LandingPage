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
        { label: t.ui.frameworks, href: p("/frameworks/") },
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
    <footer className="relative z-10 border-t border-line bg-ground/80 backdrop-blur-xl">
      <Container className="py-14 md:py-16">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-3 lg:grid-cols-[1.5fr_repeat(5,1fr)]">
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Logo prefix={t.prefix} />
            <p className="mt-4 max-w-[30ch] text-[14px] leading-[1.6] text-ink-2">{t.ui.footerTagline}</p>
            <p className="mt-4 text-[13px] text-ink-3">{t.ui.madeBy}</p>
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
                        className="text-[14px] text-ink-2 transition-colors duration-150 hover:text-ink"
                      >
                        {l.label}
                      </a>
                    ) : (
                      <Link href={l.href} className="text-[14px] text-ink-2 transition-colors duration-150 hover:text-ink">
                        {l.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col justify-between gap-3 border-t border-line-soft pt-6 text-[13px] text-ink-3 md:flex-row md:items-center">
          <p>
            © {new Date().getFullYear()} {COMPANY.legalName} · {COMPANY.jurisdiction[t.locale]}
          </p>
          <a href={`mailto:${COMPANY.email}`} className="transition-colors hover:text-ink">
            {COMPANY.email}
          </a>
        </div>
      </Container>
    </footer>
  );
}
