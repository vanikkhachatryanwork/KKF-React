# Styling guide

The application uses SCSS. SCSS is regular CSS with optional features such as nesting and reusable variables. Existing rules can be edited exactly like CSS.

## Files

- `main.scss` is the single entry imported by React. You normally do not edit it.
- `_base.scss` contains resets, shared elements, basic layout, and Swiper defaults.
- `_site.scss` contains the current KK Furniture colors and component/page designs.

## Common edits

At the beginning of `_site.scss`, the `:root` block contains the design settings:

- `--paper`, `--surface`: page backgrounds
- `--ink`, `--ink-soft`: text colors
- `--espresso`, `--walnut`, `--wood`, `--brass`: brand colors
- `--radius-*`: corner roundness
- `--shadow-*`: card and image shadows
- `--page`: horizontal page spacing
- `--section`: vertical section spacing

Component classes use clear names such as `.site-header`, `.hero-video`, `.about-section`, `.featured-showcase`, `.work-grid`, `.gallery-stage`, and `.site-footer`.

Responsive rules are at the end of the relevant sections and use `@media` queries. The main breakpoints are 1180px, 980px, 680px, and 460px.

Run `npm run dev` while editing. Vite recompiles SCSS automatically. Run `npm run build` for minified production CSS.
