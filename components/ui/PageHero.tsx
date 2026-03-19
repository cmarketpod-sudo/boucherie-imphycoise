"use client";

import { motion } from "framer-motion";
import TextReveal from "./TextReveal";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  overline: string;
  headline: string;
  imageSrc?: string;
  className?: string;
}

export default function PageHero({
  overline,
  headline,
  imageSrc,
  className,
}: PageHeroProps) {
  const reducedMotion = useReducedMotion();

  return (
    <section
      className={cn(
        "relative flex items-center justify-center min-h-[40vh] md:min-h-[50vh] overflow-hidden",
        className
      )}
    >
      {imageSrc && (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${imageSrc})` }}
        />
      )}
      <div className="absolute inset-0 bg-bg-dark/80" />
      <div className="relative z-10 text-center px-6 py-20">
        <motion.p
          initial={reducedMotion ? undefined : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-brand font-medium tracking-widest uppercase text-sm mb-4"
        >
          {overline}
        </motion.p>
        <TextReveal
          text={headline}
          mode="word"
          as="h1"
          delay={0.5}
          className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-cream justify-center"
        />
      </div>
    </section>
  );
}
