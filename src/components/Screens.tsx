import type { ModuleScreenKind, Row, Screens } from "@/content/types";

/**
 * Drawn mock-ups of GRC360's own screens (not screenshots). Every label, field and rule on them
 * exists in the product; the names and numbers are examples.
 */

function Window({ path, label, children }: { path: string; label: string; children: React.ReactNode }) {
  return (
    <div className="window" role="img" aria-label={`${label}: ${path}`}>
      <div className="window-bar">
        <i /> <i /> <i /> <span>grc360 / {path}</span>
      </div>
      <div className="window-body">
        <div className="rail" aria-hidden="true">
          <span className="on" /> <span /> <span /> <span /> <span /> <span />
        </div>
        <div className="pane">{children}</div>
      </div>
    </div>
  );
}

/** Score bands of a typical 5x5 matrix (each organisation sets its own in GRC360). */
function band(score: number) {
  if (score >= 20) return 5;
  if (score >= 12) return 4;
  if (score >= 8) return 3;
  if (score >= 4) return 2;
  return 1;
}

const HEAT: Record<string, number> = { "5x5": 1, "4x4": 2, "4x3": 3, "3x4": 1, "3x3": 4, "2x3": 5, "2x2": 3, "1x2": 2 };

/** Likelihood (rows, 5 at the top) x impact (columns), with how many risks sit in each cell. */
function RiskMatrix({ s }: { s: Screens }) {
  return (
    <div className="matrix" aria-label={s.matrixLabel}>
      {[5, 4, 3, 2, 1].map((l) => (
        <div key={l} style={{ display: "contents" }}>
          <span className="axis">{l}</span>
          {[1, 2, 3, 4, 5].map((i) => {
            const n = HEAT[`${l}x${i}`];
            return (
              <span key={i} className={`cell l${band(l * i)}${n ? " has" : ""}`} title={s.matrixCell.replace("{l}", String(l)).replace("{i}", String(i)).replace("{s}", String(l * i))}>
                {n ?? ""}
              </span>
            );
          })}
        </div>
      ))}
      <span />
      {[1, 2, 3, 4, 5].map((i) => (
        <span key={i} className="axis">
          {i}
        </span>
      ))}
    </div>
  );
}

function Rows({ rows }: { rows: Row[] }) {
  return (
    <div className="list">
      {rows.map(([text, chip, tone]) => (
        <div className="list-row" key={text}>
          <span>{text}</span>
          <span className={`chip ${tone}`}>{chip}</span>
        </div>
      ))}
    </div>
  );
}

export function CommandCenter({ s }: { s: Screens }) {
  const c = s.command;
  return (
    <Window path="command-center" label={s.screenLabel}>
      <div className="pane-title">{c.title}</div>
      <div className="kpis">
        {(["48", "3", "72%"] as const).map((v, i) => (
          <div className="kpi" key={v}>
            <b>{v}</b>
            <small>{c.kpis[i]}</small>
          </div>
        ))}
      </div>
      <div className="mini-row">
        <div className="panel">
          <h4>{c.matrix}</h4>
          <RiskMatrix s={s} />
        </div>
        <div className="panel">
          <h4>{c.overdue}</h4>
          <Rows rows={c.overdueRows} />
        </div>
      </div>
    </Window>
  );
}

function ApprovalScreen({ s }: { s: Screens }) {
  const a = s.approval;
  return (
    <Window path="approvals" label={s.screenLabel}>
      <div className="pane-title">{a.title}</div>
      <div className="panel">
        <h4>{a.levelHead}</h4>
        <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
          <span className="chip level">{a.level}</span>
          <span style={{ fontSize: 12, color: "var(--ink-3)" }}>{a.levelWhy}</span>
        </div>
      </div>
      <div className="panel">
        <h4>{a.stepsHead}</h4>
        <div className="steps">
          {a.steps.map(([text, chip, tone], i) => (
            <div className="step" key={text}>
              <span className="n">Step {i + 1}</span>
              <span>{text}</span>
              <span className={`chip ${tone}`}>{chip}</span>
            </div>
          ))}
        </div>
      </div>
    </Window>
  );
}

