/**
 * Canonical origin for metadata, canonical links, hreflang, sitemap, robots and
 * Open Graph URLs. Set NEXT_PUBLIC_SITE_URL on the host (the Vercel production
 * domain, for example); the fallback keeps local builds pointing at the live site.
 */
const FALLBACK_URL = "https://arce-data.vercel.app";

function resolveSiteUrl(): string {
  const value = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  return (value && value.length > 0 ? value : FALLBACK_URL).replace(/\/+$/, "");
}

export const site = {
  name: "Arce",
  legalName: "Arce Data AG",
  domain: "arce-data.vercel.app",
  url: resolveSiteUrl(),
  email: "hello@arce.dev",
  address: {
    street: "Bahnhofstrasse 21",
    city: "Zürich",
    country: "Switzerland",
    countryCode: "CH",
  },
  social: {
    github: "https://github.com/arce",
    x: "https://x.com/arce",
    linkedin: "https://www.linkedin.com/company/arce",
  },
  nav: [
    { key: "about", href: "/about" },
    { key: "pricing", href: "/pricing" },
    { key: "changelog", href: "/changelog" },
  ],
} as const;
