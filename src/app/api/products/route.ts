import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const categorySlug = searchParams.get('category');
    const productSlug = searchParams.get('slug');
    
    let products;
    
    if (productSlug) {
      const product = await prisma.product.findUnique({
        where: { slug: productSlug },
        include: { category: true }
      });
      if (!product) return NextResponse.json({ error: 'Not found' }, { status: 404 });
      
      const formattedProduct = {
        ...product,
        images: JSON.parse(product.images),
      };
      return NextResponse.json(formattedProduct, { status: 200 });
    }
    else if (categorySlug) {
      products = await prisma.product.findMany({
        where: { category: { slug: categorySlug } },
        include: { category: true }
      });
    } else {
      products = await prisma.product.findMany({
        include: { category: true }
      });
    }

    // Parse JSON images string back to array before sending
    const formattedProducts = products.map((product) => ({
      ...product,
      images: JSON.parse(product.images),
    }));

    return NextResponse.json(formattedProducts, { status: 200 });
  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 });
  }
}
