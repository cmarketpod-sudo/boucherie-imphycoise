import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import ContactInfo from "@/components/sections/ContactInfo";
import ContactDevis from "@/components/sections/ContactDevis";
import { contact } from "@/lib/content";

export const metadata: Metadata = {
  title:
    "Contact | Boucherie Imphycoise — Horaires, adresse, devis événementiel",
  description:
    "Contactez la Boucherie Charcuterie Imphycoise : 25 avenue Jean Jaurès, 58160 Imphy. Tél : 06 52 40 72 00. Horaires, plan d'accès et devis traiteur.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        overline={contact.hero.overline}
        headline={contact.hero.headline}
      />
      <ContactInfo />
      <ContactDevis />
    </>
  );
}
