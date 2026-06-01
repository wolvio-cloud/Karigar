# IDFIS - Technical Architecture Document

**Version:** 1.0  
**Project:** IDFIS Luxury E-Commerce Platform  
**Target Audience:** Technical Architects, Lead Developers, CTO  

---

## 1. Executive Summary

This document outlines the technical architecture for the **IDFIS** e-commerce platform. IDFIS requires an elite, globally-scalable infrastructure that supports international luxury sales, specialized packaging tier logic, dynamic multi-carrier shipping calculations, and strict authenticity verification (GI tags). 

To achieve a flawless frontend aesthetic without compromising backend flexibility, the architecture employs a **Hybrid Headless Commerce Strategy**, utilizing Shopify as the primary commerce engine while delegating advanced logistics, GI metadata, and custom operational workflows to a bespoke Node.js (Next.js/TypeScript) middleware backed by PostgreSQL.

---

## 2. System Architecture Overview

### 2.1 Core Components
1. **Shopify (Core Commerce Engine)**
   - Responsible for cart, checkout, basic inventory, product catalog (Storefront API), and payment gateway processing (e.g., Razorpay, Stripe).
   - Serves as the source of truth for base product data and order creation.

2. **Custom Middleware (Next.js API Routes / Node.js)**
   - Intercepts and processes complex business logic that Shopify natively struggles with (e.g., dynamic volumetric weight based on 5 custom packaging tiers).
   - Handles secure webhook processing from Shopify to trigger internal workflows.

3. **PostgreSQL Database**
   - Stores operational metadata, GI authenticity documentation, internal logistics tracking, and damage claim workflows.

4. **Redis Cache**
   - Used for deduplicating incoming Shopify webhooks and caching live shipping rate quotes from carriers to prevent rate-limiting and optimize checkout speed.

### 2.2 High-Level Data Flow
1. **Checkout & Shipping:** Customer enters checkout → Shopify pings Custom Middleware via Carrier Service API → Middleware calculates packaging tier → Middleware pings DHL/FedEx/Shiprocket → Middleware returns fully loaded shipping cost (including custom tier surcharges) back to Shopify.
2. **Order Lifecycle:** Customer completes payment → Shopify fires `orders/paid` Webhook → Middleware securely verifies HMAC → Middleware saves internal `OrderOperation` row in PostgreSQL → Triggers Klaviyo/SendGrid emails.

---

## 3. Infrastructure & Tech Stack

* **Frontend:** Next.js 14+ (App Router), React 19, TypeScript, Vanilla CSS Modules (No Tailwind, strict luxury aesthetic control).
* **Backend Framework:** Next.js API Routes (Serverless Functions) running on Node.js.
* **Database:** PostgreSQL (Relational) via Prisma ORM.
* **In-Memory Cache / Queue:** Redis.
* **Commerce Engine:** Shopify Admin API & Storefront API (GraphQL).
* **Payment Gateway:** Razorpay (India), Shopify Payments (International).
* **Logistics & Carriers:** DHL Express, FedEx, Shiprocket (API Integration).

---

## 4. Database Schema (PostgreSQL)

The middleware utilizes a highly normalized schema to map Shopify IDs to advanced internal logic.

### 4.1 Key Tables & Relationships

* **`api_integrations`**: Securely tracks integration status (test/live) for providers (payment, shipping, tracking).
* **`shipping_rate_quotes`**: Caches rate quotes generated for specific carts to ensure checkout parity and auditability.
* **`shipments` & `tracking_events`**: Mirrors carrier tracking data (via webhooks or polling) to serve the custom frontend `/track-order` portal without exposing internal logistics data.
* **`order_operations`**: Links to `shopifyOrderId`. Tracks custom internal states: `qualityCheckStatus`, `packagingStatus`, `pickPackStatus`, `dispatchStatus`.
* **`damage_claims`**: Captures frontend form submissions from `/damage-claim`. Stores JSON arrays of S3 image URLs (inner box, outer box, product, label) for courier insurance claims.
* **`product_craft_registry`**: Extends Shopify Products. Stores GI status, craft region, verification notes, and JSON links to source documents.
* **`audit_logs`**: Immutable ledger recording all webhook events and Admin actions for compliance.

