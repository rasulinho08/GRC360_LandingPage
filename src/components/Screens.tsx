import type { Module } from "@/content/site";

/**
 * Drawn mock-ups of GRC360's own screens (not screenshots). Every label, field and rule on them
 * exists in the product; the names and numbers are examples.
 */

function Window({ path, children }: { path: string; children: React.ReactNode }) {
  return (
    <div className="window" role="img" aria-label={`GRC360 ekranı: ${path}`}>
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

/** Likelihood (row, 5 at the top) x impact (column): score bands as a typical 5x5 matrix. */
function level(score: number) {
  if (score >= 20) return 5;
  if (score >= 12) return 4;
  if (score >= 8) return 3;
  if (score >= 4) return 2;
  return 1;
}

export function RiskMatrix({ counts = {} as Record<string, number> }) {
  const rows = [5, 4, 3, 2, 1];
  return (
    <div className="matrix" aria-label="Risk matrisi: ehtimal × təsir">
      {rows.map((l) => (
        <div key={l} style={{ display: "contents" }}>
          <span className="axis">{l}</span>
          {[1, 2, 3, 4, 5].map((i) => {
            const n = counts[`${l}x${i}`];
            return (
              <span key={i} className={`cell l${level(l * i)}${n ? " has" : ""}`} title={`Ehtimal ${l} × təsir ${i} = ${l * i}`}>
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

const HEAT = { "5x5": 1, "4x4": 2, "4x3": 3, "3x4": 1, "3x3": 4, "2x3": 5, "2x2": 3, "1x2": 2 };

export function CommandCenter() {
  return (
    <Window path="command-center">
      <div className="pane-title">Command Center</div>
      <div className="kpis">
        <div className="kpi">
          <b>48</b>
          <small>Açıq risk</small>
        </div>
        <div className="kpi">
          <b>3</b>
          <small>Gözləyən təsdiq</small>
        </div>
        <div className="kpi">
          <b>72%</b>
          <small>ISO 27001 uyğunluğu</small>
        </div>
      </div>
      <div className="mini-row">
        <div className="panel">
          <h4>Risk matrisi · ehtimal × təsir</h4>
          <RiskMatrix counts={HEAT} />
        </div>
        <div className="panel">
          <h4>Gecikən işlər</h4>
          <div className="list">
            <div className="list-row"><span>Nəzarət auditi: Ehtiyat nüsxə</span><span className="chip wait">3 gün</span></div>
            <div className="list-row"><span>Siyasət baxışı: Giriş nəzarəti</span><span className="chip wait">5 gün</span></div>
            <div className="list-row"><span>Təchizatçı riski: Data center</span><span className="chip next">bu həftə</span></div>
          </div>
        </div>
      </div>
    </Window>
  );
}

function ApprovalScreen() {
  return (
    <Window path="approvals">
      <div className="pane-title">Gözləyir: Köhnə VPN üçün risk istisnası</div>
      <div className="panel">
        <h4>Səviyyə · bağlı ən yüksək risk</h4>
        <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
          <span className="chip level">Yüksək · 16</span>
          <span style={{ fontSize: 12, color: "#607282" }}>Ödəniş sisteminin dayanması: 4 × 4</span>
        </div>
      </div>
      <div className="panel">
        <h4>Təsdiq addımları</h4>
        <div className="steps">
          <div className="step"><span className="n">Step 1</span><span>Risk sahibləri (qrup) · hər hansı biri</span><span className="chip ok">təsdiqləndi</span></div>
          <div className="step"><span className="n">Step 2</span><span>CISO · SLA 2 gün</span><span className="chip wait">1 gün qalıb</span></div>
          <div className="step"><span className="n">Step 3</span><span>Risk komitəsi · 3 nəfərdən 2-si</span><span className="chip next">növbədə</span></div>
        </div>
      </div>
    </Window>
  );
}

function ComplianceScreen() {
  const rows = [
    ["A.5 Təşkilati nəzarətlər", 81],
    ["A.6 İnsanlarla bağlı nəzarətlər", 64],
    ["A.7 Fiziki nəzarətlər", 90],
    ["A.8 Texnoloji nəzarətlər", 58],
  ] as const;
  return (
    <Window path="compliance-hub">
      <div className="pane-title">ISO/IEC 27001:2022 · uyğunluq analizi</div>
      <div className="panel">
        {rows.map(([name, pct]) => (
          <div key={name} style={{ display: "grid", gap: 4 }}>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12 }}>
              <span>{name}</span>
              <b style={{ fontVariantNumeric: "tabular-nums" }}>{pct}%</b>
            </div>
            <div className="bar"><span style={{ width: `${pct}%` }} /></div>
          </div>
        ))}
      </div>
      <div className="panel">
        <h4>Öhdəliklər</h4>
        <div className="list">
          <div className="list-row"><span>Fərdi məlumatlar haqqında qanun · məlumat subyektinin hüquqları</span><span className="chip ok">uyğun</span></div>
          <div className="list-row"><span>Daxili tənzimləyici tələb · insident hesabatı</span><span className="chip wait">qismən</span></div>
        </div>
      </div>
    </Window>
  );
}

function ControlsScreen() {
  return (
    <Window path="control-center/controls">
      <div className="pane-title">Nəzarətlər</div>
      <div className="panel">
        <div className="list">
          <div className="list-row"><span>Ehtiyat nüsxələrin həftəlik bərpa testi</span><span className="chip wait">audit gecikir</span></div>
          <div className="list-row"><span>İmtiyazlı hesabların rüblük baxışı</span><span className="chip ok">keçdi</span></div>
          <div className="list-row"><span>Şəbəkə seqmentasiyası</span><span className="chip ok">keçdi</span></div>
          <div className="list-row"><span>Laptop disk şifrələməsi</span><span className="chip wait">açıq məsələ</span></div>
        </div>
      </div>
      <div className="panel">
        <h4>Davamlılıq planı · Data center itkisi</h4>
        <div style={{ fontSize: 12, color: "#607282" }}>RTO 4 saat · RPO 1 saat · 6 bərpa tapşırığı</div>
      </div>
    </Window>
  );
}

function PolicyScreen() {
  return (
    <Window path="policies">
      <div className="pane-title">Məlumat təhlükəsizliyi siyasəti · v4</div>
      <div className="panel">
        <h4>Versiyalar</h4>
        <div className="list">
          <div className="list-row"><span>v4 · dərc olunub</span><span className="chip ok">cari</span></div>
          <div className="list-row"><span>v3 → v4 fərqi: 2 bölmə dəyişib</span><span className="chip next">fərqə bax</span></div>
        </div>
      </div>
      <div className="panel">
        <h4>Tanışlıq təsdiqi</h4>
        <div style={{ display: "grid", gap: 4 }}>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12 }}>
            <span>Təsdiq edən işçilər</span>
            <b style={{ fontVariantNumeric: "tabular-nums" }}>184 / 230</b>
          </div>
          <div className="bar"><span style={{ width: "80%" }} /></div>
        </div>
      </div>
    </Window>
  );
}

function VendorScreen() {
  return (
    <Window path="third-parties/vendors">
      <div className="pane-title">Təchizatçılar</div>
      <div className="panel">
        <div className="list">
          <div className="list-row"><span>Bulud hostinq provayderi · 2 müqavilə</span><span className="chip level">yüksək risk</span></div>
          <div className="list-row"><span>Kart prosessinq xidməti · 1 müqavilə</span><span className="chip wait">orta risk</span></div>
          <div className="list-row"><span>Ofis təchizatı</span><span className="chip ok">aşağı risk</span></div>
        </div>
      </div>
      <div className="panel">
        <h4>Məlumat axını</h4>
        <div style={{ fontSize: 12, color: "#607282" }}>Core banking → Kart prosessinq · fərdi məlumat · şifrəli kanal</div>
      </div>
    </Window>
  );
}

function RiskScreen() {
  return (
    <Window path="risk-management/asset-risks">
      <div className="pane-title">Aktiv riskləri</div>
      <div className="mini-row">
        <div className="panel">
          <h4>İstilik xəritəsi</h4>
          <RiskMatrix counts={HEAT} />
        </div>
        <div className="panel">
          <h4>Ən yüksək</h4>
          <div className="list">
            <div className="list-row"><span>Ödəniş sisteminin dayanması</span><span className="chip level">20</span></div>
            <div className="list-row"><span>Fidyə proqramı</span><span className="chip level">16</span></div>
            <div className="list-row"><span>İmtiyazlı girişdən sui-istifadə</span><span className="chip wait">12</span></div>
          </div>
        </div>
      </div>
    </Window>
  );
}

export function ModuleScreen({ screen }: { screen: Module["screen"] }) {
  switch (screen) {
    case "risk":
      return <RiskScreen />;
    case "approval":
      return <ApprovalScreen />;
    case "compliance":
      return <ComplianceScreen />;
    case "controls":
    case "continuity":
      return <ControlsScreen />;
    case "policy":
      return <PolicyScreen />;
    case "vendor":
      return <VendorScreen />;
    case "command":
      return <CommandCenter />;
  }
}
