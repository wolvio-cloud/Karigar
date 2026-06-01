const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const productSlug = 'heritage-kashmiri-pashmina-wrap';
  const existingProduct = await prisma.product.findUnique({ where: { slug: productSlug } });
  
  if (existingProduct) {
    const variants = await prisma.productVariant.findMany({ where: { productId: existingProduct.id }});
    if (variants.length === 0) {
      console.log('Adding missing variants...');
      await prisma.productVariant.createMany({
        data: [
          {
            productId: existingProduct.id,
            name: 'Ivory Cream',
            type: 'Color',
            value: 'Ivory Cream',
            sku: 'PASH-001-IVO',
            inventory: 10
          },
          {
            productId: existingProduct.id,
            name: 'Walnut Brown',
            type: 'Color',
            value: 'Walnut Brown',
            sku: 'PASH-001-WAL',
            inventory: 5
          }
        ]
      });
      console.log('Variants added.');
    } else {
      console.log('Variants already exist.');
    }
  }
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
