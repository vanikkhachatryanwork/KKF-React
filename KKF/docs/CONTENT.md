# Editing content and media

## Interface translations

Navigation labels, hero text, buttons, footer labels, and other reusable interface copy are in:

```text
src/lib/i18n.ts
```

Every key must exist for `am`, `en`, `ru`, and `ir`. Keep the same key names across all locale objects so TypeScript can detect mistakes.

## Page and service content

Editable content is in:

```text
src/data/content.ts
```

Main exports:

- `site` — logo, hero video, phone, and social URLs
- `services` — service titles, descriptions, and images
- `works` — generated work categories and galleries
- `pages` — Home/About and Services page data

## Adding a work category

1. Create a folder under `public/assets/works/`, for example:

   ```text
   public/assets/works/dining-room/
   ```

2. Add optimized WebP images with a predictable numbered filename.
3. Add an entry to `definitions` in `src/data/content.ts`:

   ```ts
   {
     id: 8,
     slug: 'dining-room',
     titles: ['Հայերեն', 'Dining rooms', 'Столовые', 'اتاق غذاخوری'],
     gallery: sequence('dining-room', 'dining-room-', 1, 12),
   }
   ```

4. Verify `/works/dining-room` and each localized equivalent.

The slug must be lowercase and URL-safe.

## Replacing an image

If the filename stays the same, replace the file in `public/assets`. If the filename changes, update its path in `content.ts`.

Recommended formats:

- Photos: WebP or AVIF
- Transparent logos/icons: SVG or WebP
- Video: MP4 with a WebM alternative when available

Avoid uploading the original camera-sized image. Resize images to the largest size the website needs and compress them before committing.

## Updating contact details

Edit the `site` object in `src/data/content.ts`:

```ts
phone: '+37494000305',
socials: {
  facebook: 'https://...',
  viber: 'viber://...',
  instagram: 'https://...',
}
```

Empty social URLs and `#` are not rendered in the footer.

## Content safety

Content is rendered as React text, not injected HTML. Keep page descriptions as plain strings. This prevents accidental markup and script injection.
