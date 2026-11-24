import type { Viewport } from "next";
import "../globals.css";
import { en } from "@/content/en";
import { RootDocument, metadataFor } from "@/components/RootDocument";

export const metadata = metadataFor(en);
export const viewport: Viewport = { width: "device-width", initialScale: 1, viewportFit: "cover", themeColor: "#0b1a2a" };

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return <RootDocument lang="en">{children}</RootDocument>;
}
