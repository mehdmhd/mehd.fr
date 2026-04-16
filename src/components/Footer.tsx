"use client";

import Link from "next/link";
import { Mail } from "lucide-react";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "À propos" },
  { href: "/contact", label: "Contact" },
];

const socials = [
  { icon: Mail, href: "mailto:me@mehd.fr", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 dark:border-white/5 bg-white dark:bg-[#0a0a14]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Col 1 — Brand */}
          <div className="space-y-4">
            <Link href="/" className="font-bold text-xl tracking-tight">
              <span className="gradient-text">mehd</span>
              <span className="text-foreground/40">.fr</span>
            </Link>
            <p className="text-sm text-gray-500 dark:text-gray-400 max-w-xs leading-relaxed">
              Développeur freelance spécialisé en SaaS, mobile, IA et sites vitrines.
              Je transforme vos idées en produits qui fonctionnent.
            </p>
            <div className="flex items-center gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:text-brand-500 hover:bg-brand-50 dark:hover:bg-brand-500/10 transition-colors"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 — Navigation */}
          <div className="space-y-4">
            <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">Navigation</p>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-500 dark:text-gray-400 hover:text-brand-500 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Contact */}
          <div className="space-y-4">
            <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">Contact</p>
            <div className="space-y-2">
              <a
                href="mailto:me@mehd.fr"
                className="text-sm text-gray-500 dark:text-gray-400 hover:text-brand-500 transition-colors block"
              >
                me@mehd.fr
              </a>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 border border-green-100 dark:border-green-800/40">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                Disponible pour de nouveaux projets
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 py-6 border-t border-gray-100 dark:border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-400 dark:text-gray-500">
            © {new Date().getFullYear()} Mehdi Makhloufi. Tous droits réservés.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/mentions-legales"
              className="text-xs text-gray-400 dark:text-gray-500 hover:text-brand-500 transition-colors"
            >
              Mentions légales
            </Link>
            <Link
              href="/politique-confidentialite"
              className="text-xs text-gray-400 dark:text-gray-500 hover:text-brand-500 transition-colors"
            >
              Confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
