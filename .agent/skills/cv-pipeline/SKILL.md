---
name: cv-pipeline
description: 5-Phase CV Pipeline — content strategy, XYZ formula reframing, HTML generation, 2-page PDF rendering via Playwright, and diagnostic application audit reports.
version: 1.0.0
priority: HIGH
---

# CV Pipeline Skill

Automates the end-to-end engineering of professional, high-impact CVs and application audit reports.

> 🔴 **MANDATORY:** Always follow `docs/DS-Foundations.md` for design system tokens and typography rules.

## 🎯 Core Directives

1. **Google XYZ Formula:** All bullets MUST follow: `[Power Verb] + [What you built] → [Quantified / Scope Outcome]`.
2. **Design System Fidelity:** High-contrast monochrome palette (`#000000`, `#ffffff`, `#4E4B66`), `DIN Condensed` headings, `SF Pro Rounded` body, `1811px` max-width container with `73px` padding. No gradients or box shadows.
3. **2-Page Constraint:** Every PDF output MUST be **exactly 2 pages**. Height calculation: `2560px` for v2-modern, `2800px` for v1-classic.
4. **Scope & Volume Indicators:** If exact analytics/ROI numbers are unavailable, use platform counts (iOS, Android, Tablet, Web Admin), store network footprint, or design system component tokens.

---

## 🛠️ Pipeline Commands

```bash
# Export all templates to 2-page PDFs
npm run export:pdf

# Run Playwright verification tests
npm test
```