function ComplianceScreen({ s }: { s: Screens }) {
  const c = s.compliance;
  return (
    <Window path="compliance-hub" label={s.screenLabel}>
      <div className="pane-title">{c.title}</div>
      <div className="panel">
        {c.rows.map(([name, pct]) => (
          <div key={name} style={{ display: "grid", gap: 4 }}>
            <div style={{ display: "flex", justifyContent: "space-between", gap: 8, fontSize: 12 }}>
              <span>{name}</span>
              <b style={{ fontVariantNumeric: "tabular-nums" }}>{pct}%</b>
            </div>
            <div className="bar">
              <span style={{ width: `${pct}%` }} />
            </div>
          </div>
        ))}
      </div>
      <div className="panel">
        <h4>{c.obligationsHead}</h4>
        <Rows rows={c.obligations} />
      </div>
    </Window>
  );
}

function ControlsScreen({ s }: { s: Screens }) {
  const c = s.controls;
  return (
    <Window path="control-center/controls" label={s.screenLabel}>
      <div className="pane-title">{c.title}</div>
      <div className="panel">
        <Rows rows={c.rows} />
      </div>
      <div className="panel">
        <h4>{c.planHead}</h4>
        <div style={{ fontSize: 12, color: "var(--ink-3)" }}>{c.plan}</div>
      </div>
    </Window>
  );
}

function PolicyScreen({ s }: { s: Screens }) {
  const p = s.policy;
  return (
    <Window path="policies" label={s.screenLabel}>
      <div className="pane-title">{p.title}</div>
      <div className="panel">
        <h4>{p.versionsHead}</h4>
        <Rows rows={p.versions} />
      </div>
      <div className="panel">
        <h4>{p.attestHead}</h4>
        <div style={{ display: "grid", gap: 4 }}>
          <div style={{ display: "flex", justifyContent: "space-between", gap: 8, fontSize: 12 }}>
            <span>{p.attestLabel}</span>
            <b style={{ fontVariantNumeric: "tabular-nums" }}>184 / 230</b>
          </div>
          <div className="bar">
            <span style={{ width: "80%" }} />
          </div>
        </div>
      </div>
    </Window>
  );
}

function VendorScreen({ s }: { s: Screens }) {
  const v = s.vendor;
  return (
    <Window path="third-parties/vendors" label={s.screenLabel}>
      <div className="pane-title">{v.title}</div>
      <div className="panel">
        <Rows rows={v.rows} />
      </div>
      <div className="panel">
        <h4>{v.flowHead}</h4>
        <div style={{ fontSize: 12, color: "var(--ink-3)" }}>{v.flow}</div>
      </div>
    </Window>
  );
}

function RiskScreen({ s }: { s: Screens }) {
  const r = s.risk;
  return (
    <Window path="risk-management/asset-risks" label={s.screenLabel}>
      <div className="pane-title">{r.title}</div>
      <div className="mini-row">
        <div className="panel">
          <h4>{r.heat}</h4>
          <RiskMatrix s={s} />
        </div>
        <div className="panel">
          <h4>{r.top}</h4>
          <Rows rows={r.rows} />
        </div>
      </div>
    </Window>
  );
}

export function ModuleScreen({ screen, s }: { screen: ModuleScreenKind; s: Screens }) {
  switch (screen) {
    case "risk":
      return <RiskScreen s={s} />;
    case "approval":
      return <ApprovalScreen s={s} />;
    case "compliance":
      return <ComplianceScreen s={s} />;
    case "controls":
      return <ControlsScreen s={s} />;
    case "policy":
      return <PolicyScreen s={s} />;
    case "vendor":
      return <VendorScreen s={s} />;
    case "command":
      return <CommandCenter s={s} />;
  }
}
