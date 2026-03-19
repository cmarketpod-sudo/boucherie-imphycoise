import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface StarRatingProps {
  rating: number;
  size?: number;
  className?: string;
}

export default function StarRating({
  rating,
  size = 20,
  className,
}: StarRatingProps) {
  return (
    <div className={cn("flex gap-0.5", className)} aria-label={`${rating} étoiles sur 5`}>
      {Array.from({ length: 5 }, (_, i) => {
        const fill = Math.min(1, Math.max(0, rating - i));
        return (
          <span key={i} className="relative" style={{ width: size, height: size }}>
            <Star size={size} className="text-border-dark" fill="currentColor" />
            <span
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${fill * 100}%` }}
            >
              <Star size={size} className="text-gold" fill="currentColor" />
            </span>
          </span>
        );
      })}
    </div>
  );
}
