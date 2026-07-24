---
name: Ugency Digital Core
colors:
  surface: '#fbf8ff'
  surface-dim: '#dad9e5'
  surface-bright: '#fbf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f2fe'
  surface-container: '#eeecf9'
  surface-container-high: '#e8e7f3'
  surface-container-highest: '#e3e1ed'
  on-surface: '#000000'
  on-surface-variant: '#454654'
  inverse-surface: '#2f3039'
  inverse-on-surface: '#f1effc'
  outline: '#767685'
  outline-variant: '#c6c5d6'
  surface-tint: '#4650ca'
  primary: '#000582'
  on-primary: '#ffffff'
  primary-container: '#1a23a4'
  on-primary-container: '#929aff'
  inverse-primary: '#bec2ff'
  secondary: '#1b2fe6'
  on-secondary: '#ffffff'
  secondary-container: '#3e50fe'
  on-secondary-container: '#e6e6ff'
  tertiary: '#212427'
  on-tertiary: '#ffffff'
  tertiary-container: '#37393c'
  on-tertiary-container: '#a1a3a6'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e0e0ff'
  primary-fixed-dim: '#bec2ff'
  on-primary-fixed: '#00036b'
  on-primary-fixed-variant: '#2b35b1'
  secondary-fixed: '#dfe0ff'
  secondary-fixed-dim: '#bdc2ff'
  on-secondary-fixed: '#000766'
  on-secondary-fixed-variant: '#021ede'
  tertiary-fixed: '#e1e2e6'
  tertiary-fixed-dim: '#c5c6ca'
  on-tertiary-fixed: '#191c1f'
  on-tertiary-fixed-variant: '#44474a'
  background: '#fbf8ff'
  on-background: '#000000'
  surface-variant: '#e3e1ed'
  surface-border: '#E8EAF3'
  background-main: '#FFFFFF'
  accent-gradient: 'linear-gradient(135deg, #1A23A4 0%, #3F51FF 100%)'
typography:
  display-lg:
    fontFamily: Space Grotesk
    fontSize: 72px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.03em
  display-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 44px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-xl:
    fontFamily: Space Grotesk
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 0.1em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-max: 1280px
  gutter: 24px
  margin-mobile: 20px
  stack-sm: 12px
  stack-md: 24px
  stack-lg: 48px
  section-padding: 120px
---

## Brand & Style

The design system is built on a foundation of **Premium Minimalism**, blending the precision of high-end consumer technology interfaces with the expressive flair of award-winning digital agencies. The brand personality is authoritative yet innovative, positioning the agency as a high-growth partner for forward-thinking businesses.

The visual direction follows an **Apple-inspired aesthetic** characterized by:
- **Expansive Whitespace:** Using breathing room as a tool for hierarchy and luxury.
- **Glassmorphism:** Strategic use of frosted glass surfaces to create depth without clutter.
- **Technical Sophistication:** Combining geometric sans-serif headlines with humanist body text for a "Modern Professional" feel.
- **Fluid Motion:** Emphasis on high-frame-rate transitions and interactive states that feel responsive and tactile.

## Colors

The color palette is anchored by **Deep Cobalt** and **Electric Blue**, creating a high-contrast environment that feels both stable and energetic.

- **Primary & Secondary:** These colors define the brand's digital presence. The transition from `#1A23A4` to `#3F51FF` should be used for interactive elements and primary CTAs to create a sense of forward momentum.
- **Neutrals:** We use pure black (`#000000`) for text to maximize contrast and maintain a stark, bold premium aesthetic against the backgrounds.
- **Surface Tones:** Secondary backgrounds utilize a cool-toned gray (`#F7F8FC`) to subtly separate content sections without using heavy borders.

## Typography

This design system employs a tiered typographic strategy to balance personality with legibility.

1.  **Headlines (Space Grotesk):** Chosen for its technical, slightly "engineered" look. It should be set with tight letter-spacing at large sizes to create a high-impact, editorial feel.
2.  **Body (Plus Jakarta Sans):** A friendly yet modern typeface that handles long-form content with ease. It maintains high readability across all digital interfaces.
3.  **Labels (Inter):** Used for utility UI, navigation, and small metadata. Inter provides a neutral, functional contrast to the more expressive primary fonts.

## Layout & Spacing

The layout philosophy follows a **Fixed-Fluid Hybrid** model. Content is contained within a max-width of 1280px to ensure optimal line lengths and visual balance on ultra-wide displays.

- **Grid:** A 12-column grid is standard for desktop, collapsing to 4 columns on mobile. 
- **Rhythm:** We use a base-8 spacing scale. However, section-to-section spacing is intentionally generous (120px+) to evoke a premium, gallery-like experience.
- **Mobile Reflow:** On mobile devices, vertical stack spacing reduces to `stack-md` or `stack-lg`, and the side margins are tightened to 20px to maximize screen real estate.

## Elevation & Depth

Hierarchy is established through **Layered Translucency** rather than traditional heavy shadows.

- **Glassmorphism:** Navigation bars and foreground cards use a `backdrop-filter: blur(20px)` with a semi-transparent white background (`rgba(255, 255, 255, 0.7)`).
- **Subtle Shadows:** When shadows are necessary for depth, they must be "ambient" — very large blur radii (30px-60px) with extremely low opacity (3-5%) and a slight tint of the primary blue to prevent a "dirty" gray look.
- **Tiers:** 
  - **Level 0:** Main background (`#FFFFFF`).
  - **Level 1:** Secondary sections (`#F7F8FC`) or thin-bordered cards.
  - **Level 2:** Floating elements with backdrop blurs (Nav, Modals).

## Shapes

The design system uses **generous curvature** to soften the technical nature of the typography.

- **Standard Elements:** Buttons and small input fields use a `0.5rem` (8px) radius.
- **Containers:** Service cards, case study images, and large content blocks use **Extra Large (2xl/3xl)** radii, ranging from `1.5rem` to `2rem`.
- **Consistency:** All nested elements (like an image inside a card) must have a slightly smaller radius than their parent to maintain visual harmony (the "inner radius" rule).

## Components

### Buttons & CTAs
- **Primary:** Uses the blue accent gradient. On hover, the gradient should subtly shift in intensity or scale slightly (1.02x).
- **Secondary:** Transparent background with a 1px border (`#E8EAF3`). Text is `#1A23A4`.
- **Tertiary:** Text-only with a small arrow icon that slides 4px to the right on hover.

### Service Cards
Large-radius cards with a `1px` subtle border. Icons within these cards should use the primary blue or the gradient. Background is either pure white with a soft shadow or the secondary background color.

### Case Study Cards
Full-bleed imagery with a high-radius corner. Text overlays should appear on hover using a glassmorphic bottom bar or a smooth vertical fade-in of a semi-transparent surface.

### Statistics
Large `Space Grotesk` numbers in the Primary Heading color. Pair with a small `Inter` label in all-caps. Ensure numbers have a slight "counting" animation upon entering the viewport.

### Form Inputs
Minimalist style with only a bottom border that transforms into a full primary-color outline or shadow glow upon focus. Transition speed should be set to `200ms ease-out`.
