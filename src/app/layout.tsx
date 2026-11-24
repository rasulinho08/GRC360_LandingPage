import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GRC360 · Risk, uyğunluq və audit platforması",
  description:
    "GRC360 risk reyestrlərini, nəzarətləri, siyasətləri, auditləri və tənzimləyici öhdəlikləri bir platformada birləşdirir. Azərbaycan dilində, öz serverlərinizdə.",
  openGraph: {
    title: "GRC360 · Risk, uyğunluq və audit platforması",
    description: "Risk, uyğunluq və audit bir platformada. Öz serverlərinizdə.",
    images: ["/brand/grc360-logo.png"],
    locale: "az_AZ",
    type: "website",
  },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, viewportFit: "cover", themeColor: "#0b1a2a" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="az">
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
