import type { MetadataRoute } from "next";

const siteUrl = "https://mavicca-landing1.netlify.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date("2026-07-07"),
      changeFrequency: "monthly",
      priority: 1,
      images: [
        `${siteUrl}/logo-final-mavicca.png`,
        `${siteUrl}/bg-hero.png`,
      ],
    },
  ];
}
