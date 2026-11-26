import type { ReactNode } from "react";
import type { Fragments, Visual } from "@/site/types";

/*
 * Drawn fragments of GRC360's own screens, in the Strativu ProductMock style (hairline frame, mono
 * labels, soft pills). Every label on them exists in the product; names and numbers are examples.
 */

type Tone = "ok" | "wait" | "bad" | "next";

export function Frame({ children, title, className = "", glow = false }: { children: ReactNode; title?: string; className?: string; glow?: boolean }) {
  return (
    <div className={`relative ${className}`}>
      {glow && (
        <div
          aria-hidden
          className="pointer-events-none absolute -inset-x-10 -bottom-8 -top-6 -z-10 rounded-[40px] blur-[60px]"
          style={{ background: "var(--brand-grad-soft)" }}
        />
      )}
      <div className="overflow-hidden rounded-[var(--r-lg)] border border-line bg-surface text-[12.5px] leading-[1.45] text-ink shadow-[var(--e3)]">
        {title && (
          <div className="flex h-10 items-center justify-between border-b border-line-soft bg-surface-2/70 px-4">
            <span className="flex items-center gap-2.5">
              <span className="flex gap-1.5" aria-hidden>
                <span className="h-2 w-2 rounded-full bg-line-strong" />
                <span className="h-2 w-2 rounded-full bg-line-strong" />
                <span className="h-2 w-2 rounded-full bg-line-strong" />
              </span>
              <span className="mono-label normal-case tracking-[0.04em] text-ink-2">grc360 / {title}</span>
            </span>
            <span className="hidden items-center gap-2 font-mono text-[10px] text-ink-3 sm:flex">
              <span className="h-1.5 w-1.5 rounded-full bg-ok" aria-hidden />
              on-prem
            </span>
          </div>
        )}
        {children}
      </div>
    </div>
  );
}

function Pill({ children, tone = "next" }: { children: ReactNode; tone?: Tone }) {
  const t = {
    ok: "bg-ok-soft text-ok border-transparent",
    wait: "bg-[#fdf3e1] text-[#9a5b06] border-transparent",
    bad: "bg-warn-soft text-warn border-transparent",
    next: "bg-surface-2 text-ink-2 border-line",
  }[tone];
  return (
    <span className={`inline-flex h-[20px] shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full border px-2 font-mono text-[10px] tracking-[0.02em] ${t}`}>
      <span className="h-1.5 w-1.5 rounded-full bg-current opacity-80" aria-hidden />
      {children}
    </span>
  );
}

function Rows({ rows }: { rows: [string, string, Tone][] }) {
  return (
    <ul className="divide-y divide-line-soft">
      {rows.map(([text, chip, tone]) => (
        <li key={text} className="flex items-center justify-between gap-3 px-4 py-2.5">
          <span className="truncate text-ink">{text}</span>
          <Pill tone={tone}>{chip}</Pill>
        </li>
      ))}
    </ul>
  );
}

function Head({ children }: { children: ReactNode }) {
  return <div className="border-b border-line-soft px-4 py-3 text-[13px] font-semibold tracking-[-0.01em]">{children}</div>;
}

function band(score: number) {
  if (score >= 20) return "bg-[#e0584f] text-white";
  if (score >= 12) return "bg-[#f5b08a]";
  if (score >= 8) return "bg-[#f8dea6]";
  if (score >= 4) return "bg-[#eef0c4]";
  return "bg-[#d3efe1]";
}
const HEAT: Record<string, number> = { "5x5": 1, "5x4": 2, "4x4": 3, "4x3": 1, "3x3": 5, "3x2": 2, "2x3": 3, "2x2": 4, "1x2": 2 };

