"use client";

import { motion } from "framer-motion";
import { MessageSquare, Clock, CheckCircle2, ArrowRight } from "lucide-react";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

/*const socials = [
  {
    icon: Mail,
    label: "Email",
    value: "me@mehd.fr",
    href: "mailto:me@mehd.fr",
    color: "from-brand-500 to-blue-500",
  },
  {
    icon: Briefcase,
    label: "LinkedIn",
    value: "linkedin.com/in/mehdi",
    href: "https://linkedin.com",
    color: "from-blue-600 to-blue-700",
  }
];*/

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    projectType: "",
    budget: "",
    description: "",
  });
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // TODO: implement email sending (Resend / Nodemailer)
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("sent");
  };

  return (
    <div className="pt-24 pb-24 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <p className="text-sm font-semibold text-brand-500 uppercase tracking-wider mb-3">
            Contact
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-6">
            Parlons de votre{" "}
            <span className="gradient-text">projet</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Premier échange gratuit et sans engagement. Je réponds sous 24h.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left: info + socials */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Reassurance cards */}
            <div className="space-y-3">
              {[
                {
                  icon: MessageSquare,
                  title: "Premier échange",
                  desc: "On parle de votre projet, vos besoins, vos contraintes. Gratuit, sans engagement.",
                },
                {
                  icon: Clock,
                  title: "Réponse sous 24h",
                  desc: "Je réponds dans les 24h, souvent bien avant. Pas de délais d'attente interminables.",
                },
                {
                  icon: CheckCircle2,
                  title: "Devis sur mesure",
                  desc: "Chaque devis est adapté à votre situation : budget, délais, contraintes.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex gap-3 p-4 rounded-xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900/30"
                >
                  <div className="flex-none p-2 rounded-lg bg-brand-50 dark:bg-brand-500/10 text-brand-500 h-fit">
                    <item.icon size={16} />
                  </div>
                  <div>
                    <p className="font-medium text-sm">{item.title}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            {/*<div className="space-y-2">
              <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-3">
                Retrouvez-moi sur
              </p>
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900/30 hover:border-brand-100 dark:hover:border-brand-700/50 transition-all group"
                >
                  <div className={`flex-none p-2 rounded-lg bg-gradient-to-br ${social.color} text-white`}>
                    <social.icon size={14} />
                  </div>
                  <div>
                    <p className="text-sm font-medium">{social.label}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{social.value}</p>
                  </div>
                </a>
              ))}
            </div>*/}
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-3"
          >
            {status === "sent" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center h-full min-h-[400px] text-center p-8 rounded-2xl border border-green-100 dark:border-green-900/30 bg-green-50 dark:bg-green-950/20"
              >
                <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-4">
                  <CheckCircle2 size={32} className="text-green-600 dark:text-green-400" />
                </div>
                <h2 className="text-xl font-bold mb-2">Message envoyé !</h2>
                <p className="text-gray-500 dark:text-gray-400 mb-6">
                  Je vous réponds très vite, généralement dans les 24h.
                </p>
                <button
                  onClick={() => { setStatus("idle"); setForm({ name: "", email: "", projectType: "", budget: "", description: "" }); }}
                  className="inline-flex items-center gap-2 text-sm font-medium text-brand-500 hover:underline"
                >
                  Envoyer un autre message
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="p-8 rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900/30 space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="name">Nom *</Label>
                    <Input
                      id="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Jean Dupont"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="jean@entreprise.fr"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="projectType">Type de projet *</Label>
                    <Select
                      value={form.projectType}
                      onValueChange={(value) => setForm({ ...form, projectType: value ?? "" })}
                      required
                    >
                      <SelectTrigger id="projectType" className="w-full">
                        <SelectValue placeholder="Choisir..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="saas">Application SaaS</SelectItem>
                        <SelectItem value="mobile">Application mobile</SelectItem>
                        <SelectItem value="vitrine">Site vitrine</SelectItem>
                        <SelectItem value="ia">Solution IA / automatisation</SelectItem>
                        <SelectItem value="autre">Autre</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="budget">Budget estimé</Label>
                    <Select
                      value={form.budget}
                      onValueChange={(value) => setForm({ ...form, budget: value ?? "" })}
                    >
                      <SelectTrigger id="budget" className="w-full">
                        <SelectValue placeholder="Optionnel..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="lt2k">Moins de 2 000€</SelectItem>
                        <SelectItem value="2k5k">2 000€ – 5 000€</SelectItem>
                        <SelectItem value="5k15k">5 000€ – 15 000€</SelectItem>
                        <SelectItem value="gt15k">Plus de 15 000€</SelectItem>
                        <SelectItem value="tbd">À définir ensemble</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="description">Description du besoin *</Label>
                  <Textarea
                    id="description"
                    required
                    rows={5}
                    value={form.description}
                    onChange={(e) => setForm({ ...form, description: e.target.value })}
                    placeholder="Décrivez votre projet : contexte, fonctionnalités souhaitées, délais, contraintes particulières..."
                    className="resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-brand-500 via-brand-accent to-purple-500 hover:shadow-lg hover:shadow-brand-500/25 transition-all hover:scale-[1.02] disabled:opacity-60 disabled:hover:scale-100 inline-flex items-center justify-center gap-2"
                >
                  {status === "sending" ? (
                    "Envoi en cours..."
                  ) : (
                    <>
                      Obtenir mon devis <ArrowRight size={18} />
                    </>
                  )}
                </button>

                <p className="text-center text-xs text-gray-400 dark:text-gray-500">
                  Réponse sous 24h · Sans engagement · Premier échange gratuit
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
