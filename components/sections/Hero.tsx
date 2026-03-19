"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ChevronDown } from "lucide-react";
import { hero } from "@/lib/content";
import TextReveal from "@/components/ui/TextReveal";
import Button from "@/components/ui/Button";
import { PHONE_HREF } from "@/lib/navigation";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const reducedMotion = useReducedMotion();

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background with parallax */}
      <motion.div
        style={reducedMotion ? undefined : { y: bgY }}
        className="absolute inset-0 bg-[url('/images/logo.jpg')] bg-cover bg-center scale-110"
      />
      <div className="absolute inset-0 bg-bg-dark/70" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.p
          initial={reducedMotion ? undefined : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-brand font-medium tracking-widest uppercase text-sm mb-6"
        >
          {hero.overline}
        </motion.p>

        <TextReveal
          text={hero.headline}
          mode="word"
          as="h1"
          delay={0.5}
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-cream mb-6 justify-center"
        />

        <motion.p
          initial={reducedMotion ? undefined : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="text-text-muted text-lg md:text-xl max-w-2xl mx-auto mb-10"
        >
          {hero.subheadline}
        </motion.p>

        <motion.div
          initial={reducedMotion ? undefined : { opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.3, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button href="/nos-produits">{hero.ctaPrimary} &rarr;</Button>
          <Button href={PHONE_HREF} variant="secondary" external>
            {hero.ctaSecondary}
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={reducedMotion ? undefined : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ChevronDown size={28} className="text-cream/50 animate-bounce" />
      </motion.div>
    </section>
  );
}
