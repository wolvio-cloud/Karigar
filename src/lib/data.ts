export type Product = {
  id: string;
  slug: string;
  name: string;
  category: string;
  categorySlug: string;
  basePriceINR: number;
  description: string;
  image: string;
  sizes: string[];
};

export const products: Product[] = [
  {
    id: 'p1',
    slug: 'heritage-silk-saree',
    name: 'Heritage Emerald Silk Saree',
    category: 'Sarees',
    categorySlug: 'sarees',
    basePriceINR: 45000, // ~ $540
    description: 'A masterpiece of traditional weaving, featuring rich emerald green silk with intricate zari work. Hand-loomed over 45 days by master artisans in Kanchipuram.',
    image: '/images/hero.png',
    sizes: ['Free Size']
  },
  {
    id: 'p2',
    slug: 'royal-kashmir-coat',
    name: 'Royal Hand-Embroidered Kashmir Coat',
    category: 'Kashmir Coats',
    categorySlug: 'kashmir-coats',
    basePriceINR: 85000, // ~ $1020
    description: 'Luxurious pure pashmina coat featuring exquisite sozni embroidery. A timeless winter heirloom that passes down generations.',
    image: '/images/coat.png',
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 'p3',
    slug: 'ivory-silk-kurta',
    name: 'Ivory Raw Silk Kurta Set',
    category: 'Elegant Kurtas',
    categorySlug: 'kurtas',
    basePriceINR: 28000, // ~ $335
    description: 'Minimalist elegance tailored to perfection. Crafted from unbleached raw silk with subtle tonal embroidery on the collar and cuffs.',
    image: '/images/kurta.png',
    sizes: ['S', 'M', 'L', 'XL', 'XXL']
  }
];

export const exchangeRates = {
  INR: 1,
  USD: 0.012,
  EUR: 0.011,
  GBP: 0.0095,
};

export type Currency = keyof typeof exchangeRates;

export const formatPrice = (priceINR: number, currency: Currency) => {
  const converted = priceINR * exchangeRates[currency];
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 0,
  }).format(converted);
};
