const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  // Ensure Category exists
  const categorySlug = 'pashmina-cashmere';
  let category = await prisma.category.findUnique({ where: { slug: categorySlug } });
  
  if (!category) {
    category = await prisma.category.create({
      data: {
        name: 'Pashmina & Cashmere',
        slug: categorySlug,
        description: 'Authentic hand-spun and hand-woven luxury wraps from the valleys of Kashmir.'
      }
    });
    console.log('Created category:', category.name);
  }

  // Create Product
  const productSlug = 'heritage-kashmiri-pashmina-wrap';
  const existingProduct = await prisma.product.findUnique({ where: { slug: productSlug } });
  
  if (!existingProduct) {
    const product = await prisma.product.create({
      data: {
        title: 'Heritage Kashmiri Pashmina Wrap',
        slug: productSlug,
        subtitle: 'Hand-spun pure cashmere, whisper-light warmth',
        description: 'A genuine masterpiece of Kashmiri craftsmanship. Spun by hand from the finest Capra Hircus down and woven on traditional wooden looms, this wrap represents months of meticulous artisan labor. Exceptionally light, yet offering profound warmth, it is an heirloom piece designed for generations.',
        price: 580.00,
        images: JSON.stringify(['/images/story_hero.png', '/images/artisan_crafting.png']),
        hoverImage: '/images/artisan_crafting.png',
        inventory: 15,
        categoryId: category.id,
        craftOrigin: 'Verified Authentic Pashmina',
        giStatus: 'GI Certified Kashmir Pashmina',
        craftRegion: 'Srinagar, Kashmir',
        artisanCluster: 'Downtown Srinagar Weavers Guild',
        material: '100% Pure Hand-spun Cashmere (Pashm)',
        technique: 'Hand-spun on Charkha, Handwoven on traditional loom',
        careInstructions: 'Professional dry clean only. Store folded in a breathable cotton or muslin bag.',
        countryOfOrigin: 'India',
        dispatchType: 'Ready to Ship',
        shippingNote: 'Ships globally in a protective IDFIS presentation box.',
        packagingNote: 'Wrapped in acid-free tissue, enclosed in a rigid keepsake box for international travel.',
        returnEligibility: 'Eligible for return within 14 days of delivery.',
        sku: 'PASH-001-IVO',
        tags: JSON.stringify(['pashmina', 'cashmere', 'luxury', 'wrap', 'kashmir', 'handwoven']),
        seoTitle: 'Authentic Kashmiri Pashmina Wrap | IDFIS Luxury',
        seoDescription: 'Discover the Heritage Kashmiri Pashmina Wrap by IDFIS. Pure hand-spun cashmere, authentically handwoven in Kashmir for whisper-light warmth and timeless elegance.'
      }
    });
    
    // Add Variants
    await prisma.productVariant.createMany({
      data: [
        {
          productId: product.id,
          name: 'Ivory Cream',
          type: 'Color',
          value: 'Ivory Cream',
          sku: 'PASH-001-IVO',
          inventory: 10
        },
        {
          productId: product.id,
          name: 'Walnut Brown',
          type: 'Color',
          value: 'Walnut Brown',
          sku: 'PASH-001-WAL',
          inventory: 5
        }
      ]
    });
    
    console.log('Successfully added product:', product.title);
  } else {
    console.log('Product already exists.');
  }
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
