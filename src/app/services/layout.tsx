import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "SaaS, applications mobiles, sites vitrines et solutions IA sur mesure. Des solutions orientées résultats pour startups, PME et indépendants.",
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
