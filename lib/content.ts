/* ═══════════════════════════════════════
   Textes centralisés — Boucherie Imphy
   ═══════════════════════════════════════ */

export const siteConfig = {
  name: "Boucherie Charcuterie Imphycoise",
  shortName: "Boucherie Imphycoise",
  description:
    "Votre artisan boucher à Imphy — viandes charolaises, charcuterie maison, traiteur.",
  owner: "Henrique Chagas",
};

/* ── Page Accueil ────────────────────── */

export const hero = {
  overline: "Boucherie · Charcuterie · Traiteur",
  headline: "Boucherie Charcuterie Imphycoise",
  subheadline:
    "L'excellence du terroir par Henrique Chagas — viandes charolaises, charcuterie maison, traiteur à Imphy",
  ctaPrimary: "Découvrir nos produits",
  ctaSecondary: "Nous appeler — 06 52 40 72 00",
};

export const homeSummary = {
  overline: "Découvrir",
  headline: "Bienvenue à la boucherie",
  cards: [
    {
      href: "/qui-sommes-nous",
      icon: "User" as const,
      title: "Notre histoire",
      description:
        "Découvrez le parcours passionné d'Henrique Chagas, du Brésil à Imphy.",
    },
    {
      href: "/nos-produits",
      icon: "Beef" as const,
      title: "Nos produits",
      description:
        "Viandes charolaises, charcuterie maison, traiteur et plateaux barbecue.",
    },
    {
      href: "/avis-clients",
      icon: "Star" as const,
      title: "Avis clients",
      description:
        "Ce que disent nos clients — consultez les avis Google.",
    },
  ],
};

export const homeCTA = {
  headline: "Envie de goûter la différence ?",
  body: "Passez nous voir au 25 avenue Jean Jaurès à Imphy, ou appelez-nous.",
  ctaPrimary: "Nous contacter",
  ctaSecondary: "06 52 40 72 00",
};

/* ── Page Qui sommes-nous ────────────── */

export const about = {
  hero: {
    overline: "Notre histoire",
    headline: "L'excellence du terroir par Henrique Chagas",
  },
  paragraphs: [
    "Après plus de vingt ans d'absence, la boucherie traditionnelle fait son grand retour à Imphy. Située à deux pas de la Place des Martyrs, au 25 avenue Jean Jaurès, votre nouvelle adresse gourmande vous ouvre ses portes pour une expérience artisanale authentique, portée par la passion et le savoir-faire de Henrique Chagas.",
  ],
  subtitle1: "Un boucher passionné, un parcours de caractère",
  paragraphs2: [
    "Derrière le comptoir se cache une histoire de vie aussi solide qu'une mêlée de rugby. Né au Brésil et arrivé en Haute-Savoie à l'âge de 13 ans, Henrique a forgé son caractère entre le terrain de sport et les chambres froides.",
    "Titulaire d'un CAP dès ses 15 ans, il a affiné sa technique en grande distribution avant de poser ses valises dans la Nièvre. Ancien joueur de l'ES Saint-Léger, il a décidé de transformer son amour du métier en un projet de vie : redonner à Imphy une boucherie digne de ce nom.",
  ],
  subtitle2: "Notre savoir-faire : Qualité, proximité et « Fait Maison »",
  paragraphs3: [
    "Dans les murs entièrement rénovés de l'ancienne boucherie Gaudry, Henrique s'engage à faire revivre l'art de la boucherie-charcuterie traditionnelle. Notre mission est claire : vous offrir le meilleur de la viande de proximité.",
  ],
  bulletPoints: [
    "Viandes de qualité : circuits courts, bêtes sélectionnées avec soin.",
    "Charcuterie maison : produits authentiques, préparés sur place.",
    "Service Traiteur : repas de groupe, plateaux barbecue, événements.",
  ],
  quote: {
    text: "J'aime ce métier passionnément, comme le rugby. Mon ambition est de proposer un service de proximité qui manquait cruellement aux habitants d'Imphy.",
    author: "Henrique Chagas",
  },
  cta: {
    headline: "Curieux de découvrir nos produits ?",
    label: "Voir nos spécialités",
    href: "/nos-produits",
  },
};

