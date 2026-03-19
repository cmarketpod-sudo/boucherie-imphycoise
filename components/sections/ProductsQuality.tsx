"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Award, Flame, Heart } from "lucide-react";
import { products } from "@/lib/content";
import SectionHeading from "@/components/ui/SectionHeading";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const iconMap = {
  ShieldCheck,
  Award,
  Flame,
  Heart,
} as const;

export default function ProductsQuality() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-bg-card border-y border-border-dark">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          overline={products.quality.overline}
          headline={products.quality.headline}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.quality.items.map((item, i) => {
            const Icon = iconMap[item.icon];
            return (
              <motion.div
                key={item.specialty}
                initial={
                  reducedMotion ? undefined : { opacity: 0, x: -40 }
                }
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="flex flex-col items-center text-center p-6"
              >
                <div className="w-14 h-14 rounded-full bg-brand/15 flex items-center justify-center mb-4">
                  <Icon size={24} className="text-brand" />
                </div>
                <h3 className="font-display text-lg font-bold text-cream mb-2">
                  {item.specialty}
                </h3>
                <p className="text-text-muted text-sm">{item.engagement}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
