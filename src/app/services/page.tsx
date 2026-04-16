"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  LayoutDashboard,
  Smartphone,
  Globe,
  Bot,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { containerVariants, itemVariants } from "@/lib/motion";

const services = [
  {
    id: "saas",
    icon: LayoutDashboard,
    title: "Applications SaaS",
    tagline: "Des outils qui automatisent, scalent et font gagner du temps.",
    color: "from-brand-500 to-blue-500",
    description:
      "Du dashboard interne à la plateforme B2B, je conçois des applications SaaS robustes avec une UX qui convertit et une architecture qui tient dans la durée. Chaque fonctionnalité est pensée pour votre métier, pas pour cocher des cases.",
    benefits: [
      "Automatisation de vos processus métier",
      "Gain de temps mesurable dès les premières semaines",
      "Scalabilité : ça tient quand vous grandissez",
      "Données centralisées, accessibles partout",
    ],
    features: [
      "Dashboards et interfaces administrateur",
      "APIs REST / GraphQL performantes",
      "Authentification sécurisée (OAuth, Magic Link)",
      "Paiements Stripe & abonnements récurrents",
      "Base de données et logique métier solide",
      "Déploiement scalable (Vercel, Railway, Docker)",
    ],
  },
  {
    id: "mobile",
    icon: Smartphone,
    title: "Applications mobiles",
    tagline: "iOS et Android, un seul codebase, une expérience native.",
    color: "from-brand-accent to-brand-500",
    description:
      "React Native avec Expo pour des apps mobiles fluides et belles, déployées sur l'App Store et Google Play. Si vous avez déjà une app web React, le partage de code est maximal — moins de budget, plus de vitesse.",
    benefits: [
      "Une seule app pour iOS et Android",
      "Expérience utilisateur native et fluide",
      "Mise en production rapide sur les stores",
      "Intégration avec vos systèmes existants",
    ],
    features: [
      "React Native + Expo (cross-platform)",
      "iOS & Android en simultané",
      "Navigation, authentification, push notifications",
      "Intégration avec vos APIs existantes",
      "Publication App Store & Google Play",
      "Partage de code avec app web React",
    ],
  },
  {
    id: "vitrine",
    icon: Globe,
    title: "Sites vitrines",
    tagline: "Rapide, moderne, SEO-friendly. Un site qui travaille pour vous.",
    color: "from-pink-500 to-rose-500",
    description:
      "Un site vitrine conçu pour convertir : performance maximale, SEO technique irréprochable, design soigné et appels à l'action clairs. Votre site est votre meilleur commercial — autant qu'il soit à la hauteur.",
    benefits: [
      "Visibilité sur Google dès les premières semaines",
      "Plus de demandes de contact grâce aux CTAs optimisés",
      "Chargement ultra-rapide sur mobile et desktop",
      "Design professionnel qui inspire confiance",
    ],
    features: [
      "Next.js avec SSG / ISR pour la performance",
      "Core Web Vitals optimisés (Lighthouse 95+)",
      "SEO technique : méta, sitemap, schema.org",
      "Design responsive et accessible",
      "Formulaire de contact intégré",
      "Déploiement sur Vercel ou hébergement dédié",
    ],
  },
  {
    id: "ia",
    icon: Bot,
    title: "Solutions sur mesure & IA",
    tagline: "Automatisez. Gagnez du temps. Mettez l'IA au service de votre métier.",
    color: "from-orange-500 to-pink-500",
    description:
      "Agents IA, RAG sur vos documents, automatisations de workflows — j'intègre l'intelligence artificielle dans vos processus métier de façon concrète et efficace. Pas de gadget, que des outils qui font gagner du temps.",
    benefits: [
      "Tâches répétitives automatisées, équipes libérées",
      "Réponses intelligentes basées sur VOS données",
      "Processus optimisés 24h/24, 7j/7",
      "ROI mesurable et rapide",
    ],
    features: [
      "Chatbots et assistants sur mesure (GPT-4, Claude)",
      "RAG — réponses intelligentes sur vos documents",
      "Agents autonomes et workflows automatisés",
      "Extraction et structuration de données",
      "Intégrations API (Zapier, Make, webhooks)",
      "Scripts Python / Node.js robustes et fiables",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-24 pb-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <p className="text-sm font-semibold text-brand-500 uppercase tracking-wider mb-3">
            Services
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-6">
            Ce que je peux faire{" "}
            <span className="gradient-text">pour vous</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Du concept à la mise en ligne, je m&apos;adapte à votre stack, votre budget et vos délais.
            Chaque service est orienté résultats, pas juste livraison de code.
          </p>
        </motion.div>

        {/* Services */}
        <motion.div
          className="space-y-8"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {services.map((service) => (
            <motion.article
              key={service.id}
              id={service.id}
              variants={itemVariants}
              className="group p-8 rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900/30 hover:border-brand-100 dark:hover:border-brand-700/50 transition-colors"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left: icon + title + description + benefits */}
                <div>
                  <div className="flex items-start gap-4 mb-5">
                    <div className={`flex-none p-3 rounded-xl bg-gradient-to-br ${service.color} text-white`}>
                      <service.icon size={24} />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold mb-1">{service.title}</h2>
                      <p className="text-sm text-brand-500 font-medium">
                        {service.tagline}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Benefits */}
                  <div className="space-y-2 mb-6">
                    <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
                      Ce que vous gagnez
                    </p>
                    {service.benefits.map((benefit) => (
                      <div key={benefit} className="flex items-center gap-2.5 text-sm text-gray-700 dark:text-gray-300">
                        <CheckCircle2 size={15} className="flex-none text-green-500" />
                        {benefit}
                      </div>
                    ))}
                  </div>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-brand-500 to-brand-accent hover:from-brand-600 hover:to-brand-accent-dark transition-all hover:scale-105 shadow-md hover:shadow-brand-500/25 text-sm"
                  >
                    Demander un devis <ArrowRight size={15} />
                  </Link>
                </div>

                {/* Right: features */}
                <div className="bg-gray-50/80 dark:bg-gray-800/30 rounded-xl p-6">
                  <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">
                    Ce que ça inclut
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2.5 text-sm text-gray-700 dark:text-gray-300">
                        <CheckCircle2 size={15} className="flex-none text-brand-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Vous avez un projet qui ne rentre pas exactement dans ces cases ? Pas de problème — parlons-en quand même.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-brand-500 via-brand-accent to-purple-500 hover:shadow-lg hover:shadow-brand-500/30 transition-all hover:scale-105"
          >
            Discuter de mon projet <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
