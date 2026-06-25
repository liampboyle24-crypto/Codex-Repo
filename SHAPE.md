# Shape Brief: IMS Managed Services Hero Direction

## 1. Feature Summary

Shape a high-fidelity first-page / hero direction for an IMS managed-services brand and marketing surface. The audience is director- and C-suite-level stakeholders evaluating whether IMS can take accountability for AV and collaboration environments. The hero must quickly establish the cost of unreliable collaboration rooms, position IMS as the accountable operating partner, and move the visitor toward a direct call or email.

## 2. Primary User Action

The visitor should understand within the first screen that unreliable AV is an executive-level operating risk and should be prompted to contact IMS directly for a discussion.

Primary CTA direction: a punchy line paired with direct contact actions, such as:

- **Stop letting rooms decide the meeting. Talk to IMS.**
- **Call IMS**
- **Email IMS**

## 3. Design Direction

- **Fidelity**: high-fi first-page / hero direction.
- **Register**: brand / marketing.
- **Color strategy**: committed restraint — bolder than a conventional corporate AV page, but toned back enough for executives and enterprise buyers.
- **Theme scene**: a controlled executive operations briefing after a failed boardroom meeting, lit like a quiet command center rather than a glossy tech showroom.
- **Anchor references**:
  - **Hubtown**: borrow the confident structure, immersive sequencing, large typographic moments, and sense of progressive reveal; tone down the expressive real-estate drama for a corporate AV services audience.
  - **Sui**: borrow the modular full-stack framing, layered navigation/information density, and ecosystem-style confidence; translate it away from crypto/developer energy into enterprise operational assurance.
  - **IMS source page**: use only raw language, proof points, service pillars, contact details, and logo reference. Do not reuse its design DNA.

Visual direction probes were skipped because this harness does not expose native image generation for this shape step.

## 4. Scope

- **Breadth**: first-page / hero direction only, not a full landing page implementation.
- **Interactivity**: static high-fi direction with notes for first-screen motion and CTA behavior.
- **Time intent**: establish a strong direction that can be confirmed before `/impeccable craft` or implementation.
- **Responsive target**: desktop-first executive presentation quality, with mobile readability treated as a hard requirement.

## 5. Layout Strategy

The first screen should avoid the default hero formula. Instead of a centered headline plus generic supporting cards, use a split-but-asymmetric operations briefing composition:

- **Dominant left/top message**: a concise consequence-led headline about meeting failure, accountability, and lost leadership time.
- **Right/bottom evidence system**: a structured “environment status” or “accountability loop” module showing how risk becomes IMS ownership.
- **Foreground tension**: contrast executive cost language with operational signals: rooms, monitoring, reporting, refresh, and support ownership.
- **Scroll cue**: imply that the rest of the page will unpack the operating model, not just list services.

The hero should feel composed and premium, not busy. It can borrow Hubtown's cinematic pacing and Sui's modular systems confidence, but it should remain more restrained, boardroom-credible, and service-accountability focused.

## 6. Key States

- **Default**: hero loads with the IMS logo, headline, short explanatory copy, direct call/email CTA, and a visible accountability/risk module.
- **Hover/focus**: CTA actions should clearly signal clickability with accessible focus states and no purely color-dependent cues.
- **Reduced motion**: any reveal, sequencing, or diagnostic-module animation must become an instant or subtle crossfade state.
- **Small screen**: the consequence-led headline and direct call/email CTA must remain above the first major scroll; the operational module can stack below.
- **Missing contact data**: if direct phone or email is unavailable during implementation, CTA should degrade to a single “Start the discussion” contact route rather than showing placeholder contact details.

## 7. Interaction Model

- **Primary CTA**: direct call and email actions; no generic “Get started” language.
- **Secondary interaction**: optional “See how IMS takes accountability” scroll link that moves the user into the operating model section.
- **Hero motion**: use one purposeful first-load sequence only if it clarifies the accountability story — for example, unresolved room signals resolving into IMS-owned monitoring/reporting. Avoid decorative parallax or constant scroll gimmicks.
- **Navigation**: if navigation appears in the first-page direction, keep it minimal and executive-oriented: Problem, Approach, Proof, Contact.

## 8. Content Requirements

Hero copy should be punchy, direct, and executive-readable. Candidate content structure:

- **Headline lane**: “When collaboration fails, leadership pays for it.”
- **Support lane**: “IMS turns AV and collaboration environments into an accountable operating model — monitored, supported, reported, and planned before rooms become liabilities.”
- **CTA lane**: “Stop letting rooms decide the meeting. Call or email IMS.”
- **Evidence lane**: include 2–3 concise proof points or trust markers only if they support confidence without turning the hero into a stats template.
- **Required asset**: IMS logo from the source site.
- **Optional visual asset**: semantic SVG/CSS or canvas-style operational diagram; avoid generic conference-room stock unless heavily art-directed.

## 9. Recommended References for Implementation

- `.codex/skills/impeccable/reference/brand.md` for brand-register distinctiveness and anti-slop checks.
- `.codex/skills/impeccable/reference/layout.md` for the asymmetric hero layout and responsive hierarchy.
- `.codex/skills/impeccable/reference/typeset.md` for high-impact executive typography.
- `.codex/skills/impeccable/reference/animate.md` if adding the accountability-loop reveal.
- `.codex/skills/impeccable/reference/interaction-design.md` for call/email CTA affordances and focus behavior.

## 10. Confirmation Gate

Confirm this direction before implementation. In particular, confirm whether the hero headline should be:

1. **Risk-first**: “When collaboration fails, leadership pays for it.”
2. **Accountability-first**: “Your AV environment needs one accountable owner.”
3. **Meeting-first**: “Stop letting rooms decide the meeting.”
