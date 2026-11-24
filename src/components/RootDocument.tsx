import type { Metadata } from "next";
import type { Content } from "@/content/types";

/** Shared <html> for both languages: each language has its own root layout so <html lang> is right. */
export function RootDocument({ lang, children }: { lang: string; children: React.ReactNode }) {
  return (
    <html lang={lang}>
      {/* eslint-disable-next-line @next/next/no-head-element -- App Router root layout: <head> is the supported way to add the font link. */}
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@500;600&family=IBM+Plex+Sans:wght@400;500;600&family=Inter+Tight:wght@600;700;800&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

export function metadataFor(t: Content): Metadata {
  return {
    title: t.meta.title,
    description: t.meta.description,
    alternates: { languages: { az: "/", en: "/en/" } },
    openGraph: {
      title: t.meta.ogTitle,
      description: t.meta.description,
      images: ["/brand/grc360-logo.png"],
      locale: t.locale === "az" ? "az_AZ" : "en_US",
      type: "website",
    },
  };
}
