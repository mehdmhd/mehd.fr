"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MapPin, Calendar, Coffee } from "lucide-react";
import { containerVariants, itemVariants } from "@/lib/motion";

const skills = [
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"] },
  { category: "Mobile", items: ["React Native", "Expo", "iOS", "Android"] },
  { category: "Backend", items: ["Node.js", "Python", "FastAPI", "PostgreSQL", "Redis"] },
  { category: "Cloud & DevOps", items: ["AWS", "GCP", "Docker", "CI/CD", "Terraform"] },
  { category: "IA & Data", items: ["OpenAI API", "Claude API", "LangChain", "RAG", "Pinecone"] },
  { category: "No-Code", items: ["Bubble", "Make (Integromat)", "Zapier", "Airtable"] },
];

const timeline = [
  {
    year: "2024–",
    title: "Freelance Full-Stack",
    description: "Projets web, mobile, IA et automatisation pour des startups et PME. Accompagnement de A à Z.",
  },
  {
    year: "2022–2024",
    title: "Lead Developer",
    description: "Architecture et développement d'applications SaaS à fort trafic. Management technique d'une équipe.",
  },
  {
    year: "2020–2022",
    title: "Développeur Full-Stack",
    description: "React, Node.js, React Native — du MVP au produit scalable. Plusieurs secteurs : fintech, e-commerce, SaaS.",
  },
  {
    year: "2018–2020",
    title: "Formation",
    description: "Formation en développement logiciel et systèmes distribués. Premiers projets freelance en parallèle.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-24 pb-24 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="mb-16"
        >
          <motion.p
            variants={itemVariants}
            className="text-sm font-semibold text-brand-500 uppercase tracking-wider mb-3"
          >
            À propos
          </motion.p>
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl font-extrabold mb-6 leading-tight"
          >
            Mehdi <span className="gradient-text">Makhloufi</span>
          </motion.h1>
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400 mb-8"
          >
            <span className="flex items-center gap-1.5">
              <MapPin size={14} /> France
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar size={14} /> Disponible dès maintenant
            </span>
            <span className="flex items-center gap-1.5">
              <Coffee size={14} /> Fan de café noir
            </span>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="text-gray-600 dark:text-gray-400 leading-relaxed space-y-4 text-lg"
          >
            <p>
              Je suis développeur freelance full-stack avec plusieurs années d&apos;expérience
              à construire des produits digitaux — de l&apos;idée au déploiement en production.
            </p>
            <p>
              Mon approche : livrer rapidement sans sacrifier la qualité. Je m&apos;adapte à
              vos besoins, que ce soit un MVP en deux semaines ou une refonte architecturale
              en profondeur.
            </p>
            <p>
              J&apos;aime particulièrement les projets à l&apos;intersection du web et de l&apos;IA —
              automatiser des processus métier, intégrer des LLMs, construire des outils
              qui font gagner du temps.
            </p>
          </motion.div>
        </motion.div>

        {/* Vision block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 p-6 rounded-2xl border-l-4 border-brand-500 bg-brand-50/50 dark:bg-brand-500/5 border border-brand-100 dark:border-brand-500/10"
        >
          <p className="text-sm font-semibold text-brand-500 mb-2">Ma vision</p>
          <blockquote className="text-lg font-medium text-gray-800 dark:text-gray-200 leading-relaxed">
            &ldquo;Je ne vends pas du code. Je vends des solutions. Mon rôle est d&apos;être votre
            partenaire technique — comprendre vos enjeux, vous conseiller, et livrer
            quelque chose qui a un impact réel sur votre activité.&rdquo;
          </blockquote>
        </motion.div>

        {/* Skills */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-8">
            Compétences <span className="gradient-text">techniques</span>
          </h2>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {skills.map((group) => (
              <motion.div
                key={group.category}
                variants={itemVariants}
                className="p-5 rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900/30"
              >
                <h3 className="text-sm font-semibold text-brand-500 uppercase tracking-wider mb-3">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="px-2.5 py-1 text-xs rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Timeline */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-8">Parcours</h2>
          <div className="relative space-y-6">
            <div className="absolute left-[88px] top-2 bottom-2 w-px bg-gradient-to-b from-brand-500/50 to-transparent hidden sm:block" />
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-6"
              >
                <div className="flex-none w-[72px] text-right">
                  <span className="text-xs font-mono text-brand-500 font-semibold">
                    {item.year}
                  </span>
                </div>
                <div className="hidden sm:flex flex-none w-4 h-4 mt-0.5 items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-brand-500 to-brand-accent ring-4 ring-white dark:ring-[#0a0a14]" />
                </div>
                <div className="pb-6">
                  <h3 className="font-semibold text-base mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-4"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-brand-500 to-brand-accent hover:shadow-lg hover:shadow-brand-500/25 transition-all hover:scale-105"
          >
            Me contacter <ArrowRight size={18} />
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all"
          >
            Voir mes services
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
