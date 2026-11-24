import type { Viewport } from "next";
import "../globals.css";
import { az } from "@/content/az";
import { RootDocument, metadataFor } from "@/components/RootDocument";

export const metadata = metadataFor(az);
export const viewport: Viewport = { width: "device-width", initialScale: 1, viewportFit: "cover", themeColor: "#0b1a2a" };

export default function AzLayout({ children }: { children: React.ReactNode }) {
  return <RootDocument lang="az">{children}</RootDocument>;
}
