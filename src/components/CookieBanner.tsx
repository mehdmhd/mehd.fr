"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X } from "lucide-react";

const STORAGE_KEY = "mehd-cookie-consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(STORAGE_KEY);
    if (!consent) {
      // Small delay so the banner doesn't flash on first paint
      const timer = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setVisible(false);
  };

  const dismiss = () => {
    localStorage.setItem(STORAGE_KEY, "dismissed");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-4 left-4 right-4 z-50 sm:left-auto sm:right-6 sm:max-w-md"
        >
          <div className="relative rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-2xl shadow-black/10 dark:shadow-black/40 p-5">
            {/* Close button */}
            <button
              onClick={dismiss}
              aria-label="Fermer"
              className="absolute top-3 right-3 p-1 rounded-lg text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            >
              <X size={16} />
            </button>

            <div className="flex gap-3">
              <div className="flex-none p-2 rounded-xl bg-brand-50 dark:bg-brand-500/10 text-brand-500 h-fit">
                <Cookie size={18} />
              </div>
              <div className="space-y-3 pr-4">
                <div>
                  <p className="font-semibold text-sm mb-1">Cookies</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                    Ce site utilise uniquement des cookies techniques
                    nécessaires à son fonctionnement (thème, préférences).
                    Aucun cookie publicitaire ou de tracking.
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={accept}
                    className="px-4 py-1.5 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-brand-500 to-brand-accent hover:shadow-md hover:shadow-brand-500/25 transition-all"
                  >
                    Compris
                  </button>
                  <Link
                    href="/politique-confidentialite"
                    className="text-xs text-brand-500 hover:underline"
                  >
                    En savoir plus
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