---

## 5. Middleware API Design

All endpoints are authenticated and rate-limited.

### 5.1 Shopify Webhook Receiver (`/api/webhooks/shopify`)
* **Security:** Verifies `X-Shopify-Hmac-Sha256` using the `SHOPIFY_WEBHOOK_SECRET`.
* **Events Subscribed:**
  * `orders/create`: Initializes `OrderOperation` for Quality Assurance team.
  * `orders/paid`: Triggers payment confirmed notifications and fulfillment workflows.
  * `fulfillments/create`: Syncs courier tracking numbers into the `shipments` table.

### 5.2 Dynamic Shipping Rate Calculator (`/api/shipping/rates`)
* **Trigger:** Invoked by Shopify's Carrier Service API during checkout.
* **Logic:** 
  1. Parses cart items.
  2. Applies **IDFIS Packaging Tier Logic**.
  3. Queries multiple courier APIs (DHL, Shiprocket).
  4. Returns the fastest and cheapest compliant options with surcharges injected.
* **Fallback:** If carrier APIs timeout, returns a pre-configured Standard International rate to prevent blocking checkout.

### 5.3 Customer Support APIs
* **`POST /api/support/damage-claim`**: Handles multipart/form-data for image uploads. Uploads to secure S3 bucket and records in `damage_claims` table.
* **`GET /api/tracking/lookup`**: Public endpoint for `/track-order`. Requires exact `Order Number` + `Email` match to prevent data scraping.

---

## 6. Core Business Logic Definitions

### 6.1 Packaging Tiers Algorithm
To accurately calculate international volumetric shipping, products are assigned a tier which modifies the package's weight and dimension constraints during checkout API calls:
* **Tier 1 (Soft Textile)**: Minimal weight/cost surcharge (+100g, +$1).
* **Tier 2 (Structured Garment)**: Modest surcharge for rigid cartons (+400g, +$4).
* **Tier 3 (Accessory Gift)**: Small box, extra cushioning (+300g, +$5).
* **Tier 4 (Decor Protective)**: Surface protection added (+600g, +$8).
* **Tier 5 (Fragile Reinforced)**: Double-walled carton + void fill (+1000g, +$15).

### 6.2 Product Readiness Score
An internal KPI calculated by the `/api/admin/metrics` endpoint. Ensures a product is not launched until it scores 90/100 by validating:
* Shopify Metafields presence (Weight, Dimensions, HS Code).
* IDFIS Craft Registry (GI Verification, Origin).
* Minimum image requirements (Editorial HD imagery).

---

## 7. Security, Compliance, & Environment Variables

### 7.1 Data Protection
* **No Raw Payment Data:** The middleware only stores payment metadata (Transaction ID, Amount, Gateway). It is completely out of PCI scope.
* **Environment Variables:** All secrets are kept off the frontend. Key variables required:
  * `SHOPIFY_ADMIN_API_TOKEN`, `SHOPIFY_WEBHOOK_SECRET`
  * `DATABASE_URL`, `REDIS_URL`
  * `DHL_API_KEY`, `SHIPROCKET_API_KEY`
  * `RAZORPAY_KEY_ID`, `RAZORPAY_KEY_SECRET`

### 7.2 Security Measures
* Public APIs implement IP-based rate limiting (e.g., `express-rate-limit` / `@upstash/ratelimit`).
* Admin dashboard routes (`/api/admin/*`) require strictly verified Bearer tokens matching Shopify admin roles.

---

## 8. Deployment Strategy

* **Next.js Middleware Hosting:** Vercel (recommended for Edge routing) or AWS ECS/Fargate (for long-running queue workers).
* **PostgreSQL:** AWS RDS (Multi-AZ) or Supabase (managed).
* **Redis:** Upstash or AWS ElastiCache.
* **CI/CD:** GitHub Actions configured to run Prisma migrations (`prisma migrate deploy`) and Next.js builds on merges to `main`.
* **Staging Environment:** A separate Shopify Development Store paired with a Staging DB to isolate testing of logistics flows prior to production.
