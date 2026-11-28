import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, BookOpen, Info } from "lucide-react";
import type { DocPage, DocSlug, Site } from "@/site/types";
import { Container, Eyebrow } from "@/components/primitives";

const anchor = (s: string) =>
  s
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/ə/g, "e")
    .replace(/ı/g, "i")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

/** Pages in reading order: the order of the groups, then the order inside each group. */
function ordered(t: Site): DocPage[] {
  return t.docs.groups.flatMap((g) => g.pages.map((slug) => t.docs.pages.find((p) => p.slug === slug)!));
}

function Sidebar({ t, current }: { t: Site; current?: DocSlug }) {
  return (
    <nav aria-label={t.docs.title} className="lg:sticky lg:top-24">
      <Link
        href={`${t.prefix}/guide/`}
        className={`mb-6 flex items-center gap-2 text-[14px] font-medium ${current ? "text-ink-2 hover:text-ink" : "text-brand-ink"}`}
      >
        <BookOpen className="h-4 w-4" strokeWidth={1.75} />
        {t.ui.docsHome}
      </Link>
      {t.docs.groups.map((g) => (
        <div key={g.title} className="mb-6">
          <p className="mono-label mb-2">{g.title}</p>
          <ul className="space-y-0.5 border-l border-line">
            {g.pages.map((slug) => {
              const page = t.docs.pages.find((p) => p.slug === slug)!;
              const active = slug === current;
              return (
                <li key={slug}>
                  <Link
                    href={`${t.prefix}/guide/${slug}/`}
                    aria-current={active ? "page" : undefined}
                    className={`-ml-px block border-l-2 py-1.5 pl-4 text-[14px] transition-colors ${
                      active ? "border-brand font-medium text-ink" : "border-transparent text-ink-2 hover:border-line-strong hover:text-ink"
                    }`}
                  >
                    {page.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </nav>
  );
}

/** The documentation home: every page as a card, grouped. */
export function DocsIndexView({ t }: { t: Site }) {
  const d = t.docs;
  return (
    <section className="pb-24 pt-32 md:pb-32 md:pt-40">
      <Container>
        <div className="max-w-[760px]">
          <Eyebrow>{d.eyebrow}</Eyebrow>
          <h1 className="t-h1">{d.title}</h1>
          <p className="t-lead mt-5">{d.lead}</p>
          <p className="mt-6 flex gap-2.5 rounded-[var(--r-md)] border border-line bg-surface-2 px-4 py-3 text-[14px] text-ink-2">
            <Info className="mt-0.5 h-4 w-4 shrink-0 text-brand-ink" />
            {d.note}
          </p>
        </div>
        <div className="mt-14 space-y-14">
          {d.groups.map((g) => (
            <div key={g.title}>
              <h2 className="mb-5 text-[22px] font-semibold tracking-[-0.02em]">{g.title}</h2>
              <ul className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
                {g.pages.map((slug) => {
                  const page = d.pages.find((p) => p.slug === slug)!;
                  return (
                    <li key={slug}>
                      <Link href={`${t.prefix}/guide/${slug}/`} className="card card-link group flex h-full flex-col p-6">
                        <span className="text-[17px] font-medium tracking-[-0.01em] text-ink">{page.title}</span>
                        <span className="mt-2 flex-1 text-[14.5px] leading-[1.55] text-ink-2">{page.summary}</span>
                        <span className="card-link-cta mt-5 inline-flex items-center gap-1 text-[14px] font-medium text-brand-ink">
                          {t.ui.learnMore} <ArrowRight className="h-3.5 w-3.5" />
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/** One documentation page: sidebar, article, on-this-page, previous / next. */
export function DocView({ t, slug }: { t: Site; slug: DocSlug }) {
  const list = ordered(t);
  const i = list.findIndex((p) => p.slug === slug);
  if (i < 0) notFound();
  const page = list[i];
  const prev = list[i - 1];
  const next = list[i + 1];
  const group = t.docs.groups.find((g) => g.pages.includes(slug))!;
  return (
    <section className="pb-24 pt-28 md:pb-32 md:pt-36">
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[220px_minmax(0,1fr)_200px] lg:gap-12">
          <aside className="hidden lg:block">
            <Sidebar t={t} current={slug} />
          </aside>

          <article className="min-w-0">
            <p className="mono-label">
              {t.docs.eyebrow} · {group.title}
            </p>
            <h1 className="mt-3 text-[clamp(30px,4vw,44px)] font-semibold leading-[1.1] tracking-[-0.03em]">{page.title}</h1>
            <p className="t-lead mt-4">{page.summary}</p>

            <div className="mt-10 space-y-12">
              {page.sections.map((sec) => (
                <section key={sec.heading} id={anchor(sec.heading)} className="scroll-mt-28">
                  <h2 className="text-[22px] font-semibold tracking-[-0.02em] text-ink">{sec.heading}</h2>
                  {sec.body.map((para) => (
                    <p key={para} className="mt-4 max-w-[70ch] text-[16.5px] leading-[1.75] text-ink-2">
                      {para}
                    </p>
                  ))}
                  {sec.list && (
                    <ul className="mt-4 max-w-[70ch] space-y-2.5">
                      {sec.list.map((li) => (
                        <li key={li} className="flex gap-3 text-[16px] leading-[1.65] text-ink-2">
                          <span aria-hidden className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-ink-3" />
                          {li}
                        </li>
                      ))}
                    </ul>
                  )}
                  {sec.steps && (
                    <ol className="mt-5 max-w-[70ch] space-y-3">
                      {sec.steps.map((st, n) => (
                        <li key={st} className="flex gap-4 text-[16px] leading-[1.65] text-ink-2">
                          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-line bg-surface font-mono text-[12px] text-ink">
                            {n + 1}
                          </span>
                          <span className="pt-0.5">{st}</span>
                        </li>
                      ))}
                    </ol>
                  )}
                  {sec.note && (
                    <p className="mt-5 flex max-w-[70ch] gap-2.5 rounded-[var(--r-md)] border border-brand-line bg-brand-soft px-4 py-3 text-[14.5px] text-ink">
                      <Info className="mt-0.5 h-4 w-4 shrink-0 text-brand-ink" />
                      {sec.note}
                    </p>
                  )}
                </section>
              ))}
            </div>

            <div className="mt-16 grid grid-cols-1 gap-3 border-t border-line pt-8 sm:grid-cols-2">
              {prev ? (
                <Link href={`${t.prefix}/guide/${prev.slug}/`} className="card card-link group p-5">
                  <span className="flex items-center gap-1.5 text-[13px] text-ink-3">
                    <ArrowLeft className="h-3.5 w-3.5" /> {t.ui.prev}
                  </span>
                  <span className="card-link-cta mt-1 block font-medium text-brand-ink">{prev.title}</span>
                </Link>
              ) : (
                <span />
              )}
              {next && (
                <Link href={`${t.prefix}/guide/${next.slug}/`} className="card card-link group p-5 text-right">
                  <span className="flex items-center justify-end gap-1.5 text-[13px] text-ink-3">
                    {t.ui.next} <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                  <span className="card-link-cta mt-1 block font-medium text-brand-ink">{next.title}</span>
                </Link>
              )}
            </div>

            <div className="mt-10 lg:hidden">
              <Sidebar t={t} current={slug} />
            </div>
          </article>

          <aside className="hidden lg:block">
            <div className="lg:sticky lg:top-24">
              <p className="mono-label mb-3">{t.ui.onThisPage}</p>
              <ul className="space-y-2">
                {page.sections.map((sec) => (
                  <li key={sec.heading}>
                    <a href={`#${anchor(sec.heading)}`} className="text-[13.5px] text-ink-2 underline-offset-4 hover:text-ink hover:underline">
                      {sec.heading}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}
