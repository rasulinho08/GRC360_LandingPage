import { en as t } from "@/site/en";
import { pageMeta } from "@/components/RootDocument";
import { SecurityView } from "@/views/pages";

export const metadata = pageMeta(t, t.meta.security, "/security/");

export default function Page() {
  return <SecurityView t={t} />;
}
