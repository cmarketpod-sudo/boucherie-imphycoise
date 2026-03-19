import { Beef, Ham, ChefHat, Egg } from "lucide-react";
import { products } from "@/lib/content";
import SectionHeading from "@/components/ui/SectionHeading";
import StaggerChildren from "@/components/ui/StaggerChildren";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import TextReveal from "@/components/ui/TextReveal";

const iconMap = {
  Beef,
  Ham,
  ChefHat,
  Egg,
} as const;

export default function ProductsGrid() {
  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <TextReveal
        text={products.intro}
        mode="line"
        className="text-text-muted text-lg text-center max-w-3xl mx-auto mb-16"
      />

      <StaggerChildren
        className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
        stagger={0.12}
      >
        {products.cards.map((card) => {
          const Icon = iconMap[card.icon];
          return (
            <Card key={card.title}>
              <div className="w-14 h-14 rounded-full bg-brand/15 flex items-center justify-center mb-5">
                <Icon size={24} className="text-brand" />
              </div>
              <h3 className="font-display text-xl font-bold text-cream mb-3">
                {card.title}
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                {card.description}
              </p>
            </Card>
          );
        })}
      </StaggerChildren>

      {/* Badges */}
      <StaggerChildren
        className="flex flex-wrap gap-3 justify-center mt-12"
        stagger={0.08}
      >
        {products.badges.map((badge) => (
          <Badge key={badge}>{badge}</Badge>
        ))}
      </StaggerChildren>
    </section>
  );
}
