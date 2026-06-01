# IDFIS Phase 1: Shipping & Payment Configuration

This guide details how to configure Shopify for the MVP launch (Phase 1) without requiring complex middleware integration.

## 1. Payments Configuration

**Goal:** Secure, conversion-optimized checkout using native Shopify flows. Do not use custom checkout bypasses.

### Indian Market Setup
1. Navigate to **Shopify Admin > Settings > Payments**.
2. **Primary Gateway:** Install and activate the **Razorpay** app.
   - Configure to accept UPI, Credit/Debit Cards, Net Banking, and Wallets.
   - Run a test transaction using Razorpay's Test Mode to verify success/failure flows.
3. **Alternative (if required):** Cash on Delivery (COD). *Note: Consider restricting COD to specific PIN codes using an app if high RTO (Return to Origin) is a risk.*

### International Market Setup (Shopify Markets)
1. **Primary Gateway:** Depending on IDFIS's registered business entity, activate **Shopify Payments** (if available) or **PayPal/Stripe**.
2. Ensure the gateway is configured to accept multi-currency payments so customers in US/UK/EU can checkout in USD/GBP/EUR.

### Required Checkout Copy (Language Settings)
Edit your Shopify Theme language strings to include:
- **Payment Secure Message:** "Your payment is processed securely through trusted payment providers. IDFIS does not store your card details."
- **Payment Failure Message:** "Payment could not be completed. Please try again or use another payment method. If the amount was deducted, contact support with your order reference."

---

## 2. Shipping Configuration (Phase 1)

**Goal:** Transparent, reliable shipping logic using Shopify's native Shipping Profiles until the Phase 3 Multi-Carrier API is built.

### Shipping Zones
Navigate to **Shopify Admin > Settings > Shipping and delivery** and create the following zones:

1. **Domestic (India)**
   - Create a weight-based or price-based tier.
   - Example: Free shipping over ₹5000, flat ₹150 for orders below.
2. **Zone 2: North America (US, Canada)**
   - Create weight-based tiers corresponding to DHL/FedEx rate cards.
3. **Zone 3: UK & Europe**
   - Create weight-based tiers.
4. **Zone 4: Rest of World (UAE, Australia, Singapore, etc.)**

### Setting Up Weight-Based Rates Effectively
Because IDFIS uses different **Packaging Tiers** (e.g., heavy reinforced boxes for ceramics), you must artificially inflate the *Product Weight* in Shopify to account for the volumetric weight of the packaging tier.
- *Example:* A 500g ceramic bowl requires Tier 5 packaging. Set the Shopify product weight to `1.5kg` to ensure the correct international weight tier is applied at checkout.

### Required Checkout Copy (Shipping Transparency)
In the checkout settings or shipping rate names, include:
- **Standard Courier Name:** e.g., "DHL Express International (Tracked)"
- **Transparency Note:** "Your shipping cost is calculated based on destination, package weight, package size, courier service, and the protective packaging required for your order."

### Duties & Taxes Setup
1. Navigate to **Shopify Admin > Settings > Taxes and duties**.
2. Ensure you clearly state your Incoterms. For Phase 1, use **DAP (Delivered at Place)** unless you are legally registered to collect VAT in target countries.
3. Add a checkout disclaimer: *"Duties, VAT, import taxes, or courier handling charges may apply depending on your country and will be collected by your local customs authority."*
