import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = "https://zettas.ia.br";

  return [
    {
      url: siteUrl,
      lastModified: new Date("2026-10-08T00:00:00-03:00"),
    },
    {
      url: `${siteUrl}/links`,
    },
  ];
}


