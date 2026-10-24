import type { MetadataRoute } from "next";
import { site } from "@/config/site";
import { locales } from "@/i18n/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/pricing", "/changelog"];

  return routes.flatMap((route) =>
    locales.map((locale) => ({
      url: `${site.url}/${locale}${route}`,
      lastModified: new Date(),
      changeFrequency: (route === "/changelog"
        ? "weekly"
        : "monthly") as "weekly" | "monthly",
      priority: route === "" ? 1 : 0.7,
      alternates: {
        languages: Object.fromEntries(
          locales.map((code) => [code, `${site.url}/${code}${route}`]),
        ),
      },
    })),
  );
}
