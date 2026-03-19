"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import {
  ADDRESS,
  PHONE,
  PHONE_HREF,
  EMAIL,
  EMAIL_HREF,
  FACEBOOK_URL,
} from "@/lib/navigation";
import { contact } from "@/lib/content";
import FacebookIcon from "@/components/ui/FacebookIcon";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export default function ContactInfo() {
  const reducedMotion = useReducedMotion();

  const columns = [
    // Column 1: Coordinates
    <div key="coords" className="space-y-5">
      <h3 className="font-display text-xl font-bold text-cream mb-4">
        Coordonnées
      </h3>
      <div className="flex items-start gap-3 text-text-muted">
        <MapPin size={18} className="text-brand mt-1 flex-shrink-0" />
        <span>{ADDRESS}</span>
      </div>
      <div className="flex items-center gap-3 text-text-muted">
        <Phone size={18} className="text-brand flex-shrink-0" />
        <a href={PHONE_HREF} className="hover:text-cream transition-colors">
          {PHONE}
        </a>
      </div>
      <div className="flex items-center gap-3 text-text-muted">
        <Mail size={18} className="text-brand flex-shrink-0" />
        <a href={EMAIL_HREF} className="hover:text-cream transition-colors">
          {EMAIL}
        </a>
      </div>
      <div className="pt-2">
        <FacebookIcon size="md" />
      </div>
    </div>,

    // Column 2: Map
    <div key="map">
      <h3 className="font-display text-xl font-bold text-cream mb-4">
        Nous trouver
      </h3>
      <div className="rounded-xl overflow-hidden border border-border-dark aspect-video">
        <iframe
          title="Boucherie Charcuterie Imphycoise — Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2739.5!2d3.166!3d46.933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z25+avenue+Jean+Jaur%C3%A8s+58160+Imphy!5e0!3m2!1sfr!2sfr"
          width="100%"
          height="100%"
          style={{ border: 0, minHeight: 250 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>,

    // Column 3: Hours
    <div key="hours">
      <h3 className="font-display text-xl font-bold text-cream mb-4 flex items-center gap-2">
        <Clock size={20} className="text-brand" />
        Horaires
      </h3>
      <ul className="space-y-3">
        {contact.hours.map((h) => (
          <li
            key={h.day}
            className="flex justify-between text-sm border-b border-border-dark pb-2"
          >
            <span className="text-cream font-medium">{h.day}</span>
            <span
              className={
                h.time === "Fermé" ? "text-brand font-medium" : "text-text-muted"
              }
            >
              {h.time}
            </span>
          </li>
        ))}
      </ul>
    </div>,
  ];

  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
        {columns.map((col, i) => (
          <motion.div
            key={i}
            initial={reducedMotion ? undefined : { opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2, duration: 0.5 }}
          >
            {col}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
