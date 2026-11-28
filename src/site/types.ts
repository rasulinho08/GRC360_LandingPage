/**
 * Everything the GRC360 site says, in one language. `az.ts` and `en.ts` fill it; components only lay
 * it out. Rule for both files: describe only what GRC360 does today — no invented customers,
 * numbers, certifications or features.
 */
export type Locale = "az" | "en";

/** Which drawn product fragment a section shows (see components/Fragments.tsx). */
export type Visual =
  | "heatmap"
  | "riskList"
  | "approvalChain"
  | "approvalInbox"
  | "compliance"
  | "obligations"
  | "controls"
  | "continuity"
  | "policyVersions"
  | "attestation"
  | "vendors"
  | "dataFlow"
  | "projects"
  | "incidents"
  | "kpis"
  | "tasks"
  | "access"
  | "auditLog";

export type ModuleSlug =
  | "risk-management"
  | "approvals"
  | "compliance"
  | "controls"
  | "policies"
  | "third-parties"
  | "operations"
  | "command-center";

export type SolutionSlug = "banks" | "government" | "telecom-energy" | "holdings";

export type Item = { title: string; text: string };

export type DocSlug =
  | "overview"
  | "installation"
  | "first-steps"
  | "users-and-access"
  | "authentication"
  | "import-export"
  | "risk-scoring"
  | "approvals"
  | "compliance-packages"
  | "controls-and-policies"
  | "operations-and-dashboard"
  | "administration";

export type DocSection = { heading: string; body: string[]; list?: string[]; steps?: string[]; note?: string };
export type DocPage = { slug: DocSlug; title: string; summary: string; sections: DocSection[] };

/** A text block beside a product fragment; module pages alternate them left and right. */
export type Showcase = { eyebrow: string; title: string; text: string; points: string[]; visual: Visual };

export type ModulePage = {
  slug: ModuleSlug;
  /** Short name in menus and cards. */
  name: string;
  /** One line under the name in the product menu. */
  short: string;
  eyebrow: string;
  title: string;
  lead: string;
  heroVisual: Visual;
  highlights: Item[];
  showcases: Showcase[];
  related: ModuleSlug[];
};

export type SolutionPage = {
  slug: SolutionSlug;
  name: string;
  short: string;
  eyebrow: string;
  title: string;
  lead: string;
  challengesTitle: string;
  challenges: Item[];
  helpTitle: string;
  help: { title: string; text: string; module: ModuleSlug }[];
  heroVisual: Visual;
};

export type Faq = { q: string; a: string };

/** Text on the drawn product fragments (examples, not customer data). */
export type Fragments = {
  heatmap: { title: string; likelihood: string; impact: string; cell: string };
  riskList: { title: string; rows: [string, string, number][] };
  approvalChain: { title: string; level: string; why: string; steps: [string, string, "ok" | "wait" | "next"][] };
  approvalInbox: { title: string; item: string; details: [string, string][]; approve: string; decline: string };
  compliance: { title: string; rows: [string, number][] };
  obligations: { title: string; rows: [string, string, "ok" | "wait" | "bad" | "next"][] };
  controls: { title: string; rows: [string, string, "ok" | "wait" | "bad" | "next"][] };
  continuity: { title: string; rto: string; rpo: string; tasks: string };
  policyVersions: { title: string; rows: [string, string, "ok" | "next"][] };
  attestation: { title: string; label: string; done: number; total: number };
  vendors: { title: string; rows: [string, string, "ok" | "wait" | "bad" | "next"][] };
  dataFlow: { title: string; from: string; to: string; data: string; channel: string };
  projects: { title: string; rows: [string, number, "ok" | "wait" | "bad" | "next"][] };
  incidents: { title: string; rows: [string, string, "ok" | "wait" | "bad" | "next"][] };
  kpis: { title: string; items: [string, string][] };
  tasks: { title: string; rows: [string, string, "ok" | "wait" | "bad" | "next"][] };
  access: { title: string; rows: [string, string[]][] };
  auditLog: { title: string; rows: [string, string, string][] };
};

