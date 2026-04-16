import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Mehdi Makhloufi — Développeur Freelance",
    short_name: "mehd.fr",
    description:
      "Développeur freelance spécialisé en SaaS, applications mobiles, sites vitrines et solutions IA sur mesure.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0a",
    theme_color: "#305CDE",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
