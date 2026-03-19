"use client";

import { motion } from "framer-motion";
import { staggerItemVariants } from "./StaggerChildren";
import StarRating from "./StarRating";
import type { Review } from "@/lib/reviews";

interface ReviewCardProps {
  review: Review;
}

export default function ReviewCard({ review }: ReviewCardProps) {
  return (
    <motion.div
      variants={staggerItemVariants}
      className="bg-bg-card border border-border-dark rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-brand/40"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-brand/20 flex items-center justify-center text-brand font-bold text-sm">
            {review.author.charAt(0)}
          </div>
          <span className="font-medium text-cream">{review.author}</span>
        </div>
        <StarRating rating={review.rating} size={16} />
      </div>
      <p className="text-text-muted leading-relaxed">{review.text}</p>
    </motion.div>
  );
}
