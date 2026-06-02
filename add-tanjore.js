const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  // Ensure Category exists
  const categorySlug = 'tanjore-heirloom-paintings';
  let category = await prisma.category.findUnique({ where: { slug: categorySlug } });
  
  if (!category) {
    category = await prisma.category.create({
      data: {
        name: 'Tanjore Heirloom Paintings',
        slug: categorySlug,
        description: 'Traditional South Indian devotional art, made with gold foil, raised relief work, and generational craftsmanship.'
      }
    });
    console.log('Created category:', category.name);
  }

  const products = [
    {
      title: 'Lakshmi Tanjore Painting — 22K Gold Foil Heirloom Edition',
      slug: 'lakshmi-tanjore-heirloom',
      subtitle: 'Hand-painted devotional artwork from the Thanjavur painting tradition of Tamil Nadu.',
      description: 'Prosperity, grace, auspicious home blessing. A richly detailed Tanjore artwork celebrating expression, color, and devotional beauty.',
      price: 1200.00,
      images: JSON.stringify(['/images/tanjore_lakshmi_1.png', '/images/tanjore_detail_gold.png']),
      hoverImage: '/images/tanjore_detail_gold.png',
      inventory: 2,
      categoryId: category.id,
      craftOrigin: 'Thanjavur, Tamil Nadu',
      giStatus: 'Verified GI Heritage',
      craftRegion: 'South India',
      artisanCluster: 'Thanjavur Master Guild',
      material: '22K Gold Foil, Semi-Precious Stones, Teak Wood Frame',
      technique: 'Raised Relief Work, Gold Foil Embellishment',
      careInstructions: 'Keep away from direct sunlight and moisture. Dust gently with a soft dry cloth.',
      countryOfOrigin: 'India',
      dispatchType: 'Ready to Ship',
      shippingNote: 'Ships globally in Fragile Reinforced Packaging.',
      packagingNote: 'Packed under IDFIS Fragile Reinforced Packaging to protect relief work and frame.',
      returnEligibility: 'Eligible for return within 7 days. Fragile return policy applies.',
      sku: 'TANJ-LAK-01',
      tags: JSON.stringify(['tanjore', 'painting', 'lakshmi', 'gold foil', 'devotional', 'heirloom']),
      seoTitle: 'Lakshmi Tanjore Painting | 22K Gold Foil Heirloom | IDFIS',
      seoDescription: 'Traditional South Indian devotional artwork featuring Goddess Lakshmi. Handcrafted with 22K gold foil and raised relief work.',
      metafields: JSON.stringify({
        artist_name: 'Master V. Ramanathan',
        artist_experience_years: '35',
        artist_location: 'Thanjavur, Tamil Nadu',
        artist_specialization: 'Divine Expression & Intricate Gold Relief',
        artist_quote: 'A Tanjore painting is a prayer in color and gold. The face must reflect the divine, and the hands must work with discipline.',
        artwork_theme: 'Prosperity & Auspicious Blessing',
        deity_or_subject: 'Goddess Lakshmi',
        gold_foil_purity: '22K Authentic Gold Foil',
        gold_foil_verification: 'Yes',
        certificate_included: 'Yes, Artist Authenticated',
        base_material: 'Seasoned Jackfruit/Teak Wood Board',
        relief_material: 'Traditional Gesso (Chalk Powder & Arabic Gum)',
        stone_embellishments: 'Authentic Jaipur Semi-Precious Jaipur Stones',
        frame_material: 'Premium Seasoned Teak Wood',
        glass_or_acrylic: 'Shatter-Resistant Acrylic Glass',
        artwork_width_cm: '30',
        artwork_height_cm: '38',
        framed_width_cm: '38',
        framed_height_cm: '46',
        artwork_weight_grams: '4500',
        one_of_one_status: 'No, Limited Edition',
        ready_to_ship_status: 'Yes',
        packaging_tier: 'Elite Fragile Crate',
        fragility_level: 'High'
      })
    },
    {
      title: 'Balaji Tanjore Painting — Temple Gold Edition',
      slug: 'balaji-tanjore-temple',
      subtitle: 'Traditional South Indian devotional artwork with luminous gold detailing.',
      description: 'Devotion, temple presence, spiritual protection. Crafted with meticulous raised work to emulate the grandeur of the Tirupati temple.',
      price: 1800.00,
      images: JSON.stringify(['/images/tanjore_balaji_1.png', '/images/tanjore_detail_face.png']),
      hoverImage: '/images/tanjore_detail_face.png',
      inventory: 0,
      categoryId: category.id,
      craftOrigin: 'Thanjavur, Tamil Nadu',
      giStatus: 'Verified GI Heritage',
      craftRegion: 'South India',
      artisanCluster: 'Thanjavur Master Guild',
      material: '22K Gold Foil, Semi-Precious Stones, Teak Wood Frame',
      technique: 'Raised Relief Work, Gold Foil Embellishment',
      careInstructions: 'Keep away from direct sunlight and moisture. Dust gently with a soft dry cloth.',
      countryOfOrigin: 'India',
      dispatchType: 'Made to Order',
      shippingNote: 'Ships globally in Fragile Reinforced Packaging.',
      packagingNote: 'Packed under IDFIS Fragile Reinforced Packaging to protect relief work and frame.',
      returnEligibility: 'Made to Order items are non-returnable unless damaged.',
      sku: 'TANJ-BAL-01',
      tags: JSON.stringify(['tanjore', 'painting', 'balaji', 'gold foil', 'devotional', 'heirloom']),
      seoTitle: 'Balaji Tanjore Painting | Temple Gold Edition | IDFIS',
      seoDescription: 'Traditional South Indian devotional artwork featuring Lord Balaji. Handcrafted with 22K gold foil and raised relief work.',
      metafields: JSON.stringify({
        artist_name: 'Studio Tanjore Masters',
        artist_experience_years: '40+',
        artist_location: 'Chennai & Thanjavur',
        artist_specialization: 'Temple Architecture & Deity Proportions',
        artist_quote: 'The majesty of Lord Balaji must be captured not just in the gold, but in the serene smile.',
        artwork_theme: 'Devotion & Spiritual Protection',
        deity_or_subject: 'Lord Venkateswara (Balaji)',
        gold_foil_purity: '22K Authentic Gold Foil',
        gold_foil_verification: 'Yes',
        certificate_included: 'Yes, Studio Authenticated',
        base_material: 'Seasoned Wood Board',
        relief_material: 'Traditional Gesso',
        stone_embellishments: 'Traditional AD Stones',
        frame_material: 'Antique Finished Teak Wood',
        glass_or_acrylic: 'Shatter-Resistant Acrylic Glass',
        artwork_width_cm: '45',
        artwork_height_cm: '60',
        framed_width_cm: '55',
        framed_height_cm: '70',
        artwork_weight_grams: '7500',
        one_of_one_status: 'No',
        ready_to_ship_status: 'No',
        packaging_tier: 'Elite Fragile Crate',
        fragility_level: 'High'
      })
    },
    {
      title: 'Krishna Tanjore Painting — Divine Music Edition',
      slug: 'krishna-tanjore-music',
      subtitle: 'A richly detailed Tanjore artwork celebrating expression, color, and devotional beauty.',
      description: 'Grace, music, love, divine charm. Features intricate detailing on the flute and ornaments.',
      price: 950.00,
      images: JSON.stringify(['/images/tanjore_krishna_1.png', '/images/tanjore_detail_frame.png']),
      hoverImage: '/images/tanjore_detail_frame.png',
      inventory: 1,
      categoryId: category.id,
      craftOrigin: 'Thanjavur, Tamil Nadu',
      giStatus: 'Verified GI Heritage',
      craftRegion: 'South India',
      artisanCluster: 'Thanjavur Master Guild',
      material: '22K Gold Foil, Semi-Precious Stones, Teak Wood Frame',
      technique: 'Raised Relief Work, Gold Foil Embellishment',
      careInstructions: 'Keep away from direct sunlight and moisture. Dust gently with a soft dry cloth.',
      countryOfOrigin: 'India',
      dispatchType: 'Ready to Ship',
      shippingNote: 'Ships globally in Fragile Reinforced Packaging.',
      packagingNote: 'Packed under IDFIS Fragile Reinforced Packaging to protect relief work and frame.',
      returnEligibility: 'Eligible for return within 7 days. Fragile return policy applies.',
      sku: 'TANJ-KRI-01',
      tags: JSON.stringify(['tanjore', 'painting', 'krishna', 'gold foil', 'devotional', 'heirloom']),
      seoTitle: 'Krishna Tanjore Painting | Divine Music Edition | IDFIS',
      seoDescription: 'Traditional South Indian devotional artwork featuring Lord Krishna. Handcrafted with 22K gold foil.',
      metafields: JSON.stringify({
        artist_name: 'Master G. Kumar',
        artist_experience_years: '20',
        artist_location: 'Thanjavur, Tamil Nadu',
        artist_specialization: 'Vibrant Colors & Expressive Eyes',
        artist_quote: 'Krishna brings joy. The colors must sing just like his flute.',
        artwork_theme: 'Grace, Music & Love',
        deity_or_subject: 'Lord Krishna',
        gold_foil_purity: '22K Authentic Gold Foil',
        gold_foil_verification: 'Yes',
        certificate_included: 'Yes, Artist Authenticated',
        base_material: 'Seasoned Wood Board',
        relief_material: 'Traditional Gesso',
        stone_embellishments: 'Traditional AD Stones',
        frame_material: 'Dark Wood Traditional Frame',
        glass_or_acrylic: 'Shatter-Resistant Acrylic Glass',
        artwork_width_cm: '30',
        artwork_height_cm: '38',
        framed_width_cm: '38',
        framed_height_cm: '46',
        artwork_weight_grams: '4200',
        one_of_one_status: 'No',
        ready_to_ship_status: 'Yes',
        packaging_tier: 'Premium Fragile Box',
        fragility_level: 'Medium-High'
      })
    },
    {
      title: 'Ganesha Tanjore Painting — Auspicious Gold Edition',
      slug: 'ganesha-tanjore-auspicious',
      subtitle: 'An auspicious Tanjore artwork created for new beginnings and meaningful gifting.',
      description: 'Blessings, wisdom, prosperity, new beginnings. A perfect heirloom gift for housewarmings.',
      price: 850.00,
      images: JSON.stringify(['/images/tanjore_ganesha_1.png', '/images/tanjore_detail_gold.png']),
      hoverImage: '/images/tanjore_detail_gold.png',
      inventory: 3,
      categoryId: category.id,
      craftOrigin: 'Thanjavur, Tamil Nadu',
      giStatus: 'Verified GI Heritage',
      craftRegion: 'South India',
      artisanCluster: 'Thanjavur Master Guild',
      material: '22K Gold Foil, Semi-Precious Stones, Teak Wood Frame',
      technique: 'Raised Relief Work, Gold Foil Embellishment',
      careInstructions: 'Keep away from direct sunlight and moisture. Dust gently with a soft dry cloth.',
      countryOfOrigin: 'India',
      dispatchType: 'Ready to Ship',
      shippingNote: 'Ships globally in Fragile Reinforced Packaging.',
      packagingNote: 'Packed under IDFIS Fragile Reinforced Packaging to protect relief work and frame.',
      returnEligibility: 'Eligible for return within 7 days. Fragile return policy applies.',
      sku: 'TANJ-GAN-01',
      tags: JSON.stringify(['tanjore', 'painting', 'ganesha', 'gold foil', 'devotional', 'heirloom', 'gift']),
      seoTitle: 'Ganesha Tanjore Painting | Auspicious Gold Edition | IDFIS',
      seoDescription: 'Traditional South Indian devotional artwork featuring Lord Ganesha. Handcrafted with 22K gold foil.',
      metafields: JSON.stringify({
        artist_name: 'Studio Tanjore Masters',
        artist_experience_years: '40+',
        artist_location: 'Thanjavur, Tamil Nadu',
        artist_specialization: 'Traditional Proportions & Arch Details',
        artist_quote: 'Lord Ganesha opens all paths. We craft him with the utmost devotion to bring auspicious energy.',
        artwork_theme: 'Blessings & New Beginnings',
        deity_or_subject: 'Lord Ganesha',
        gold_foil_purity: '22K Authentic Gold Foil',
        gold_foil_verification: 'Yes',
        certificate_included: 'Yes, Studio Authenticated',
        base_material: 'Seasoned Wood Board',
        relief_material: 'Traditional Gesso',
        stone_embellishments: 'Traditional AD Stones',
        frame_material: 'Classic Teak Wood Frame',
        glass_or_acrylic: 'Shatter-Resistant Acrylic Glass',
        artwork_width_cm: '30',
        artwork_height_cm: '38',
        framed_width_cm: '38',
        framed_height_cm: '46',
        artwork_weight_grams: '4200',
        one_of_one_status: 'No',
        ready_to_ship_status: 'Yes',
        packaging_tier: 'Premium Fragile Box',
        fragility_level: 'Medium-High'
      })
    }
  ];

  for (const productData of products) {
    const existingProduct = await prisma.product.findUnique({ where: { slug: productData.slug } });
    if (!existingProduct) {
      const product = await prisma.product.create({ data: productData });
      console.log('Successfully added product:', product.title);
    } else {
      console.log('Product already exists:', productData.title);
    }
  }
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
