import "../globals.css";
import { en } from "@/site/en";
import { RootDocument, pageMeta } from "@/components/RootDocument";

export { viewport } from "@/components/RootDocument";
export const metadata = pageMeta(en, en.meta.home, "/", true);

export default function Layout({ children }: { children: React.ReactNode }) {
  return <RootDocument t={en}>{children}</RootDocument>;
}
