---
name: Luminous Commerce Retail
colors:
  surface: '#faf9fd'
  surface-dim: '#dbd9dd'
  surface-bright: '#faf9fd'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3f7'
  surface-container: '#efedf1'
  surface-container-high: '#e9e7ec'
  surface-container-highest: '#e3e2e6'
  on-surface: '#1b1b1f'
  on-surface-variant: '#554336'
  inverse-surface: '#2f3034'
  inverse-on-surface: '#f2f0f4'
  outline: '#887364'
  outline-variant: '#dbc2b0'
  surface-tint: '#904d00'
  primary: '#8d4b00'
  on-primary: '#ffffff'
  primary-container: '#b15f00'
  on-primary-container: '#fffbff'
  inverse-primary: '#ffb77d'
  secondary: '#a73a00'
  on-secondary: '#ffffff'
  secondary-container: '#fd651e'
  on-secondary-container: '#571a00'
  tertiary: '#765700'
  on-tertiary: '#ffffff'
  tertiary-container: '#956e00'
  on-tertiary-container: '#fffbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdcc3'
  primary-fixed-dim: '#ffb77d'
  on-primary-fixed: '#2f1500'
  on-primary-fixed-variant: '#6e3900'
  secondary-fixed: '#ffdbce'
  secondary-fixed-dim: '#ffb599'
  on-secondary-fixed: '#370e00'
  on-secondary-fixed-variant: '#7f2b00'
  tertiary-fixed: '#ffdf9f'
  tertiary-fixed-dim: '#f9bd22'
  on-tertiary-fixed: '#261a00'
  on-tertiary-fixed-variant: '#5c4300'
  background: '#faf9fd'
  on-background: '#1b1b1f'
  surface-variant: '#e3e2e6'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.015em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  title-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 26px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.03em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  space-2xs: 0.25rem
  space-xs: 0.5rem
  space-sm: 0.75rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
  space-2xl: 3rem
  gutter-mobile: 1rem
  gutter-desktop: 1.5rem
  margin-mobile: 1rem
  margin-tablet: 2rem
  margin-desktop: 3rem
---

## Brand & Style

This design system crafts a warm, tactile, and trustworthy retail commerce experience for a community lighting and electrical destination. Rooted in tactile clarity and ambient warmth, it pairs the functional precision of professional electrical hardware with the hospitable, incandescent glow of architectural and home illumination.

### Personality & Tone
- **Warm & Welcoming:** Grounded in domestic comfort, avoiding clinical coldness through golden lighting nuances.
- **Durable & Authoritative:** Communicates trade reliability, genuine certified parts, and engineering safety.
- **Accessible & Localized:** Effortlessly bilingual, providing frictionless parity between Latin technical specs and Devanagari regional browsing.

### Design Movement & Aesthetic
- **Tactile Warm Modernism:** Subtle surface depth, soft diffuse glows reminiscent of incandescent filament warmth, crisp fine-line container borders, and generous thumb-accessible touch affordances.

## Colors

The palette simulates physical light interaction: deep non-glare ink for precise legibility, backed by warm ambient surfaces and energetic electrical accents.

### Palette Architecture
- **Primary (`#D97706` / Amber Light):** Evokes rich 2700K warm filament illumination. Used for primary calls-to-action, key badges, interactive accents, and focused states.
- **Secondary (`#EA580C` / Electrical Copper & Safety Orange):** Conveys electrical vitality, industrial-grade reliability, and urgent notifications (safety guidelines, limited offers, inventory alerts).
- **Tertiary (`#FBBF24` / Ambient Radiant Glow):** Applied as subtle atmospheric tints, secondary tags, star ratings, and soft edge highlights.
- **Neutral Core (`#121316` / Deep Rich Charcoal):** Used for headlines, high-contrast structural text, and solid iconography. Replaces pure black to eliminate harsh contrast fatigue.
- **Surface System:**
  - Base App Canvas: `#FAFAF8` (warm alabaster).
  - Elevated Container Surface: `#FFFFFF` (crisp white).
  - Soft Neutral Border: `#E7E5E0` (warm stone line).
  - Subtle Muted Text: `#6B7280` (balanced mid-gray).

## Typography

Typography balances contemporary retail legibility with complete bilingual harmony. 

### Font Selection & Regional Integration
- **Latin Typography:** Plus Jakarta Sans delivers a friendly geometric rhythm with open apertures and clean terminals, making technical specifications (Lumens, Watts, Kelvins) effortless to scan.
- **Devanagari Font System:** Fallback and co-display font stacks must prioritize `Noto Sans Devanagari` and `Hind`. Line-heights for Devanagari contexts must expand by +10% over Latin baselines to preserve matra accents and conjunctive characters without clipping.
- **Hierarchy Rules:** Product titles require `headline-sm` or `title-md` in bold weights. Technical specifications, warranty labels, and retail pricing use numeric tracking optimization for instantaneous comprehension.

## Layout & Spacing

A structured 8-point spatial grid powers seamless commerce interactions, calibrated for on-the-go mobile shoppers in busy market corridors as well as desk-bound contractors reviewing orders.

