"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { about } from "@/lib/content";
import TextReveal from "@/components/ui/TextReveal";
import StaggerChildren from "@/components/ui/StaggerChildren";
import Card from "@/components/ui/Card";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export default function AboutContent() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Text */}
        <div className="lg:col-span-7 space-y-8">
          {about.paragraphs.map((p, i) => (
            <TextReveal key={i} text={p} mode="line" className="text-text-muted leading-relaxed text-lg" />
          ))}

          <h3 className="font-display text-2xl font-bold text-brand">
            {about.subtitle1}
          </h3>
          {about.paragraphs2.map((p, i) => (
            <TextReveal key={i} text={p} mode="line" className="text-text-muted leading-relaxed" />
          ))}

          <h3 className="font-display text-2xl font-bold text-brand">
            {about.subtitle2}
          </h3>
          {about.paragraphs3.map((p, i) => (
            <TextReveal key={i} text={p} mode="line" className="text-text-muted leading-relaxed" />
          ))}

          <StaggerChildren className="space-y-3" stagger={0.1}>
            {about.bulletPoints.map((point, i) => (
              <Card key={i} className="!p-4 flex items-start gap-3">
                <span className="text-brand font-bold mt-0.5">&bull;</span>
                <span className="text-cream text-sm">{point}</span>
              </Card>
            ))}
          </StaggerChildren>
        </div>

        {/* Image */}
        <motion.div
          initial={reducedMotion ? undefined : { opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-5"
        >
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
            <Image
              src="/images/logo.jpg"
              alt="Henrique Chagas — Boucher artisan"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
