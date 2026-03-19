import { homeCTA } from "@/lib/content";
import { PHONE_HREF } from "@/lib/navigation";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

export default function HomeCTA() {
  return (
    <section className="py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-brand/10 border-y border-brand/20">
      <div className="max-w-3xl mx-auto text-center">
        <SectionHeading headline={homeCTA.headline} />
        <p className="text-text-muted text-lg mb-8">{homeCTA.body}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/contact">{homeCTA.ctaPrimary} &rarr;</Button>
          <Button href={PHONE_HREF} variant="secondary" external>
            {homeCTA.ctaSecondary}
          </Button>
        </div>
      </div>
    </section>
  );
}
