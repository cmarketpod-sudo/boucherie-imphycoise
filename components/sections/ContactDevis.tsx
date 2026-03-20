"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { UtensilsCrossed, ArrowRight } from "lucide-react";
import { contact } from "@/lib/content";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import ContactPopup from "@/components/ContactPopup";

export default function ContactDevis() {
  const reducedMotion = useReducedMotion();
  const [popupOpen, setPopupOpen] = useState(false);

  return (
    <section className="px-4 sm:px-6 lg:px-8 pb-20 md:pb-28 max-w-7xl mx-auto">
      <motion.div
        initial={reducedMotion ? undefined : { opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-bg-card border border-brand/30 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-6 md:gap-8"
      >
        <div className="flex-shrink-0">
          <div className="w-16 h-16 rounded-full bg-brand/15 flex items-center justify-center">
            <UtensilsCrossed size={28} className="text-brand" />
          </div>
        </div>
        <div className="flex-1 text-center md:text-left">
          <h3 className="font-display text-2xl font-bold text-cream mb-2">
            {contact.devis.headline}
          </h3>
          <p className="text-text-muted">{contact.devis.body}</p>
        </div>
        <motion.button
          onClick={() => setPopupOpen(true)}
          animate={
            reducedMotion
              ? undefined
              : { scale: [1, 1.03, 1] }
          }
          transition={
            reducedMotion
              ? undefined
              : { duration: 2, repeat: Infinity, ease: "easeInOut" }
          }
          className="inline-flex items-center gap-2 bg-brand hover:bg-brand-light text-white rounded-full px-8 py-3.5 font-medium transition-colors duration-300 whitespace-nowrap cursor-pointer"
        >
          {contact.devis.ctaLabel}
          <ArrowRight size={18} />
        </motion.button>
      </motion.div>

      <ContactPopup open={popupOpen} onClose={() => setPopupOpen(false)} />
    </section>
  );
}
