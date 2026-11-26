import "../globals.css";
import { az } from "@/site/az";
import { RootDocument, pageMeta } from "@/components/RootDocument";

export { viewport } from "@/components/RootDocument";
export const metadata = pageMeta(az, az.meta.home, "/", true);

export default function Layout({ children }: { children: React.ReactNode }) {
  return <RootDocument t={az}>{children}</RootDocument>;
}
