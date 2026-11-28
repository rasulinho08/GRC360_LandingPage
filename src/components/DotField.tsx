"use client";

import { useEffect, useRef } from "react";

/**
 * A quiet field of dots behind page headers. A slow wave keeps it moving on its own, and dots near
 * the pointer grow and take the brand colour, so the page answers the visitor. Static (one frame)
 * under prefers-reduced-motion, and paused when it is off screen or the tab is hidden.
 */
export function DotField({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const GAP = 26;
    let w = 0;
    let h = 0;
    let dpr = 1;
    let raf = 0;
    let visible = true;
    const pointer = { x: -9999, y: -9999, tx: -9999, ty: -9999 };
    let colors = { dot: "#cfd7e2", brand: "#0a6fe0" };

    const readColors = () => {
      const cs = getComputedStyle(document.documentElement);
      colors = { dot: cs.getPropertyValue("--line-strong").trim() || colors.dot, brand: cs.getPropertyValue("--brand").trim() || colors.brand };
    };

    const resize = () => {
      const r = canvas.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = r.width;
      h = r.height;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = (time: number) => {
      pointer.x += (pointer.tx - pointer.x) * 0.12;
      pointer.y += (pointer.ty - pointer.y) * 0.12;
      ctx.clearRect(0, 0, w, h);
      const t = time / 1000;
      for (let y = GAP / 2; y < h; y += GAP) {
        for (let x = GAP / 2; x < w; x += GAP) {
          const wave = 0.5 + 0.5 * Math.sin(x * 0.012 + y * 0.018 - t * 0.9);
          const dx = x - pointer.x;
          const dy = y - pointer.y;
          const near = Math.max(0, 1 - Math.sqrt(dx * dx + dy * dy) / 170);
          const r = 0.9 + wave * 0.5 + near * 2.2;
          ctx.globalAlpha = 0.35 + wave * 0.25 + near * 0.4;
          ctx.fillStyle = near > 0.05 ? colors.brand : colors.dot;
          ctx.beginPath();
          ctx.arc(x, y, r, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      ctx.globalAlpha = 1;
    };

    const loop = (time: number) => {
      if (visible && document.visibilityState === "visible") draw(time);
      raf = requestAnimationFrame(loop);
    };

    const onMove = (e: PointerEvent) => {
      const r = canvas.getBoundingClientRect();
      pointer.tx = e.clientX - r.left;
      pointer.ty = e.clientY - r.top;
    };
    const onLeave = () => {
      pointer.tx = -9999;
      pointer.ty = -9999;
    };

    readColors();
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    const io = new IntersectionObserver(([en]) => (visible = en.isIntersecting));
    io.observe(canvas);
    const mo = new MutationObserver(readColors);
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    if (reduce) {
      draw(0);
    } else {
      window.addEventListener("pointermove", onMove, { passive: true });
      document.addEventListener("pointerleave", onLeave);
      raf = requestAnimationFrame(loop);
    }
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      mo.disconnect();
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden
      className={`pointer-events-none absolute inset-0 -z-10 h-full w-full [mask-image:radial-gradient(ellipse_75%_70%_at_50%_35%,#000_25%,transparent_78%)] ${className}`}
    />
  );
}
