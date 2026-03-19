import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Boucherie Charcuterie Imphycoise | Artisan boucher à Imphy (58)",
  description:
    "Boucherie charcuterie artisanale à Imphy (58160) — viandes charolaises, charcuterie maison, traiteur. Henrique Chagas, votre artisan boucher passionné.",
  openGraph: {
    title: "Boucherie Charcuterie Imphycoise | Artisan boucher à Imphy",
    description:
      "Viandes charolaises, charcuterie maison, traiteur à Imphy. Qualité, proximité, fait maison.",
    locale: "fr_FR",
    type: "website",
    images: [{ url: "/images/logo.jpg", width: 800, height: 800, alt: "Logo Boucherie Charcuterie Imphycoise" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Store",
  name: "Boucherie Charcuterie Imphycoise",
  image: "/images/logo.jpg",
  telephone: "+33652407200",
  email: "boucherieimphycoise@outlook.fr",
  address: {
    "@type": "PostalAddress",
    streetAddress: "25 avenue Jean Jaurès",
    addressLocality: "Imphy",
    postalCode: "58160",
    addressCountry: "FR",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "08:30",
      closes: "12:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "15:30",
      closes: "18:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "08:00",
      closes: "12:00",
    },
  ],
  sameAs: [
    "https://www.facebook.com/p/Boucherie-Charcuterie-Imphycoise-61574725900502/",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "45",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${playfair.variable} ${dmSans.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