export type Site = {
  locale: Locale;
  /** "" for Azerbaijani, "/en" for English: prefixed to every internal link. */
  prefix: string;
  ui: {
    mainNav: string;
    product: string;
    solutions: string;
    frameworks: string;
    security: string;
    company: string;
    contact: string;
    demo: string;
    requestDemo: string;
    learnMore: string;
    platformOverview: string;
    allModules: string;
    modulesMenuTitle: string;
    solutionsMenuTitle: string;
    relatedTitle: string;
    menu: string;
    close: string;
    language: string;
    by: string;
    footerTagline: string;
    footerProduct: string;
    footerSolutions: string;
    footerCompany: string;
    footerConnect: string;
    theme: string;
    backToTop: string;
    docs: string;
    productOf: string;
    onThisPage: string;
    docsHome: string;
    prev: string;
    next: string;
    footerLegal: string;
    email: string;
    privacy: string;
    terms: string;
    promoTitle: string;
    promoText: string;
    skip: string;
    madeBy: string;
    rights: string;
    notFoundTitle: string;
    notFoundText: string;
    home: string;
  };
  meta: {
    siteName: string;
    home: { title: string; description: string };
    platform: { title: string; description: string };
    frameworks: { title: string; description: string };
    security: { title: string; description: string };
    company: { title: string; description: string };
    contact: { title: string; description: string };
  };
  home: {
    eyebrow: string;
    title: string;
    lead: string;
    primary: string;
    secondary: string;
    proof: string[];
    standardsLabel: string;
    standards: string[];
    allHere: { eyebrow: string; title: string; lead: string };
    problem: { eyebrow: string; title: string; lead: string; beforeLabel: string; afterLabel: string; rows: { before: string; after: string }[] };
    process: { eyebrow: string; title: string; lead: string; items: Item[] };
    builtFor: { eyebrow: string; title: string; lead: string };
    sovereign: { eyebrow: string; title: string; lead: string; items: Item[]; cta: string };
    frameworks: { eyebrow: string; title: string; lead: string; cta: string };
    faqTitle: string;
    faq: Faq[];
  };
  platform: {
    eyebrow: string;
    title: string;
    lead: string;
    diagramTitle: string;
    pillarsTitle: string;
    pillars: Item[];
    modulesTitle: string;
    foundationTitle: string;
    foundation: Item[];
  };
  modules: ModulePage[];
  solutions: SolutionPage[];
  frameworks: {
    eyebrow: string;
    title: string;
    lead: string;
    howTitle: string;
    how: Item[];
    groupsTitle: string;
    groupsNote: string;
    groups: { name: string; items: { name: string; text: string }[] }[];
  };
  security: {
    eyebrow: string;
    title: string;
    lead: string;
    items: Item[];
    deployTitle: string;
    deployLead: string;
    requirements: Item[];
    faq: Faq[];
  };
  company: {
    eyebrow: string;
    title: string;
    lead: string;
    storyTitle: string;
    story: string[];
    principlesTitle: string;
    principles: Item[];
    facts: [string, string][];
  };
  contact: {
    eyebrow: string;
    title: string;
    lead: string;
    steps: Item[];
    emailLabel: string;
    addressLabel: string;
    form: {
      name: string;
      company: string;
      email: string;
      phone: string;
      role: string;
      rolePlaceholder: string;
      sector: string;
      sectorChoose: string;
      sectorOther: string;
      sectors: string[];
      note: string;
      notePlaceholder: string;
      submit: string;
      hint: string;
      sent: string;
      noAddress: string;
      opened: string;
      subject: string;
      bodyLabels: { name: string; company: string; role: string; sector: string; email: string; phone: string };
    };
  };
  cta: { eyebrow: string; title: string; lead: string; primary: string; secondary: string };
  /** Product documentation: grouped pages, each a list of sections. */
  docs: {
    eyebrow: string;
    title: string;
    lead: string;
    note: string;
    groups: { title: string; pages: DocSlug[] }[];
    pages: DocPage[];
  };
  /** The five sections of the home page. */
  home2: {
    modulesEyebrow: string;
    modulesTitle: string;
    modulesLead: string;
    whyEyebrow: string;
    whyTitle: string;
    whyLead: string;
    why: Item[];
    whyCta: string;
    sectorsEyebrow: string;
    sectorsTitle: string;
    sectorsLead: string;
    docsCta: string;
    demoEyebrow: string;
    demoTitle: string;
    demoLead: string;
  };
  /** The recorded walkthrough of the real application. */
  video: { eyebrow: string; title: string; lead: string; caption: string; label: string };
  /** How the modules relate, drawn as one diagram on the platform page. */
  diagram: { label: string; band: string; nodes: { title: string; items: string[] }[]; foot: string };
  fragments: Fragments;
};
