import { az as t } from "@/site/az";
import { pageMeta } from "@/components/RootDocument";
import { CompanyView } from "@/views/pages";

export const metadata = pageMeta(t, t.meta.company, "/company/");

export default function Page() {
  return <CompanyView t={t} />;
}
