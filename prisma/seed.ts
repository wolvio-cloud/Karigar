import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // 1. Clear existing data
  await prisma.orderItem.deleteMany({});
  await prisma.order.deleteMany({});
  await prisma.product.deleteMany({});
  await prisma.category.deleteMany({});

  // 2. Create Categories
  const coats = await prisma.category.upsert({
    where: { slug: 'kashmir-coats' },
    update: {},
    create: {
      name: 'Kashmir Coats',
      slug: 'kashmir-coats',
      description: 'Handwoven pure pashmina and wool coats from the valleys of Kashmir.',
    },
  })

  const sarees = await prisma.category.upsert({
    where: { slug: 'sarees' },
    update: {},
    create: {
      name: 'Heritage Sarees',
      slug: 'sarees',
      description: 'Timeless handloom sarees showcasing generational weaving techniques.',
    },
  })

  const kurtas = await prisma.category.upsert({
    where: { slug: 'kurtas' },
    update: {},
    create: {
      name: 'Silk Kurtas',
      slug: 'kurtas',
      description: 'Minimalist, elegant silk kurtas designed for modern luxury.',
    },
  })

  const accessories = await prisma.category.upsert({
    where: { slug: 'accessories' },
    update: {},
    create: {
      name: 'Artisan Accessories',
      slug: 'accessories',
      description: 'Curated handcrafted accessories to complete your look.',
    },
  })

  // 3. Create Products

  const authenticProducts = [
    // --- KASHMIR COATS ---
    {
      title: 'Midnight Pashmina Coat',
      slug: 'midnight-pashmina-coat',
      description: 'A deeply luxurious midnight blue coat, handwoven from 100% pure Kashmir pashmina. It features subtle Aari embroidery along the lapel. Takes 3 months to complete by master weavers.',
      price: 85000,
      images: JSON.stringify(['/images/bento_coat.png']),
      inventory: 5,
      categoryId: coats.id,
    },
    {
      title: 'Walnut Brown Kullu Tweed Trench',
      slug: 'kullu-tweed-trench',
      description: 'Hand-loomed in the Kullu valley, this structured trench coat uses pure sheep wool featuring traditional geometric borders subtly woven into the cuffs.',
      price: 65000,
      images: JSON.stringify(['/images/bento_coat.png']),
      inventory: 12,
      categoryId: coats.id,
    },
    {
      title: 'Ivory Shahtoosh-blend Overcoat',
      slug: 'ivory-overcoat',
      description: 'An incredibly lightweight yet warm ivory overcoat. Blended with the finest mountain wool and finished with wooden buttons hand-carved in Saharanpur.',
      price: 110000,
      images: JSON.stringify(['/images/bento_coat.png']),
      inventory: 3,
      categoryId: coats.id,
    },

    // --- HERITAGE SAREES ---
    {
      title: 'Terracotta Banarasi Silk Saree',
      slug: 'terracotta-banarasi-saree',
      description: 'A rich terracotta handloom Banarasi silk saree featuring intricate pure gold zari floral borders. Woven in Varanasi over 45 days. An absolute heirloom piece.',
      price: 45000,
      images: JSON.stringify(['/images/bento_saree.png']),
      inventory: 8,
      categoryId: sarees.id,
    },
    {
      title: 'Midnight Blue Kanjeevaram Saree',
      slug: 'kanjeevaram-midnight-saree',
      description: 'Woven in the temple town of Kanchipuram, this heavy mulberry silk saree features classic temple borders and a majestic contrast pallu.',
      price: 68000,
      images: JSON.stringify(['/images/bento_saree.png']),
      inventory: 4,
      categoryId: sarees.id,
    },
    {
      title: 'Ivory Chanderi Cotton-Silk Saree',
      slug: 'ivory-chanderi-saree',
      description: 'Lightweight, sheer, and incredibly elegant. This Chanderi saree features fine silver zari buttas (motifs) across the body, perfect for morning events.',
      price: 22000,
      images: JSON.stringify(['/images/bento_saree.png']),
      inventory: 15,
      categoryId: sarees.id,
    },
    {
      title: 'Crimson Patola Ikat Saree',
      slug: 'crimson-patola-saree',
      description: 'A double Ikat weave from Patan, Gujarat. The geometric precision in this silk saree takes months of mathematical tie-dyeing before the weaving even begins.',
      price: 125000,
      images: JSON.stringify(['/images/bento_saree.png']),
      inventory: 2,
      categoryId: sarees.id,
    },

    // --- SILK KURTAS ---
    {
      title: 'Ivory Raw Silk Kurta',
      slug: 'ivory-silk-kurta',
      description: 'A stunningly minimalist ivory kurta made from the finest Bhagalpuri raw silk. Perfect for effortless evening wear, featuring a classic mandarin collar.',
      price: 24000,
      images: JSON.stringify(['/images/bento_kurta.png']),
      inventory: 20,
      categoryId: kurtas.id,
    },
    {
      title: 'Sage Green Chikankari Kurta',
      slug: 'sage-chikankari-kurta',
      description: 'Hand-embroidered by women artisans in Lucknow, this soft georgette kurta features intricate white threadwork (shadow work) that takes weeks to complete.',
      price: 18500,
      images: JSON.stringify(['/images/bento_kurta.png']),
      inventory: 25,
      categoryId: kurtas.id,
    },
    {
      title: 'Charcoal Tussar Silk Kurta',
      slug: 'charcoal-tussar-kurta',
      description: 'Made from wild Ahimsa silk (Tussar), this charcoal grey kurta has a beautiful natural golden sheen and a rich, slightly textured feel.',
      price: 28000,
      images: JSON.stringify(['/images/bento_kurta.png']),
      inventory: 10,
      categoryId: kurtas.id,
    },

    // --- ARTISAN ACCESSORIES ---
    {
      title: 'Minimalist Terracotta Storage Tray',
      slug: 'minimalist-storage-tray',
      description: 'A sleek, modern terracotta tray hand-thrown by potters in Rajasthan. Perfect for organizing your finest jewelry or desk accessories.',
      price: 4500,
      images: JSON.stringify(['/images/bento_accessories_1780216717849.png']),
      inventory: 50,
      categoryId: accessories.id,
    },
    {
      title: 'Vintage Brass Dhokra Horse',
      slug: 'brass-dhokra-horse',
      description: 'Created using the 4,000-year-old lost-wax casting technique by tribal artisans in Bastar. A heavy, beautiful brass artifact for your living space.',
      price: 12000,
      images: JSON.stringify(['/images/bento_accessories_1780216717849.png']),
      inventory: 12,
      categoryId: accessories.id,
    },
    {
      title: 'Hand-Carved Walnut Wood Box',
      slug: 'walnut-wood-box',
      description: 'Sourced from the forests of Kashmir, this deep brown walnut wood box features incredible undercut floral carving. Ideal for keepsakes.',
      price: 8500,
      images: JSON.stringify(['/images/bento_accessories_1780216717849.png']),
      inventory: 18,
      categoryId: accessories.id,
    },
    {
      title: 'Jaipur Blue Pottery Vase',
      slug: 'blue-pottery-vase',
      description: 'A striking cobalt blue and turquoise vase, made without clay using a traditional dough of quartz stone powder, powdered glass, and Multani Mitti.',
      price: 6000,
      images: JSON.stringify(['/images/bento_accessories_1780216717849.png']),
      inventory: 30,
      categoryId: accessories.id,
    }
  ];

  for (const product of authenticProducts) {
    await prisma.product.upsert({
      where: { slug: product.slug },
      update: product,
      create: product,
    });
  }

  console.log('Database seeded with massive authentic Indian luxury catalog!')
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
