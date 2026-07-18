# Architecture

## Overview

KK Furniture is a client-side React application. All text and media metadata are bundled with the application. Firebase Hosting serves the generated static files.

```text
Local typed content
        ↓
React route/page components
        ↓
Reusable UI components
        ↓
Vite production build
        ↓
Firebase Hosting
```

## Application entry

`src/main.tsx` mounts React, Browser Router, global Swiper styles, and the SCSS entry point.

`src/App.tsx` defines routes. Route pages are lazy-loaded so gallery code is not included in the initial page bundle unless needed.

## Layout

`SiteLayout` owns page-level structure and document language direction. Its responsibilities are delegated to:

- `SiteHeader` — navigation, works menu, mobile menu, and language links
- `HomeHero` — Home-only video hero
- `SiteFooter` — phone and configured social links

## Content model

`src/types.ts` defines the shared TypeScript contracts:

- `Locale`
- `Localized`
- `Media`
- `Work`
- `Service`
- `AboutData`
- `PageData`
- `SiteData`

`src/data/content.ts` is the source of truth for site content. Work gallery arrays are generated from predictable local filenames.

## Localization

`useLocale` reads the optional locale route parameter and returns:

- `locale` — validated locale
- `t` — translated interface labels
- `prefix` — localized URL prefix

Persian sets `dir="rtl"` on the root HTML element. Styles use logical properties such as `padding-inline` where practical.

## Galleries

`Gallery.tsx` uses Swiper with:

- Keyboard control
- Accessible navigation
- Dynamic pagination bullets
- Coverflow presentation on work pages
- Full-screen image lightbox

Images are loaded lazily except the first visible slide.

## Hosting behavior

Vite outputs production files to `dist/`. Firebase Hosting serves this directory. The wildcard rewrite in `firebase.json` sends unknown file routes to `index.html`, after which React Router resolves the page.
