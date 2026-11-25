/**
 * The shape of everything the page says, in one language. `az.ts` and `en.ts` fill it; the
 * components only lay it out. Rule for both files: describe only what GRC360 does today.
 */
export type Locale = "az" | "en";

export type ModuleScreenKind = "risk" | "approval" | "compliance" | "controls" | "policy" | "command" | "vendor";

export type Module = { id: string; name: string; title: string; points: string[]; screen: ModuleScreenKind };

export type Item = { title: string; text: string };

export type Content = {
  locale: Locale;
  meta: { title: string; description: string; ogTitle: string };
  nav: { href: string; label: string }[];
  headerCta: string;
  hero: {
    eyebrow: string;
    titleA: string;
    titleB: string;
    lead: string;
    primary: string;
    secondary: string;
    badges: string[];
    badgesLabel: string;
    /** The maker line above the headline. */
    by: string;
  };
  /** Standards a compliance package can hold; shown as a running strip under the hero. */
  standards: { label: string; items: string[] };
  /** How one risk moves through the platform, as numbered stages. */
  process: { eyebrow: string; title: string; lead: string; items: Item[] };
  sectorsLabel: string;
  sectors: string[];
  problem: { eyebrow: string; title: string; lead: string; beforeLabel: string; afterLabel: string; rows: { before: string; after: string }[] };
  platform: { eyebrow: string; title: string; lead: string; tabsLabel: string };
  modules: Module[];
  security: { eyebrow: string; title: string; lead: string; items: Item[] };
  audience: { eyebrow: string; title: string; lead: string; items: Item[] };
  steps: { eyebrow: string; title: string; items: Item[] };
  faq: { eyebrow: string; title: string; items: { q: string; a: string }[] };
  demo: {
    eyebrow: string;
    title: string;
    lead: string;
    emailLabel: string;
    phoneLabel: string;
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
      note: string;
      notePlaceholder: string;
      submit: string;
      hint: string;
      noAddress: string;
      /** Shown after the request was delivered. */
      sent: string;
      /** {email} is replaced with the contact address. */
      opened: string;
      subject: string;
      bodyLabels: { name: string; company: string; role: string; sector: string; email: string; phone: string };
    };
  };
  footer: { tagline: string; product: string; company: string; contact: string; website: string; linkedin: string; madeBy: string };
  mainNavLabel: string;
  /** Text on the drawn product screens (examples, not customer data). */
  screens: Screens;
};

/** A row on a drawn screen: its text, the chip beside it and the chip's tone. */
export type Row = [text: string, chip: string, tone: "ok" | "wait" | "next" | "level"];

export type Screens = {
  screenLabel: string;
  matrixLabel: string;
  /** Cell title; {l}, {i} and {s} are the likelihood, impact and score. */
  matrixCell: string;
  command: { title: string; kpis: [string, string, string]; matrix: string; overdue: string; overdueRows: Row[] };
  approval: { title: string; levelHead: string; level: string; levelWhy: string; stepsHead: string; steps: Row[] };
  compliance: { title: string; rows: [string, number][]; obligationsHead: string; obligations: Row[] };
  controls: { title: string; rows: Row[]; planHead: string; plan: string };
  policy: { title: string; versionsHead: string; versions: Row[]; attestHead: string; attestLabel: string };
  vendor: { title: string; rows: Row[]; flowHead: string; flow: string };
  risk: { title: string; heat: string; top: string; rows: Row[] };
};
