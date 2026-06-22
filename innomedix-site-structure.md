# Innomedix Pharma — Site Structure

Source: innomedixpharma.com (current live site)
Purpose: Structural reference for redesigning the site in Google Stitch.

---

## 1. Global Navigation (Header)

```
Home
About Us
  ├── About Company
  └── About Director
Our Products  (dropdown — currently empty/broken)
Manufacturing (mega-menu — currently empty/broken)
  ├── Drug
  │     Tablet, Syrup, Dry-Syrup, Capsule, Softgel, Injection, Sachets, Drops
  ├── Nutraceutical
  │     Tablet, Syrup, Capsule, Softgel, Powder, Sachets, Drops, Effervescent Tablet
  ├── Ayurvedic
  │     Tablet, Syrup, Softgel, Capsule, Sachets, Herbal Drops, Powder, Granules
  └── Cosmetics
        Shop, Face Wash, Shampoo, Lotions, Creams, Sunscreen, Serum, Oils
Gallery
Contact Us
Enquiry (opens modal popup, not a page)
```

**Header utility elements:** phone click-to-call, email link, logo (links home).

---

## 2. Page List (Sitemap)

| # | Page Name | Path | Status |
|---|-----------|------|--------|
| 1 | Home | `/index.php` | Live |
| 2 | About Company | `/about.php` | Live |
| 3 | About Director | `/our-director.php` | Live |
| 4 | Gallery | `/gallery.php` | Live (broken images) |
| 5 | Contact Us | `/contact.php` | Live |
| 6 | Our Products | `/product.php` | **404 — missing, needs to be built** |
| 7 | Manufacturing category pages | `#` | **Not built — recommend real pages per category** |
| 8 | Careers | `#` | Not built |
| 9 | Press & Media | `#` | Not built |
| 10 | Our Blog | `#` | Not built |
| 11 | Advertising | `#` | Not built |

---

## 3. Page-by-Page Section Layout

### Home
1. Header / Nav
2. Hero image slider (3 slides, full-width)
3. "About Us" intro block — heading, subheading, paragraph, CTA button, side image
4. Core Values — 4-card grid (Quality / Affordability / Innovation / Community)
5. "Our Product" banner — image + heading + paragraph + CTA
6. Testimonials carousel — 4 patient quotes with avatar
7. Floating WhatsApp chat button
8. Footer (see Section 5)

### About Company
1. Header / Nav
2. Breadcrumb (Home > About Us)
3. Intro block — same as Home's About Us section, expanded
4. Core Values — 4-card grid (repeated)
5. "Why Choose Us" — 4-item list (Quality Assurance, Innovation, Regulatory Compliance, Customer Support)
6. Embedded video block
7. Vision & Mission — 2-column card layout
8. Testimonials carousel (repeated)
9. Footer

### About Director
1. Header / Nav
2. Breadcrumb (Home > About Us > Our Director)
3. Director profile — 3 text sub-sections (Professional Journey / Driving Innovation / Vision for the Future) + portrait photo + name caption
4. Footer

### Gallery
1. Header / Nav
2. Breadcrumb (Home > Gallery)
3. Image grid — **currently only 2 broken placeholder entries; needs real photo content (manufacturing facility, lab, products, team, certifications)**
4. Footer

### Contact Us
1. Header / Nav
2. Breadcrumb (Home > Contact Us)
3. "Get In Touch" — contact form (name, email, message fields implied)
4. Contact Info block — address, phone, email
5. WhatsApp click-to-chat link
6. Footer
7. *(Recommend adding an embedded map)*

### Footer (Global — appears on every page)
- Column 1: About Us blurb (short company description)
- Column 2: "About Clinic" link list — About Clinic, Careers, Press & Media, Our Blog, Advertising
- Column 3: Quick Links — Home, About Us, Our Products, Gallery, Contact Us
- Column 4: Our Location — address, email, phone
- Bottom bar: Copyright line + designer credit

---

## 4. Known Structural Issues to Fix in Redesign

- "Our Products" has no destination page (404) — needs a real product catalog page
- Manufacturing mega-menu (Drug / Nutraceutical / Ayurvedic / Cosmetics) is fully non-functional — recommend turning this into real category → sub-category → product pages
- Careers, Press & Media, Our Blog, Advertising are placeholder links with no content
- Gallery has no working images — needs an actual photo gallery (facility, lab, manufacturing, certifications, team)
- Repeated content blocks (Core Values, Testimonials) duplicated across Home and About — consider a single canonical version
- No visible product catalog, certifications/compliance page, or downloadable brochures — common expectations for a pharma manufacturer site
