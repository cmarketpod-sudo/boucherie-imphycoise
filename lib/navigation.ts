export interface NavLink {
  label: string;
  href: string;
  description?: string;
}

export const navLinks: NavLink[] = [
  { label: "Accueil", href: "/", description: "Page d'accueil" },
  { label: "Qui sommes-nous", href: "/qui-sommes-nous", description: "Notre histoire" },
  { label: "Nos produits", href: "/nos-produits", description: "Nos spécialités" },
  { label: "Avis clients", href: "/avis-clients", description: "Témoignages" },
  { label: "Contact", href: "/contact", description: "Nous contacter" },
];

export const FACEBOOK_URL =
  "https://www.facebook.com/p/Boucherie-Charcuterie-Imphycoise-61574725900502/";

export const PHONE = "06 52 40 72 00";
export const PHONE_HREF = "tel:+33652407200";
export const EMAIL = "boucherieimphycoise@outlook.fr";
export const EMAIL_HREF = "mailto:boucherieimphycoise@outlook.fr";
export const ADDRESS = "25 avenue Jean Jaurès, 58160 Imphy";
