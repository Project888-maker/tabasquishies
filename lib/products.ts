export type Product = {
  id: number;
  name: string;
  price: number;
  tag: string;
  badge?: string;
  description: string;
};

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Cloud Mochi Orb",
    price: 24.99,
    tag: "Signature Series",
    badge: "Best Seller",
    description: "Ultra-slow-rise foam with a velvet matte finish. Endlessly squeezable.",
  },
  {
    id: 2,
    name: "Obsidian Bear",
    price: 34.99,
    tag: "Dark Collection",
    badge: "Limited",
    description: "Charcoal-scented slow-rise with gloss eyes. Dark luxury redefined.",
  },
  {
    id: 3,
    name: "Peach Latte Bunny",
    price: 28.99,
    tag: "Café Series",
    description: "Soft peachy foam with a subtle latte swirl. Warm and weightless.",
  },
  {
    id: 4,
    name: "Midnight Galaxy Cat",
    price: 39.99,
    tag: "Galaxy Drop",
    badge: "New",
    description: "Deep indigo with star-fleck texture. Iridescent slow-rise foam.",
  },
  {
    id: 5,
    name: "Honey Bear Toast",
    price: 22.99,
    tag: "Bakery Series",
    description: "Golden-brown micro-textured foam with honey-drizzle detailing.",
  },
  {
    id: 6,
    name: "Aurora Jellyfish",
    price: 44.99,
    tag: "Ethereal Edit",
    badge: "Sold Out",
    description: "Semi-translucent slow-rise with glow-in-the-dark tendrils.",
  },
  {
    id: 7,
    name: "Matcha Panda",
    price: 29.99,
    tag: "Café Series",
    description: "Earthy green matte foam, impossibly slow rise. A cult classic.",
  },
  {
    id: 8,
    name: "Velvet Strawberry",
    price: 26.99,
    tag: "Signature Series",
    badge: "Best Seller",
    description: "Deep crimson velvet coating over ultra-soft slow-rise foam.",
  },
];

export const CATEGORIES = ["All", "Signature Series", "Dark Collection", "Café Series", "Galaxy Drop", "Bakery Series", "Ethereal Edit"];
