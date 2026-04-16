import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Demandez un devis gratuit. Réponse sous 24h. Discutons de votre projet SaaS, application mobile, site vitrine ou solution IA.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
