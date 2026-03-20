import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import AboutContent from "@/components/sections/AboutContent";
import AboutQuote from "@/components/sections/AboutQuote";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { about } from "@/lib/content";

export const metadata: Metadata = {
  title: "Qui sommes-nous | Boucherie Imphycoise — L'histoire d'Henrique Chagas",
  description:
    "Découvrez l'histoire d'Henrique Chagas, artisan boucher passionné. Du Brésil à Imphy, un parcours de caractère au service de la boucherie traditionnelle.",
};

export default function QuiSommesNousPage() {
  return (
    <>
      <PageHero
        overline={about.hero.overline}
        headline={about.hero.headline}
        imageSrc="/images/hero-about.jpg"
        imageAlt="Henrique Chagas, boucher artisan à Imphy"
      />
      <AboutContent />
      <AboutQuote />
      <section className="py-20 md:py-24 px-4 sm:px-6 lg:px-8 text-center">
        <SectionHeading headline={about.cta.headline} />
        <Button href={about.cta.href}>{about.cta.label} &rarr;</Button>
      </section>
    </>
  );
}
