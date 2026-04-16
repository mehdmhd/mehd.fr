import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Mehdi Makhloufi, développeur freelance full-stack. Mon parcours, mes compétences et ma vision : être votre partenaire technique, pas juste un prestataire.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
