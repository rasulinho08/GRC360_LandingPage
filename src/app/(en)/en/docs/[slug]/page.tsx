import { en as t } from "@/site/en";
import { pageMeta } from "@/components/RootDocument";
import type { DocSlug } from "@/site/types";
import { DocView } from "@/views/docs";

export const dynamicParams = false;

export function generateStaticParams() {
  return t.docs.pages.map((x) => ({ slug: x.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const x = t.docs.pages.find((y) => y.slug === slug)!;
  return pageMeta(t, { title: x.title, description: x.summary }, `/docs/${slug}/`);
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <DocView t={t} slug={slug as DocSlug} />;
}
