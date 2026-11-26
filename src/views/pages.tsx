import { notFound } from "next/navigation";
import { ArrowRight, Check, Mail, MapPin } from "lucide-react";
import type { ModuleSlug, Site, SolutionSlug } from "@/site/types";
import { COMPANY } from "@/site/company";
import { ClosingCTA } from "@/components/ClosingCTA";
import { DemoForm } from "@/components/DemoForm";
import { DemoVideo } from "@/components/DemoVideo";
import { Faq } from "@/components/Faq";
import { Fragment, FragmentStack } from "@/components/Fragments";
import { ModuleIcon } from "@/components/icons";
import { Reveal, ScrollLift, Stagger } from "@/components/Reveal";
import { SystemDiagram } from "@/components/SystemDiagram";
import { Btn, Container, Eyebrow, PageHeader, Section, SectionHead, Strip, TextLink, Ticker } from "@/components/primitives";
import { BeforeAfter, FeatureCards, ModuleTile, NumberedCards, ShowcaseRow, SolutionTile } from "./blocks";

/* ───────────────────────────── Home ───────────────────────────── */

export function HomeView({ t }: { t: Site }) {
  const h = t.home;
  const p = (path: string) => `${t.prefix}${path}`;
  return (
    <>
      {/* Hero: tinted inset panel, centred copy, the real application below (Vanta home hero). */}
      <section className="px-3 pt-24 md:px-5 md:pt-28">
        <div className="tint-panel relative isolate overflow-hidden rounded-[24px] px-5 pt-14 md:px-12 md:pt-20">
          <Container className="!px-0">
            <Stagger className="mx-auto max-w-[900px] text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-line bg-surface/80 px-3 py-1 text-[12.5px] font-medium text-ink-2">
                <span className="h-1.5 w-1.5 rounded-full bg-brand" aria-hidden />
                {h.eyebrow}
                <span className="text-ink-3">· {t.ui.by}</span>
              </span>
              <h1 className="t-display mx-auto mt-7 max-w-[15ch] !text-[clamp(44px,7vw,92px)]">{h.title}</h1>
              <p className="t-lead mx-auto mt-6 max-w-[60ch]">{h.lead}</p>
              <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
                <Btn href={p("/contact/")} size="lg" arrow>
                  {h.primary}
                </Btn>
                <Btn href={p("/platform/")} size="lg" variant="secondary">
                  {h.secondary}
                </Btn>
              </div>
              <Strip items={h.proof} className="mt-8 justify-center" />
            </Stagger>
            <ScrollLift className="mx-auto mt-14 max-w-[1080px] translate-y-px">
              <DemoVideo label={t.video.label} />
            </ScrollLift>
          </Container>
        </div>
      </section>

      <div className="border-b border-line py-7">
        <Container className="flex flex-col gap-4 md:flex-row md:items-center md:gap-10">
          <span className="mono-label shrink-0">{h.standardsLabel}</span>
          <Ticker items={h.standards} />
        </Container>
      </div>

      <Section>
        <SectionHead eyebrow={h.allHere.eyebrow} title={h.allHere.title} lead={h.allHere.lead} align="center" />
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {t.modules.map((m, i) => (
            <Reveal as="li" key={m.slug} delay={(i % 4) * 0.05}>
              <ModuleTile m={m} t={t} />
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section tone="surface">
        <SectionHead eyebrow={h.problem.eyebrow} title={h.problem.title} lead={h.problem.lead} />
        <BeforeAfter p={h.problem} />
      </Section>

      <Section>
        <SectionHead eyebrow={h.process.eyebrow} title={h.process.title} lead={h.process.lead} />
        <NumberedCards items={h.process.items} cols={5} />
      </Section>

      <Section tone="surface">
        <SectionHead eyebrow={h.builtFor.eyebrow} title={h.builtFor.title} lead={h.builtFor.lead} />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {t.solutions.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.05}>
              <SolutionTile s={s} t={t} />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="contrast">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Eyebrow>{h.sovereign.eyebrow}</Eyebrow>
            <h2 className="t-h2 text-white">{h.sovereign.title}</h2>
            <p className="t-lead mt-5">{h.sovereign.lead}</p>
            <div className="mt-8">
              <Btn href={p("/security/")} variant="invert" arrow>
                {h.sovereign.cta}
              </Btn>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-7">
            {h.sovereign.items.map((it, i) => (
              <Reveal key={it.title} delay={i * 0.05}>
                <div className="card h-full p-6">
                  <h3 className="text-[17px] font-medium text-white">{it.title}</h3>
                  <p className="mt-2 text-[14.5px] leading-[1.6] text-ink-2">{it.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <SectionHead
          eyebrow={h.frameworks.eyebrow}
          title={h.frameworks.title}
          lead={h.frameworks.lead}
          action={
            <Btn href={p("/frameworks/")} variant="secondary" arrow>
              {h.frameworks.cta}
            </Btn>
          }
        />
        <ul className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {h.standards.map((s, i) => (
            <Reveal as="li" key={s} delay={(i % 4) * 0.04}>
              <div className="card flex h-full min-h-[120px] flex-col justify-between p-5">
                <span className="font-mono text-[11px] text-ink-3">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-[16px] font-medium leading-[1.3] tracking-[-0.01em] text-ink">{s}</span>
              </div>
            </Reveal>
          ))}
        </ul>
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

/* ───────────────────────────── Platform ───────────────────────────── */

export function PlatformView({ t }: { t: Site }) {
  const pl = t.platform;
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
        <SectionHead eyebrow={t.video.eyebrow} title={t.video.title} lead={t.video.lead} />
        <Reveal>
          <DemoVideo label={t.video.label} caption={t.video.caption} />
        </Reveal>
      </Section>

      <Section>
        <SectionHead eyebrow={pl.eyebrow} title={pl.pillarsTitle} />
        <NumberedCards items={pl.pillars.slice(0, 3)} />
        <div className="mt-4">
          <FeatureCards items={pl.pillars.slice(3)} cols={2} />
        </div>
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

/* ───────────────────────────── Frameworks ───────────────────────────── */

export function FrameworksView({ t }: { t: Site }) {
  const fw = t.frameworks;
  return (
    <>
      <PageHeader eyebrow={fw.eyebrow} title={fw.title} lead={fw.lead}>
        <Btn href={`${t.prefix}/platform/compliance/`} arrow>
          {t.modules.find((m) => m.slug === "compliance")!.name}
        </Btn>
      </PageHeader>

      <Section>
        <SectionHead title={fw.howTitle} />
        <NumberedCards items={fw.how} />
      </Section>

      <Section tone="surface">
        <SectionHead title={fw.groupsTitle} lead={fw.groupsNote} />
        <div className="space-y-12">
          {fw.groups.map((g) => (
            <div key={g.name}>
              <p className="mono-label mb-4">{g.name}</p>
              <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {g.items.map((it, i) => (
                  <Reveal as="li" key={it.name} delay={i * 0.045}>
                    <div className="card h-full p-5">
                      <div className="text-[16px] font-medium leading-[1.3] tracking-[-0.01em] text-ink">{it.name}</div>
                      <div className="mt-1.5 text-[14px] text-ink-2">{it.text}</div>
                    </div>
                  </Reveal>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <ShowcaseRow s={t.modules.find((m) => m.slug === "compliance")!.showcases[0]} t={t} />

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
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[560px] w-[1100px] -translate-x-1/2 -translate-y-1/3 rounded-full blur-[120px]"
        style={{ background: "radial-gradient(closest-side, var(--glow-1), transparent 72%)" }}
      />
      <Container>
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <div>
            <Eyebrow>{c.eyebrow}</Eyebrow>
            <h1 className="t-h1">{c.title}</h1>
            <p className="t-lead mt-5 measure">{c.lead}</p>
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
              <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-3 hover:text-ink" aria-label={`${c.emailLabel}: ${COMPANY.email}`}>
                <Mail className="h-4 w-4 text-brand" /> {COMPANY.email}
              </a>
              <span className="flex items-center gap-3" aria-label={`${c.addressLabel}: ${COMPANY.address[t.locale]}`}>
                <MapPin className="h-4 w-4 text-brand" /> {COMPANY.address[t.locale]}
              </span>
              {COMPANY.linkedin && (
                <a href={COMPANY.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-ink">
                  <ArrowRight className="h-4 w-4 text-brand" /> LinkedIn
                </a>
              )}
            </div>
          </div>
          <Reveal>
            <DemoForm t={c.form} />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
