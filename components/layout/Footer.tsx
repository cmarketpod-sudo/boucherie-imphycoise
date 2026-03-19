import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";
import { navLinks, PHONE, PHONE_HREF, EMAIL, EMAIL_HREF, ADDRESS } from "@/lib/navigation";
import { siteConfig } from "@/lib/content";
import FacebookIcon from "@/components/ui/FacebookIcon";

export default function Footer() {
  return (
    <footer className="bg-bg-footer border-t border-border-dark" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1: Logo + description */}
          <div>
            <Link href="/">
              <Image
                src="/images/logo.jpg"
                alt="Logo Boucherie Charcuterie Imphycoise"
                width={64}
                height={64}
                className="w-16 h-16 rounded-full mb-4"
              />
            </Link>
            <p className="text-text-muted text-sm leading-relaxed">
              {siteConfig.description}
            </p>
          </div>

          {/* Col 2: Liens rapides */}
          <div>
            <h3 className="font-display text-cream font-bold text-lg mb-4">
              Liens rapides
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-text-muted hover:text-cream transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Coordonnées */}
          <div>
            <h3 className="font-display text-cream font-bold text-lg mb-4">
              Coordonnées
            </h3>
            <ul className="space-y-3 text-sm text-text-muted">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-brand mt-0.5 flex-shrink-0" />
                <span>{ADDRESS}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-brand flex-shrink-0" />
                <a href={PHONE_HREF} className="hover:text-cream transition-colors">
                  {PHONE}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-brand flex-shrink-0" />
                <a href={EMAIL_HREF} className="hover:text-cream transition-colors">
                  {EMAIL}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Suivez-nous */}
          <div>
            <h3 className="font-display text-cream font-bold text-lg mb-4">
              Suivez-nous
            </h3>
            <p className="text-text-muted text-sm mb-4">
              Retrouvez nos actualités et promotions sur Facebook.
            </p>
            <FacebookIcon size="lg" />
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-border-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-text-muted text-xs">
            &copy; 2025 Boucherie Charcuterie Imphycoise — Tous droits réservés
          </p>
        </div>
      </div>
    </footer>
  );
}
