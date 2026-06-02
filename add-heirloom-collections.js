const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const collections = [
    {
      slug: 'kashmir-pashmina-sozni-heirlooms',
      name: 'Kashmir Pashmina & Sozni Heirlooms',
      description: 'Woven warmth from the valley — fine shawls, stoles, and wraps crafted for elegance, gifting, and generational care.',
      products: [
        { title: 'Ivory Sozni Embroidered Shawl', slug: 'kashmir-ivory-sozni', subtitle: 'Delicate embroidery on a soft ivory winter shawl.', price: 525, dispatchType: 'Bestseller' },
        { title: 'Charcoal Kashmir Wool Wrap', slug: 'kashmir-charcoal-wrap', subtitle: 'A sophisticated wrap for cold-weather elegance.', price: 475, dispatchType: 'New' },
        { title: 'Blush Embroidered Stole', slug: 'kashmir-blush-stole', subtitle: 'Feminine tone, fine embroidery, and graceful drape.', price: 465, dispatchType: 'Gift Ready' },
        { title: 'Sand Pashmina-Style Shawl', slug: 'kashmir-sand-shawl', subtitle: 'Neutral luxury for everyday warmth and gifting.', price: 495, dispatchType: 'New' },
        { title: 'Midnight Sozni Border Wrap', slug: 'kashmir-midnight-wrap', subtitle: 'Deep-toned wrap with ornate embroidered border.', price: 515, dispatchType: 'Bestseller' },
        { title: 'Dove Grey Winter Stole', slug: 'kashmir-dove-grey-stole', subtitle: 'Understated winter textile with premium softness.', price: 455, dispatchType: 'New' }
      ]
    },
    {
      slug: 'kanchipuram-silk-heirlooms',
      name: 'Kanchipuram Silk Heirlooms',
      description: 'Temple silk of South India — woven for ceremony, memory, and modern heirloom wardrobes.',
      products: [
        { title: 'Emerald Kanchipuram Silk Saree', slug: 'kanchipuram-emerald-saree', subtitle: 'Jewel-toned silk with classic temple-inspired border.', price: 925, dispatchType: 'Bestseller' },
        { title: 'Ruby Kanchipuram Silk Saree', slug: 'kanchipuram-ruby-saree', subtitle: 'Rich festive silk crafted for ceremony and memory.', price: 1245, dispatchType: 'Limited Edit' },
        { title: 'Ivory Gold Silk Saree', slug: 'kanchipuram-ivory-saree', subtitle: 'Elegant ivory silk with luminous gold detailing.', price: 895, dispatchType: 'Bestseller' },
        { title: 'Peacock Blue Kanchipuram Saree', slug: 'kanchipuram-peacock-saree', subtitle: 'Bold blue silk with ceremonial zari character.', price: 975, dispatchType: 'New' },
        { title: 'Lotus Pink Temple Silk Saree', slug: 'kanchipuram-lotus-saree', subtitle: 'Soft festive silk for celebrations and gifting.', price: 875, dispatchType: 'Gift Ready' },
        { title: 'Gold Beige Silk Dupatta', slug: 'kanchipuram-gold-dupatta', subtitle: 'A versatile silk layer for festive styling.', price: 425, dispatchType: 'New' }
      ]
    },
    {
      slug: 'ajrakh-block-print-stories',
      name: 'Ajrakh & Block Print Stories',
      description: 'Earth, indigo, hand-carved blocks, and slow textile rhythm.',
      products: [
        { title: 'Indigo Ajrakh Stole', slug: 'ajrakh-indigo-stole', subtitle: 'A deep indigo textile with traditional print character.', price: 72, dispatchType: 'Bestseller' },
        { title: 'Rust Block-Printed Resort Shirt', slug: 'ajrakh-rust-shirt', subtitle: 'Lightweight printed shirt for relaxed global styling.', price: 85, dispatchType: 'New' },
        { title: 'Sand Ajrakh Table Runner', slug: 'ajrakh-sand-runner', subtitle: 'Earth-toned textile accent for refined dining spaces.', price: 65, dispatchType: 'Home Edit' },
        { title: 'Indigo Floral Cushion Cover Set', slug: 'ajrakh-indigo-cushion', subtitle: 'Block-printed cushions for warm modern interiors.', price: 58, dispatchType: 'Bestseller' },
        { title: 'Madder Red Block-Printed Kurta', slug: 'ajrakh-madder-kurta', subtitle: 'Wearable handprint story for daily elegance.', price: 78, dispatchType: 'New' },
        { title: 'Natural Indigo Scarf', slug: 'ajrakh-natural-scarf', subtitle: 'A versatile scarf with craft-led detail.', price: 49, dispatchType: 'Gift Ready' }
      ]
    }
  ];

  for (const coll of collections) {
    let category = await prisma.category.findUnique({ where: { slug: coll.slug } });
    if (!category) {
      category = await prisma.category.create({
        data: {
          name: coll.name,
          slug: coll.slug,
          description: coll.description
        }
      });
      console.log('Created category:', category.name);
    }

    for (let i = 0; i < coll.products.length; i++) {
      const p = coll.products[i];
      const existingProduct = await prisma.product.findUnique({ where: { slug: p.slug } });
      if (!existingProduct) {
        await prisma.product.create({
          data: {
            title: p.title,
            slug: p.slug,
            subtitle: p.subtitle,
            description: p.subtitle,
            price: p.price,
            images: JSON.stringify([`/images/${coll.slug.split('-')[0]}_product_${i+1}.png`, `/images/${coll.slug.split('-')[0]}_product_${i+1}_hover.png`]),
            hoverImage: `/images/${coll.slug.split('-')[0]}_product_${i+1}_hover.png`,
            inventory: 5,
            categoryId: category.id,
            craftOrigin: 'India',
            dispatchType: p.dispatchType,
            sku: `SKU-${coll.slug.substring(0,3).toUpperCase()}-${i+1}`,
            metafields: JSON.stringify({
              deity_or_subject: coll.name
            })
          }
        });
        console.log('Successfully added product:', p.title);
      } else {
        console.log('Product already exists:', p.title);
      }
    }
  }
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