function Heatmap({ f }: { f: Fragments["heatmap"] }) {
  return (
    <div className="p-4">
      <div className="grid grid-cols-[16px_repeat(5,1fr)] gap-1 font-mono text-[10px]">
        {[5, 4, 3, 2, 1].map((l) => (
          <div key={l} className="contents">
            <span className="grid place-items-center text-ink-3">{l}</span>
            {[1, 2, 3, 4, 5].map((i) => {
              const n = HEAT[`${l}x${i}`];
              return (
                <span
                  key={i}
                  title={f.cell.replace("{l}", String(l)).replace("{i}", String(i)).replace("{s}", String(l * i))}
                  className={`grid aspect-[1.35] place-items-center rounded-[5px] font-semibold ${band(l * i)} ${n ? "ring-1 ring-inset ring-ink/40" : "opacity-80"}`}
                >
                  {n ?? ""}
                </span>
              );
            })}
          </div>
        ))}
        <span />
        {[1, 2, 3, 4, 5].map((i) => (
          <span key={i} className="grid place-items-center text-ink-3">
            {i}
          </span>
        ))}
      </div>
      <div className="mt-2 flex justify-between font-mono text-[10px] uppercase tracking-[0.08em] text-ink-3">
        <span>↑ {f.likelihood}</span>
        <span>{f.impact} →</span>
      </div>
    </div>
  );
}

function Bars({ rows }: { rows: [string, number][] }) {
  return (
    <ul className="space-y-3 p-4">
      {rows.map(([name, pct]) => (
        <li key={name}>
          <div className="mb-1.5 flex justify-between gap-3">
            <span className="truncate">{name}</span>
            <b className="tabular font-semibold">{pct}%</b>
          </div>
          <div className="h-1.5 overflow-hidden rounded-full bg-surface-3">
            <div className="h-full rounded-full" style={{ width: `${pct}%`, background: "var(--brand-grad)" }} />
          </div>
        </li>
      ))}
    </ul>
  );
}

