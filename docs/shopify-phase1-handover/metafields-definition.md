# IDFIS Shopify Metafields Definition

To power the custom luxury storefront features, shipping logic, and Phase 2 middleware, the following Metafields must be created in the **Shopify Admin** under `Settings > Custom Data > Products`.

All fields should be created under the `idfis` namespace unless otherwise noted.

## 1. Craft & Authenticity (`idfis.craft`)

| Metafield Key | Type | Description |
|---|---|---|
| `craft_region` | Single line text | The specific town or district (e.g., "Srinagar, Kashmir") |
| `craft_state` | Single line text | The Indian state (e.g., "Jammu & Kashmir") |
| `craft_country` | Single line text | Default: "India" |
| `craft_technique` | Single line text | The primary method used (e.g., "Kani Weaving", "Hand Block Print") |
| `gi_status` | Single line text | Dropdown: "Verified GI", "Inspired by GI", "N/A" |
| `gi_registration_reference` | Single line text | The official GI tag number (if applicable) |
| `artisan_cluster` | Single line text | The name of the community or cooperative |
| `craft_story` | Multi-line text | A rich paragraph detailing the origin and effort of the piece |
| `handmade_variation_note` | Single line text | e.g., "Slight variations in weave are a hallmark of authentic handloom." |
| `authenticity_note` | Single line text | e.g., "Certified authentic Pashmina by the Craft Development Institute." |

## 2. Logistics & Shipping (`idfis.logistics`)

| Metafield Key | Type | Description |
|---|---|---|
| `dispatch_type` | Single line text | Dropdown: "Ready to Ship", "Made to Order" |
| `dispatch_time_min_days` | Integer | e.g., 2 |
| `dispatch_time_max_days` | Integer | e.g., 5 |
| `product_weight_grams` | Integer | Base weight of the product |
| `product_length_cm` | Integer | Unpacked length |
| `product_width_cm` | Integer | Unpacked width |
| `product_height_cm` | Integer | Unpacked height |
| `package_length_cm` | Integer | Packed length (used for volumetric weight) |
| `package_width_cm` | Integer | Packed width |
| `package_height_cm` | Integer | Packed height |
| `packaging_tier` | Integer | 1=Soft Textile, 2=Structured Garment, 3=Accessory Gift, 4=Decor Protective, 5=Fragile Reinforced |
| `fragility_level` | Single line text | Dropdown: "Low", "Medium", "High" |
| `insurance_recommended` | Boolean | True for high-value items |
| `return_eligible` | Boolean | True for standard stock, False for custom/made-to-order |
| `customs_hs_code` | Single line text | Required for international shipping |
| `country_of_origin` | Single line text | Default: "IN" |

## 3. Care & Composition (`idfis.care`)

| Metafield Key | Type | Description |
|---|---|---|
| `care_instructions` | Multi-line text | e.g., "Dry clean only. Do not wring." |
| `storage_instructions` | Multi-line text | e.g., "Store in a breathable cotton bag away from direct sunlight." |
| `cleaning_method` | Single line text | Dropdown: "Dry Clean", "Hand Wash Cold", "Wipe Clean" |
| `material_composition` | Single line text | e.g., "100% Pashmina Wool" |
| `size_guide_type` | Single line text | Dropdown: "Apparel", "Footwear", "Home Decor" (links to specific size guide popups) |
