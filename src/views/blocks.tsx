import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import type { Item, ModulePage, Showcase, Site, SolutionPage } from "@/site/types";
import { Fragment } from "@/components/Fragments";
import { ModuleIcon, SolutionIcon } from "@/components/icons";
import { Reveal } from "@/components/Reveal";
import { Eyebrow, Section, SpotlightCard } from "@/components/primitives";

/* Shared page blocks, so every page is built from the same handful of patterns. */

/** A module card with a cropped preview of its screen on top (Vanta product tile). */
export function ModuleTile({ m, t, preview = true }: { m: ModulePage; t: Site; preview?: boolean }) {
  return (
    <Link
      href={`${t.prefix}/platform/${m.slug}/`}
      className="card card-hover group flex h-full flex-col overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
    >
      {preview && (
        <div aria-hidden className="relative h-[190px] overflow-hidden border-b border-line bg-[linear-gradient(180deg,var(--brand-soft),var(--ground-2))] px-5 pt-5">
          <div className="pointer-events-none w-[125%] origin-top-left scale-[0.8]">
            <Fragment v={m.heroVisual} f={t.fragments} framed={false} />
          </div>
          <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-surface to-transparent" />
        </div>
      )}
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-[9px] border border-brand-line bg-brand-soft text-brand-ink">
            <ModuleIcon slug={m.slug} className="h-4 w-4" />
          </span>
          <h3 className="text-[17px] font-semibold tracking-[-0.015em] text-ink">{m.name}</h3>
        </div>
        <p className="mt-3 flex-1 text-[14.5px] leading-[1.55] text-ink-2">{m.short}</p>
        <span className="mt-5 inline-flex items-center gap-1 text-[14px] font-medium text-brand-ink">
          {t.ui.learnMore}
          <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" strokeWidth={1.75} />
        </span>
      </div>
    </Link>
  );
}

export function SolutionTile({ s, t }: { s: SolutionPage; t: Site }) {
  return (
    <Link
      href={`${t.prefix}/solutions/${s.slug}/`}
      className="card card-hover group flex h-full flex-col p-7 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
    >
      <span className="flex h-11 w-11 items-center justify-center rounded-[12px] border border-brand-line bg-brand-soft text-brand-ink">
        <SolutionIcon slug={s.slug} className="h-5 w-5" />
      </span>
      <h3 className="mt-6 text-[20px] font-semibold tracking-[-0.02em] text-ink">{s.name}</h3>
      <p className="mt-2 flex-1 text-[15px] leading-[1.6] text-ink-2">{s.lead}</p>
      <span className="mt-6 inline-flex items-center gap-1 text-[14px] font-medium text-brand-ink">
        {t.ui.learnMore}
        <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" strokeWidth={1.75} />
      </span>
    </Link>
  );
}

/** Numbered cards: 01 / 02 / 03 … */
export function NumberedCards({ items, cols = 3 }: { items: Item[]; cols?: 3 | 5 }) {
  const grid = cols === 5 ? "sm:grid-cols-2 lg:grid-cols-5" : "md:grid-cols-3";
  return (
    <ol className={`grid grid-cols-1 gap-4 ${grid}`}>
      {items.map((it, i) => (
        <Reveal as="li" key={it.title} delay={i * 0.06}>
          <SpotlightCard className="rim flex h-full flex-col p-7">
            <span className="text-grad text-[40px] font-semibold leading-none tracking-[-0.04em]">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="mt-7 text-[19px] leading-[1.3] tracking-[-0.015em] text-ink">{it.title}</h3>
            <p className="mt-3 text-[15px] leading-[1.6] text-ink-2">{it.text}</p>
          </SpotlightCard>
        </Reveal>
      ))}
    </ol>
  );
}

/** Plain feature cards: title + text, optional check. */
export function FeatureCards({ items, cols = 3, check = false }: { items: Item[]; cols?: 2 | 3; check?: boolean }) {
  return (
    <div className={`grid grid-cols-1 gap-4 ${cols === 2 ? "md:grid-cols-2" : "md:grid-cols-2 lg:grid-cols-3"}`}>
      {items.map((it, i) => (
        <Reveal key={it.title} delay={i * 0.05}>
          <div className="card h-full p-7">
            {check && (
              <span className="mb-5 flex h-8 w-8 items-center justify-center rounded-full bg-brand-soft text-brand-ink">
                <Check className="h-4 w-4" strokeWidth={2} />
              </span>
            )}
            <h3 className="text-[18px] font-medium tracking-[-0.01em] text-ink">{it.title}</h3>
            <p className="mt-2.5 text-[15px] leading-[1.6] text-ink-2">{it.text}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

/** Text beside a product fragment; `flip` puts the fragment on the left. */
export function ShowcaseRow({ s, t, flip, tone }: { s: Showcase; t: Site; flip?: boolean; tone?: "ground" | "surface" }) {
  return (
    <Section tone={tone}>
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
        <Reveal className={`lg:col-span-5 ${flip ? "lg:order-2" : ""}`}>
          <Eyebrow>{s.eyebrow}</Eyebrow>
          <h2 className="t-h3 !text-[28px] md:!text-[36px] !leading-[1.1] tracking-[-0.03em] text-ink">{s.title}</h2>
          <p className="mt-5 text-[16.5px] leading-[1.7] text-ink-2">{s.text}</p>
          <ul className="mt-7 space-y-3">
            {s.points.map((p) => (
              <li key={p} className="flex gap-3 text-[15.5px] text-ink">
                <Check className="mt-1 h-4 w-4 shrink-0 text-brand" strokeWidth={2.25} />
                {p}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal className={`lg:col-span-7 ${flip ? "lg:order-1" : ""}`} delay={0.1}>
          <div className="tint-panel rounded-[20px] p-5 md:p-10">
            <Fragment v={s.visual} f={t.fragments} />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

/** Before / after table. */
export function BeforeAfter({ p }: { p: Site["home"]["problem"] }) {
  return (
    <div className="card overflow-hidden !bg-surface">
      <div aria-hidden className="hidden grid-cols-[1fr_32px_1fr] gap-6 border-b border-line bg-surface-2/70 px-7 py-4 font-mono text-[11.5px] uppercase tracking-[0.12em] md:grid">
        <span className="text-ink-3">{p.beforeLabel}</span>
        <span />
        <span className="text-brand-ink">{p.afterLabel}</span>
      </div>
      {p.rows.map((r, i) => (
        <Reveal key={r.before} delay={i * 0.05}>
          <div className="grid grid-cols-1 gap-3 border-b border-line-soft px-7 py-6 last:border-b-0 md:grid-cols-[1fr_32px_1fr] md:items-center md:gap-6">
            <span className="flex gap-3 text-[15.5px] text-ink-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-warn" aria-hidden />
              {r.before}
            </span>
            <span aria-hidden className="hidden text-ink-4 md:block">→</span>
            <span className="flex gap-3 text-[15.5px] font-medium text-ink">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ok" aria-hidden />
              {r.after}
            </span>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
