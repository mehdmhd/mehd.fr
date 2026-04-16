"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  LayoutDashboard,
  Smartphone,
  Globe,
  Bot,
  Code2,
  TrendingUp,
  Settings2,
  MessageSquare,
  CheckCircle2,
  Clock,
  Star,
} from "lucide-react";
import { containerVariants, itemVariants } from "@/lib/motion";

const services = [
  {
    icon: LayoutDashboard,
    title: "Applications SaaS",
    benefit: "Gagnez du temps grâce à des outils sur mesure qui automatisent vos processus.",
    href: "/services#saas",
    color: "from-brand-500 to-blue-500",
  },
  {
    icon: Smartphone,
    title: "Applications mobiles",
    benefit: "Une app iOS & Android fluide, du design jusqu'au déploiement sur les stores.",
    href: "/services#mobile",
    color: "from-brand-accent to-brand-500",
  },
  {
    icon: Globe,
    title: "Sites vitrines",
    benefit: "Un site rapide, moderne et optimisé SEO pour attirer et convertir vos visiteurs.",
    href: "/services#vitrine",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: Bot,
    title: "Solutions sur mesure & IA",
    benefit: "Automatisez vos tâches répétitives et intégrez l'IA dans votre activité.",
    href: "/services#ia",
    color: "from-orange-500 to-pink-500",
  },
];

const differentiators = [
  {
    icon: Code2,
    title: "Code propre et scalable",
    desc: "Je livre du code maintenable, pas juste un prototype qui tient 3 mois. Vos équipes pourront reprendre le projet sans friction.",
  },
  {
    icon: TrendingUp,
    title: "Compréhension des enjeux business",
    desc: "Je ne code pas dans le vide — chaque décision technique sert votre objectif. Conversion, croissance, efficacité.",
  },
  {
    icon: Settings2,
    title: "Flexibilité selon vos besoins",
    desc: "Je m'adapte à votre budget, vos délais et vos contraintes. Pas de dogmatisme, que des solutions concrètes.",
  },
  {
    icon: MessageSquare,
    title: "Accompagnement humain",
    desc: "Une communication claire, des points réguliers, zéro surprise à la livraison. Vous êtes informé à chaque étape.",
  },
];

const steps = [
  {
    num: "01",
    title: "On échange sur votre projet",
    desc: "Je comprends vos besoins, vos délais et votre budget. Premier échange gratuit, sans engagement.",
  },
  {
    num: "02",
    title: "Je vous propose un devis",
    desc: "Transparent, sans surprise, adapté à votre situation. Vous savez exactement ce que vous obtenez.",
  },
  {
    num: "03",
    title: "On construit ensemble",
    desc: "Points réguliers, livraisons itératives. Vous restez maître du projet du début à la fin.",
  },
  {
    num: "04",
    title: "Livraison et suivi",
    desc: "Déploiement, documentation, disponibilité post-livraison. Je ne disparais pas après la mise en ligne.",
  },
];

