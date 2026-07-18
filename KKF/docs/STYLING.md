# Styling and responsive design

## SCSS structure

```text
src/styles/
├── main.scss       Single stylesheet entry
├── _base.scss      Reset, shared layout, and component foundations
├── _site.scss      KK Furniture design and responsive refinements
└── README.md       Quick editing reference
```

SCSS accepts normal CSS syntax. Vite compiles it automatically during development and creates minified CSS during production builds.

## Design tokens

The first `:root` block in `_site.scss` contains global settings:

- Background and text colors
- Furniture brand colors
- Borders
- Corner radii
- Shadows
- Page and section spacing

Prefer changing a token rather than repeating a new color or spacing value throughout the code.

## Class naming

Components use descriptive BEM-style names:

```text
.hero-video
.hero-video__content
.featured-showcase
.featured-slide__number
.site-footer__contact
```

Keep styles scoped under the component block when adding new component-specific rules.

## Responsive breakpoints

Current layout behavior is tuned around:

- 1180px — compact desktop/laptop navigation
- 980px — tablet layouts and mobile navigation
- 680px — phones
- 460px — narrow phones
- 350px — very narrow devices

There is also a short landscape-screen query for the hero.

When changing a component, verify at least:

```text
1440 × 900
1024 × 768
768 × 1024
390 × 844
320 × 568
```

## Carousel rules

Swiper controls and pagination live in `_site.scss` under `Carousel controls`. Tablet rules constrain coverflow slide width to prevent viewport overflow.

Do not remove the global `overflow-x` protection without testing all languages and work galleries.

## Production CSS

Never edit generated files in `dist/assets`. Run:

```powershell
npm run build
```

Vite compiles SCSS, removes development overhead, minifies CSS, and emits a hashed filename for long-term caching.
