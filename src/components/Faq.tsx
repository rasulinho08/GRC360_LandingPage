import { Plus } from "lucide-react";
import type { Faq as FaqItem } from "@/site/types";

/** FAQ accordion: native <details>, so it works without JavaScript. */
export function Faq({ items }: { items: FaqItem[] }) {
  return (
    <div className="border-t border-line">
      {items.map((f) => (
        <details key={f.q} className="faq-item group border-b border-line">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-[18px] font-medium tracking-[-0.015em] text-ink md:text-[20px]">
            {f.q}
            <span className="faq-icon grid h-8 w-8 shrink-0 place-items-center rounded-full border border-line-strong text-ink-2 transition-transform duration-200">
              <Plus className="h-4 w-4" strokeWidth={1.75} />
            </span>
          </summary>
          <p className="measure pb-7 text-[16px] leading-[1.7] text-ink-2">{f.a}</p>
        </details>
      ))}
    </div>
  );
}
