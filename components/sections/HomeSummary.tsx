import Link from "next/link";
import { User, Beef, Star } from "lucide-react";
import { homeSummary } from "@/lib/content";
import SectionHeading from "@/components/ui/SectionHeading";
import StaggerChildren from "@/components/ui/StaggerChildren";
import Card from "@/components/ui/Card";

const iconMap = {
  User,
  Beef,
  Star,
} as const;

export default function HomeSummary() {
  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeading
        overline={homeSummary.overline}
        headline={homeSummary.headline}
      />
      <StaggerChildren
        className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
        stagger={0.15}
      >
        {homeSummary.cards.map((card) => {
          const Icon = iconMap[card.icon];
          return (
            <Link key={card.href} href={card.href} className="group">
              <Card className="h-full text-center">
                <div className="w-14 h-14 rounded-full bg-brand/15 flex items-center justify-center mx-auto mb-5 group-hover:bg-brand/25 transition-colors">
                  <Icon size={24} className="text-brand" />
                </div>
                <h3 className="font-display text-xl font-bold text-cream mb-3">
                  {card.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  {card.description}
                </p>
              </Card>
            </Link>
          );
        })}
      </StaggerChildren>
    </section>
  );
}
