import { az as t } from "@/site/az";
import { pageMeta } from "@/components/RootDocument";
import { HomeView } from "@/views/pages";

export const metadata = pageMeta(t, t.meta.home, "/", true);

export default function Page() {
  return <HomeView t={t} />;
}
