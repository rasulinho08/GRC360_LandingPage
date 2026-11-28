"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import type { ModuleSlug, SolutionSlug } from "@/site/types";
import { Btn, Container } from "./primitives";
import { ModuleIcon, SolutionIcon } from "./icons";
import { ThemeToggle } from "./ThemeToggle";

export type HeaderProps = {
  prefix: string;
  ui: {
    product: string;
    solutions: string;
    frameworks: string;
    security: string;
    company: string;
    contact: string;
    demo: string;
    requestDemo: string;
    platformOverview: string;
    modulesMenuTitle: string;
    solutionsMenuTitle: string;
    menu: string;
    close: string;
    language: string;
    theme: string;
    docs: string;
    mainNav: string;
    by: string;
  };
  modules: { slug: ModuleSlug; name: string; short: string }[];
  solutions: { slug: SolutionSlug; name: string; short: string }[];
  promo: { title: string; text: string };
};

/** GRC360 mark + wordmark, with the maker beside it. */
export function Logo({ prefix, by }: { prefix: string; by?: string }) {
  return (
    <Link href={`${prefix}/`} aria-label="GRC360" className="inline-flex items-center gap-2.5">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/brand/grc360-mark.png" alt="" width={28} height={28} className="h-7 w-7" />
      <span className="text-[18px] font-semibold tracking-[-0.02em] text-ink">GRC360</span>
      {by && <span className="hidden border-l border-line pl-2.5 font-mono text-[11px] text-ink-3 sm:inline">{by}</span>}
    </Link>
  );
}

/** The other language's address for the page being read. */
function switchPath(pathname: string, to: "az" | "en") {
  const bare = pathname.replace(/^\/en(?=\/|$)/, "") || "/";
  return to === "en" ? `/en${bare === "/" ? "/" : bare}` : bare;
}

type MenuKey = "product" | "solutions" | null;

