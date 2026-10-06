---
name: Обложка/аудит
description: A free expert check of a WB/Ozon main photo, sold by one loud ochre panel and proven by the real report.
colors:
  accent: "#9b6400"
  accent-hover: "#845500"
  accent-text: "#7a4f00"
  on-accent: "#ffffff"
  on-accent-soft: "#fdf8f0"
  accent-line: "rgba(255, 255, 255, .28)"
  ink: "#333333"
  ink-soft: "#4a4a4a"
  muted: "#5f5f5f"
  ground: "#fafafa"
  paper: "#ffffff"
  neutral: "#dfdfdf"
  neutral-deep: "#cdcdcd"
  line: "#d6d6d6"
  error: "#a3341f"
typography:
  display:
    fontFamily: "Fira Sans Extra Condensed, Onest, Arial Narrow, sans-serif"
    fontSize: "clamp(3rem, 7.4vw, 8rem)"
    fontWeight: 700
    lineHeight: 0.86
    letterSpacing: "0"
  display-label:
    fontFamily: "Fira Sans Extra Condensed, Onest, Arial Narrow, sans-serif"
    fontSize: "clamp(1.25rem, 1.7vw, 1.6rem)"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.01em"
  numeral:
    fontFamily: "Onest, Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: "clamp(4rem, 9vw, 8rem)"
    fontWeight: 300
    lineHeight: 0.9
    letterSpacing: "-0.04em"
    fontFeature: "tnum"
  headline:
    fontFamily: "Onest, Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: "clamp(2.1rem, 4.2vw, 3.75rem)"
    fontWeight: 400
    lineHeight: 1.04
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Onest, Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: "clamp(1.25rem, 1.7vw, 1.5rem)"
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Onest, Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Onest, Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: "15px"
    fontWeight: 500
    lineHeight: 1.2
rounded:
  image: "4px"
  check: "6px"
  card: "8px"
  panel: "10px"
  field: "12px"
  media: "18px"
  surface: "22px"
  band: "28px"
  pill: "999px"
spacing:
  inset: "clamp(8px, 1vw, 14px)"
  gutter: "clamp(16px, 3.2vw, 48px)"
  section: "clamp(96px, 12vw, 176px)"
  max: "1440px"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "6px 6px 6px 22px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.accent-hover}"
  button-ink:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-accent}"
    rounded: "{rounded.pill}"
    padding: "6px 6px 6px 22px"
    height: "48px"
  button-light:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.accent-text}"
    rounded: "{rounded.pill}"
    padding: "8px 8px 8px 30px"
    height: "64px"
  input-text:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.field}"
    padding: "12px 16px"
    height: "52px"
  chip:
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "10px 16px"
  chip-selected:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-accent}"
  apply-form:
    backgroundColor: "{colors.neutral}"
    rounded: "{rounded.surface}"
    padding: "clamp(22px, 3vw, 40px)"
  hero-panel:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    rounded: "{rounded.panel}"
  hero-card:
    backgroundColor: "{colors.paper}"
    rounded: "{rounded.card}"
    padding: "clamp(6px, .8vw, 12px)"
  accordion-pill:
    textColor: "{colors.ink}"
    rounded: "{rounded.surface}"
    padding: "10px 10px 10px 18px"
  accordion-pill-active:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-accent}"
    padding: "14px 14px 18px 20px"
  plan:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.surface}"
    padding: "clamp(28px, 3.4vw, 52px)"
  plan-full:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
  close-band:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    rounded: "{rounded.band}"
---

# Design System: Обложка/аудит

## Overview

**Creative North Star: "The Graded Cover"**

A seller judges a product cover in one second; this system answers in the same register. One loud ochre panel carries the offer, a white card inside it shows the real report, and everything after the hero calms down to a light ground, grey bands and hairline rules where the report itself does the persuading. The page reads like a professional's assessment sheet: a grade, criteria, a price, a fix order.

The voice is split between two faces. Fira Sans Extra Condensed, bold and uppercase, is reserved for the hero: the headline, the ruled band labels and the "0 ₽" badge. Below the hero, Onest speaks at regular weight with tight tracking for headings and calm body copy. Controls are pill-shaped with a round arrow disc, surfaces are gently rounded and flat, and depth appears only where a physical object (the report card, the stacked slides) needs to sit above its ground.