/* ── Page Nos produits ──────────────── */

export const products = {
  hero: {
    overline: "Nos spécialités",
    headline: "Du terroir à votre assiette",
  },
  intro:
    "Nous privilégions les circuits courts et les bêtes sélectionnées avec soin. Tout est préparé sur place selon des méthodes artisanales.",
  cards: [
    {
      icon: "Beef" as const,
      title: "Boucherie traditionnelle",
      description:
        "Viandes 100% françaises et locales — charolaises sélectionnées aux Grivelles à Sancoins chez des éleveurs de confiance.",
    },
    {
      icon: "Ham" as const,
      title: "Charcuterie artisanale",
      description:
        "Recettes maison et saveurs authentiques — saucissons, pâtés, terrines, boudins préparés dans notre laboratoire.",
    },
    {
      icon: "ChefHat" as const,
      title: "Traiteur & Barbecue",
      description:
        "Plateaux personnalisés pour vos événements, repas de groupe et nos célèbres plateaux barbecue sur commande.",
    },
    {
      icon: "Egg" as const,
      title: "Produits fermiers locaux",
      description:
        "Fromages de vaches et chèvres, œufs fermiers — en partenariat avec la ferme Cœur de Chèvres 2.0.",
    },
  ],
  badges: [
    "Porc Fermier d'Auvergne",
    "Viandes 100% françaises",
    "Fait maison",
    "Circuits courts",
  ],
  quality: {
    overline: "Nos engagements",
    headline: "Pourquoi nous choisir",
    items: [
      {
        specialty: "Boucherie traditionnelle",
        engagement: "Viandes 100% françaises et locales",
        icon: "ShieldCheck" as const,
      },
      {
        specialty: "Charcuterie artisanale",
        engagement: "Recettes maison, saveurs authentiques",
        icon: "Award" as const,
      },
      {
        specialty: "Traiteur & Barbecue",
        engagement: "Plateaux personnalisés pour vos événements",
        icon: "Flame" as const,
      },
      {
        specialty: "Service de proximité",
        engagement: "Accueil chaleureux et conseils d'expert",
        icon: "Heart" as const,
      },
    ],
  },
  cta: {
    headline: "Une question ? Un besoin spécial ?",
    label: "Nous contacter",
    href: "/contact",
  },
};

/* ── Page Avis clients ──────────────── */

export const reviewsPage = {
  hero: {
    overline: "Témoignages",
    headline: "Ce que disent nos clients",
  },
  score: {
    rating: 4.8,
    count: 45,
    label: "avis sur Google",
  },
  cta: {
    headline: "Vous aussi, donnez votre avis !",
    googleLabel: "Laisser un avis Google",
    contactLabel: "Ou contactez-nous",
    contactHref: "/contact",
  },
};

/* ── Page Contact ───────────────────── */

export const contact = {
  hero: {
    overline: "Nous trouver",
    headline: "Contactez-nous",
  },
  hours: [
    { day: "Mardi – Samedi", time: "8h30 – 12h30 / 15h30 – 18h30" },
    { day: "Dimanche", time: "8h – 12h" },
    { day: "Lundi", time: "Fermé" },
  ],
  devis: {
    headline: "Banquet, séminaire, mariage ?",
    body: "Nous préparons vos buffets, plateaux et pièces de viande sur mesure pour tous vos événements.",
    ctaLabel: "Demander un devis",
    ctaUrl: "#devis",
  },
};

/* ── Facebook Banner ────────────────── */

export const facebookBanner = {
  text: "Retrouvez nos actualités sur Facebook",
  cta: "Suivre notre page",
};
