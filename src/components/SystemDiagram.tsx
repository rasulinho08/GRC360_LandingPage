"use client";

import { motion, useReducedMotion } from "motion/react";
import type { Site } from "@/site/types";
import { EASE } from "./Reveal";

/*
 * How GRC360's modules relate (after the Strativu SystemDiagram): registers feed risks, risks link to
 * controls and frameworks, exceptions go through approvals, and everything reports to the Command
 * Center. Lines draw in when the diagram enters the viewport.
 */
const POS = [
  { x: 40, y: 120 },
  { x: 330, y: 120 },
  { x: 620, y: 120 },
  { x: 330, y: 300 },
  { x: 620, y: 300 },
];
const W = 170;
const H = 96;
const LINES = ["M210 168 H330", "M500 168 H620", "M415 216 V300", "M705 216 V300", "M500 348 H620", "M125 216 V348 H330"];

export function SystemDiagram({ d }: { d: Site["diagram"] }) {
  const reduce = useReducedMotion();
  return (
    <div className="relative overflow-x-auto rounded-[var(--r-lg)] border border-line bg-surface p-4 shadow-[var(--e3)] md:p-7">
      <svg viewBox="0 0 830 440" className="h-auto w-full min-w-[640px]" role="img" aria-label={d.label}>
        <defs>
          <marker id="arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M0 0 L10 5 L0 10 z" className="fill-brand" />
          </marker>
        </defs>
        <rect x="40" y="40" width="750" height="36" rx="10" className="fill-brand-soft" />
        <text x="415" y="63" textAnchor="middle" className="fill-brand-ink" style={{ font: "500 11px var(--font-mono)", letterSpacing: ".12em" }}>
          {d.band}
        </text>
        {LINES.map((path, i) => (
          <motion.path
            key={path}
            d={path}
            fill="none"
            className="stroke-brand"
            strokeWidth="1.5"
            markerEnd="url(#arr)"
            initial={reduce ? false : { pathLength: 0, opacity: 0 }}
            whileInView={reduce ? undefined : { pathLength: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.15 + i * 0.08, ease: EASE }}
          />
        ))}
        {d.nodes.slice(0, 5).map((n, i) => (
          <motion.g
            key={n.title}
            initial={reduce ? false : { opacity: 0, y: 8 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.45, delay: i * 0.06, ease: EASE }}
          >
            <rect x={POS[i].x} y={POS[i].y} width={W} height={H} rx="10" className="fill-surface stroke-line" strokeWidth="1" />
            <text x={POS[i].x + 14} y={POS[i].y + 24} className="fill-ink" style={{ font: "600 13.5px var(--font-sans)", letterSpacing: "-.01em" }}>
              {n.title}
            </text>
            {n.items.map((it, j) => (
              <text key={it} x={POS[i].x + 14} y={POS[i].y + 44 + j * 16} className="fill-ink-2" style={{ font: "400 11px var(--font-mono)" }}>
                {it}
              </text>
            ))}
          </motion.g>
        ))}
        <text x="40" y="428" className="fill-ink-3" style={{ font: "400 10.5px var(--font-mono)", letterSpacing: ".08em" }}>
          {d.foot}
        </text>
      </svg>
    </div>
  );
}
