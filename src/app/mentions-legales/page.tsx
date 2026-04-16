"use client";

import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/lib/motion";

const sections = [
  {
    title: "1. Éditeur du site",
    content: `Le site mehd.fr est édité par :

**Mehdi Makhloufi**
Entrepreneur individuel (Micro-entreprise)
SIRET : 84255523700028
Activité : Programmation informatique (62.01Z)
Ville : Rubelles, France
Email : me@mehd.fr
Site web : https://mehd.fr

TVA : non assujetti (article 293 B du CGI)`,
  },
  {
    title: "2. Hébergeur",
    content: `Le site est hébergé par :

**Hetzner Online GmbH**
Industriestr. 25
91710 Gunzenhausen, Allemagne
Site web : https://www.hetzner.com
Téléphone : +49 (0)9831 505-0`,
  },
  {
    title: "3. Directeur de la publication",
    content: `Le directeur de la publication est **Mehdi Makhloufi**, en qualité de dirigeant de l'entreprise individuelle.`,
  },
  {
    title: "4. Propriété intellectuelle",
    content: `L'ensemble du contenu de ce site (textes, images, graphismes, logo, icônes, code source) est la propriété exclusive de Mehdi Makhloufi, sauf mention contraire.

Toute reproduction, représentation, modification, publication ou adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite sans l'autorisation écrite préalable de Mehdi Makhloufi.

Toute exploitation non autorisée du site ou de l'un quelconque des éléments qu'il contient sera considérée comme constitutive d'une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et suivants du Code de Propriété Intellectuelle.`,
  },
  {
    title: "5. Limitation de responsabilité",
    content: `Les informations contenues sur ce site sont aussi précises que possible et le site est périodiquement mis à jour, mais peut toutefois contenir des inexactitudes, des omissions ou des lacunes.

Mehdi Makhloufi ne pourra être tenu responsable des dommages directs et indirects causés au matériel de l'utilisateur lors de l'accès au site mehd.fr, et résultant soit de l'utilisation d'un matériel ne répondant pas aux spécifications techniques requises, soit de l'apparition d'un bug ou d'une incompatibilité.

Mehdi Makhloufi ne pourra également être tenu responsable des dommages indirects consécutifs à l'utilisation du site mehd.fr.`,
  },
  {
    title: "6. Liens hypertextes",
    content: `Le site mehd.fr peut contenir des liens hypertextes vers d'autres sites. Cependant, Mehdi Makhloufi n'a pas la possibilité de vérifier le contenu des sites ainsi visités et n'assumera en conséquence aucune responsabilité de ce fait.`,
  },
  {
    title: "7. Droit applicable",
    content: `Tout litige en relation avec l'utilisation du site mehd.fr est soumis au droit français. L'utilisateur du site reconnaît la compétence exclusive des tribunaux compétents de Melun.`,
  },
];

function renderContent(text: string) {
  return text.split("\n").map((line, i) => {
    if (line.includes("**")) {
      const parts = line.split(/\*\*/);
      return (
        <p key={i}>
          {parts.map((part, j) =>
            j % 2 === 1 ? (
              <strong key={j} className="font-semibold text-gray-900 dark:text-gray-100">
                {part}
              </strong>
            ) : (
              <span key={j}>{part}</span>
            )
          )}
        </p>
      );
    }
    if (line.trim() === "") return <br key={i} />;
    return <p key={i}>{line}</p>;
  });
}

export default function MentionsLegalesPage() {
  return (
    <div className="pt-24 pb-24 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="mb-12">
            <p className="text-sm font-semibold text-brand-500 uppercase tracking-wider mb-3">
              Juridique
            </p>
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
              Mentions <span className="gradient-text">légales</span>
            </h1>
            <p className="text-gray-500 dark:text-gray-400">
              Dernière mise à jour : avril 2026
            </p>
          </motion.div>

          <div className="space-y-10">
            {sections.map((section) => (
              <motion.section
                key={section.title}
                variants={itemVariants}
                className="space-y-3"
              >
                <h2 className="text-xl font-bold">{section.title}</h2>
                <div className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed space-y-1">
                  {renderContent(section.content)}
                </div>
              </motion.section>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
