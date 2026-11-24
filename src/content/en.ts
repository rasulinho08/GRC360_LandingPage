import type { Content } from "./types";

/**
 * English page. Same rule as az.ts: describe only what GRC360 does today. Planned work (Jira,
 * scheduled e-mail digests, a ready framework library) is not listed as a feature.
 */
export const en: Content = {
  locale: "en",
  meta: {
    title: "GRC360 · Risk, compliance and audit platform",
    description:
      "GRC360 brings risk registers, controls, policies, audits and regulatory obligations into one platform that runs on your own servers.",
    ogTitle: "Risk, compliance and audit in one platform. On your own servers.",
  },
  nav: [
    { href: "#modules", label: "Modules" },
    { href: "#security", label: "Security" },
    { href: "#who", label: "Who it's for" },
    { href: "#setup", label: "Setup" },
    { href: "#faq", label: "FAQ" },
  ],
  headerCta: "Demo",
  mainNavLabel: "Main menu",
  hero: {
    eyebrow: "Risk · Compliance · Audit",
    titleA: "Risk, compliance and audit in one platform.",
    titleB: "On your own servers.",
    lead:
      "GRC360 brings risk registers, controls, policies, audits and regulatory obligations into one place. It runs in Azerbaijani and English, and your data never leaves your infrastructure.",
    primary: "Book a demo",
    secondary: "See the modules",
    badges: ["On-premises", "Azerbaijani and English", "MFA and SSO", "Many organisations in one system"],
    badgesLabel: "Key features",
  },
  sectorsLabel: "Built for",
  sectors: ["Banks", "Insurance", "Government", "Telecom", "Energy", "Holding groups"],
  problem: {
    eyebrow: "The problem",
    beforeLabel: "Today",
    afterLabel: "With GRC360",
    title: "Spreadsheets and e-mail threads don't pass an audit",
    lead:
      "When risks, exceptions and audit findings live in separate files, nobody sees the whole picture. GRC360 puts them in one system with one history.",
    rows: [
      {
        before: "Risks in Excel, a different version in every department",
        after: "One risk register: an owner for every risk, a likelihood × impact score and your own risk matrix",
      },
      {
        before: "Exceptions approved over e-mail, and later nobody can find who said what",
        after: "Step-by-step approval: who, when and with what comment, with reminders before the deadline",
      },
      {
        before: "Audit findings stay in a spreadsheet and nobody knows if they were closed",
        after: "Findings, issues and tasks are linked, and their status shows on the Command Center",
      },
      {
        before: "Foreign SaaS tools take your data out of the country",
        after: "GRC360 is installed on your servers or in an in-country data centre",
      },
    ],
  },
  platform: {
    eyebrow: "Platform",
    title: "One system for risk, controls, policies, compliance and audit",
    lead: "The modules are linked: a risk to its controls, a control to a standard, an audit finding to a task. Everything stays in one history.",
    tabsLabel: "Modules",
  },
  modules: [
    {
      id: "risk",
      name: "Risks",
      title: "Asset, business and third-party risks in one register",
      points: [
        "You define the likelihood and impact scales, the risk matrix and the names of your risk levels",
        "Every risk has an owner, controls, a treatment plan and a next review date",
        "Heat maps and a comparison with your risk appetite",
      ],
      screen: "risk",
    },
    {
      id: "approval",
      name: "Approvals",
      title: "Risk exceptions approved step by step",
      points: [
        "Separate steps per risk level: one approver for low risk, a committee for high risk",
        "A group or a named person approves each step; the same person can't approve two steps",
        "Every step has an SLA; reminders go out when half and a quarter of the time is left",
      ],
      screen: "approval",
    },
    {
      id: "compliance",
      name: "Compliance",
      title: "Standards, laws and obligations",
      points: [
        "Load ISO 27001, PCI DSS or an internal standard as a package and assess it requirement by requirement",
        "Track local laws and regulatory requirements as obligations",
        "Compliance analysis, exceptions and external audit findings in one place",
      ],
      screen: "compliance",
    },
    {
      id: "controls",
      name: "Controls",
      title: "Internal controls and their audits",
      points: [
        "Every control has an owner, a test schedule and a result",
        "An open issue, an overdue audit or maintenance shows in the control's status right away",
        "Business continuity plans and recovery tasks",
      ],
      screen: "controls",
    },
    {
      id: "policy",
      name: "Policies",
      title: "Policies, versions and attestation",
      points: [
        "Every published text is kept as a version, and you can see what changed between versions",
        "Employees are asked to confirm they have read a policy",
        "Review dates and policy exceptions",
      ],
      screen: "policy",
    },
    {
      id: "vendor",
      name: "Third parties",
      title: "Vendors, contracts and data flows",
      points: [
        "A vendor register with service agreements and their risks",
        "Assets and the data flows between them",
        "Vendor risks belong to the same risk register",
      ],
      screen: "vendor",
    },
    {
      id: "command",
      name: "Command Center",
      title: "One screen for management",
      points: [
        "Open risks, overdue work, compliance percentage and pending approvals",
        "Projects, tasks, expenses and security incidents",
        "A dashboard for every module and the overall picture on one page",
      ],
      screen: "command",
    },
  ],
  security: {
    eyebrow: "Sovereignty and security",
    title: "Your data stays on your servers",
    lead: "GRC360 doesn't depend on a foreign cloud. It runs in your bank's, agency's or group's own infrastructure and fits your internal security requirements.",
    items: [
      { title: "On your servers", text: "Installed with Docker on a Linux server. The database (PostgreSQL) and files stay in your infrastructure." },
      { title: "Organisations kept apart", text: "Each organisation's data is separated at the database level (row-level security), so several subsidiaries can share one system." },
      { title: "MFA and SSO", text: "Two-step sign-in (TOTP and backup codes), mandatory MFA for administrators. Sign in with Microsoft Entra ID, ADFS or Google over OIDC or SAML. LDAP connection." },
      { title: "Role-based access", text: "Separate rights for every module, page and action. Administrators decide who sees and changes what." },
      { title: "Every action logged", text: "The System Log records who changed what, when and from where. Approval history is kept as a tamper-evident chain." },
      { title: "Files checked", text: "Uploaded files are checked by type and can be scanned with ClamAV antivirus." },
    ],
  },
  audience: {
    eyebrow: "Who it's for",
    title: "Built for regulated sectors",
    lead: "Local regulation and international standards in one system: manage obligations, controls and evidence in one place.",
    items: [
      { title: "Banks and finance", text: "Track regulators' requirements as obligations, approve risk exceptions by committee and show auditors the full history." },
      { title: "Government", text: "Data stays on the agency's own servers, with an interface in Azerbaijani." },
      { title: "Telecom and energy", text: "Manage critical assets, vendors and business continuity plans in one system." },
      { title: "Holding groups", text: "Each subsidiary works as its own organisation: data never mixes, and oversight happens in one place." },
    ],
  },
  steps: {
    eyebrow: "Setup",
    title: "Three steps from demo to go-live",
    items: [
      { title: "Demo", text: "We show the platform with a scenario built around your processes and agree the requirements with you." },
      { title: "Installation and migration", text: "We install GRC360 on your servers and move your existing registers in with Excel and CSV templates." },
      { title: "Training and support", text: "We train your team, then support you in Azerbaijani and English." },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    title: "Frequently asked questions",
    items: [
      { q: "What do we need to install it?", a: "A Linux server, Docker and PostgreSQL. S3-compatible storage for files (MinIO, for example) and, optionally, ClamAV. A hosted version is also available." },
      { q: "Which languages does it support?", a: "The interface is in Azerbaijani and English, and each user picks their own. Server error messages follow the chosen language too." },
      { q: "Can we move our existing Excel data in?", a: "Yes. Every register has a ready template: download it, fill it in and upload it. The system checks every row and lists the errors. Exports use the same format." },
      { q: "Which standards does it support?", a: "A compliance package can hold any standard or law: ISO 27001, PCI DSS, NIST CSF, internal policies or local regulation. Your organisation loads the package and assesses it requirement by requirement." },
      { q: "How is it priced?", a: "Pricing depends on the type of installation and the size of your organisation. We prepare a quote for you after the demo." },
      { q: "Does it connect to other systems?", a: "LDAP, SSO (OIDC and SAML), a REST API and CSV/Excel import and export are available today. We plan other connections with you based on your needs." },
    ],
  },
  demo: {
    eyebrow: "Demo",
    title: "See GRC360 with your own processes",
    lead: "Fill in the form. We'll get in touch and set up a demo around your organisation's risk and compliance process.",
    emailLabel: "E-mail",
    phoneLabel: "Phone",
    addressLabel: "Address",
    form: {
      name: "Full name",
      company: "Organisation",
      email: "Work e-mail",
      phone: "Phone",
      role: "Job title",
      rolePlaceholder: "e.g. CISO, risk manager",
      sector: "Sector",
      sectorChoose: "Choose",
      sectorOther: "Other",
      note: "What would you like to see?",
      notePlaceholder: "e.g. risk exception approvals, ISO 27001 readiness",
      submit: "Book a demo",
      hint: "We prepare each demo around your processes.",
      noAddress: "No contact address has been added yet. The request was not sent.",
      opened: "Your e-mail app should open now. If it doesn't, write to us at {email}.",
      subject: "GRC360 demo request",
      bodyLabels: { name: "Name", company: "Organisation", role: "Job title", sector: "Sector", email: "E-mail", phone: "Phone" },
    },
  },
  footer: { tagline: "Risk, compliance and audit platform" },
  screens: {
    screenLabel: "GRC360 screen",
    matrixLabel: "Risk matrix: likelihood × impact",
    matrixCell: "Likelihood {l} × impact {i} = {s}",
    command: {
      title: "Command Center",
      kpis: ["Open risks", "Pending approvals", "ISO 27001 compliance"],
      matrix: "Risk matrix · likelihood × impact",
      overdue: "Overdue",
      overdueRows: [
        ["Control audit: Backups", "3 days", "wait"],
        ["Policy review: Access control", "5 days", "wait"],
        ["Vendor risk: Data centre", "this week", "next"],
      ],
    },
    approval: {
      title: "Waiting: risk exception for the legacy VPN",
      levelHead: "Level · highest linked risk",
      level: "High · 16",
      levelWhy: "Payment system outage: 4 × 4",
      stepsHead: "Approval steps",
      steps: [
        ["Risk owners (group) · any one", "approved", "ok"],
        ["CISO · SLA 2 days", "1 day left", "wait"],
        ["Risk committee · 2 of 3", "next", "next"],
      ],
    },
    compliance: {
      title: "ISO/IEC 27001:2022 · compliance analysis",
      rows: [
        ["A.5 Organisational controls", 81],
        ["A.6 People controls", 64],
        ["A.7 Physical controls", 90],
        ["A.8 Technological controls", 58],
      ],
      obligationsHead: "Obligations",
      obligations: [
        ["Personal data law · data subject rights", "compliant", "ok"],
        ["Regulator requirement · incident reporting", "partial", "wait"],
      ],
    },
    controls: {
      title: "Controls",
      rows: [
        ["Weekly backup restore test", "audit overdue", "wait"],
        ["Quarterly privileged access review", "passed", "ok"],
        ["Network segmentation", "passed", "ok"],
        ["Laptop disk encryption", "open issue", "wait"],
      ],
      planHead: "Continuity plan · data centre loss",
      plan: "RTO 4 hours · RPO 1 hour · 6 recovery tasks",
    },
    policy: {
      title: "Information security policy · v4",
      versionsHead: "Versions",
      versions: [
        ["v4 · published", "current", "ok"],
        ["v3 → v4: 2 sections changed", "see changes", "next"],
      ],
      attestHead: "Attestation",
      attestLabel: "Employees who confirmed",
    },
    vendor: {
      title: "Vendors",
      rows: [
        ["Cloud hosting provider · 2 contracts", "high risk", "level"],
        ["Card processing service · 1 contract", "medium risk", "wait"],
        ["Office supplies", "low risk", "ok"],
      ],
      flowHead: "Data flow",
      flow: "Core banking → Card processing · personal data · encrypted channel",
    },
    risk: {
      title: "Asset risks",
      heat: "Heat map",
      top: "Highest",
      rows: [
        ["Payment system outage", "20", "level"],
        ["Ransomware", "16", "level"],
        ["Privileged access misuse", "12", "wait"],
      ],
    },
  },
};
