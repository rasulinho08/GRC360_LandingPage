import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { CSSProperties, ReactNode } from "react";

/*
 * Layout and type primitives, ported from the Strativu website (components/site/primitives.tsx and
 * fx.tsx) to Next.js. Same class names and tokens, so both sites share one look.
 */

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1200px] px-5 md:px-8 ${className}`}>{children}</div>;
}

/** Section rhythm: 128px desktop, 80px mobile. */
export function Section({
  children,
  className = "",
  id,
  tone = "ground",
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  tone?: "ground" | "surface" | "contrast";
}) {
  const tones = {
    ground: "",
    surface: "bg-surface-2/60 border-y border-line",
    contrast: "contrast-band",
  };
  return (
    <section id={id} className={`relative isolate scroll-mt-24 py-20 md:py-32 ${tones[tone]} ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}

export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <p className={`eyebrow mb-4 ${className}`}>{children}</p>;
}

export function SectionHead({
  eyebrow,
  title,
  lead,
  align = "left",
  className = "",
  action,
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  align?: "left" | "center";
  className?: string;
  action?: ReactNode;
}) {
  const head = (
    <div className={`${align === "center" ? "mx-auto text-center" : ""} max-w-[820px]`}>
      {eyebrow && <Eyebrow className={align === "center" ? "justify-center" : ""}>{eyebrow}</Eyebrow>}
      <h2 className="t-h2">{title}</h2>
      {lead && <p className={`t-lead mt-4 ${align === "center" ? "mx-auto" : ""} measure`}>{lead}</p>}
    </div>
  );
  if (!action) return <div className={`mb-12 md:mb-16 ${className}`}>{head}</div>;
  return (
    <div className={`mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between ${className}`}>
      {head}
      <div className="shrink-0">{action}</div>
    </div>
  );
}

type BtnProps = {
  href?: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "invert";
  size?: "sm" | "md" | "lg";
  className?: string;
  arrow?: boolean;
  type?: "button" | "submit";
  disabled?: boolean;
};

export function Btn({ href, children, variant = "primary", size = "md", className = "", arrow, type, disabled }: BtnProps) {
  const base =
    "group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand disabled:opacity-60 disabled:pointer-events-none";
  const sizes = { sm: "h-10 px-4.5 text-[13.5px]", md: "h-11 px-5 text-[14.5px]", lg: "h-13 px-7 text-[15.5px]" };
  const variants = {
    primary: "btn-grad",
    secondary: "glass-pill text-ink hover:bg-surface-2",
    ghost: "text-ink-2 hover:text-ink hover:bg-surface-2",
    invert: "bg-white text-[#0a0e16] hover:bg-[#e9eef5]",
  };
  const cls = `${base} ${sizes[size]} ${variants[variant]} ${className}`;
  const inner = (
    <>
      {children}
      {arrow && <ArrowRight className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5" strokeWidth={2} />}
    </>
  );
  if (href) {
    if (href.startsWith("http") || href.startsWith("mailto:"))
      return (
        <a href={href} className={cls} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
          {inner}
        </a>
      );
    return (
      <Link href={href} className={cls}>
        {inner}
      </Link>
    );
  }
  return (
    <button type={type ?? "button"} className={cls} disabled={disabled}>
      {inner}
    </button>
  );
}

export function TextLink({ href, children, className = "" }: { href: string; children: ReactNode; className?: string }) {
  const cls = `group inline-flex items-center gap-1.5 text-[14.5px] font-medium text-brand-ink transition-colors hover:text-brand ${className}`;
  const inner = (
    <>
      <span className="link-line">{children}</span>
      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-150 group-hover:translate-x-0.5" strokeWidth={2} />
    </>
  );
  if (href.startsWith("http"))
    return (
      <a href={href} target="_blank" rel="noreferrer" className={cls}>
        {inner}
      </a>
    );
  return (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );
}

/** One soft light behind a hero or page header. */
export function Ambience({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden className={`pointer-events-none absolute inset-x-0 top-0 h-[560px] overflow-hidden ${className}`}>
      <div
        className="absolute -top-[40%] left-1/2 h-[640px] w-[1100px] -translate-x-1/2 rounded-full blur-[120px]"
        style={{ background: "radial-gradient(closest-side, var(--glow-1), transparent 72%)" }}
      />
    </div>
  );
}

/** Standard bordered card (Strativu SpotlightCard). */
export function SpotlightCard({
  children,
  className = "",
  as: Tag = "div",
  style,
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "li" | "article";
  style?: CSSProperties;
}) {
  return (
    <Tag style={style} className={`card card-hover ${className}`}>
      {children}
    </Tag>
  );
}

/** Small status label: dot + text. */
export function StatusPill({ label, detail }: { label: string; detail?: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-[6px] border border-line bg-surface px-2.5 py-1 text-[12.5px] font-medium text-ink-2">
      <span className="h-1.5 w-1.5 rounded-full bg-brand" aria-hidden />
      {label}
      {detail && <span className="hidden text-ink-3 sm:inline">· {detail}</span>}
    </span>
  );
}

/** Page header for inner pages: eyebrow, H1, lead, optional actions. */
export function PageHeader({
  eyebrow,
  title,
  lead,
  children,
  aside,
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  children?: ReactNode;
  aside?: ReactNode;
}) {
  return (
    <header className="relative isolate overflow-hidden border-b border-line pb-16 pt-32 md:pb-24 md:pt-44">
      <Ambience className="-z-10" />
      <Container>
        <div className={aside ? "grid grid-cols-1 items-center gap-12 lg:grid-cols-12" : ""}>
          <div className={aside ? "lg:col-span-6" : "max-w-[860px] md:max-w-[66%]"}>
            <Eyebrow>{eyebrow}</Eyebrow>
            <h1 className="t-h1">{title}</h1>
            {lead && <p className="t-lead mt-5 measure">{lead}</p>}
            {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
          </div>
          {aside && <div className="lg:col-span-6">{aside}</div>}
        </div>
      </Container>
    </header>
  );
}

/** Static, wrapping strip of short items separated by hairlines. */
export function Strip({ items, className = "" }: { items: string[]; className?: string }) {
  return (
    <ul className={`flex flex-wrap items-center gap-x-6 gap-y-2 ${className}`}>
      {items.map((it, i) => (
        <li key={it} className="flex items-center gap-6 text-[14px] font-medium text-ink-2">
          {i > 0 && <span aria-hidden className="h-3 w-px bg-line-strong" />}
          {it}
        </li>
      ))}
    </ul>
  );
}

/** Continuous ticker of short items (Strativu FrameworkTicker). Static under reduced motion. */
export function Ticker({ items }: { items: string[] }) {
  const row = (hidden?: boolean) => (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden}>
      {items.map((it) => (
        <li key={it} className="flex items-center gap-10 pr-10 text-[15px] font-medium text-ink-2 whitespace-nowrap">
          <span className="h-1.5 w-1.5 rotate-45 bg-brand/70" aria-hidden />
          {it}
        </li>
      ))}
    </ul>
  );
  return (
    <div className="marquee marquee-mask overflow-hidden">
      <div className="marquee-track" style={{ ["--marquee-duration" as string]: "48s" }}>
        {row()}
        {row(true)}
      </div>
    </div>
  );
}
