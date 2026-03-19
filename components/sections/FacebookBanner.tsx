"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { FACEBOOK_URL } from "@/lib/navigation";
import { facebookBanner } from "@/lib/content";
import FacebookIcon from "@/components/ui/FacebookIcon";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export default function FacebookBanner() {
  const reducedMotion = useReducedMotion();

  const content = (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
      <FacebookIcon size="md" />
      <p className="text-cream font-medium text-center sm:text-left">
        {facebookBanner.text}
      </p>
      <a
        href={FACEBOOK_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-facebook hover:bg-facebook/90 text-white rounded-full px-6 py-2.5 text-sm font-medium transition-colors duration-300"
      >
        {facebookBanner.cta}
        <ArrowRight size={16} />
      </a>
    </div>
  );

  if (reducedMotion) {
    return <section className="bg-bg-card border-t border-border-dark">{content}</section>;
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-bg-card border-t border-border-dark"
    >
      {content}
    </motion.section>
  );
}
