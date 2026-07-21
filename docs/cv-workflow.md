# The 5-Phase CV Pipeline Lifecycle

The 5-phase structured workflow for building world-class, role-tailored CVs with 2-page PDF strict output verification.

```
┌──────────┐     ┌──────────┐     ┌──────────┐     ┌──────────┐     ┌──────────┐
│  Phase 1 │ ──> │  Phase 2 │ ──> │  Phase 3 │ ──> │  Phase 4 │ ──> │  Phase 5 │
│ RESEARCH │     │  TAILOR  │     │  BUILD   │     │  EXPORT  │     │  REPORT  │
└──────────┘     └──────────┘     └──────────┘     └──────────┘     └──────────┘
```

---

## Phase 1: RESEARCH → Understand Target Role
* **Goal:** Determine the 1-sentence root hiring signal required by the target role.
* **Output:** Role Signal Matrix & Trade-off Framing Table.
* **Actions:**
  1. Identify top 10 key accomplishments/metrics from canonical profile.
  2. Perform trade-off framing (what to emphasize vs de-emphasize).
  3. Map experience to the specific role lens.

---

## Phase 2: TAILOR → Write Markdown Content
* **Goal:** Write dense, high-impact bullet points using the Google XYZ Formula.
* **Formula:** `[Power Verb] + [What was built] → [Quantified / Scope Outcome]`
* **Rules:**
  - Every bullet MUST start with a FAANG power verb (e.g. *Spearheaded*, *Engineered*, *Architected*, *Standardized*).
  - If exact analytics metrics are unavailable, use **Scope & Volume Indicators** (e.g. platform count, store network size, component library count).
  - Standardize 5-point Core Highlights and 3-column Competency categories.

---

## Phase 3: BUILD → Generate HTML
* **Goal:** Translate Markdown into pixel-perfect, design-system-compliant HTML.
* **Rules:**
  - Follow `DS-Foundations.md` color tokens (`#000000`, `#ffffff`, `#4E4B66`).
  - Use CDN links for `DIN Condensed` and `SF Pro Rounded`.
  - Enforce `max-w-[1811px]` container with `px-[73px]` horizontal padding.
  - Implement 5-col Scope Banner for instant visual impact.

---

## Phase 4: EXPORT → Playwright PDF Engine
* **Goal:** Export HTML into a strict 2-page PDF document.
* **Script:** `scripts/export-pdf.mjs`
* **Critical Settings:**
  - Viewport: `1811px` × `2560px` (or `2800px` for v1 layout).
  - `printBackground: true` (ensures black header block renders correctly).
  - `document.fonts.ready` wait to ensure font loading before rendering.
  - Verification: Automated check confirming `pageCount == 2`.

---

## Phase 5: REPORT → Audit & Application Report
* **Goal:** Generate a single-page HTML audit report evaluating candidate positioning.
* **Structure:**
  - Executive Summary & Diagnostic Scores (Before/After).
  - Bullet Transformation Table.
  - Candidate Differentiator Grid.
  - File Asset Registry.
