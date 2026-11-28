import { notFound } from "next/navigation";
import { ArrowRight, Check, Mail, MapPin } from "lucide-react";
import type { ModuleSlug, Site, SolutionSlug } from "@/site/types";
import { COMPANY } from "@/site/company";
import { ClosingCTA } from "@/components/ClosingCTA";
import { DemoForm } from "@/components/DemoForm";
import { DemoVideo } from "@/components/DemoVideo";
import { DotField } from "@/components/DotField";
import { Faq } from "@/components/Faq";
import { Fragment, FragmentStack } from "@/components/Fragments";
import { ModuleIcon } from "@/components/icons";
import { Reveal, ScrollLift, Stagger } from "@/components/Reveal";
import { SystemDiagram } from "@/components/SystemDiagram";
import { Btn, Container, Eyebrow, PageHeader, Section, SectionHead, Strip, TextLink } from "@/components/primitives";
import { BeforeAfter, FeatureCards, ModuleTile, NumberedCards, ShowcaseRow, SolutionTile } from "./blocks";

/* ───────────────────────────── Home: five sections ───────────────────────────── */

export function HomeView({ t }: { t: Site }) {
  const h = t.home;
  const h2 = t.home2;
  const p = (path: string) => `${t.prefix}${path}`;
  return (
    <>
      {/* 1 · General info: what GRC360 is, in one screen, with the real application under it. */}
      <section className="relative isolate overflow-hidden border-b border-line bg-ground pb-16 pt-32 md:pb-24 md:pt-40">
        <DotField />
        <Container>
          <Stagger className="mx-auto max-w-[880px] text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 text-[12.5px] font-medium text-ink-2">
              <span className="h-1.5 w-1.5 rounded-full bg-ok" aria-hidden />
              {h.eyebrow}
            </span>
            <h1 className="t-display mx-auto mt-7 max-w-[16ch] !text-[clamp(42px,6.4vw,84px)]">{h.title}</h1>
            <p className="t-lead mx-auto mt-6 max-w-[60ch]">{h.lead}</p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Btn href="#demo" size="lg" arrow>
                {h.primary}
              </Btn>
              <Btn href={p("/platform/")} size="lg" variant="secondary">
                {h.secondary}
              </Btn>
            </div>
            <Strip items={h.proof} className="mt-8 justify-center" />
          </Stagger>
          <ScrollLift className="mx-auto mt-14 max-w-[1080px]">
            <DemoVideo label={t.video.label} caption={t.video.caption} />
          </ScrollLift>
        </Container>
      </section>

      {/* 2 · The modules, each a link to its own page. */}
      <Section tone="surface">
        <SectionHead eyebrow={h2.modulesEyebrow} title={h2.modulesTitle} lead={h2.modulesLead} />
        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {t.modules.map((m, i) => (
            <Reveal as="li" key={m.slug} delay={(i % 4) * 0.04}>
              <ModuleTile m={m} t={t} preview={false} />
            </Reveal>
          ))}
        </ul>
        <div className="mt-8">
          <TextLink href={p("/platform/")}>{t.ui.platformOverview}</TextLink>
        </div>
      </Section>

      {/* 3 · Why: the dark band. */}
      <Section tone="contrast">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Eyebrow>{h2.whyEyebrow}</Eyebrow>
            <h2 className="t-h2">{h2.whyTitle}</h2>
            <p className="t-lead mt-5">{h2.whyLead}</p>
            <div className="mt-8">
              <Btn href={p("/security/")} variant="invert" arrow>
                {h2.whyCta}
              </Btn>
            </div>
          </div>
          <dl className="grid grid-cols-1 gap-px overflow-hidden rounded-[var(--r-lg)] border border-[var(--band-line)] bg-[var(--band-line)] sm:grid-cols-2 lg:col-span-7">
            {h2.why.map((it) => (
              <div key={it.title} className="bg-[var(--band)] p-7">
                <dt className="text-[18px] font-medium">{it.title}</dt>
                <dd className="mt-2 text-[15px] leading-[1.6] text-[var(--band-ink-2)]">{it.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Section>

      {/* 4 · Sectors and documentation: the tinted section. */}
      <section className="tint-band py-6 md:py-8">
        <div className="band-inner py-16 md:py-24">
        <Container>
          <SectionHead
            eyebrow={h2.sectorsEyebrow}
            title={h2.sectorsTitle}
            lead={h2.sectorsLead}
            action={
              <Btn href={p("/guide/")} variant="secondary" arrow>
                {h2.docsCta}
              </Btn>
            }
          />
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
            {t.solutions.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.04}>
                <SolutionTile s={s} t={t} />
              </Reveal>
            ))}
          </div>
        </Container>
        </div>
      </section>

      {/* 5 · Request a demo, right here. */}
      <section id="demo" className="scroll-mt-24 border-t border-line bg-ground py-20 md:py-28">
        <Container>
          <DemoBlock t={t} eyebrow={h2.demoEyebrow} title={h2.demoTitle} lead={h2.demoLead} />
        </Container>
      </section>
    </>
  );
}

/** Demo request: steps and contact on the left, the form on the right. */
function DemoBlock({ t, eyebrow, title, lead, h1 = false }: { t: Site; eyebrow: string; title: string; lead: string; h1?: boolean }) {
  const c = t.contact;
  const Heading = h1 ? "h1" : "h2";
  return (
    <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
      <div>
        <Eyebrow>{eyebrow}</Eyebrow>
        <Heading className={h1 ? "t-h1" : "t-h2"}>{title}</Heading>
        <p className="t-lead mt-5 measure">{lead}</p>
        <ul className="mt-10 space-y-6">
          {c.steps.map((s) => (
            <li key={s.title} className="flex gap-4">
              <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand-ink">
                <Check className="h-4 w-4" strokeWidth={2.25} />
              </span>
              <span>
                <span className="block text-[17px] font-medium text-ink">{s.title}</span>
                <span className="mt-1 block text-[15px] text-ink-2">{s.text}</span>
              </span>
            </li>
          ))}
        </ul>
        <div className="mt-10 space-y-3 border-t border-line pt-8 text-[15px] text-ink-2">
          <a href={`mailto:${COMPANY.email}`} className="inline-link flex w-fit items-center gap-3" aria-label={`${c.emailLabel}: ${COMPANY.email}`}>
            <Mail className="h-4 w-4" /> {COMPANY.email}
          </a>
          <span className="flex items-center gap-3" aria-label={`${c.addressLabel}: ${COMPANY.address[t.locale]}`}>
            <MapPin className="h-4 w-4 text-ink-3" /> {COMPANY.address[t.locale]}
          </span>
          {COMPANY.linkedin && (
            <a href={COMPANY.linkedin} target="_blank" rel="noreferrer" className="inline-link flex w-fit items-center gap-3">
              <ArrowRight className="h-4 w-4" /> LinkedIn ↗
            </a>
          )}
        </div>
      </div>
      <Reveal>
        <DemoForm t={c.form} />
      </Reveal>
    </div>
  );
}

/* ───────────────────────────── Platform ───────────────────────────── */

export function PlatformView({ t }: { t: Site }) {
  const pl = t.platform;
  const h = t.home;
  return (
    <>
      <PageHeader eyebrow={pl.eyebrow} title={pl.title} lead={pl.lead}>
        <Btn href={`${t.prefix}/contact/`} arrow>
          {t.ui.requestDemo}
        </Btn>
        <Btn href="#modules" variant="secondary">
          {t.ui.allModules}
        </Btn>
      </PageHeader>

      <Section>
        <SectionHead eyebrow="GRC360" title={pl.diagramTitle} />
        <Reveal>
          <SystemDiagram d={t.diagram} />
        </Reveal>
      </Section>

      <Section tone="surface">
        <SectionHead eyebrow={h.problem.eyebrow} title={h.problem.title} lead={h.problem.lead} />
        <BeforeAfter p={h.problem} />
      </Section>

      <Section>
        <SectionHead eyebrow={h.process.eyebrow} title={h.process.title} lead={h.process.lead} />
        <NumberedCards items={h.process.items} cols={5} />
      </Section>

      <Section tone="contrast">
        <SectionHead eyebrow={pl.eyebrow} title={pl.pillarsTitle} />
        <dl className="grid grid-cols-1 gap-px overflow-hidden rounded-[var(--r-lg)] border border-[var(--band-line)] bg-[var(--band-line)] md:grid-cols-2">
          {pl.pillars.map((it) => (
            <div key={it.title} className="bg-[var(--band)] p-7">
              <dt className="text-[18px] font-medium">{it.title}</dt>
              <dd className="mt-2 text-[15px] leading-[1.6] text-[var(--band-ink-2)]">{it.text}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section tone="surface" id="modules">
        <SectionHead eyebrow={t.ui.allModules} title={pl.modulesTitle} />
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {t.modules.map((m, i) => (
            <Reveal as="li" key={m.slug} delay={(i % 4) * 0.05}>
              <ModuleTile m={m} t={t} />
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section>
        <SectionHead eyebrow="GRC360" title={pl.foundationTitle} />
        <FeatureCards items={pl.foundation} check />
      </Section>

      <Section tone="surface">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="t-h2">{h.faqTitle}</h2>
          </div>
          <div className="lg:col-span-8">
            <Faq items={h.faq} />
          </div>
        </div>
      </Section>

      <ClosingCTA t={t} />
    </>
  );
}

/* ───────────────────────────── Module detail ───────────────────────────── */

export function ModuleView({ t, slug }: { t: Site; slug: ModuleSlug }) {
  const m = t.modules.find((x) => x.slug === slug);
  if (!m) notFound();
  const float = m.showcases.find((s) => s.visual !== m.heroVisual)?.visual;
  return (
    <>
      <PageHeader
        eyebrow={`${t.ui.product} · ${m.eyebrow}`}
        title={m.title}
        lead={m.lead}
        aside={
          <ScrollLift className="tint-panel rounded-[22px] p-5 pb-14 md:p-10 md:pb-16">
            <FragmentStack main={m.heroVisual} float={float} f={t.fragments} />
          </ScrollLift>
        }
      >
        <Btn href={`${t.prefix}/contact/`} arrow>
          {t.ui.requestDemo}
        </Btn>
        <Btn href={`${t.prefix}/platform/`} variant="secondary">
          {t.ui.platformOverview}
        </Btn>
      </PageHeader>

      <Section>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {m.highlights.map((it, i) => (
            <Reveal key={it.title} delay={i * 0.06}>
              <div className="h-full border-l-2 border-brand pl-6">
                <h3 className="text-[20px] font-semibold tracking-[-0.02em] text-ink">{it.title}</h3>
                <p className="mt-3 text-[15.5px] leading-[1.65] text-ink-2">{it.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {m.showcases.map((s, i) => (
        <ShowcaseRow key={s.title} s={s} t={t} flip={i % 2 === 1} tone={i % 2 === 0 ? "surface" : "ground"} />
      ))}

      {m.slug === "compliance" && <FrameworksBlock t={t} />}

      {m.slug === "command-center" && (
        <Section tone="surface">
          <SectionHead eyebrow={t.video.eyebrow} title={t.video.title} lead={t.video.lead} />
          <Reveal>
            <DemoVideo label={t.video.label} caption={t.video.caption} />
          </Reveal>
        </Section>
      )}

      <Section>
        <SectionHead title={t.ui.relatedTitle} />
        <ul className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {m.related.map((r, i) => {
            const rm = t.modules.find((x) => x.slug === r)!;
            return (
              <Reveal as="li" key={r} delay={i * 0.05}>
                <ModuleTile m={rm} t={t} preview={false} />
              </Reveal>
            );
          })}
        </ul>
      </Section>

      <ClosingCTA t={t} />
    </>
  );
}

/* ───────────────────────────── Solution detail ───────────────────────────── */

export function SolutionView({ t, slug }: { t: Site; slug: SolutionSlug }) {
  const s = t.solutions.find((x) => x.slug === slug);
  if (!s) notFound();
  return (
    <>
      <PageHeader
        eyebrow={s.eyebrow}
        title={s.title}
        lead={s.lead}
        aside={
          <ScrollLift className="tint-panel rounded-[22px] p-5 md:p-10">
            <Fragment v={s.heroVisual} f={t.fragments} />
          </ScrollLift>
        }
      >
        <Btn href={`${t.prefix}/contact/`} arrow>
          {t.ui.requestDemo}
        </Btn>
      </PageHeader>

      <Section>
        <SectionHead title={s.challengesTitle} />
        <FeatureCards items={s.challenges} />
      </Section>

      <Section tone="surface">
        <SectionHead eyebrow="GRC360" title={s.helpTitle} />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {s.help.map((hp, i) => {
            const mod = t.modules.find((x) => x.slug === hp.module)!;
            return (
              <Reveal key={hp.title} delay={i * 0.06}>
                <div className="card flex h-full flex-col p-7">
                  <span className="flex h-10 w-10 items-center justify-center rounded-[11px] border border-brand-line bg-brand-soft text-brand-ink">
                    <ModuleIcon slug={hp.module} className="h-[18px] w-[18px]" />
                  </span>
                  <h3 className="mt-6 text-[19px] font-semibold tracking-[-0.02em] text-ink">{hp.title}</h3>
                  <p className="mt-2.5 flex-1 text-[15px] leading-[1.6] text-ink-2">{hp.text}</p>
                  <div className="mt-6">
                    <TextLink href={`${t.prefix}/platform/${mod.slug}/`}>{mod.name}</TextLink>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <Section tone="contrast">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Eyebrow>{t.home.sovereign.eyebrow}</Eyebrow>
            <h2 className="t-h2 text-white">{t.home.sovereign.title}</h2>
            <p className="t-lead mt-5">{t.home.sovereign.lead}</p>
          </div>
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:col-span-7">
            {t.home.sovereign.items.map((it) => (
              <li key={it.title} className="card p-5">
                <p className="font-medium text-white">{it.title}</p>
                <p className="mt-1.5 text-[14px] text-ink-2">{it.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <ClosingCTA t={t} />
    </>
  );
}

/* ───────────────────────────── Security ───────────────────────────── */

export function SecurityView({ t }: { t: Site }) {
  const s = t.security;
  return (
    <>
      <PageHeader eyebrow={s.eyebrow} title={s.title} lead={s.lead}>
        <Btn href={`${t.prefix}/contact/`} arrow>
          {t.ui.requestDemo}
        </Btn>
      </PageHeader>

      <Section>
        <FeatureCards items={s.items} />
      </Section>

      <Section tone="contrast">
        <SectionHead title={<span className="text-white">{s.deployTitle}</span>} lead={s.deployLead} />
        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {s.requirements.map((r) => (
            <li key={r.title} className="card flex gap-4 p-6">
              <Check className="mt-1 h-4 w-4 shrink-0 text-[#7fd6ff]" strokeWidth={2.25} />
              <span>
                <span className="block font-medium text-white">{r.title}</span>
                <span className="mt-1 block text-[14.5px] text-ink-2">{r.text}</span>
              </span>
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Eyebrow>{t.modules.find((m) => m.slug === "approvals")!.name}</Eyebrow>
            <h2 className="t-h3 !text-[30px] text-ink">{t.modules.find((m) => m.slug === "approvals")!.showcases[2].title}</h2>
            <p className="mt-4 text-[16px] leading-[1.7] text-ink-2">{t.modules.find((m) => m.slug === "approvals")!.showcases[2].text}</p>
          </div>
          <Reveal className="lg:col-span-7">
            <div className="tint-panel rounded-[20px] p-5 md:p-10">
              <Fragment v="auditLog" f={t.fragments} />
            </div>
          </Reveal>
        </div>
      </Section>

      <Section tone="surface">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="t-h2">{t.home.faqTitle}</h2>
          </div>
          <div className="lg:col-span-8">
            <Faq items={s.faq} />
          </div>
        </div>
      </Section>

      <ClosingCTA t={t} />
    </>
  );
}

/* ───────────────────────────── Company ───────────────────────────── */

export function CompanyView({ t }: { t: Site }) {
  const c = t.company;
  return (
    <>
      <PageHeader eyebrow={c.eyebrow} title={c.title} lead={c.lead}>
        <Btn href={COMPANY.website} variant="secondary" arrow>
          strativu.com
        </Btn>
      </PageHeader>

      <Section tone="contrast">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Eyebrow>Strativu</Eyebrow>
            <h2 className="t-h2 text-white">{c.storyTitle}</h2>
          </div>
          <div className="space-y-6 lg:col-span-7 lg:col-start-6">
            {c.story.map((para) => (
              <p key={para} className="text-[18px] leading-[1.7] text-ink-2">
                {para}
              </p>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <SectionHead title={c.principlesTitle} />
        <NumberedCards items={c.principles} />
      </Section>

      <Section tone="surface">
        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-[var(--r-lg)] border border-line bg-line md:grid-cols-4">
          {c.facts.map(([k, v]) => (
            <div key={k} className="bg-surface p-6">
              <dt className="mono-label">{k}</dt>
              <dd className="mt-2 text-[18px] font-medium tracking-[-0.01em] text-ink">{v}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <ClosingCTA t={t} />
    </>
  );
}

/* ───────────────────────────── Contact / demo ───────────────────────────── */

export function ContactView({ t }: { t: Site }) {
  const c = t.contact;
  return (
    <section className="relative isolate overflow-hidden pb-24 pt-32 md:pb-32 md:pt-40">
      <DotField className="!h-[520px]" />
      <Container>
        <DemoBlock t={t} eyebrow={c.eyebrow} title={c.title} lead={c.lead} h1 />
      </Container>
    </section>
  );
}

/** Standards and laws, inside the Compliance page: how packages work and what organisations load. */
function FrameworksBlock({ t }: { t: Site }) {
  const fw = t.frameworks;
  return (
    <>
      <Section tone="contrast" id="frameworks">
        <SectionHead eyebrow={fw.eyebrow} title={fw.title} lead={fw.lead} />
        <ol className="grid grid-cols-1 gap-px overflow-hidden rounded-[var(--r-lg)] border border-[var(--band-line)] bg-[var(--band-line)] md:grid-cols-3">
          {fw.how.map((it, i) => (
            <li key={it.title} className="bg-[var(--band)] p-7">
              <span className="font-mono text-[13px] text-[#7fd6ff]">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-4 text-[19px] font-medium">{it.title}</h3>
              <p className="mt-2 text-[15px] leading-[1.6] text-[var(--band-ink-2)]">{it.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section>
        <SectionHead title={fw.groupsTitle} lead={fw.groupsNote} />
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2">
          {fw.groups.map((g) => (
            <div key={g.name}>
              <p className="mono-label mb-3">{g.name}</p>
              <ul className="divide-y divide-line overflow-hidden rounded-[var(--r-md)] border border-line bg-surface">
                {g.items.map((it) => (
                  <li key={it.name} className="flex items-baseline justify-between gap-4 px-5 py-4">
                    <span className="text-[16px] font-medium tracking-[-0.01em] text-ink">{it.name}</span>
                    <span className="text-right text-[14px] text-ink-2">{it.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
