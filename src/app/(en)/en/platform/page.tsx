import { en as t } from "@/site/en";
import { pageMeta } from "@/components/RootDocument";
import { PlatformView } from "@/views/pages";

export const metadata = pageMeta(t, t.meta.platform, "/platform/");

export default function Page() {
  return <PlatformView t={t} />;
}
