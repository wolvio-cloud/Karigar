import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Clean up existing data
  await prisma.productVariant.deleteMany()
  await prisma.product.deleteMany()
  await prisma.category.deleteMany()

  console.log('Seeding categories...')
  const cats = await Promise.all([
    prisma.category.create({ data: { name: 'Kashmir Coats', slug: 'kashmir-coats', description: 'Warmth, softness, mountain craft, refined winter luxury.' } }),
    prisma.category.create({ data: { name: 'Sarees', slug: 'sarees', description: 'Royal Indian textile heritage, luminous silk, festive elegance.' } }),
    prisma.category.create({ data: { name: 'Kurtas', slug: 'kurtas', description: 'Lightness, hand embroidery, refined Indian elegance.' } }),
    prisma.category.create({ data: { name: 'Accessories', slug: 'accessories', description: 'Small luxury details with cultural character.' } }),
    prisma.category.create({ data: { name: 'Home & Decor', slug: 'home-decor', description: 'Indian craft for refined global interiors.' } }),
    prisma.category.create({ data: { name: 'Textiles', slug: 'textiles', description: 'Fine woven stoles and dupattas.' } })
  ])

  const getCatId = (slug: string) => cats.find(c => c.slug === slug)?.id || cats[0].id

  console.log('Seeding products...')

  // 1. Midnight Pashmina Coat
  await prisma.product.create({
    data: {
      title: 'Midnight Pashmina Coat — Kashmir Heritage Edit',
      slug: 'midnight-pashmina-coat',
      subtitle: 'Luxury Indian Winter Craft',
      description: 'The Midnight Pashmina Coat is part of the IDFIS Kashmir Luxury Collection, curated to celebrate the warmth and refinement of mountain craft. Designed for modern global wardrobes, this piece reflects the beauty of Indian craftsmanship through its deep tones and exquisite sozni hand-embroidery. Every piece is selected for its craft value, visual elegance, and ability to carry Indian heritage into contemporary living.',
      price: 85000,
      images: JSON.stringify(['/images/coat.png', '/images/hero.png', '/images/artisan_crafting.png']),
      hoverImage: '/images/hero.png',
      categoryId: getCatId('kashmir-coats'),
      craftOrigin: 'Kashmir Valley, North India',
      giStatus: 'Verified GI Heritage Craft',
      craftRegion: 'Jammu & Kashmir, India',
      artisanCluster: 'Srinagar Sozni Clusters',
      material: 'Fine Kashmir wool / pashmina where verified',
      technique: 'Handwoven & Sozni Embroidery',
      careInstructions: 'Dry clean only. Store in a cool, dry place inside a breathable fabric bag. Avoid hanging heavy wool pieces for long periods.',
      dispatchType: 'Ready to Ship',
      shippingNote: 'Ships within 48 hours. International delivery times vary by destination.',
      packagingNote: 'Packed with layered protection for international travel.',
      sku: 'KAS-COAT-001',
      tags: JSON.stringify(['Winter', 'Hand-embroidered', 'Craft-Origin Verified', 'Luxury']),
      seoTitle: 'Midnight Pashmina Coat | Luxury Indian Winter Craft | IDFIS',
      seoDescription: 'Discover the Midnight Pashmina Coat by IDFIS, a luxury Indian craft-led winter piece with premium packaging, transparent global shipping, and tracked dispatch.',
      variants: {
        create: [
          { name: 'Size: S', type: 'Size', value: 'S' },
          { name: 'Size: M', type: 'Size', value: 'M' },
          { name: 'Size: L', type: 'Size', value: 'L' }
        ]
      }
    }
  })

  // 2. Terracotta Banarasi Silk Saree
  await prisma.product.create({
    data: {
      title: 'Terracotta Banarasi Silk Saree — Heritage Weave',
      slug: 'terracotta-banarasi-silk-saree',
      subtitle: 'Royal Indian Textile Heritage',
      description: 'The Terracotta Banarasi Silk Saree is part of the IDFIS Banarasi Heritage Collection, curated to celebrate the luminous silk of Varanasi. Designed for modern global wardrobes, this piece reflects the beauty of Indian craftsmanship through its rich terracotta hue and fine zari brocade work.',
      price: 65000,
      images: JSON.stringify(['/images/bento_saree.png', '/images/sustainability_nature.png']),
      hoverImage: '/images/sustainability_nature.png',
      categoryId: getCatId('sarees'),
      craftOrigin: 'Varanasi, North India',
      giStatus: 'Verified GI Heritage Craft',
      craftRegion: 'Varanasi, Uttar Pradesh, India',
      artisanCluster: 'Banaras Weavers Guild',
      material: 'Fine Katan Silk with Metallic Zari',
      technique: 'Handloom Brocade Weaving (Kadhua)',
      careInstructions: 'Dry clean only. Store folded in a breathable cotton bag. Do not use plastic. Air occasionally.',
      dispatchType: 'Made to Order',
      shippingNote: 'This piece is woven to order. Dispatches in 4-6 weeks.',
      packagingNote: 'Wrapped in acid-free tissue and placed in an elite protective box.',
      sku: 'BAN-SAR-001',
      tags: JSON.stringify(['Wedding', 'Heritage', 'Craft-Origin Verified', 'Silk']),
      seoTitle: 'Terracotta Banarasi Silk Saree | Luxury Heritage Weave | IDFIS',
      seoDescription: 'Shop the authentic Terracotta Banarasi Silk Saree by IDFIS. GI-verified heritage weave with international shipping.',
      variants: {
        create: [
          { name: 'Color: Terracotta', type: 'Color', value: 'Terracotta' },
          { name: 'Color: Indigo', type: 'Color', value: 'Indigo' }
        ]
      }
    }
  })

  // 3. Ivory Chikankari Kurta
  await prisma.product.create({
    data: {
      title: 'Ivory Chikankari Kurta — Hand Embroidered Edit',
      slug: 'ivory-chikankari-kurta',
      subtitle: 'Refined Indian Elegance',
      description: 'The Ivory Chikankari Kurta is part of the IDFIS Embroidery Collection, curated to celebrate the lightness of Awadhi craft. Designed for modern global wardrobes, this piece reflects the beauty of Indian craftsmanship through its delicate white-on-white shadow work.',
      price: 24000,
      images: JSON.stringify(['/images/kurta.png', '/images/bento_kurta.png']),
      hoverImage: '/images/bento_kurta.png',
      categoryId: getCatId('kurtas'),
      craftOrigin: 'Lucknow, North India',
      giStatus: 'Verified GI Heritage Craft',
      craftRegion: 'Lucknow, Uttar Pradesh',
      artisanCluster: 'Awadh Hand Embroidery Group',
      material: 'Fine Cotton Muslin',
      technique: 'Hand Chikankari Embroidery',
      careInstructions: 'Gentle cold hand wash or dry clean. Dry in shade. Iron on reverse.',
      dispatchType: 'Ready to Ship',
      sku: 'CHI-KUR-001',
      tags: JSON.stringify(['Summer', 'Hand-embroidered', 'Craft-Origin Verified', 'Minimalist']),
      variants: {
        create: [
          { name: 'Size: S', type: 'Size', value: 'S' },
          { name: 'Size: M', type: 'Size', value: 'M' },
          { name: 'Size: L', type: 'Size', value: 'L' }
        ]
      }
    }
  })

  // 4. Indigo Ajrakh Stole
  await prisma.product.create({
    data: {
      title: 'Indigo Ajrakh Stole — Hand Block Printed',
      slug: 'indigo-ajrakh-stole',
      subtitle: 'Earth Pigments & Slow Craft',
      description: 'The Indigo Ajrakh Stole is part of the IDFIS Block Print Collection, curated to celebrate traditional earth-toned printing. This piece reflects the beauty of Indian craftsmanship through a multi-stage hand block printing process.',
      price: 12000,
      images: JSON.stringify(['/images/sustainability_nature.png', '/images/artisan_crafting.png']),
      hoverImage: '/images/artisan_crafting.png',
      categoryId: getCatId('textiles'),
      craftOrigin: 'Kutch, Gujarat',
      giStatus: 'Inspired by Traditional Craft',
      craftRegion: 'Kutch, Gujarat, India',
      material: 'Modal Silk',
      technique: 'Traditional Ajrakh Block Print',
      careInstructions: 'Dry clean recommended to preserve natural indigo dye.',
      dispatchType: 'Ready to Ship',
      sku: 'AJR-STL-001',
      variants: {
        create: [
          { name: 'Size: Standard', type: 'Size', value: 'Standard' }
        ]
      }
    }
  })

  // 5. Antique Brass Diya Set
  await prisma.product.create({
    data: {
      title: 'Antique Brass Diya Set — Artisan Ritual Decor',
      slug: 'antique-brass-diya-set',
      subtitle: 'Indian Craft for Global Interiors',
      description: 'The Antique Brass Diya Set is part of the IDFIS Home & Decor Collection. Hand-casted by traditional metalworkers, these accents bring a piece of Indian ritual heritage into modern living spaces.',
      price: 18000,
      images: JSON.stringify(['/images/bento_accessories.png', '/images/hero_interior.png']),
      hoverImage: '/images/hero_interior.png',
      categoryId: getCatId('home-decor'),
      craftOrigin: 'Moradabad, India',
      giStatus: 'Regionally Recognized Craft',
      craftRegion: 'Uttar Pradesh, India',
      material: 'Solid Brass',
      technique: 'Sand Casting & Hand Polishing',
      careInstructions: 'Wipe with a soft dry cloth. Avoid moisture. Natural patina will develop over time.',
      dispatchType: 'Ready to Ship',
      sku: 'BRA-DIY-001',
      variants: {
        create: [
          { name: 'Set of 2', type: 'Set', value: 'Set of 2' },
          { name: 'Set of 4', type: 'Set', value: 'Set of 4' }
        ]
      }
    }
  })

  // 6. Sandalwood-Tone Woven Basket
  await prisma.product.create({
    data: {
      title: 'Sandalwood-Tone Woven Basket — Natural Home Edit',
      slug: 'sandalwood-tone-woven-basket',
      subtitle: 'Sustainable Luxury',
      description: 'Handwoven from natural fibers, this basket bridges traditional basketry techniques with modern minimalist aesthetics.',
      price: 9500,
      images: JSON.stringify(['/images/hero_interior.png', '/images/bento_seating.png']),
      hoverImage: '/images/bento_seating.png',
      categoryId: getCatId('home-decor'),
      craftOrigin: 'North East India',
      giStatus: 'Inspired by Traditional Craft',
      material: 'Natural Cane and Bamboo',
      technique: 'Hand Weaving',
      careInstructions: 'Wipe clean with a dry cloth. Keep away from prolonged moisture.',
      dispatchType: 'Ready to Ship',
      sku: 'CAN-BSK-001',
      variants: {
        create: [
          { name: 'Size: Medium', type: 'Size', value: 'Medium' }
        ]
      }
    }
  })

  // 7. Emerald Kanchipuram Silk Saree
  await prisma.product.create({
    data: {
      title: 'Emerald Kanchipuram Silk Saree — Temple Border Edit',
      slug: 'emerald-kanchipuram-silk-saree',
      subtitle: 'South Indian Temple Textile Legacy',
      description: 'The Emerald Kanchipuram Silk Saree is a ceremonial masterpiece featuring heavy gold zari work woven in the traditional Korvai technique.',
      price: 95000,
      images: JSON.stringify(['/images/bento_saree.png', '/images/artisan_crafting.png']),
      hoverImage: '/images/artisan_crafting.png',
      categoryId: getCatId('sarees'),
      giStatus: 'Verified GI Heritage Craft',
      craftRegion: 'Kanchipuram, Tamil Nadu',
      material: 'Silk composition shown per product, Zari detailing where specified',
      technique: 'Korvai Handloom Weaving',
      careInstructions: 'Strictly dry clean. Air out after wearing. Refold periodically.',
      dispatchType: 'Ready to Ship',
      sku: 'KAN-SAR-001',
      variants: {
        create: [
          { name: 'Color: Emerald', type: 'Color', value: 'Emerald' }
        ]
      }
    }
  })

  // 8. Rose Gold Zardozi Potli
  await prisma.product.create({
    data: {
      title: 'Rose Gold Zardozi Potli — Artisan Evening Accessory',
      slug: 'rose-gold-zardozi-potli',
      subtitle: 'Small Luxury Details',
      description: 'An elegant evening accessory heavily embroidered with metallic threads in the ancient Zardozi tradition.',
      price: 15500,
      images: JSON.stringify(['/images/bento_accessories.png', '/images/luxury_packaging.png']),
      hoverImage: '/images/luxury_packaging.png',
      categoryId: getCatId('accessories'),
      giStatus: 'Inspired by Traditional Craft',
      craftRegion: 'Agra, Uttar Pradesh',
      material: 'Silk Velvet base, Metallic wire',
      technique: 'Zardozi Hand Embroidery',
      dispatchType: 'Ready to Ship',
      sku: 'ZAR-POT-001',
      variants: {
        create: [
          { name: 'Finish: Rose Gold', type: 'Finish', value: 'Rose Gold' }
        ]
      }
    }
  })

  // 9. Natural Sabai Grass Basket
  await prisma.product.create({
    data: {
      title: 'Natural Sabai Grass Basket — Handwoven Home Edit',
      slug: 'natural-sabai-grass-basket',
      subtitle: 'Earthy Interiors',
      description: 'Hand-coiled using Sabai grass, this piece brings an earthy, organic texture to any living space.',
      price: 6500,
      images: JSON.stringify(['/images/hero_interior.png', '/images/sustainability_nature.png']),
      hoverImage: '/images/sustainability_nature.png',
      categoryId: getCatId('home-decor'),
      giStatus: 'Regionally Recognized Craft',
      craftRegion: 'Mayurbhanj, Odisha',
      material: 'Sabai Grass',
      technique: 'Hand Coiling',
      dispatchType: 'Ready to Ship',
      sku: 'SAB-BSK-001',
      variants: {
        create: [
          { name: 'Size: Large', type: 'Size', value: 'Large' }
        ]
      }
    }
  })

  // 10. Cobalt Blue Pottery Bowl
  await prisma.product.create({
    data: {
      title: 'Cobalt Blue Pottery Bowl — Jaipur Craft Edit',
      slug: 'cobalt-blue-pottery-bowl',
      subtitle: 'Vibrant Table Accents',
      description: 'A striking statement piece crafted without clay, using a unique blend of quartz stone powder, powdered glass, and fuller’s earth.',
      price: 11000,
      images: JSON.stringify(['/images/bento_accessories.png', '/images/hero_interior.png']),
      hoverImage: '/images/hero_interior.png',
      categoryId: getCatId('home-decor'),
      giStatus: 'Verified GI Heritage Craft',
      craftRegion: 'Jaipur, Rajasthan',
      material: 'Quartz, Glass, Multani Mitti',
      technique: 'Turko-Persian Blue Pottery',
      dispatchType: 'Made to Order',
      sku: 'BLU-POT-001',
      variants: {
        create: [
          { name: 'Size: 10 Inch', type: 'Size', value: '10 Inch' }
        ]
      }
    }
  })

  // 11. Black Dokra Statement Necklace
  await prisma.product.create({
    data: {
      title: 'Black Dokra Statement Necklace — Tribal Metal Craft Edit',
      slug: 'black-dokra-statement-necklace',
      subtitle: 'Ancient Metal Casting',
      description: 'Created using the 4,000-year-old lost-wax casting technique, this necklace is a striking piece of wearable art.',
      price: 14000,
      images: JSON.stringify(['/images/bento_accessories.png', '/images/luxury_packaging.png']),
      hoverImage: '/images/luxury_packaging.png',
      categoryId: getCatId('accessories'),
      giStatus: 'Verified GI Heritage Craft',
      craftRegion: 'Bastar, Chhattisgarh',
      material: 'Brass & Bell Metal Alloy',
      technique: 'Lost-Wax Casting (Dokra)',
      dispatchType: 'Ready to Ship',
      sku: 'DOK-NEC-001',
      variants: {
        create: [
          { name: 'Size: Adjustable', type: 'Size', value: 'Adjustable' }
        ]
      }
    }
  })

  // 12. Cream Jamdani Dupatta
  await prisma.product.create({
    data: {
      title: 'Cream Jamdani Dupatta — Fine Weave Edit',
      slug: 'cream-jamdani-dupatta',
      subtitle: 'Airy Woven Motifs',
      description: 'Incredibly lightweight and sheer, this dupatta features motifs woven directly on the loom using the supplementary weft technique.',
      price: 18000,
      images: JSON.stringify(['/images/sustainability_nature.png', '/images/artisan_crafting.png']),
      hoverImage: '/images/artisan_crafting.png',
      categoryId: getCatId('textiles'),
      giStatus: 'Regionally Recognized Craft',
      craftRegion: 'West Bengal',
      material: 'Fine Cotton Muslin',
      technique: 'Jamdani Handloom Weaving',
      dispatchType: 'Ready to Ship',
      sku: 'JAM-DUP-001',
      variants: {
        create: [
          { name: 'Color: Cream', type: 'Color', value: 'Cream' }
        ]
      }
    }
  })

  console.log('Seeding complete!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