### Grid Architecture & Form Factors
- **Mobile (< 768px):** 4-column fluid layout. Margins: `16px` (`space-md`). Gutters: `16px` (`space-md`). Product listing transforms into a 2-column compact grid or full-width catalog cards.
- **Tablet (768px – 1024px):** 8-column fluid layout. Margins: `32px` (`space-xl`). Gutters: `20px`. Enables split side-sheet product previews alongside categories.
- **Desktop (> 1024px):** 12-column layout with a maximum container boundary of `1280px`. Margins: auto-centered with minimum `48px` (`space-2xl`) outer clearance. Gutters: `24px` (`space-lg`).

### Touch & Reachability Mandate
All primary touch targets across mobile views enforce a minimum hit area of `48px x 48px` to guarantee thumb ease during physical in-store or roadside navigation.

## Elevation & Depth

Visual depth reflects real-world warm ambient backlighting rather than cold gray drop shadows.

### Ambient Warm Shadow System
- **Level 0 (Flat Surface):** Clean border-defined plane (`1px solid #E7E5E0`). No shadow. Used for foundational page containers and table segments.
- **Level 1 (Card Rest):** `0px 2px 8px -1px rgba(18, 19, 22, 0.04), 0px 1px 3px 0px rgba(217, 119, 6, 0.03)`. Subtle ground contact with a faint warm ambient reflection.
- **Level 2 (Hover / Active Cards):** `0px 8px 24px -4px rgba(18, 19, 22, 0.08), 0px 3px 8px -2px rgba(217, 119, 6, 0.12)`. Applied when interacting with product cards, category tiles, and selectable kits.
- **Level 3 (Sticky Menus / Sheets / Bottom Nav):** `0px -4px 20px 0px rgba(18, 19, 22, 0.06), 0px 1px 0px 0px rgba(231, 229, 224, 0.8) inset`.
- **Level 4 (Modals & Spotlight Overlays):** `0px 20px 48px -10px rgba(18, 19, 22, 0.18), 0px 0px 0px 1px rgba(217, 119, 6, 0.15)`. High-focus dialogue popups such as quick inquiry or order confirmation.

## Shapes

The shape vocabulary emphasizes friendliness, premium craftsmanship, and modern consumer hardware.

### Radius Scale
- **Interactive Controls (Inputs, Buttons, Segment Bars):** `rounded-lg` (`0.75rem` / `12px`) for comfortable thumb ergonomics.
- **Surface Cards & Showcase Containers:** `rounded-2xl` (`1rem` / `16px`) delivering a polished, contemporary retail aesthetic.
- **Pills & Badges (Price Tags, Stock Status, Lumens):** `rounded-full` (`9999px`) to offset structural rectangular layouts with organic cues.

## Components

### Buttons
- **Primary:** Solid `#D97706` background with crisp white typography, `rounded-lg`, height `48px`, font `label-lg`. On hover/active, transitions to `#B45309` with a diffuse warm amber glow shadow (`0 4px 14px rgba(217, 119, 6, 0.35)`).
- **Secondary / WhatsApp Order Action:** High-contrast neutral `#121316` surface with crisp white text, or clean white container bordered with `#E7E5E0` featuring an energetic copper-orange accent `#EA580C`.
- **Ghost:** Transparent fill, `#121316` typography, hover states revealing `#FAFAF8` background with subtle amber text tint.

### Product & Category Cards
- **Structure:** Pure white (`#FFFFFF`) surface, framed by a `1px` soft border in `#E7E5E0`, contoured with `rounded-2xl`.
- **Interaction:** Hover lifts the card into Elevation Level 2, brightening the border to `#FBBF24`.
- **Media Presentation:** Product images sit on warm-neutral padded backdrops (`#FAFAF8`) with integrated tag chips for Wattage, Color Temperature (e.g., 3000K Warm White), and Warranty badges.

### Input Fields & Search
- **Container:** Minimum height `48px`, base surface `#FFFFFF`, border `1.5px solid #E7E5E0`, shape `rounded-lg`.
- **Active / Focus:** Border transitions crisply to `#D97706` with an outer ring glow: `box-shadow: 0 0 0 3px rgba(245, 158, 11, 0.18)`.
- **Bilingual Placeholders:** Placeholder labels feature dual language hints (e.g., "Search LED Bulbs, Wires, Switches / बल्ब, तार, स्विच खोजें").

### Chips & Badges
- **Status Chips:** `rounded-full`, height `28px`, padding `0 12px`.
  - In Stock: Tinted emerald background with deep green text.
  - Electrical / Heavy Duty: Warm copper tint (`#EA580C` at 10% opacity) with `#C2410C` text.
  - Lumens / Color Warmth: Amber tint (`#FEF3C7`) with `#92400E` text.

### Selection Controls (Checkboxes & Radios)
- **Checkboxes:** `20px x 20px`, `rounded-md`, `2px solid #D1D5DB`. Checked state displays a solid `#D97706` fill with a white checkmark icon.
- **Radio Buttons:** `20px x 20px`, circular border `#D1D5DB`. Active state displays `#D97706` boundary with an inner amber dot of `8px`.

### Retail Specific: Contact & Fast Inquiry Floating Bar
- **Bar Design:** Bottom-docked sticky container on mobile, cushioned with `12px` screen margins, elevated via Level 3 depth. Features immediate dual action buttons: direct phone dialer and WhatsApp inventory chat with pre-filled product SKU details.