"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

export const EASE = [0.25, 0.1, 0.25, 1] as const;

type Tag = "div" | "li" | "section" | "article";

/** Scroll reveal: short fade + 10px rise, once. Honours prefers-reduced-motion. (Strativu Reveal.) */
export function Reveal({
  children,
  delay = 0,
  className = "",
  as = "div",
  y = 10,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: Tag;
  y?: number;
}) {
  const reduce = useReducedMotion();
  const M = motion[as];
  if (reduce) {
    const Plain = as;
    return <Plain className={className}>{children}</Plain>;
  }
  return (
    <M
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.45, delay: Math.min(delay, 0.2), ease: EASE }}
    >
      {children}
    </M>
  );
}

/** Staged entrance on load (hero). Children get a short stagger. (Strativu Stagger.) */
export function Stagger({ children, className = "", step = 0.06 }: { children: ReactNode[]; className?: string; step?: number }) {
  const reduce = useReducedMotion();
  return (
    <div className={className}>
      {children.map((c, i) =>
        reduce ? (
          <div key={i}>{c}</div>
        ) : (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.04 + i * step, ease: EASE }}
          >
            {c}
          </motion.div>
        )
      )}
    </div>
  );
}

/** Simple entrance for a hero product shot. */
export function ScrollLift({ children, className = "" }: { children: ReactNode; className?: string }) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.25, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}
