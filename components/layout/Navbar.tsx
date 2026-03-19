"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { navLinks, FACEBOOK_URL, PHONE, PHONE_HREF } from "@/lib/navigation";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import FacebookIcon from "@/components/ui/FacebookIcon";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const pathname = usePathname();
  const { scrollY } = useScrollDirection();
  const [mobileOpen, setMobileOpen] = useState(false);
  const scrolled = scrollY > 50;

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-bg-dark/95 backdrop-blur-lg shadow-lg"
          : "bg-transparent"
      )}
      role="navigation"
      aria-label="Navigation principale"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex-shrink-0 transition-transform duration-300 hover:scale-105"
          >
            <Image
              src="/images/logo.jpg"
              alt="Logo Boucherie Charcuterie Imphycoise"
              width={48}
              height={48}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full"
              priority
            />
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative text-sm font-medium transition-colors duration-300",
                    isActive ? "text-brand" : "text-cream/80 hover:text-cream"
                  )}
                >
                  {link.label}
                  <span
                    className={cn(
                      "absolute -bottom-1 left-0 h-0.5 bg-brand transition-transform duration-300 origin-left",
                      isActive ? "w-full scale-x-100" : "w-full scale-x-0"
                    )}
                  />
                </Link>
              );
            })}
          </div>

          {/* Desktop right: FB + Phone */}
          <div className="hidden lg:flex items-center gap-4">
            <FacebookIcon size="sm" />
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 bg-brand hover:bg-brand-light text-white rounded-full px-5 py-2 text-sm font-medium transition-colors duration-300"
            >
              <Phone size={16} />
              {PHONE}
            </a>
          </div>

          {/* Mobile burger */}
          <button
            className="lg:hidden text-cream p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-0 top-16 bg-bg-dark/98 backdrop-blur-lg z-40 lg:hidden"
          >
            <div className="flex flex-col items-center gap-6 pt-12">
              {navLinks.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "text-xl font-medium transition-colors",
                      isActive ? "text-brand" : "text-cream"
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <div className="flex items-center gap-4 mt-8">
                <FacebookIcon size="md" />
                <a
                  href={PHONE_HREF}
                  className="inline-flex items-center gap-2 bg-brand text-white rounded-full px-6 py-3 font-medium"
                >
                  <Phone size={18} />
                  {PHONE}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
