/**
 * The recorded walkthrough of the real GRC360 application (sample data), framed like a product
 * window. Muted autoplay loop, with controls; a poster shows until it plays.
 */
export function DemoVideo({ label, caption }: { label: string; caption?: string }) {
  return (
    <figure className="relative">
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-x-10 -bottom-8 -top-6 -z-10 rounded-[40px] blur-[60px]"
        style={{ background: "var(--brand-grad-soft)" }}
      />
      <div className="overflow-hidden rounded-[var(--r-lg)] border border-line bg-surface shadow-[var(--e3)]">
        <div className="flex h-10 items-center gap-2.5 border-b border-line-soft bg-surface-2/70 px-4">
          <span className="flex gap-1.5" aria-hidden>
            <span className="h-2 w-2 rounded-full bg-line-strong" />
            <span className="h-2 w-2 rounded-full bg-line-strong" />
            <span className="h-2 w-2 rounded-full bg-line-strong" />
          </span>
          <span className="mono-label normal-case tracking-[0.04em] text-ink-2">grc360 · demo</span>
        </div>
        <video
          className="block aspect-[16/10] w-full bg-surface-2 object-cover object-top"
          src="/media/grc360-demo.mp4"
          poster="/media/grc360-demo-poster.jpg"
          autoPlay
          muted
          loop
          playsInline
          controls
          preload="metadata"
          aria-label={label}
        />
      </div>
      {caption && <figcaption className="mt-3 font-mono text-[11px] text-ink-3">{caption}</figcaption>}
    </figure>
  );
}
