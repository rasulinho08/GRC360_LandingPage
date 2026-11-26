const thr = (label, color) => ({ label, description: "", color, isDefault: false });
const risk = (id, name, desc, l, i, owner, asset, status, next, ctrl) => ({
  id, name, description: desc, analysisLikelihoodName: String(l), analysisImpactName: String(i),
  riskAnalysisScore: l * i, riskTreatmentScore: Math.round(l * i * 0.45 * 10) / 10,
  inherentThreshold: l * i >= 15 ? thr("High", "#FECACA") : l * i >= 8 ? thr("Medium", "#FED7AA") : thr("Low", "#BBF7D0"),
  residualThreshold: thr("Low", "#BBF7D0"),
  riskGrcContactNames: [owner], riskOriginatorContactNames: ["Information Security"],
  relatedAssetNames: [asset], treatmentControlNames: [ctrl], nextReviewDate: next,
  riskTreatment: "MITIGATE", status, dynamicStatus: status, reviewsCount: 2,
});
const page = (content) => ({ content, totalElements: content.length, totalPages: 1, number: 0, size: 10, first: true, last: true, empty: !content.length });
module.exports = {
  "/command-center/dashboard": {
    tenantId: "t1",
    taskOverview: {
      expiredTasks: [
        { id: "1", title: "Quarterly privileged access review", category: "Control audit", dueDate: "2026-11-18", priority: "High", owner: "Rauf Aliyev", status: "Open" },
        { id: "2", title: "Backup restore test", category: "Maintenance", dueDate: "2026-11-20", priority: "Critical", owner: "Leyla Huseynova", status: "Open" },
      ],
      todayTasks: [{ id: "3", title: "Card processor contract renewal", category: "Third party", dueDate: "2026-11-26", priority: "Medium", owner: "Aysel Mammadova", status: "Open" }],
      futureTasks: [
        { id: "4", title: "ISO 27001 internal audit", category: "Audit", dueDate: "2026-12-10", priority: "Medium", owner: "Rauf Aliyev", status: "Open" },
        { id: "5", title: "Policy review: Access control", category: "Policy", dueDate: "2026-12-15", priority: "Low", owner: "Nigar Karimova", status: "Open" },
      ],
    },
    assetRisks: { title: "Asset Risks", period: "All open risks", description: "", matrix: { Critical: { Likely: 2, Possible: 1 }, Major: { "Almost certain": 1, Unlikely: 2 }, Moderate: { Possible: 3 }, Minor: { Rare: 2 } } },
    operationalRisks: { title: "Business Risks", period: "All open risks", description: "", matrix: { Major: { Possible: 2 }, Moderate: { Likely: 1 } } },
    thirdPartyRisks: { title: "Third Party Risks", period: "All open risks", description: "", matrix: { Moderate: { Likely: 1 }, Major: { Unlikely: 1 } } },
    complianceAuditStatus: { frameworks: [
      { framework: "ISO/IEC 27001:2022", auditDate: "2026-12-01", status: "On going", progress: 72 },
      { framework: "PCI DSS 4.0", auditDate: "2027-02-15", status: "At risk", progress: 46 },
      { framework: "Personal data law", auditDate: "2026-10-01", status: "Completed", progress: 91 },
    ] },
    overallProgress: { totalProjects: 12, completed: 4, delayed: 3, ongoing: 3, planned: 2, completionRate: 58 },
  },
  "/compliance/obligations/overview": {
    total: 14, byDynamicStatus: { HEALTHY: 8, ATTENTION_REQUIRED: 3, NON_COMPLIANT: 1, OVERDUE_REVIEW: 1, NOT_ASSESSED: 1 }, overdueReview: 1, statusMismatch: 1,
    laws: [
      { lawId: "l1", name: "Law on Personal Data", total: 6, healthy: 5, assessable: 6, compliancePercent: 83, byDynamicStatus: { HEALTHY: 5, ATTENTION_REQUIRED: 1 }, statusMismatch: 0 },
      { lawId: "l2", name: "Central Bank — information security rules", total: 8, healthy: 3, assessable: 6, compliancePercent: 50, byDynamicStatus: { HEALTHY: 3, ATTENTION_REQUIRED: 2, NON_COMPLIANT: 1, OVERDUE_REVIEW: 1 }, statusMismatch: 1 },
    ],
  },
  "/risk-management/asset-risks": page([
    risk("r1", "Payment system outage", "Core payment switch unavailable for more than 4 hours", 4, 5, "Rauf Aliyev", "Payment switch", "OPEN", "2026-12-12", "Redundant payment gateway"),
    risk("r2", "Ransomware on file servers", "Encryption of shared drives by malware", 4, 4, "Leyla Huseynova", "File servers", "OPEN", "2026-12-05", "Offline backups"),
    risk("r3", "Privileged access misuse", "Admin accounts used outside approved tasks", 3, 4, "Aysel Mammadova", "Active Directory", "IN_PROGRESS", "2027-01-10", "PAM vault"),
    risk("r4", "Data centre power failure", "Loss of power beyond UPS capacity", 2, 4, "Nigar Karimova", "Primary data centre", "OPEN", "2027-01-20", "Generator test"),
    risk("r5", "Laptop theft", "Loss of unencrypted laptop with client data", 3, 3, "Rauf Aliyev", "Laptops", "TREATED", "2027-02-01", "Disk encryption"),
    risk("r6", "Phishing of finance staff", "Credential theft through targeted e-mail", 4, 3, "Leyla Huseynova", "E-mail", "OPEN", "2026-12-18", "Awareness training"),
  ]),
  "/approvals/inbox": [
    {
      id: "a1", flow: "RISK_EXCEPTION", subjectId: "x1", subjectLabel: "Legacy VPN access for vendor support", link: "/risk-management/risk-exceptions",
      status: "PENDING", currentStep: 2, requestedByName: "Rauf Aliyev", justification: "Replacement VPN is planned for Q2; vendor needs access for the migration.",
      requestedAt: "2026-11-24T09:12:00Z", decidedAt: null, canDecide: true, canWithdraw: false,
      criticality: "High", criticalityScore: 16, criticalityReason: "Highest linked risk: Ransomware on file servers (4 × 4)",
      details: [{ label: "Valid until", value: "31.03.2027" }, { label: "Linked risks", value: "Ransomware on file servers" }, { label: "Compensating control", value: "MFA and session recording" }],
      steps: [
        { stepNo: 1, name: "Step 1", approverKind: "GROUP", approverRef: "Risk owners", mode: "ANY", requiredApprovals: 1, approvalsCount: 1, dueAt: null, escalated: false, status: "APPROVED", decidedByName: "Leyla Huseynova", decidedAt: "2026-11-24T11:00:00Z", note: "Agreed, time-boxed." },
        { stepNo: 2, name: "Step 2", approverKind: "USER", approverRef: "CISO", mode: "ANY", requiredApprovals: 1, approvalsCount: 0, dueAt: "2026-11-27T11:00:00Z", escalated: false, status: "PENDING", decidedByName: null, decidedAt: null, note: null },
        { stepNo: 3, name: "Step 3", approverKind: "GROUP", approverRef: "Risk committee", mode: "QUORUM", requiredApprovals: 2, approvalsCount: 0, dueAt: null, escalated: false, status: "WAITING", decidedByName: null, decidedAt: null, note: null },
      ],
      events: [],
    },
  ],
  "/approvals/inbox/count": { count: 1 },
};
