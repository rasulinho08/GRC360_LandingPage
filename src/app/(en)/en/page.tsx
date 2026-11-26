import { en as t } from "@/site/en";
import { pageMeta } from "@/components/RootDocument";
import { HomeView } from "@/views/pages";

export const metadata = pageMeta(t, t.meta.home, "/", true);

export default function Page() {
  return <HomeView t={t} />;
}
