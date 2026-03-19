"use client";

import { motion } from "framer-motion";
import { staggerItemVariants } from "./StaggerChildren";
import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className }: CardProps) {
  return (
    <motion.div
      variants={staggerItemVariants}
      className={cn(
        "bg-bg-card border border-border-dark rounded-2xl p-6 md:p-8 transition-all duration-300",
        "hover:-translate-y-2 hover:shadow-xl hover:border-brand/50",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
