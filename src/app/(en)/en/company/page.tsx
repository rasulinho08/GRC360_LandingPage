import { en as t } from "@/site/en";
import { pageMeta } from "@/components/RootDocument";
import { CompanyView } from "@/views/pages";

export const metadata = pageMeta(t, t.meta.company, "/company/");

export default function Page() {
  return <CompanyView t={t} />;
}
