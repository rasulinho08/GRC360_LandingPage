"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import type { Module, Screens } from "@/content/types";
import { ModuleScreen } from "./Screens";

/** The platform's modules, one at a time: what it does on the left, its screen on the right. */
export function ModuleTabs({ modules, label, screens }: { modules: Module[]; label: string; screens: Screens }) {
  const [active, setActive] = useState(modules[0].id);
  const m = modules.find((x) => x.id === active) ?? modules[0];
  return (
    <div>
      <div className="mod-tabs" role="tablist" aria-label={label}>
        {modules.map((x) => (
          <button
            key={x.id}
            id={`tab-${x.id}`}
            type="button"
            role="tab"
            aria-selected={x.id === active}
            aria-controls="mod-panel"
            className="mod-tab"
            onClick={() => setActive(x.id)}
          >
            {x.name}
          </button>
        ))}
      </div>
      <div className="mod-body" id="mod-panel" role="tabpanel" aria-labelledby={`tab-${m.id}`}>
        <div>
          <h3>{m.title}</h3>
          <ul className="ticks">
            {m.points.map((p) => (
              <li key={p}>
                <Check size={18} aria-hidden="true" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
        <ModuleScreen screen={m.screen} s={screens} />
      </div>
    </div>
  );
}
