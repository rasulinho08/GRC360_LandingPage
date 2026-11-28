/**
 * The GRC360 product film (40 s, from the Strativu team), framed like a product window. It starts
 * muted and loops; the controls let a visitor turn the sound on or watch it from the start.
 */
export function DemoVideo({ label, caption }: { label: string; caption?: string }) {
  return (
    <figure className="relative">
      <div className="overflow-hidden rounded-[var(--r-lg)] border border-line bg-surface shadow-[var(--e3)]">
        <div className="flex h-10 items-center gap-2.5 border-b border-line-soft bg-surface-2/70 px-4">
          <span className="flex gap-1.5" aria-hidden>
            <span className="h-2 w-2 rounded-full bg-line-strong" />
            <span className="h-2 w-2 rounded-full bg-line-strong" />
            <span className="h-2 w-2 rounded-full bg-line-strong" />
          </span>
          <span className="mono-label normal-case tracking-[0.04em] text-ink-2">grc360 · film</span>
        </div>
        <video
          className="block aspect-video w-full bg-[#0b1524]"
          src="/media/grc360-film.mp4"
          poster="/media/grc360-film-poster.jpg"
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
