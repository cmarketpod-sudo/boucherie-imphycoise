"use client";

import { motion } from "framer-motion";
import { about } from "@/lib/content";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export default function AboutQuote() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-bg-card">
      <div className="max-w-3xl mx-auto relative">
        {/* Decorative quote mark */}
        <motion.span
          initial={reducedMotion ? undefined : { opacity: 0, scale: 0 }}
          whileInView={{ opacity: 0.15, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="absolute -top-6 -left-4 text-brand text-8xl md:text-9xl font-display leading-none select-none"
          aria-hidden="true"
        >
          &laquo;
        </motion.span>

        <motion.blockquote
          initial={reducedMotion ? undefined : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 1.2 }}
          className="relative border-l-4 border-gold pl-8 md:pl-12 py-4"
        >
          <p className="font-display text-xl md:text-2xl italic text-cream leading-relaxed">
            &laquo; {about.quote.text} &raquo;
          </p>
          <motion.footer
            initial={reducedMotion ? undefined : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.0, duration: 0.5 }}
            className="mt-6 text-brand font-medium"
          >
            — {about.quote.author}
          </motion.footer>
        </motion.blockquote>
      </div>
    </section>
  );
}
