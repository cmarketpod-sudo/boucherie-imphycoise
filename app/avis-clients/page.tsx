import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import ReviewsScore from "@/components/sections/ReviewsScore";
import ReviewsGrid from "@/components/sections/ReviewsGrid";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { reviewsPage } from "@/lib/content";

export const metadata: Metadata = {
  title:
    "Avis clients | Boucherie Imphycoise — Ce que disent nos clients sur Google",
  description:
    "Consultez les avis Google de la Boucherie Charcuterie Imphycoise. Note 4.8/5 — qualité, accueil chaleureux et produits artisanaux à Imphy.",
};

export default function AvisClientsPage() {
  return (
    <>
      <PageHero
        overline={reviewsPage.hero.overline}
        headline={reviewsPage.hero.headline}
      />
      <ReviewsScore />
      <ReviewsGrid />
      <section className="py-20 md:py-24 px-4 sm:px-6 lg:px-8 text-center">
        <SectionHeading headline={reviewsPage.cta.headline} />
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href={reviewsPage.cta.contactHref}>
            {reviewsPage.cta.contactLabel} &rarr;
          </Button>
        </div>
      </section>
    </>
  );
}
