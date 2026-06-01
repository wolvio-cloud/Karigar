# IDFIS Shopify Theme Integration Notes

Because Phase 1 utilizes a standard Shopify Theme (e.g., Dawn or a Premium Theme), the bespoke luxury UI elements designed in the Next.js prototype must be migrated into Shopify Liquid.

## 1. Translating the UI to Liquid

### The Homepage Bento Grid
- Most premium Shopify themes include "Collage" or "Image with Text" sections. 
- You will need to build a custom `.liquid` section (e.g., `section-bento-grid.liquid`) to perfectly replicate the masonry/bento layout for "New Arrivals", "Kashmir Coats", "Home & Decor".
- **CSS:** Use strict CSS grid (`display: grid; grid-template-columns: repeat(4, 1fr)`) with gap spacing.

### The "Who We Are" Section
- Use a standard "Rich Text" section in Shopify.
- Ensure the heading is set to the luxury serif font.
- Limit max-width to `800px` to maintain elegant, centered readability.

### Trust Seals & Packaging Notes
- Create a custom `.liquid` snippet (e.g., `snippet-trust-seals.liquid`) featuring SVG line-art icons (Indian Craft Heritage, Sustainable Intention, Transparent Global Delivery).
- Embed this snippet globally on the product page (`main-product.liquid`) below the Add to Cart button.

## 2. Using Metafields in Liquid

To render the custom product data established in the Metafields Definition, use Liquid outputs in your product template.

**Example: Displaying Craft Origin**
```liquid
{% if product.metafields.idfis.craft_region != blank %}
  <div class="product-craft-origin">
    <span class="label">Crafted In:</span>
    <span class="value">{{ product.metafields.idfis.craft_region }}, {{ product.metafields.idfis.craft_state }}</span>
  </div>
{% endif %}
```

**Example: Displaying GI Status**
```liquid
{% if product.metafields.idfis.gi_status == "Verified GI" %}
  <div class="gi-badge">
    ✓ Verified Geographical Indication ({{ product.metafields.idfis.gi_registration_reference }})
  </div>
{% endif %}
```

## 3. Styling Guidelines
- **Avoid Utility Frameworks:** Do not inject Tailwind into the Shopify theme if possible; stick to the theme's native CSS or write custom modular CSS to maintain complete control over the luxury aesthetic.
- **Colors:** Hardcode the IDFIS color palette (Ivory background, Charcoal text, Gold accents) into the theme's `settings_schema.json` so store admins can maintain consistency without touching code.
- **Micro-Animations:** Use subtle `transition: opacity 0.3s ease` for hover states on product cards and buttons. Avoid aggressive bouncing or zooming animations that detract from the premium feel.

## 4. Phase 1 Limitations to Keep in Mind
- **Custom Forms:** The `/damage-claim` page in Phase 1 cannot easily support direct S3 image uploads natively through Shopify pages without a 3rd-party app.
  - *Recommendation:* Use a Shopify App (like HulkApps Form Builder) for the complex damage claim form, or simply provide clear instructions on the `/damage-claim` page for the customer to email photos to `support@idfis.com`. The full custom upload flow will be built in Phase 2 with the Next.js middleware. 
