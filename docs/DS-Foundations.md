# CV Design System Foundations (`DS-Foundations.md`)

High-contrast, minimalist, monochrome design specification for professional CV and portfolio engineering.

---

## 🎨 Color Tokens

| Token | Hex Value | Applied To |
| :--- | :--- | :--- |
| `color-bg-primary` | `#ffffff` | Page body background |
| `color-bg-inverse` | `#000000` | Header background & metric banner background |
| `color-text-primary` | `#000000` | Section headings, primary body text, titles |
| `color-text-inverse` | `#ffffff` | Header title text, metric card text |
| `color-text-secondary` | `#4e4b66` | Dates, company subtitles, secondary metadata |
| `color-border` | `#000000` | Card borders (2px solid), divider lines (1px solid) |

> 🔴 **Strict Rule:** No box shadows, gradients, or arbitrary colors (e.g. no blue, red, purple). Monochromatic precision only.

---

## 🔤 Typography System

### Font Families
- **Heading Font:** `DIN Condensed`, `Impact`, `Saira Condensed`, sans-serif (uppercase only)
- **Body Font:** `SF Pro Rounded`, `ui-rounded`, `system-ui`, sans-serif

### Type Scale

| Role | Size | Weight | Line Height | Case | Font |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Candidate Name** | 56px | 700 | 56px (1.0) | UPPERCASE | DIN Condensed |
| **Header Subtitle** | 30px | 400 | 36px (1.2) | Normal | SF Pro Rounded |
| **Section Title** | 56px | 700 | 67px (1.2) | UPPERCASE | DIN Condensed |
| **Role Title** | 32px | 700 | 36px (1.1) | Normal | SF Pro Rounded |
| **Body Text** | 26–28px | 400 | 38–42px | Normal | SF Pro Rounded |
| **Metadata / Dates** | 24–26px | 400 | 36px | Normal | SF Pro Rounded |
| **Metric Value** | 44px | 700 | 44px (1.0) | UPPERCASE | DIN Condensed |

---

## 📐 Layout & Dimensions

- **Max Width:** `1811px` (`max-w-[1811px]`)
- **Horizontal Padding:** `73px` (`px-[73px]`)
- **Section Spacing:** `50px` (`gap-[50px]`)
- **PDF Viewport Dimensions:**
  - `v2-modern` layout: `width: 1811px`, `height: 2560px`
  - `v1-classic` layout: `width: 1811px`, `height: 2800px`
  - Heavy content layout: `width: 1811px`, `height: 3050px`
- **Page Constraint:** Output MUST be **exactly 2 pages** when rendered via Playwright PDF print.
