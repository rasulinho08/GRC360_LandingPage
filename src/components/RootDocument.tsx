import type { Metadata, Viewport } from "next";
import type { Site } from "@/site/types";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { themeBootstrap } from "./ThemeToggle";

export const viewport: Viewport = { width: "device-width", initialScale: 1, viewportFit: "cover", themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafbfd" },
    { media: "(prefers-color-scheme: dark)", color: "#03060d" },
  ] };

/** The <html> shared by both languages: header, page, Strativu footer. */
export function RootDocument({ t, children }: { t: Site; children: React.ReactNode }) {
  return (
    <html lang={t.locale} suppressHydrationWarning>
      {/* eslint-disable-next-line @next/next/no-head-element -- App Router root layout: <head> is the supported way to add the font link. */}
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBootstrap }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
        />
      </head>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[100] focus:rounded-[6px] focus:border focus:border-line focus:bg-surface focus:px-4 focus:py-2"
        >
          {t.ui.skip}
        </a>
        <div className="relative flex min-h-screen flex-col text-ink">
          <Header
            prefix={t.prefix}
            ui={t.ui}
            modules={t.modules.map(({ slug, name, short }) => ({ slug, name, short }))}
            solutions={t.solutions.map(({ slug, name, short }) => ({ slug, name, short }))}
            promo={{ title: t.ui.promoTitle, text: t.ui.promoText }}
          />
          <main id="main" className="relative z-10 flex-1">
            {children}
          </main>
          <Footer t={t} />
        </div>
      </body>
    </html>
  );
}

/** Per-page metadata with both language versions linked. */
export function pageMeta(t: Site, page: { title: string; description: string }, path: string, isHome = false): Metadata {
  return {
    title: isHome ? page.title : `${page.title} · GRC360`,
    description: page.description,
    alternates: { languages: { az: path, en: `/en${path}` } },
    openGraph: {
      title: isHome ? page.title : `${page.title} · GRC360`,
      description: page.description,
      images: ["/brand/grc360-logo.png"],
      locale: t.locale === "az" ? "az_AZ" : "en_US",
      type: "website",
      siteName: "GRC360",
    },
  };
}
