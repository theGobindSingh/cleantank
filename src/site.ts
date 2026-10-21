/**
 * Site-wide identity and contacts, shared by every page, metadata, robots,
 * sitemap and the OG image. Change a value here and it changes everywhere.
 * Contacts are exactly as in docs/ref/INFO-BANK.md §1.
 */
export const site = {
  name: "Clean Tank Services",
  // Brand lines, always written exactly like this.
  descriptor: "Scientific & Mechanized Water Tank Cleaning",
  tagline: "Clean Tank, Healthy Life",
  description:
    "Scientific and mechanized cleaning and disinfection of water storage tanks for homes, housing societies, institutions and industry. An initiative of Gobind Galaxy, Kanpur.",
  // Set SITE_URL in production so canonical and social URLs are absolute.
  url: process.env.SITE_URL ?? "http://localhost:3000",
  // Digits only, with the country code; format for display as +91 94535 17514.
  phone: "919453517514",
  whatsapp: "919453517514",
  email: "admin@cleantankservices.com",
  offices: [
    {
      label: "Regd. Office",
      address: "109/122, Nehru Nagar, R.K. Nagar, Kanpur Nagar-208012, U.P.",
      phone: "919453517514",
    },
    {
      label: "Correspondence Office & Marketing/Sales Office, Punjab",
      address:
        "B-3/26, Jamuna Apartments, Ch-Kurali Highway, NH-5, Khanpur, Kharar, SAS Nagar-140301, Punjab",
      phone: "918699339947",
    },
  ],
  gstin: "09LFS1473F5ZU",
};