/** One fragment by name. */
export function Fragment({ v, f, framed = true }: { v: Visual; f: Fragments; framed?: boolean }) {
  const body = (() => {
    switch (v) {
      case "heatmap":
        return { title: "risk-management/asset-risks", el: (<><Head>{f.heatmap.title}</Head><Heatmap f={f.heatmap} /></>) };
      case "riskList":
        return {
          title: "risk-management",
          el: (
            <>
              <Head>{f.riskList.title}</Head>
              <ul className="divide-y divide-line-soft">
                {f.riskList.rows.map(([name, owner, score]) => (
                  <li key={name} className="flex items-center gap-3 px-4 py-2.5">
                    <span className={`grid h-7 w-7 shrink-0 place-items-center rounded-[7px] font-mono text-[11px] font-semibold ${band(score)}`}>{score}</span>
                    <span className="min-w-0 flex-1">
                      <span className="block truncate font-medium">{name}</span>
                      <span className="block truncate text-[11px] text-ink-3">{owner}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </>
          ),
        };
      case "approvalChain":
        return {
          title: "approvals",
          el: (
            <>
              <Head>{f.approvalChain.title}</Head>
              <div className="flex flex-wrap items-center gap-2 border-b border-line-soft px-4 py-3">
                <Pill tone="bad">{f.approvalChain.level}</Pill>
                <span className="text-[11.5px] text-ink-3">{f.approvalChain.why}</span>
              </div>
              <ol className="space-y-2 p-4">
                {f.approvalChain.steps.map(([text, chip, tone], i) => (
                  <li key={text} className="flex items-center gap-3 rounded-[10px] border border-line px-3 py-2.5">
                    <span className="rounded-[5px] bg-surface-2 px-1.5 py-0.5 font-mono text-[10px] text-ink-2">Step {i + 1}</span>
                    <span className="min-w-0 flex-1 truncate">{text}</span>
                    <Pill tone={tone}>{chip}</Pill>
                  </li>
                ))}
              </ol>
            </>
          ),
        };
      case "approvalInbox":
        return {
          title: "approvals/inbox",
          el: (
            <>
              <Head>{f.approvalInbox.title}</Head>
              <div className="p-4">
                <p className="font-medium">{f.approvalInbox.item}</p>
                <dl className="mt-3 grid grid-cols-[auto_1fr] gap-x-4 gap-y-1.5 text-[11.5px]">
                  {f.approvalInbox.details.map(([k, val]) => (
                    <div key={k} className="contents">
                      <dt className="text-ink-3">{k}</dt>
                      <dd className="truncate text-ink">{val}</dd>
                    </div>
                  ))}
                </dl>
                <div className="mt-4 flex gap-2">
                  <span className="btn-grad inline-flex h-8 items-center rounded-full px-4 text-[12px] font-medium">{f.approvalInbox.approve}</span>
                  <span className="inline-flex h-8 items-center rounded-full border border-line px-4 text-[12px] text-ink-2">{f.approvalInbox.decline}</span>
                </div>
              </div>
            </>
          ),
        };
      case "compliance":
        return { title: "compliance-hub/assessments", el: (<><Head>{f.compliance.title}</Head><Bars rows={f.compliance.rows} /></>) };
      case "obligations":
        return { title: "compliance-hub/obligations", el: (<><Head>{f.obligations.title}</Head><Rows rows={f.obligations.rows} /></>) };
      case "controls":
        return { title: "control-center/controls", el: (<><Head>{f.controls.title}</Head><Rows rows={f.controls.rows} /></>) };
      case "continuity":
        return {
          title: "control-center/continuity",
          el: (
            <>
              <Head>{f.continuity.title}</Head>
              <div className="grid grid-cols-3 gap-2 p-4">
                {[f.continuity.rto, f.continuity.rpo, f.continuity.tasks].map((x) => {
                  const [k, ...rest] = x.split(" ");
                  return (
                    <div key={x} className="rounded-[10px] border border-line bg-surface-2/60 px-3 py-2.5">
                      <div className="font-mono text-[10px] uppercase tracking-[0.06em] text-ink-3">{k}</div>
                      <div className="mt-1 text-[15px] font-semibold tracking-[-0.02em]">{rest.join(" ")}</div>
                    </div>
                  );
                })}
              </div>
            </>
          ),
        };
      case "policyVersions":
        return { title: "control-center/policies", el: (<><Head>{f.policyVersions.title}</Head><Rows rows={f.policyVersions.rows} /></>) };
      case "attestation": {
        const pct = Math.round((f.attestation.done * 100) / f.attestation.total);
        return {
          title: "policy-attestations",
          el: (
            <>
              <Head>{f.attestation.title}</Head>
              <div className="p-4">
                <div className="flex items-end justify-between">
                  <span className="text-ink-2">{f.attestation.label}</span>
                  <b className="tabular text-[22px] font-semibold tracking-[-0.03em]">{pct}%</b>
                </div>
                <div className="mt-2 h-2 overflow-hidden rounded-full bg-surface-3">
                  <div className="h-full rounded-full" style={{ width: `${pct}%`, background: "var(--brand-grad)" }} />
                </div>
                <p className="mt-2 font-mono text-[11px] text-ink-3 tabular">
                  {f.attestation.done} / {f.attestation.total}
                </p>
              </div>
            </>
          ),
        };
      }
      case "vendors":
        return { title: "third-parties/vendors", el: (<><Head>{f.vendors.title}</Head><Rows rows={f.vendors.rows} /></>) };
      case "dataFlow":
        return {
          title: "asset-management/data-flows",
          el: (
            <>
              <Head>{f.dataFlow.title}</Head>
              <div className="flex items-center gap-3 p-5">
                <span className="flex-1 rounded-[10px] border border-line bg-surface-2/60 px-3 py-3 text-center font-medium">{f.dataFlow.from}</span>
                <span className="flex flex-col items-center gap-1 font-mono text-[10px] text-ink-3">
                  <span>{f.dataFlow.data}</span>
                  <span className="h-px w-16" style={{ background: "var(--brand-grad)" }} />
                  <span>{f.dataFlow.channel}</span>
                </span>
                <span className="flex-1 rounded-[10px] border border-line bg-surface-2/60 px-3 py-3 text-center font-medium">{f.dataFlow.to}</span>
              </div>
            </>
          ),
        };
      case "projects":
        return {
          title: "operations-center/projects",
          el: (
            <>
              <Head>{f.projects.title}</Head>
              <ul className="space-y-3 p-4">
                {f.projects.rows.map(([name, pct, tone]) => (
                  <li key={name}>
                    <div className="mb-1.5 flex items-center justify-between gap-3">
                      <span className="truncate">{name}</span>
                      <Pill tone={tone}>{pct}%</Pill>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-surface-3">
                      <div className="h-full rounded-full bg-brand" style={{ width: `${pct}%` }} />
                    </div>
                  </li>
                ))}
              </ul>
            </>
          ),
        };
      case "incidents":
        return { title: "operations-center/incidents", el: (<><Head>{f.incidents.title}</Head><Rows rows={f.incidents.rows} /></>) };
      case "kpis":
        return {
          title: "command-center",
          el: (
            <>
              <Head>{f.kpis.title}</Head>
              <div className="grid grid-cols-2 gap-2 p-4">
                {f.kpis.items.map(([k, val]) => (
                  <div key={k} className="rounded-[10px] border border-line bg-surface-2/60 px-3 py-2.5">
                    <div className="text-[20px] font-semibold tracking-[-0.03em] tabular">{val}</div>
                    <div className="mt-0.5 truncate font-mono text-[10px] uppercase tracking-[0.04em] text-ink-3">{k}</div>
                  </div>
                ))}
              </div>
            </>
          ),
        };
      case "tasks":
        return { title: "command-center", el: (<><Head>{f.tasks.title}</Head><Rows rows={f.tasks.rows} /></>) };
      case "access":
        return {
          title: "organization/groups",
          el: (
            <>
              <Head>{f.access.title}</Head>
              <ul className="divide-y divide-line-soft">
                {f.access.rows.map(([group, rights]) => (
                  <li key={group} className="flex items-center justify-between gap-3 px-4 py-2.5">
                    <span className="truncate font-medium">{group}</span>
                    <span className="flex gap-1">
                      {rights.map((r) => (
                        <span key={r} className="rounded-[5px] border border-line bg-surface-2 px-1.5 py-0.5 font-mono text-[10px] text-ink-2">
                          {r}
                        </span>
                      ))}
                    </span>
                  </li>
                ))}
              </ul>
            </>
          ),
        };
      case "auditLog":
        return {
          title: "settings/system-log",
          el: (
            <>
              <Head>{f.auditLog.title}</Head>
              <ul className="divide-y divide-line-soft font-mono text-[11px]">
                {f.auditLog.rows.map(([time, who, what]) => (
                  <li key={time + what} className="grid grid-cols-[auto_auto_1fr] gap-3 px-4 py-2">
                    <span className="text-ink-3">{time}</span>
                    <span className="text-brand-ink">{who}</span>
                    <span className="truncate text-ink-2">{what}</span>
                  </li>
                ))}
              </ul>
            </>
          ),
        };
    }
  })();
  if (!framed) return <div className="overflow-hidden rounded-[var(--r-lg)] border border-line bg-surface text-[12.5px] shadow-[var(--e2)]">{body.el}</div>;
  return <Frame title={body.title}>{body.el}</Frame>;
}

/** A main fragment with a smaller one floating over its lower corner (Vanta product hero). */
export function FragmentStack({ main, float, f }: { main: Visual; float?: Visual; f: Fragments }) {
  return (
    <div className="relative">
      <Fragment v={main} f={f} />
      {float && (
        <div className="absolute -bottom-10 -left-4 hidden w-[58%] md:block lg:-left-10">
          <Fragment v={float} f={f} framed={false} />
        </div>
      )}
    </div>
  );
}
