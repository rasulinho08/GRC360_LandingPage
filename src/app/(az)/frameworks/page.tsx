import { az as t } from "@/site/az";
import { pageMeta } from "@/components/RootDocument";
import { FrameworksView } from "@/views/pages";

export const metadata = pageMeta(t, t.meta.frameworks, "/frameworks/");

export default function Page() {
  return <FrameworksView t={t} />;
}
