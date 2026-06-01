import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(req: Request) {
  try {
    // 1. Check authorization (mocked)
    const authHeader = req.headers.get('authorization');
    if (!authHeader || authHeader !== `Bearer ${process.env.SHOPIFY_ADMIN_API_TOKEN}`) {
      // For local development, bypass auth if no token is set, but warn
      if (process.env.NODE_ENV === 'production') {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
      }
    }

    // 2. Aggregate Operations Data
    const orders = await prisma.order.findMany();
    const products = await prisma.product.findMany();

    // 3. Compute Metrics
    const needsQualityCheck = orders.filter(o => o.status === 'PENDING').length;
    const needsDispatch = orders.filter(o => o.status === 'PAID').length;
    const openDamageClaims = 0; // Placeholder until implemented
    
    // Product Readiness Score logic
    let totalScore = 0;
    let productsNeedsFixes = 0;

    for (const product of products) {
      let score = 0;
      // Mock weighting
      if (product.title && product.description) score += 30;
      if (product.price > 0) score += 20;
      if (product.images) score += 20;
      if (product.craftOrigin || product.giStatus) score += 15;
      if (product.dispatchType) score += 15;

      totalScore += score;
      if (score < 90) productsNeedsFixes++;
    }

    const averageReadinessScore = products.length > 0 ? (totalScore / products.length).toFixed(1) : 0;

    return NextResponse.json({
      success: true,
      data: {
        operations: {
          needsQualityCheck,
          needsDispatch,
          openDamageClaims,
        },
        products: {
          total: products.length,
          averageReadinessScore: Number(averageReadinessScore),
          productsNeedsFixes
        },
        revenue: orders.reduce((sum, order) => sum + order.total, 0)
      }
    }, { status: 200 });

  } catch (error) {
    console.error('Admin metrics error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
