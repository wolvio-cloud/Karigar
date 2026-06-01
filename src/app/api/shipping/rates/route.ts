import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { country, items } = await req.json();

    if (!country) {
      return NextResponse.json({ error: "Country is required" }, { status: 400 });
    }

    let shippingCostINR = 0;

    // Calculate total quantity of items to determine volumetric/weight tier
    const totalItems = items.reduce((sum: number, item: any) => sum + item.quantity, 0);

    if (country === 'India') {
      // Domestic Tier
      shippingCostINR = 0; // Free shipping in India
    } else if (
      country === 'United States' ||
      country === 'Canada' ||
      country === 'United Kingdom' ||
      country === 'Australia'
    ) {
      // Zone A (North America, UK, AUS) - e.g. base 3000 INR + 1000 per extra item
      shippingCostINR = 3000 + (totalItems - 1) * 1000;
    } else if (
      country === 'United Arab Emirates' ||
      country === 'Singapore' ||
      country === 'Malaysia' ||
      country === 'Germany' ||
      country === 'France'
    ) {
      // Zone B (Middle East, EU, SE Asia) - e.g. base 2500 INR + 800 per extra item
      shippingCostINR = 2500 + (totalItems - 1) * 800;
    } else {
      // Rest of the World (Zone C) - base 4000 INR + 1500 per extra item
      shippingCostINR = 4000 + (totalItems - 1) * 1500;
    }

    // Free Global Shipping Threshold (₹80,000 / ~$950)
    const subtotalINR = items.reduce((sum: number, item: any) => sum + (item.product.basePriceINR * item.quantity), 0);
    
    let isFreeShipping = false;
    if (subtotalINR >= 80000) {
      shippingCostINR = 0;
      isFreeShipping = true;
    }

    // Simulate network delay for "Smart Calculation" feel (Wedtree style)
    await new Promise((resolve) => setTimeout(resolve, 800));

    return NextResponse.json({
      shippingCostINR,
      isFreeShipping,
      zone: country === 'India' ? 'Domestic' : 'International',
      message: isFreeShipping ? "Eligible for Complimentary Global Shipping" : "Standard Courier Rate Applied"
    });

  } catch (error) {
    console.error("Shipping Rate Calculation Error:", error);
    return NextResponse.json({ error: "Failed to calculate shipping rates" }, { status: 500 });
  }
}