There is no logo or wordmark anywhere; the hero headline is the identity. Marketplace-agency noise (fake reviews, trust badges, gradients, countdowns) is refused at the system level.

**Key Characteristics:**
- One accent (#9b6400) that owns exactly three moments: the hero panel, the paid plan, the closing band.
- Condensed uppercase display face confined to the hero; regular-weight Onest with negative tracking everywhere else.
- Pill buttons with a white arrow disc that nudges right on hover.
- Flat, rounded surfaces on a #fafafa ground, separated by #dfdfdf neutral bands and 1px hairlines.
- Shadows only under objects that represent paper: the hero report card and the report slides.

## Colors

A single warm ochre against neutral greys: the accent shouts once per zone, the greys do the rest.

### Primary
- **Assay Ochre** (#9b6400): the hero panel ground, the primary pill button, the paid plan, the closing band, checkbox fill, open FAQ disc, focus ring and selection. White text on it passes AA (about 5:1).
- **Ochre Hover** (#845500): hover state of the accent button.
- **Ochre Ink** (#7a4f00): the accent when it must be small text on light or neutral grounds: links, arrow links, criteria numerals, the light button's label, the hero badge numeral.
- **On-Ochre Soft** (#fdf8f0): secondary text on the accent (band sublines, paid plan ticks).
- **Ochre Hairline** (white at 28%): rules drawn on the accent (hero band borders, paid plan tick dividers).

### Neutral
- **Graphite Ink** (#333333): all primary text, the ink button, selected chips, active accordion pill, the report-cover caption tag.
- **Soft Graphite** (#4a4a4a): long-form secondary text: list items, FAQ answers, about copy, slide captions.
- **Muted Grey** (#5f5f5f): asides, leads, legal lines; holds 4.5:1 on the #dfdfdf band.
- **Light Ground** (#fafafa): page background.
- **Paper** (#ffffff): input fields, plan cards, slide surfaces, the hero card.
- **Neutral Band** (#dfdfdf): full-width toned sections (report stack, about) and the apply form surface.
- **Neutral Deep** (#cdcdcd): borders on the neutral band: chip outlines, checkbox outline, input hover, form divider.
- **Hairline** (#d6d6d6): 1px rules between list rows, FAQ items, footer legal line, plan card outline.
- **Brick Error** (#a3341f): field errors, invalid borders, form status.

### Named Rules
**The Three Moments Rule.** The accent fills a surface in exactly three places: the hero panel, the paid plan, the closing band. Elsewhere it appears only as small text (#7a4f00), a focus ring, a check fill or an open-state disc.

**The Small-Ochre Rule.** Body-size accent text on light or neutral grounds uses Ochre Ink (#7a4f00), never the panel ochre (#9b6400).

## Typography

**Display Font:** Fira Sans Extra Condensed (with Onest, Arial Narrow)
**Body Font:** Onest (with Helvetica Neue, Helvetica, Arial)

**Character:** A loud condensed poster face for the one-second offer, and a soft, regular-weight Russian grotesk with tight tracking for everything a seller reads carefully.

### Hierarchy
- **Display** (700, clamp(3rem, 7.4vw, 8rem), 0.86, uppercase, centred): the hero headline only; on phones clamp(2.6rem, 13.5vw, 3.6rem) at 0.9.
- **Display Label** (600, clamp(1.25rem, 1.7vw, 1.6rem), 1, +0.01em, uppercase): the hero band labels; the same face at 700/26px sets the hero "0 ₽" badge.
- **Numeral** (300, clamp(4rem, 9vw, 8rem), 0.9, -0.04em, tabular): plan prices. Light, not bold.
- **Headline** (400, clamp(2.1rem, 4.2vw, 3.75rem), 1.04, -0.035em, balanced): section h2; the closing band title uses clamp(2rem, 4.4vw, 4rem) with 22ch measure.
- **Title** (400, clamp(1.25rem, 1.7vw, 1.5rem), 1.2–1.25, -0.02em): criteria group heads, FAQ questions, plan names.
- **Body** (400, 17px / 16px under 600px, 1.5): running copy; asides capped at 44ch, answers at 62ch.
- **Label** (500, 15px, 1.2): buttons (16px default, 18px large), nav links, chips, accordion pills, field labels at 14px.

### Named Rules
**The Hero-Only Condensed Rule.** Fira Sans Extra Condensed appears only inside the hero panel (headline, band labels, badge). Section headings below the hero are Onest 400 with negative tracking.

**The Regular Weight Rule.** Onest headings never go bold; hierarchy comes from size and tracking. Weight 500 is for labels and controls, 300 for the large price numerals.

## Layout

Content sits in a 1440px max container with a fluid gutter (clamp(16px, 3.2vw, 48px)); sections are separated by a generous fluid rhythm (clamp(96px, 12vw, 176px)). The hero is the exception: an inset panel (margin clamp(8px, 1vw, 14px)) filling the viewport height, painted with a fine white grid of 16 columns by 90px rows at 9% opacity. Inside it a four-row grid stacks nav, headline, a three-column stage (band, card, band at 1 : 1.2 : 1) and a three-column foot (badge, centred subline + CTA, down-arrow square).

Section heads are an asymmetric 7 : 4.4 grid: headline left, muted aside right, bottom-aligned. Criteria run in four columns (two under 1100px, one under 600px), plans in two, FAQ in a 4 : 7.6 split, about in three. The report stack is a 300vh sticky stage: a 260–360px side column with accordion pills next to a deck of slides lifted on scroll; under 860px it collapses into a plain captioned sequence. Breakpoints: 1100px, 860px, 600px.

## Elevation & Depth

Flat by default. Separation comes from tonal bands (#dfdfdf on #fafafa), white surfaces on the band and 1px hairlines. Shadows exist only under objects that stand in for paper: the hero report card and the report slides.

### Shadow Vocabulary
- **Card Drop** (`box-shadow: 0 28px 50px -28px rgba(0, 0, 0, .45)`): the white report card in the hero, lifting it off the ochre grid.
- **Slide Lift** (`box-shadow: 0 1px 2px rgba(0, 0, 0, .06), 0 24px 60px -24px rgba(0, 0, 0, .3)`): stacked report slides; on mobile `0 1px 2px rgba(0,0,0,.06), 0 18px 40px -22px rgba(0,0,0,.3)`.
- **Inset Hairline** (`box-shadow: inset 0 0 0 1px #d6d6d6`): the free plan's outline, a border that does not shift layout.
- **Focus Halo** (`box-shadow: 0 0 0 3px rgba(155, 100, 0, .18)`): text inputs on focus, with an ochre border.

### Named Rules
**The Paper-Only Shadow Rule.** A shadow means "this is a printed report sitting on something". Buttons, plans, forms and bands stay flat.

## Shapes

Soft, consistent rounding scaled to object size, with full pills for anything you press. Images inside the hero card 4px; checkboxes 6px; the hero card, badge and down-arrow square 8px; the hero panel 10px (8px on phones); inputs 12px; slides and the portrait 18px; the apply form, plans and accordion pills 22px; the closing band 28px (22px on phones). Buttons, chips, caption tags and the skip link are full pills (999px); arrow discs and FAQ toggles are circles. Thin outline SVG strokes (1.3–1.8px, round caps) are the only icon language.

## Components

### Buttons
Confident pills with a round disc carrying the arrow.
- **Shape:** full pill (999px), label left, circular disc right (36px; 30px small; 48px large).
- **Primary:** ochre ground, white label 500/16px, white disc with an ochre arrow; 48px tall, padding 6px 6px 6px 22px.
- **Hover / Focus:** ground deepens to #845500 and the disc slides 3px right over .35s on `cubic-bezier(.16, 1, .3, 1)`; active scales to .98; focus is a 2px ochre outline offset 3px.
- **Ink:** graphite ground (#333333), hover #1f1f1f, used in the apply form submit.
- **Light:** white ground with ochre-ink label and an ochre disc with a white arrow; the hero and closing-band CTA on the accent, large size (64px).
- **Sizes:** small 40px for the nav Telegram pill, large 64px for hero and close CTAs; on phones large CTAs go full width with the disc pushed right.
- **Text links:** ochre-ink, underlined at .22em offset; arrow links add a 16px outline arrow.

### Chips
- **Style:** pill, 10px 16px, white at 60% on the neutral band with a #cdcdcd border; hover goes solid white.
- **State:** checked fills graphite with white text (multi-select "what worries you").

### Cards / Containers
- **Apply form:** #dfdfdf surface, 22px radius, two-column grid (1.5 : 1) collapsing to one under 860px, divider rule above the submit row. The success state reuses the surface with a 48px drawn ochre tick.
- **Plans:** two 22px cards; the free plan is paper with an inset hairline, the paid plan fills ochre with soft white ticks and ochre hairlines. Price set as a light 300-weight numeral; ticks are 18px masked check strokes over hairline rows.
- **Closing band:** ochre, 28px radius, inside the gutter, headline left with a light large CTA.

### Inputs / Fields
- **Style:** white field on the neutral band, 52px tall, 12px radius, transparent 1px border, 16px text; labels 14px/500 above.
- **Focus:** ochre border plus an 18% ochre halo; hover shows a #cdcdcd border.
- **Error:** #a3341f border and a 13.5px error line below. Checkbox: 22px, 6px radius, fills ochre with a white tick when checked.

### Navigation
Inside the hero panel: section links left (15px/500 white, underline on hover), small light Telegram pill right. No logo. Under 1100px the links hide and only the pill remains, right-aligned. The footer carries a name line and right-aligned links that turn ochre-ink on hover.

### Hero Panel (signature)
Inset ochre panel on a fine white grid. Centred two-line condensed uppercase headline across the width; below it a white report card (8px radius, Card Drop shadow) with a graphite pill caption hanging over its bottom edge; flanking it, two bands ruled top and bottom with ochre hairlines, each with a 68 × 34 outline icon, an uppercase condensed label and a soft subline. The foot holds a white "0 ₽" badge left, the subline and light CTA centred, and a white 52px down-arrow square right that drops 3px on hover.

### Report Stack (signature)
A sticky stage on the neutral band: accordion pills (22px radius, graphite at 8% ground, white plus disc) on the left; the active pill turns graphite with white text and reveals its body while its plus rotates into a minus. On the right, 18px-radius paper slides are stacked and lifted on scroll with Slide Lift shadows; hovering a slide reveals an "Открыть крупно" graphite pill. Under 860px it becomes a plain captioned list.

### Criteria Groups
Four columns, each opened by a 1px graphite rule, an Onest title, a muted lead, then hairline-ruled rows numbered continuously 1–12 in ochre-ink tabular figures.

### FAQ
Native details rows between hairlines; questions at title size turn ochre-ink on hover; a 36px circular toggle (graphite at 7%) fills ochre with a white minus when open. Answers in soft graphite capped at 62ch.

## Do's and Don'ts

### Do:
- **Do** keep the accent as a filled surface only in the hero panel, the paid plan and the closing band.
- **Do** use #7a4f00 for accent-coloured text on #fafafa, #ffffff or #dfdfdf.
- **Do** set the hero headline and band labels in Fira Sans Extra Condensed uppercase, and every heading below the hero in Onest 400 with negative tracking (-0.02em to -0.035em).
- **Do** build every primary action as a pill with a round arrow disc (36px default, 48px large).
- **Do** separate content with #dfdfdf bands and 1px #d6d6d6 hairlines before reaching for a shadow.
- **Do** draw icons as thin outline SVG strokes (1.3–1.8px, round caps).

### Don't:
- **Don't** add a logo or wordmark; the hero headline carries the identity.
- **Don't** use the condensed display face outside the hero panel.
- **Don't** bold Onest headings; weight 500 is for controls and labels only.
- **Don't** put shadows on buttons, plans, forms or bands; shadows belong to report paper.
- **Don't** add colour-blend gradients, glows, trust badges, countdowns or invented reviews and statistics; the hero's hard-stop grid lines are the only gradient use.
- **Don't** set small text in #9b6400 on light grounds.
