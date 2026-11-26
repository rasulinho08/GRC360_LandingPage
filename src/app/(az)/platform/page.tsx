import { az as t } from "@/site/az";
import { pageMeta } from "@/components/RootDocument";
import { PlatformView } from "@/views/pages";

export const metadata = pageMeta(t, t.meta.platform, "/platform/");

export default function Page() {
  return <PlatformView t={t} />;
}
