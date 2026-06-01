# IDFIS Launch Testing Checklist

Before the MVP storefront goes live to the public, complete this rigorous end-to-end testing sequence.

## 1. Storefront UI & UX
- [ ] **Desktop & Mobile Responsiveness:** Verify the Homepage, Product Pages, and Collections scale perfectly.
- [ ] **Navigation:** Check header menus, dropdowns, and all footer links.
- [ ] **Search:** Verify the search bar returns accurate results and handles typos gracefully.
- [ ] **Filtering & Sorting:** Test collection filters (Price, Size, Material).
- [ ] **Typography & Colors:** Ensure no default Shopify theme fonts override the luxury serif/sans-serif IDFIS fonts. No broken CSS.

## 2. Product Experience
- [ ] **Image Galleries:** Test click-to-zoom, fullscreen mode, and mobile swipe.
- [ ] **Variants:** Ensure selecting a different color/size updates the main image and price (if applicable).
- [ ] **Sold Out State:** Ensure products with zero inventory display "Sold Out" and prevent adding to cart.
- [ ] **Metafields Display:** Verify that GI Status, Packaging Tier, and Craft Origin render correctly in their respective accordion/blocks on the product page.
- [ ] **Made-to-Order Items:** Verify dispatch timeframes are explicitly clear for non-ready-to-ship items.

## 3. Cart & Checkout
- [ ] **Add to Cart:** Ensure the drawer/slide-out cart opens smoothly.
- [ ] **Cart Notes:** Test adding a gift message or special instructions.
- [ ] **Checkout Redirect:** Ensure transition from cart to Shopify Checkout is seamless.
- [ ] **Branding:** Verify the checkout page has the IDFIS logo, luxury colors, and correct typography.

## 4. Payments
*Place the gateway in Test Mode for these checks:*
- [ ] **Successful Capture:** Complete a test order with a test credit card.
- [ ] **Failed Payment:** Intentionally fail a transaction to verify the error copy: *"Payment could not be completed. Please try again..."*
- [ ] **Refunds:** Process a full and partial refund from the Shopify Admin and verify the customer receives the email notification.
- [ ] **Order Creation:** Ensure successful payments create an order with "Paid" status.

## 5. Shipping & Logistics
- [ ] **Domestic (India):** Test an address in India. Verify INR pricing and domestic rates.
- [ ] **International (US/UK/UAE):** Test addresses abroad. Verify currency conversion and appropriate international weight-based rates appear.
- [ ] **Heavy/Fragile Cart:** Add multiple Tier 5 (Fragile) items to the cart. Verify the shipping cost scales correctly based on the inflated weight logic.
- [ ] **Missing Postal Code:** Verify Shopify prevents checkout without a valid zip/postal code.

## 6. Notifications & Forms
- [ ] **Order Confirmation:** Place a test order and review the layout and copy of the confirmation email.
- [ ] **Shipping Confirmation:** Fulfill the test order with a dummy tracking number. Verify the dispatch email looks premium.
- [ ] **Contact Form:** Submit `/contact`. Verify the email reaches the IDFIS support inbox.
- [ ] **Damage Claim Form:** Submit `/damage-claim`. Verify submission succeeds and team is notified.

## 7. Security & Compliance
- [ ] No "Lorem Ipsum" or placeholder text on the live site.
- [ ] No fake urgency timers (e.g., "Only 1 left!").
- [ ] No unverified GI claims.
- [ ] Privacy Policy and Terms of Service are accurate and accessible from checkout.
