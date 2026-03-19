import { reviews } from "@/lib/reviews";
import StaggerChildren from "@/components/ui/StaggerChildren";
import ReviewCard from "@/components/ui/ReviewCard";

export default function ReviewsGrid() {
  return (
    <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <StaggerChildren
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        stagger={0.12}
      >
        {reviews.map((review) => (
          <ReviewCard key={review.author} review={review} />
        ))}
      </StaggerChildren>
    </section>
  );
}
