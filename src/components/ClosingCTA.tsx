import type { Site } from "@/site/types";
import { Btn, Container } from "./primitives";
import { Reveal } from "./Reveal";

/** Closing statement with one primary and one secondary action (Strativu ClosingCTA). */
export function ClosingCTA({ t }: { t: Site }) {
  return (
    <section className="relative isolate overflow-hidden border-t border-line bg-ground-2 py-24 md:py-32">
      <Container>
        <Reveal>
          <div className="mx-auto max-w-[860px] text-center">
            <p className="chapter">
              <b>GRC360</b> · {t.cta.eyebrow}
            </p>
            <h2 className="t-h1 mt-6">{t.cta.title}</h2>
            <p className="mx-auto mt-6 max-w-[60ch] text-[17px] leading-[1.65] text-ink-2">{t.cta.lead}</p>
            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
              <Btn href={`${t.prefix}/contact/`} size="lg" arrow>
                {t.cta.primary}
              </Btn>
              <Btn href={`${t.prefix}/platform/`} size="lg" variant="secondary">
                {t.cta.secondary}
              </Btn>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
