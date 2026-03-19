import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import ProductsGrid from "@/components/sections/ProductsGrid";
import ProductsQuality from "@/components/sections/ProductsQuality";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { products } from "@/lib/content";

export const metadata: Metadata = {
  title:
    "Nos produits | Boucherie Imphycoise — Viandes charolaises, charcuterie maison, traiteur",
  description:
    "Viandes charolaises 100% françaises, charcuterie artisanale maison, service traiteur et plateaux barbecue. Circuits courts et fait maison à Imphy.",
};

export default function NosProduitsPage() {
  return (
    <>
      <PageHero
        overline={products.hero.overline}
        headline={products.hero.headline}
      />
      <ProductsGrid />
      <ProductsQuality />
      <section className="py-20 md:py-24 px-4 sm:px-6 lg:px-8 text-center">
        <SectionHeading headline={products.cta.headline} />
        <Button href={products.cta.href}>{products.cta.label} &rarr;</Button>
      </section>
    </>
  );
}
