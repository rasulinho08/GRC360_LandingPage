import { en as t } from "@/site/en";
import { pageMeta } from "@/components/RootDocument";
import { FrameworksView } from "@/views/pages";

export const metadata = pageMeta(t, t.meta.frameworks, "/frameworks/");

export default function Page() {
  return <FrameworksView t={t} />;
}
