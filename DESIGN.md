---
name: Orange City Tech Circuit
colors:
  surface: '#111317'
  surface-dim: '#111317'
  surface-bright: '#37393e'
  surface-container-lowest: '#0c0e12'
  surface-container-low: '#1a1c20'
  surface-container: '#1e2024'
  surface-container-high: '#282a2e'
  surface-container-highest: '#333539'
  on-surface: '#e2e2e8'
  on-surface-variant: '#c2c6d5'
  inverse-surface: '#e2e2e8'
  inverse-on-surface: '#2f3035'
  outline: '#8c909f'
  outline-variant: '#424753'
  surface-tint: '#adc6ff'
  primary: '#adc6ff'
  on-primary: '#002e69'
  primary-container: '#4d8efe'
  on-primary-container: '#00285c'
  inverse-primary: '#005ac1'
  secondary: '#ffb692'
  on-secondary: '#562000'
  secondary-container: '#fd6c00'
  on-secondary-container: '#562000'
  tertiary: '#6ddd81'
  on-tertiary: '#003914'
  tertiary-container: '#30a550'
  on-tertiary-container: '#003210'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d8e2ff'
  primary-fixed-dim: '#adc6ff'
  on-primary-fixed: '#001a41'
  on-primary-fixed-variant: '#004494'
  secondary-fixed: '#ffdbcb'
  secondary-fixed-dim: '#ffb692'
  on-secondary-fixed: '#341100'
  on-secondary-fixed-variant: '#7a3000'
  tertiary-fixed: '#89fa9b'
  tertiary-fixed-dim: '#6ddd81'
  on-tertiary-fixed: '#002108'
  on-tertiary-fixed-variant: '#005320'
  background: '#111317'
  on-background: '#e2e2e8'
  surface-variant: '#333539'
typography:
  display-hero:
    fontFamily: Plus Jakarta Sans
    fontSize: 64px
    fontWeight: '800'
    lineHeight: 72px
    letterSpacing: -0.03em
  display-hero-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 38px
    fontWeight: '800'
    lineHeight: 46px
    letterSpacing: -0.02em
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.015em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
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
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  code-snippet:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 22px
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.06em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.08em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 3rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style
The design system bridges the rigorous engineering culture of Google Developer Group with the organic vibrancy of Nagpur, the "Orange City" of India. The visual voice is energetic, developer-centric, forward-thinking, and culturally grounded. It speaks directly to software engineers, tech leads, student builders, and open-source contributors.

The design movement synthesizes **Modern Technical Minimalism** with **Luminous Glassmorphism** and subtle **Cultural Geometry**. Deep slate backgrounds establish a premium dark workspace aesthetic reminiscent of modern code editors and developer dashboards. Layered glass cards, hairline circuit-mandala vector accents, and vibrant multi-color glowing edges create an authentic high-tech signature that avoids generic dark-mode tropes.

## Colors
The palette balances the Google quad-color heritage with Nagpur's warm citrus and saffron tones across a deep architectural dark theme.

### Color Roles & Meaning
- **Canvas Base (`#0F1115`)**: Deep charcoal backdrop providing high contrast for glowing interfaces.
- **Surface Elevation (`#161920`)**: Elevated card base, offering a neutral foundation for translucent glass states.
- **Surface Highlight / Stroke (`#262C38`)**: Border definition for structural hairline borders.
- **Primary / Google Blue (`#4285F4`)**: Anchor actions, links, primary interactive states, and core cloud/AI tracks.
- **Secondary / Nagpur Saffron Orange (`#FF6D00` / `#FF8F00`)**: Regional identity, call-to-actions, speaker spotlight tags, and warm celebratory badges.
- **Google Red (`#EA4335`)**: Error states, live/urgent event badges, and accent highlights.
- **Google Yellow (`#FBBC04`)**: Community awards, alerts, and lightning talk tracks.
- **Google Green (`#34A853`)**: Success confirmations, confirmed RSVP status, and mobile/Android tracks.
- **Nagpur Cream / Citrus Mist (`#FFF3E0`)**: Soft contrast pill backgrounds, badge text highlights, and glowing radial underlays.

## Typography
The typography marries structural geometric modernism with functional technical clarity:

- **Headlines (`Plus Jakarta Sans`)**: Evokes the friendly, precise geometry of Google's flagship brand typography, offering crisp rendering at large display sizes.
- **Body Text (`Inter`)**: Delivers tall x-height, neutral tone, and effortless multi-paragraph legibility in dark environments.
- **Labels, Metadata, & Accents (`JetBrains Mono`)**: Embeds a developer-first spirit for tags, schedule time slots, session technical tracks, and coordinate labels.

