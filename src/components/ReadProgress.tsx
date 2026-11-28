"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "motion/react";

/** A thin line along the top edge showing how far down the page the reader is. */
export function ReadProgress() {
  const { scrollYProgress } = useScroll();
  const reduce = useReducedMotion();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.3 });
  return <motion.div aria-hidden className="read-progress" style={{ scaleX: reduce ? scrollYProgress : scaleX }} />;
}
