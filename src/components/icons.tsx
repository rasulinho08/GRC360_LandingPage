import {
  Building2,
  ClipboardCheck,
  FileText,
  Gauge,
  Handshake,
  Landmark,
  Network,
  RadioTower,
  ShieldAlert,
  ShieldCheck,
  SlidersHorizontal,
  Workflow,
} from "lucide-react";
import type { ModuleSlug, SolutionSlug } from "@/site/types";

const MODULE_ICONS = {
  "risk-management": ShieldAlert,
  approvals: Workflow,
  compliance: ShieldCheck,
  controls: SlidersHorizontal,
  policies: FileText,
  "third-parties": Handshake,
  operations: ClipboardCheck,
  "command-center": Gauge,
} satisfies Record<ModuleSlug, unknown>;

const SOLUTION_ICONS = {
  banks: Landmark,
  government: Building2,
  "telecom-energy": RadioTower,
  holdings: Network,
} satisfies Record<SolutionSlug, unknown>;

export function ModuleIcon({ slug, className }: { slug: ModuleSlug; className?: string }) {
  const I = MODULE_ICONS[slug];
  return <I className={className} strokeWidth={1.75} aria-hidden />;
}

export function SolutionIcon({ slug, className }: { slug: SolutionSlug; className?: string }) {
  const I = SOLUTION_ICONS[slug];
  return <I className={className} strokeWidth={1.75} aria-hidden />;
}
