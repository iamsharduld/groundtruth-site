# GroundTruth — website

A static, single-page site that tells the GroundTruth story the way the project
earns trust: leading with **real data and visualizations**, and including the
honest negative result. No build step, no framework, no confidential material —
only public statistics (with sources), public regulation, the published method,
and the project's own runs.

## View it

Open `index.html` in any browser, or serve the folder:

```bash
cd site
python3 -m http.server 8000
# then open http://localhost:8000
```

## What's here

```
site/
├── index.html      # the page (one screenful of ideas, in plain language)
├── styles.css      # design system (greenness-ramp palette, Bricolage / IBM Plex type)
├── app.js          # restrained scroll reveals (progressive enhancement; no-JS safe)
└── assets/
    ├── ndvi-timeseries.svg     # greenness over two years — forest vs city vs sparse plot
    ├── sat-forest.jpg          # satellite photo — dense forest
    ├── sat-urban.jpg           # satellite photo — city centre
    ├── sat-candidate.jpg       # satellite photo — sparse plot
    ├── sat-aravalli.jpg        # the slightly-off map that landed on the city, not the forest
    └── groundtruth-study.pdf   # the feasibility study (copied from paper/report.pdf)
```

## Approach

Written for a general reader, not an expert. Technical terms are kept out of the
page: "NDVI" is simply *greenness*, the scale is labelled *0 = bare, 1 = lush*,
and the honest boundary-accuracy result is told as "the map has to be right."
The structure is deliberately short — Problem → How it works → Proof → an honest
test → close — with whitespace doing most of the work.

## Design notes

- **Signature** — a greenness ramp (clay → ochre → canopy green) carrying two
  plain readings (thriving forest vs bare/built-up), so the hero shows the core
  idea at a glance rather than stating a number.
- **Type** — Bricolage Grotesque (display) · IBM Plex Sans (body) · IBM Plex Mono
  (small labels).
- **One dark moment** — only the "honest test" section inverts, for contrast.
- **Accessibility** — skip link, visible focus, semantic headings, image alt
  text, and `prefers-reduced-motion` respected (animation off, content always shown).

## Updating the chart

The time-series SVG comes from the codebase; refresh and copy it in:

```bash
cd mvp && python -m satellite.cli --site <id> --start 2023-01-01 --end 2024-12-31
# then copy the generated SVG into site/assets/ndvi-timeseries.svg
# (the plain axis/legend labels are hand-edited in the copy)
```
