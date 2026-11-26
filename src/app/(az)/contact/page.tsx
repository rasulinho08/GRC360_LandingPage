import { az as t } from "@/site/az";
import { pageMeta } from "@/components/RootDocument";
import { ContactView } from "@/views/pages";

export const metadata = pageMeta(t, t.meta.contact, "/contact/");

export default function Page() {
  return <ContactView t={t} />;
}
