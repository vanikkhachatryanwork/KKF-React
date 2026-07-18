# Firebase deployment

## Current project

| Setting | Value |
| --- | --- |
| Firebase project | `kk-furniture-am` |
| Hosting site | `kk-furniture-am` |
| Live URL | [https://kk-furniture-am.web.app](https://kk-furniture-am.web.app) |
| Build directory | `dist` |

The repository is linked through `.firebaserc`.

## First-time setup on another computer

```powershell
npm install
npm run firebase:login
npm run firebase:projects
```

Confirm that `kk-furniture-am` is visible.

## Deploy

```powershell
npm run deploy
```

This command:

1. Runs TypeScript checking.
2. Builds and minifies the application.
3. Uploads `dist/` to Firebase Hosting.
4. Releases the version to the live channel.

## Normal release checklist

```powershell
npm install
npm run lint
npm run build
npm run deploy
```

Before deploying, confirm that:

- The correct Firebase project is selected in `.firebaserc`.
- No `.env`, credential, service-account, or private-key file is staged in Git.
- Home, Services, Works, one work gallery, and all languages work locally.
- The production build succeeds without TypeScript errors.

After deployment, verify:

- [Home](https://kk-furniture-am.web.app)
- [English Services](https://kk-furniture-am.web.app/en/services)
- [Russian Works](https://kk-furniture-am.web.app/ru/works)
- A direct nested gallery URL and browser refresh

## Hosting configuration

`firebase.json` provides:

- `dist` as the public directory
- React SPA rewrites to `/index.html`
- Immutable caching for hashed build assets
- One-week caching for images and video
- No-cache behavior for `index.html`
- Clean URLs without trailing slashes

`firebase.json` and `.firebaserc` are safe to commit. They identify the Hosting project and deployment behavior but do not contain Firebase login tokens or private credentials.

Firebase CLI authentication is stored outside the repository in the current operating-system user profile. Never copy CLI login data into this project.

## Preview before deployment

```powershell
npm run build
npm run preview
```

Use the URL printed by Vite and verify important routes directly, including a localized nested work URL.

## Rollback

Firebase Hosting keeps previous releases. Roll back from:

1. Firebase Console
2. Hosting
3. Release history
4. Select a previous release and choose rollback

## Custom domain

In Firebase Console, open Hosting and select **Add custom domain**. Firebase provides DNS records and provisions SSL automatically after the domain is verified.

## Troubleshooting

### Nested route shows 404

Confirm the wildcard rewrite remains in `firebase.json` and deploy again.

### Firebase account is incorrect

```powershell
npx firebase logout
npm run firebase:login
```

### Changes are not visible

Run `npm run deploy`, then hard-refresh the browser. `index.html` is not cached, but images may remain cached for up to one week when their filenames do not change.

### Build fails

Run the checks independently:

```powershell
npm run lint
npm run build
```

Fix all reported errors before deploying.
