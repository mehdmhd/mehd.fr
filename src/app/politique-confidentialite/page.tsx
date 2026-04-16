"use client";

import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/lib/motion";

const sections = [
  {
    title: "1. Responsable du traitement",
    content: `Le responsable du traitement des données personnelles est :

**Mehdi Makhloufi**
Entrepreneur individuel (Micro-entreprise)
SIRET : 84255523700028
Ville : Rubelles, France
Email : me@mehd.fr`,
  },
  {
    title: "2. Données collectées",
    content: `Dans le cadre de l'utilisation du site mehd.fr, les données personnelles suivantes peuvent être collectées :

**Via le formulaire de contact :**
— Nom
— Adresse email
— Type de projet
— Budget estimé (optionnel)
— Description du besoin

**Données de navigation (collecte automatique) :**
— Adresse IP
— Type de navigateur et système d'exploitation
— Pages consultées et durée de visite
— Date et heure de connexion`,
  },
  {
    title: "3. Finalités du traitement",
    content: `Les données collectées sont utilisées pour :

— Répondre aux demandes de contact et de devis
— Assurer le suivi de la relation commerciale
— Améliorer l'expérience utilisateur sur le site
— Établir des statistiques de fréquentation anonymisées

Les données ne sont jamais utilisées à des fins de prospection commerciale non sollicitée et ne sont jamais revendues à des tiers.`,
  },
  {
    title: "4. Base légale du traitement",
    content: `Le traitement des données repose sur :

— **Le consentement** de l'utilisateur lorsqu'il remplit le formulaire de contact (article 6.1.a du RGPD)
— **L'intérêt légitime** du responsable du traitement pour les données de navigation (article 6.1.f du RGPD)
— **L'exécution de mesures précontractuelles** dans le cadre d'une demande de devis (article 6.1.b du RGPD)`,
  },
  {
    title: "5. Durée de conservation",
    content: `Les données personnelles sont conservées pour la durée strictement nécessaire aux finalités du traitement :

— **Données du formulaire de contact :** 3 ans à compter du dernier échange
— **Données de navigation :** 13 mois maximum
— **Données contractuelles :** durée de la relation commerciale + 5 ans (obligations légales)`,
  },
  {
    title: "6. Destinataires des données",
    content: `Les données personnelles peuvent être transmises aux destinataires suivants :

— **Hébergeur :** Hetzner Online GmbH (Allemagne, UE) — pour l'hébergement du site
— **Service email :** pour le traitement des demandes de contact

Aucune donnée n'est transférée en dehors de l'Union européenne.`,
  },
  {
    title: "7. Vos droits (RGPD)",
    content: `Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, vous disposez des droits suivants :

— **Droit d'accès :** obtenir la confirmation que des données vous concernant sont traitées et en obtenir une copie
— **Droit de rectification :** demander la correction de données inexactes ou incomplètes
— **Droit à l'effacement :** demander la suppression de vos données dans les conditions prévues par la réglementation
— **Droit à la limitation :** demander la limitation du traitement de vos données
— **Droit à la portabilité :** recevoir vos données dans un format structuré et couramment utilisé
— **Droit d'opposition :** vous opposer au traitement de vos données pour des motifs légitimes

Pour exercer ces droits, contactez : **me@mehd.fr**

Vous disposez également du droit d'introduire une réclamation auprès de la CNIL (Commission Nationale de l'Informatique et des Libertés) : https://www.cnil.fr`,
  },
  {
    title: "8. Cookies",
    content: `Le site mehd.fr utilise uniquement des cookies techniques strictement nécessaires au fonctionnement du site (préférence de thème clair/sombre).

Aucun cookie publicitaire, de tracking ou de mesure d'audience n'est utilisé. Aucun consentement n'est donc requis pour ces cookies techniques conformément à la directive ePrivacy.`,
  },
  {
    title: "9. Sécurité",
    content: `Mehdi Makhloufi met en œuvre les mesures techniques et organisationnelles appropriées pour protéger les données personnelles contre la destruction accidentelle ou illicite, la perte, l'altération, la diffusion ou l'accès non autorisé.

Le site utilise le protocole HTTPS pour chiffrer les communications entre votre navigateur et le serveur.`,
  },
  {
    title: "10. Modification de la politique",
    content: `La présente politique de confidentialité peut être modifiée à tout moment. Les modifications prennent effet dès leur publication sur cette page. La date de dernière mise à jour est indiquée en haut de cette page.`,
  },
];

function renderContent(text: string) {
  return text.split("\n").map((line, i) => {
    if (line.startsWith("**") && line.endsWith("**")) {
      return (
        <p key={i} className="font-semibold text-gray-900 dark:text-gray-100">
          {line.replace(/\*\*/g, "")}
        </p>
      );
    }
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
    if (line.startsWith("—")) {
      return (
        <p key={i} className="pl-4">
          {line}
        </p>
      );
    }
    return <p key={i}>{line}</p>;
  });
}

export default function ConfidentialitePage() {
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
              Confidentialité
            </p>
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
              Politique de{" "}
              <span className="gradient-text">confidentialité</span>
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
