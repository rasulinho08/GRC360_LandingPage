import { az as t } from "@/site/az";
import { pageMeta } from "@/components/RootDocument";
import { DocsIndexView } from "@/views/docs";

export const metadata = pageMeta(t, { title: t.docs.title, description: t.docs.lead }, "/guide/");

export default function Page() {
  return <DocsIndexView t={t} />;
}
