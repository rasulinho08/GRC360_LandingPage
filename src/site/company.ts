/**
 * Company details, shared by both languages. Taken from the Strativu website's own config
 * (src/app/data/site.ts in rasulinho08/strativu). Empty values are hidden.
 */
export const COMPANY = {
  name: "Strativu",
  legalName: "Strativu LLC",
  jurisdiction: { az: "Bakı, Azərbaycanda qeydiyyatdadır", en: "Registered in Baku, Azerbaijan" },
  address: { az: "Bakı, Azərbaycan", en: "Baku, Azerbaijan" },
  email: "hello@strativu.com",
  phone: "",
  website: "https://strativu.com",
  linkedin: "https://www.linkedin.com/company/strativu",
  legal: {
    privacy: "https://strativu.com/legal/privacy",
    terms: "https://strativu.com/legal/terms",
    dpa: "https://strativu.com/legal/dpa",
  },
  /** The Formspree form behind the Strativu site's contact form; demo requests land in the same inbox. */
  formspreeId: "xvzjezqa",
};
