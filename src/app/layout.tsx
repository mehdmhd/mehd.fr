import type { Metadata } from "next";
import { Parkinsans, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import "./globals.css";

const parkinsans = Parkinsans({
  variable: "--font-parkinsans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Mehdi Makhloufi — Développeur Freelance",
    template: "%s | Mehdi Makhloufi",
  },
  description:
    "Développeur freelance spécialisé en SaaS, applications mobiles, sites vitrines et solutions IA sur mesure. Je transforme vos idées en produits digitaux performants.",
  keywords: [
    "freelance",
    "développeur",
    "React",
    "Next.js",
    "React Native",
    "SaaS",
    "IA",
    "automatisation",
    "applications mobiles",
    "site vitrine",
    "intelligence artificielle",
  ],
  authors: [{ name: "Mehdi Makhloufi", url: "https://mehd.fr" }],
  creator: "Mehdi Makhloufi",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://mehd.fr",
    siteName: "Mehdi Makhloufi — Développeur Freelance",
    title: "Mehdi Makhloufi — Développeur Freelance",
    description:
      "Je transforme vos idées en solutions digitales performantes. SaaS, mobile, IA, sites vitrines.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mehdi Makhloufi — Développeur Freelance",
    description: "Je transforme vos idées en solutions digitales performantes.",
    creator: "@mehdi_dev",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${parkinsans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Mehdi Makhloufi — Développeur Freelance",
              url: "https://mehd.fr",
              email: "me@mehd.fr",
              description:
                "Développeur freelance spécialisé en SaaS, applications mobiles, sites vitrines et solutions IA sur mesure.",
              areaServed: {
                "@type": "Country",
                name: "France",
              },
              knowsLanguage: ["fr", "en"],
              priceRange: "$$",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Rubelles",
                addressCountry: "FR",
              },
            }),
          }}
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <CookieBanner />
        </ThemeProvider>
      </body>
    </html>
  );
}
