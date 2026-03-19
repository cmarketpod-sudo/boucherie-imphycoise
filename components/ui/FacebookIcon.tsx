import { FACEBOOK_URL } from "@/lib/navigation";
import { cn } from "@/lib/utils";

interface FacebookIconProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizes = {
  sm: "w-8 h-8",
  md: "w-10 h-10",
  lg: "w-12 h-12",
};

export default function FacebookIcon({
  size = "md",
  className,
}: FacebookIconProps) {
  return (
    <a
      href={FACEBOOK_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Suivez-nous sur Facebook"
      className={cn(
        "inline-flex items-center justify-center rounded-full bg-facebook text-white transition-all duration-300 hover:scale-110 hover:shadow-lg",
        sizes[size],
        className
      )}
    >
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-1/2 h-1/2"
        aria-hidden="true"
      >
        <path d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 0 1 1-1h3v-4h-3a5 5 0 0 0-5 5v2.01h-2l-.396 3.98h2.396v8.01Z" />
      </svg>
    </a>
  );
}