export function Header({ prefix, ui, modules, solutions, promo }: HeaderProps) {
  const pathname = usePathname() ?? "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState<MenuKey>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const locale = prefix === "/en" ? "en" : "az";
  const p = (path: string) => `${prefix}${path}`;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenu(null);
        setOpen(false);
      }
    };
    const onDown = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setMenu(null);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onDown);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onDown);
    };
  }, []);

  const isActive = (path: string) => pathname.startsWith(p(path));
  const linkCls = (active: boolean) =>
    `rounded-full px-3.5 py-1.5 text-[14px] transition-colors duration-150 ${active ? "bg-surface-2 font-medium text-ink" : "text-ink-2 hover:text-ink"}`;

  const trigger = (key: Exclude<MenuKey, null>, label: string, active: boolean) => (
    <button
      type="button"
      aria-expanded={menu === key}
      aria-controls={`menu-${key}`}
      onClick={() => setMenu((m) => (m === key ? null : key))}
      onMouseEnter={() => setMenu(key)}
      className={`${linkCls(active || menu === key)} inline-flex items-center gap-1`}
    >
      {label}
      <ChevronDown className={`h-3.5 w-3.5 transition-transform ${menu === key ? "rotate-180" : ""}`} strokeWidth={2} />
    </button>
  );

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-5 md:pt-4" onMouseLeave={() => setMenu(null)}>
      <div ref={navRef} className="relative mx-auto max-w-[1200px]">
        <div
          className={`flex h-14 items-center justify-between gap-6 rounded-full pl-5 pr-2 transition-[background-color,border-color,box-shadow] duration-300 ${
            scrolled || open || menu ? "border border-line bg-surface/95 shadow-[var(--e2)] backdrop-blur-md" : "border border-transparent"
          }`}
        >
          <Logo prefix={prefix} by={ui.by} />

          <nav aria-label={ui.mainNav} className="hidden items-center gap-1 lg:flex">
            {trigger("product", ui.product, isActive("/platform"))}
            {trigger("solutions", ui.solutions, isActive("/solutions"))}
            <Link href={p("/security/")} className={linkCls(isActive("/security"))} onMouseEnter={() => setMenu(null)}>
              {ui.security}
            </Link>
            <Link href={p("/guide/")} className={linkCls(isActive("/guide"))} onMouseEnter={() => setMenu(null)}>
              {ui.docs}
            </Link>
            <Link href={p("/company/")} className={linkCls(isActive("/company"))} onMouseEnter={() => setMenu(null)}>
              {ui.company}
            </Link>
          </nav>

          <div className="hidden items-center gap-1.5 lg:flex">
            <LangSwitch pathname={pathname} locale={locale} label={ui.language} />
            <ThemeToggle label={ui.theme} />
            <Link href={p("/contact/")} className="px-3 text-[14px] text-ink-2 transition-colors duration-150 hover:text-ink">
              {ui.contact}
            </Link>
            <Btn href={p("/contact/")} size="sm" className="ml-1">
              {ui.demo}
            </Btn>
          </div>

          <div className="flex items-center gap-1.5 lg:hidden">
            <LangSwitch pathname={pathname} locale={locale} label={ui.language} />
            <ThemeToggle label={ui.theme} />
            <button
              className="rounded-full p-2.5 text-ink transition-colors hover:bg-surface-2"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? ui.close : ui.menu}
            >
              {open ? <X className="h-5 w-5" strokeWidth={1.75} /> : <Menu className="h-5 w-5" strokeWidth={1.75} />}
            </button>
          </div>
        </div>

        {/* ─── Mega menus (desktop) ─── */}
        <AnimatePresence>
          {menu && (
            <motion.div
              key={menu}
              id={`menu-${menu}`}
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.16 }}
              className="absolute inset-x-0 top-[calc(100%+10px)] hidden lg:block"
            >
              <div className="card grid grid-cols-[1fr_300px] overflow-hidden !bg-surface shadow-[var(--e3)]">
                <div className="p-6">
                  <p className="mono-label mb-4">{menu === "product" ? ui.modulesMenuTitle : ui.solutionsMenuTitle}</p>
                  <ul className="grid grid-cols-2 gap-1">
                    {(menu === "product" ? modules : solutions).map((m) => {
                      const href = p(`/${menu === "product" ? "platform" : "solutions"}/${m.slug}/`);
                      return (
                        <li key={m.slug}>
                          <Link
                            href={href}
                            onClick={() => setMenu(null)}
                            className="group flex gap-3 rounded-[var(--r-md)] p-3 transition-colors hover:bg-surface-2"
                          >
                            <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] border border-brand-line bg-brand-soft text-brand-ink">
                              {menu === "product" ? (
                                <ModuleIcon slug={m.slug as ModuleSlug} className="h-4 w-4" />
                              ) : (
                                <SolutionIcon slug={m.slug as SolutionSlug} className="h-4 w-4" />
                              )}
                            </span>
                            <span>
                              <span className="block text-[14.5px] font-medium text-ink">{m.name}</span>
                              <span className="mt-0.5 block text-[13px] leading-[1.45] text-ink-3">{m.short}</span>
                            </span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className="flex flex-col justify-between border-l border-line bg-surface-2/70 p-6">
                  <div>
                    <p className="mono-label">GRC360</p>
                    <p className="mt-3 text-[17px] font-medium leading-[1.3] tracking-[-0.01em] text-ink">{promo.title}</p>
                    <p className="mt-2 text-[13.5px] leading-[1.55] text-ink-2">{promo.text}</p>
                  </div>
                  <Link
                    href={p("/platform/")}
                    onClick={() => setMenu(null)}
                    className="mt-6 inline-flex items-center gap-1.5 text-[14px] font-medium text-brand-ink hover:text-brand"
                  >
                    {ui.platformOverview} <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ─── Mobile menu ─── */}
      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-nav"
            aria-label={ui.mainNav}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-[-1] overflow-y-auto bg-ground/95 pt-20 backdrop-blur-xl lg:hidden"
          >
            <Container className="flex flex-col pb-12 pt-4">
              <p className="mono-label mb-2 mt-2">{ui.product}</p>
              <Link href={p("/platform/")} onClick={() => setOpen(false)} className="border-b border-line-soft py-3 text-[17px] text-ink">
                {ui.platformOverview}
              </Link>
              {modules.map((m) => (
                <Link key={m.slug} href={p(`/platform/${m.slug}/`)} onClick={() => setOpen(false)} className="border-b border-line-soft py-3 text-[17px] text-ink-2">
                  {m.name}
                </Link>
              ))}
              <p className="mono-label mb-2 mt-8">{ui.solutions}</p>
              {solutions.map((s) => (
                <Link key={s.slug} href={p(`/solutions/${s.slug}/`)} onClick={() => setOpen(false)} className="border-b border-line-soft py-3 text-[17px] text-ink-2">
                  {s.name}
                </Link>
              ))}
              <div className="mt-8 flex flex-col">
                {[
                  [ui.security, "/security/"],
                  [ui.docs, "/guide/"],
                  [ui.company, "/company/"],
                  [ui.contact, "/contact/"],
                ].map(([label, path]) => (
                  <Link key={path} href={p(path)} onClick={() => setOpen(false)} className="border-b border-line-soft py-3 text-[19px] text-ink">
                    {label}
                  </Link>
                ))}
              </div>
              <div className="mt-8">
                <Btn href={p("/contact/")} size="lg" arrow className="w-full">
                  {ui.requestDemo}
                </Btn>
              </div>
            </Container>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

function LangSwitch({ pathname, locale, label }: { pathname: string; locale: "az" | "en"; label: string }) {
  return (
    <div aria-label={label} className="flex rounded-full border border-line p-0.5">
      {(["az", "en"] as const).map((l) => (
        // Plain links on purpose: each language has its own root layout, so switching is a full page load.
        <a
          key={l}
          href={switchPath(pathname, l)}
          hrefLang={l}
          lang={l}
          aria-current={l === locale ? "true" : undefined}
          className={`rounded-full px-2.5 py-1 font-mono text-[11px] uppercase transition-colors ${
            l === locale ? "bg-surface-2 text-ink" : "text-ink-3 hover:text-ink"
          }`}
        >
          {l}
        </a>
      ))}
    </div>
  );
}
