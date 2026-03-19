export interface Review {
  author: string;
  rating: number;
  text: string;
}

export const reviews: Review[] = [
  {
    author: "Marie L.",
    rating: 5,
    text: "Une boucherie exceptionnelle ! La viande est d'une qualité remarquable. Henrique est de très bon conseil et toujours souriant.",
  },
  {
    author: "Pierre D.",
    rating: 5,
    text: "Enfin un vrai boucher à Imphy ! Les charolaises sont magnifiques, la charcuterie maison un régal. Je recommande les yeux fermés.",
  },
  {
    author: "Sophie M.",
    rating: 5,
    text: "Accueil chaleureux, produits frais. Les plateaux barbecue pour notre fête de famille étaient parfaits. On y retourne chaque semaine !",
  },
  {
    author: "Jean-Claude R.",
    rating: 4,
    text: "Très bonne boucherie de quartier. Large choix de viandes et charcuteries. Le boucher prend le temps de bien conseiller.",
  },
  {
    author: "Nathalie B.",
    rating: 5,
    text: "Le porc fermier d'Auvergne est une tuerie ! Et les fromages de la ferme partenaire sont un vrai plus. Merci pour cette belle adresse.",
  },
  {
    author: "Christophe F.",
    rating: 5,
    text: "Henrique connaît son métier sur le bout des doigts. La qualité est au rendez-vous, les prix sont justes. Imphy a enfin retrouvé sa boucherie !",
  },
];
