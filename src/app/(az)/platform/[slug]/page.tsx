import { az as t } from "@/site/az";
import { pageMeta } from "@/components/RootDocument";
import type { ModuleSlug } from "@/site/types";
import { ModuleView } from "@/views/pages";

export const dynamicParams = false;

export function generateStaticParams() {
  return t.modules.map((x) => ({ slug: x.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const x = t.modules.find((y) => y.slug === slug)!;
  return pageMeta(t, { title: x.name, description: x.lead }, `/platform/${slug}/`);
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <ModuleView t={t} slug={slug as ModuleSlug} />;
}