const stats = [
  { value: "5+", label: "ans d'expérience", icon: Star },
  { value: "+20", label: "projets livrés", icon: CheckCircle2 },
  { value: "24h", label: "délai de réponse", icon: Clock },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 pt-16">
        {/* Background blobs */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-500/15 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-brand-accent/15 rounded-full blur-3xl animate-pulse [animation-delay:1s]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse [animation-delay:2s]" />
        </div>

        <motion.div
          className="text-center max-w-4xl mx-auto py-20"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Status badge */}
          <motion.div variants={itemVariants} className="flex justify-center mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 border border-green-100 dark:border-green-800/40">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Disponible pour de nouveaux projets
            </span>
          </motion.div>

          {/* H1 */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-[1.08]"
          >
            Je transforme vos idées en{" "}
            <span className="gradient-text">solutions digitales</span>{" "}
            performantes
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            De l&apos;idée à la mise en production, je vous accompagne sur vos projets{" "}
            <strong className="text-gray-900 dark:text-gray-100 font-semibold">SaaS</strong>,{" "}
            <strong className="text-gray-900 dark:text-gray-100 font-semibold">mobile</strong> et{" "}
            <strong className="text-gray-900 dark:text-gray-100 font-semibold">IA</strong>.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-4 mb-10"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-brand-500 via-brand-accent to-purple-500 hover:shadow-lg hover:shadow-brand-500/30 transition-all hover:scale-105"
            >
              Demander un devis
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all hover:scale-105"
            >
              Voir mes services
            </Link>
          </motion.div>

          {/* Micro-reassurance */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-3 text-xs text-gray-500 dark:text-gray-400"
          >
            {[
              "Réponse sous 24h",
              "Accompagnement personnalisé",
              "Premier échange gratuit",
            ].map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700"
              >
                <CheckCircle2 size={11} className="text-green-500" />
                {item}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ── Stats / Crédibilité ─────────────────────────── */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                className="text-center p-8 rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900/30"
              >
                <p className="text-5xl font-extrabold gradient-text mb-2">{stat.value}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center mt-10 text-gray-500 dark:text-gray-400 max-w-xl mx-auto text-sm leading-relaxed"
          >
            Mon objectif : être votre partenaire technique, pas juste un prestataire.
            Je m&apos;investis dans votre projet comme si c&apos;était le mien.
          </motion.p>
        </div>
      </section>

      {/* ── Services overview ───────────────────────────── */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <p className="text-sm font-semibold text-brand-500 uppercase tracking-wider mb-3">
              Services
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Des solutions concrètes,{" "}
              <span className="gradient-text">pas du code pour du code</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
              Chaque projet est pensé pour apporter une valeur réelle à votre activité :
              gain de temps, croissance, automatisation.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
          >
            {services.map((service) => (
              <motion.div
                key={service.title}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="group p-6 rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900/30 hover:border-brand-100 dark:hover:border-brand-700/50 transition-colors"
              >
                <div
                  className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${service.color} text-white mb-4`}
                >
                  <service.icon size={22} />
                </div>
                <h3 className="font-bold text-lg mb-2">{service.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
                  {service.benefit}
                </p>
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-500 hover:text-brand-600 transition-colors"
                >
                  En savoir plus <ArrowRight size={14} />
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-brand-500 font-medium hover:underline text-sm"
            >
              Voir tous les services en détail <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Différenciation ─────────────────────────────── */}
      <section className="py-20 px-4 bg-gray-50/50 dark:bg-gray-900/20">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <p className="text-sm font-semibold text-brand-500 uppercase tracking-wider mb-3">
              Pourquoi moi ?
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ce qui me différencie
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
              Pas de promesses génériques. Voici ce que vous obtenez concrètement
              en travaillant avec moi.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
          >
            {differentiators.map((item) => (
              <motion.div
                key={item.title}
                variants={itemVariants}
                className="flex gap-4 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900/30"
              >
                <div className="flex-none">
                  <div className="gradient-border">
                    <div className="gradient-border-inner p-2.5 rounded-[10px]">
                      <item.icon size={18} className="text-brand-500" />
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-base mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Processus ───────────────────────────────────── */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <p className="text-sm font-semibold text-brand-500 uppercase tracking-wider mb-3">
              Comment ça marche ?
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Un processus simple et <span className="gradient-text">transparent</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
              Pas de surprises. Je vous explique chaque étape avant de commencer.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
          >
            {steps.map((step) => (
              <motion.div
                key={step.num}
                variants={itemVariants}
                className="p-6 rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900/30"
              >
                <span className="inline-block text-3xl font-extrabold gradient-text mb-4">
                  {step.num}
                </span>
                <h3 className="font-semibold text-base mb-2">{step.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA final ───────────────────────────────────── */}
      <section className="py-24 px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden p-10 sm:p-16 text-center"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-brand-500 via-brand-accent to-purple-500" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.15)_0%,_transparent_70%)]" />
            <div className="relative z-10 text-white">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Un projet en tête ?
              </h2>
              <p className="text-white/80 mb-8 text-lg">
                Parlons-en. Premier échange gratuit, réponse sous 24h, sans engagement.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-brand-600 bg-white hover:bg-brand-50 transition-all hover:scale-105 shadow-lg"
              >
                Demander un devis
                <ArrowRight size={18} />
              </Link>
              <p className="mt-5 text-white/60 text-sm">
                Startups · PME · Indépendants · Artisans
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
