import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps {
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "facebook";
  children: React.ReactNode;
  className?: string;
  external?: boolean;
}

const variants = {
  primary:
    "bg-brand hover:bg-brand-light text-white shadow-lg hover:shadow-xl",
  secondary:
    "bg-white/10 hover:bg-white/20 text-white border border-white/20",
  outline:
    "border-2 border-brand text-brand hover:bg-brand hover:text-white",
  facebook:
    "bg-facebook hover:bg-facebook/90 text-white",
};

export default function Button({
  href,
  variant = "primary",
  children,
  className,
  external = false,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 font-medium transition-all duration-300 text-sm md:text-base",
    variants[variant],
    className
  );

  if (href && external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {children}
      </a>
    );
  }

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return <button className={classes}>{children}</button>;
}
