import TextReveal from "./TextReveal";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  overline?: string;
  headline: string;
  subtitle?: string;
  className?: string;
  light?: boolean;
}

export default function SectionHeading({
  overline,
  headline,
  subtitle,
  className,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={cn("text-center mb-12 md:mb-16", className)}>
      {overline && (
        <p className="text-brand font-medium tracking-widest uppercase text-sm mb-3">
          {overline}
        </p>
      )}
      <TextReveal
        text={headline}
        mode="word"
        as="h2"
        className={cn(
          "font-display text-3xl md:text-4xl lg:text-5xl font-bold justify-center",
          light ? "text-text-dark" : "text-cream"
        )}
      />
      {subtitle && (
        <p className="mt-4 text-text-muted max-w-2xl mx-auto text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}
