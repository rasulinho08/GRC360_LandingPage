import { az as t } from "@/site/az";
import { pageMeta } from "@/components/RootDocument";
import type { SolutionSlug } from "@/site/types";
import { SolutionView } from "@/views/pages";

export const dynamicParams = false;

export function generateStaticParams() {
  return t.solutions.map((x) => ({ slug: x.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const x = t.solutions.find((y) => y.slug === slug)!;
  return pageMeta(t, { title: x.name, description: x.lead }, `/solutions/${slug}/`);
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <SolutionView t={t} slug={slug as SolutionSlug} />;
}
