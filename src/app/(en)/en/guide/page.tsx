import { en as t } from "@/site/en";
import { pageMeta } from "@/components/RootDocument";
import { DocsIndexView } from "@/views/docs";

export const metadata = pageMeta(t, { title: t.docs.title, description: t.docs.lead }, "/guide/");

export default function Page() {
  return <DocsIndexView t={t} />;
}
