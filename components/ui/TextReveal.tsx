"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/utils";

interface TextRevealProps {
  text: string;
  mode?: "word" | "line";
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  delay?: number;
}

export default function TextReveal({
  text,
  mode = "word",
  className,
  as: Tag = "p",
  delay = 0,
}: TextRevealProps) {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return <Tag className={className}>{text}</Tag>;
  }

  const items =
    mode === "word"
      ? text.split(" ")
      : text.split(/(?<=\. )/).filter(Boolean);

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: mode === "word" ? 0.05 : 0.15,
        delayChildren: delay,
      },
    },
  };

  const itemVariants =
    mode === "word"
      ? {
          hidden: { opacity: 0, y: 20 },
          show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
        }
      : {
          hidden: { opacity: 0, x: -30 },
          show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
        };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      className={cn("flex flex-wrap", mode === "word" ? "gap-x-2" : "", className)}
      role="presentation"
    >
      {items.map((item, i) => (
        <motion.span
          key={i}
          variants={itemVariants}
          className={mode === "line" ? "block" : undefined}
        >
          {item}
        </motion.span>
      ))}
    </motion.div>
  );
}