Always render `label-md` and `label-sm` in uppercase with expanded letter-spacing to emphasize technical categorization.

## Layout & Spacing
The layout follows a 12-column responsive fluid grid pinned to a maximum container width of `1280px` for desktop viewports.

### Breakpoints & Fluidity
- **Desktop (>= 1024px)**: 12-column grid, `margin: 3rem`, `gutter: 1.5rem`.
- **Tablet (768px – 1023px)**: 8-column grid, `margin: 2rem`, `gutter: 1.25rem`.
- **Mobile (< 768px)**: 4-column grid, `margin: 1.25rem`, `gutter: 1rem`.

### Rhythm Rules
Section spacing maintains an open, editorial tempo. Apply `space-xl` (or multiples thereof) between major landing content blocks. Interactive card internal padding defaults to `space-lg` on desktop and collapses to `space-md` on mobile.

## Elevation & Depth
Depth is created through frosted glass layers, colored edge halos, and ambient backdrops rather than conventional muddy drop shadows:

- **Level 0 (Canvas Base)**: Flat `#0F1115` with subtle background ambient gradients (radial blurs of saffron `#FF6D00` and Google Blue `#4285F4` at 8-12% opacity).
- **Level 1 (Card Default)**: Translucent surface `rgba(22, 25, 32, 0.72)` supported by a `backdrop-filter: blur(16px)` and a crisp 1px ghost border `rgba(255, 255, 255, 0.08)`.
- **Level 2 (Hover / Active Cards)**: Background shifts to `rgba(32, 37, 48, 0.85)` with a colored perimeter halo: `box-shadow: 0 12px 32px -4px rgba(66, 133, 244, 0.15), 0 0 0 1px rgba(66, 133, 244, 0.3)`.
- **Level 3 (Modals / Overlays)**: Surface `rgba(22, 25, 32, 0.94)` with `backdrop-filter: blur(24px)` and `box-shadow: 0 24px 48px -12px rgba(0, 0, 0, 0.6)`.

## Shapes
The design embraces generous, friendly rounded corners reflecting Google's Material 3 evolution:

- **Base Components**: Inputs, buttons, and micro-chips utilize `0.75rem` (`rounded-xl`).
- **Feature Cards**: Standard cards use `1rem` to `1.25rem` (`rounded-2xl`).
- **Hero Banners & Glass Modals**: Deep enclosures employ `1.5rem` to `2rem` (`rounded-3xl`).
- **Pills**: Navigation indicators, status tags, and avatar frames use `9999px` full roundness.

## Components

### Buttons
- **Primary Action (Call to Action)**: Nagpur Orange solid base (`#FF6D00`) to saffron gradient (`#FF8F00`), dark text (`#0F1115`), `font-weight: 600`, pill or `rounded-xl`, subtle outward glow on hover.
- **Secondary Action (Tech Track)**: Surface `rgba(255, 255, 255, 0.05)`, border `1px solid rgba(255, 255, 255, 0.12)`, text `#FFFFFF`. Hover triggers a Google Blue border (`#4285F4`) and blue text highlight.
- **Tertiary / Text**: Monospaced font label with a trailing dynamic arrow (`→`), no background, color `#4285F4`.

### Cards & Content Surfaces
- **Speaker & Session Cards**: Built on Level 1 Glassmorphism. On hover, the border transitions into a multi-stop gradient tracing Google colors into Nagpur saffron (`#4285F4` -> `#34A853` -> `#FBBC04` -> `#FF6D00`).
- **Circuit-Mandala Texture Overlays**: Decorative SVG line patterns with hairline strokes (`0.75px`) at 6-10% opacity, layered in card headers and hero section corners to celebrate regional heritage.

### Chips & Badges
- **Track Chips (AI/Cloud/Web/Android)**: Monospaced uppercase text (`label-sm`), `rounded-full`, low-opacity background tinted by track color (e.g., Cloud: `rgba(66, 133, 244, 0.15)` with `#4285F4` border and text).
- **Date & Location Badges**: Dark surface capsule with an orange icon dot representing the 0-mile marker of Nagpur.

### Input Fields
- Dark background (`rgba(15, 17, 21, 0.8)`), inset padding `0.875rem 1rem`, 1px border `rgba(255, 255, 255, 0.12)`. Active focus state reveals a sharp `#4285F4` border and a soft blue glow ring without harsh contrast jumps.

### Interactive Lists & Agenda Timelines
- Vertical timeline marked with alternating Google/Nagpur color dots. Monospaced time block on the left (`JetBrains Mono`), glass card with session description, speaker thumbnail, and difficulty tags on the right.