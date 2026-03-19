"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export default function Badge({ children, className }: BadgeProps) {
  return (
    <motion.span
      variants={{
        hidden: { opacity: 0, scale: 0.8 },
        show: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
      }}
      className={cn(
        "inline-flex items-center rounded-full bg-brand/15 text-brand-light border border-brand/30 px-4 py-1.5 text-sm font-medium",
        className
      )}
    >
      {children}
    </motion.span>
  );
}
