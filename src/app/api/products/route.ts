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
        include: { category: true, variants: true }
      });
      if (!product) return NextResponse.json({ error: 'Not found' }, { status: 404 });
      
      const formattedProduct = {
        ...product,
        images: product.images ? JSON.parse(product.images) : [],
        tags: product.tags ? JSON.parse(product.tags) : [],
      };
      return NextResponse.json(formattedProduct, { status: 200 });
    }
    else if (categorySlug) {
      products = await prisma.product.findMany({
        where: { category: { slug: categorySlug } },
        include: { category: true, variants: true }
      });
    } else {
      products = await prisma.product.findMany({
        include: { category: true, variants: true }
      });
    }

    // Parse JSON strings back to array before sending
    const formattedProducts = products.map((product) => ({
      ...product,
      images: product.images ? JSON.parse(product.images) : [],
      tags: product.tags ? JSON.parse(product.tags) : [],
    }));

    return NextResponse.json(formattedProducts, { status: 200 });
  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 });
  }
}
