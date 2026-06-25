# Design

## System Overview

This is a brand and marketing surface for IMS managed services. Design is the product: it must persuade senior stakeholders that unreliable AV and collaboration environments create measurable business risk, and that IMS offers the accountable operating model to remove that risk.

## Non-Negotiable Source Boundary

Reference the existing hosted page only for raw IMS managed-services language, factual proof points, contact details, and the IMS logo. Share no design DNA with that site. Do not carry over its layout, visual rhythm, palette, section treatments, typography, decorative devices, or interaction patterns.

## Creative Direction

**Scene**: an executive operations briefing after a failed boardroom meeting — precise, calm, high-accountability, and materially grounded rather than glossy tech-marketing.

**Concept spine**: “The room is either accountable or it is a liability.” The page should move from hidden cost, to operational diagnosis, to IMS's accountable closed loop, to proof, to a consultative CTA.

**Color strategy**: restrained-to-committed. Use a disciplined neutral architecture with one authoritative IMS-aligned brand anchor and a controlled signal color for risk/accountability moments. Avoid generic blue SaaS gradients, cream editorial warmth, and dark-mode cyber clichés unless a future visual brief explicitly earns them.

## Suggested Palette Direction

Use OKLCH tokens for implementation. These are starting tokens for a fresh direction, not a copy of the source site.

```css
:root {
  --color-bg: oklch(0.985 0 0);
  --color-ink: oklch(0.17 0.018 250);
  --color-muted: oklch(0.43 0.018 250);
  --color-surface: oklch(0.955 0.006 250);
  --color-panel: oklch(0.22 0.024 250);
  --color-panel-ink: oklch(0.96 0.004 250);
  --color-primary: oklch(0.42 0.105 248);
  --color-primary-ink: oklch(0.985 0 0);
  --color-signal: oklch(0.62 0.145 42);
  --color-signal-ink: oklch(0.985 0 0);
  --color-border: oklch(0.84 0.008 250);
}
```

## Typography

- Use typography that feels like an executive memo crossed with a field operations dashboard: crisp, legible, and controlled.
- Prefer one serious sans family with strong tabular numerals and a reserved display cut only if it adds authority.
- Keep headlines direct and consequence-led; avoid cleverness that obscures the operational message.
- Body copy should be concise, high-contrast, and written for scanning by stakeholders who may not be AV specialists.

## Information Architecture

A strong structure should include:

1. **Opening consequence**: unreliable rooms waste leadership time before anyone sees the AV invoice.
2. **Pain diagnosis**: delayed meetings, surprise tickets, IT distraction, budget ambushes, and unclear ownership.
3. **Accountability shift**: IMS does not just install rooms; IMS runs the environment.
4. **Closed-loop model**: monitor, detect, resolve, report, recommend, refresh.
5. **Service model**: Service & Support, Reporting / 4Sight, Staff Augmentation, and AVaaS as one accountable operating system.
6. **Proof**: awards, certification, tenure, and measurable outcomes presented as evidence, not decoration.
7. **Consultative CTA**: invite a discussion about current AV risk and the right operating model for the prospect's environment.

## Layout Principles

- Avoid repeated equal-card grids as the main storytelling device.
- Use contrast between brief executive statements and concrete operational evidence.
- Let comparisons, timelines, diagnostic checklists, and operating loops carry the story.
- Reserve metrics and proof points for moments where they support decision-making, not as generic hero ornaments.
- Design mobile as a serious reading experience, not a collapsed desktop poster.

## Interaction & Motion

- Motion should feel operational: reveal dependencies, escalation, ownership, and closed-loop progress.
- Keep transitions purposeful and fast enough for executive scanning.
- Every animation must have a reduced-motion equivalent.
- Avoid decorative parallax, gratuitous glass effects, and scroll gimmicks that make the service feel less credible.

## Imagery & Logo

Use the IMS logo as the sole required visual asset from the existing source. If imagery is introduced, prefer original or abstracted operational visuals: room readiness signals, service accountability diagrams, diagnostics, reporting artifacts, or environment maps. Avoid generic conference-room stock photos unless they are heavily art-directed and clearly support the narrative.

## Quality Bar

Before shipping, check the page against these criteria:

- Would a C-suite stakeholder understand the cost of inaction within the first screen?
- Is IMS clearly positioned as an accountable managed-services operator rather than a reactive AV vendor?
- Does the page avoid design DNA from the hosted source site?
- Are proof points specific, restrained, and tied to trust?
- Is the CTA consultative, low-friction, and credible?
- Does the interface pass contrast, keyboard, responsive, reduced-motion, and overflow checks?
