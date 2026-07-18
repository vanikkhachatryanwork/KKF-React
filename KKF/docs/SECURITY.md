# Security and Git safety

## Files that are safe to commit

These Firebase files are public configuration and belong in Git:

- `firebase.json` — Hosting rules, rewrites, and cache headers
- `.firebaserc` — Firebase project alias and public project ID
- `.firebaseignore` — files excluded from Hosting uploads

A Firebase project ID is not a password. Hiding it does not provide security.

## Files that must never be committed

The project `.gitignore` excludes:

- `.env` and environment-specific variants
- Firebase local cache and debug logs
- Service-account JSON files
- Credential and secret JSON files
- Private keys and certificates
- `node_modules/`, `dist/`, coverage, and local tool caches

Never place secret keys under `public/`. Every file in `public/` is copied into the production website and is visible to visitors.

## Firebase authentication

`firebase login` stores the session outside this repository. Do not generate or commit CI tokens.

For automated deployment, prefer a trusted CI provider's Firebase/Google authentication integration and encrypted repository secrets. Do not put credentials directly inside workflow YAML or npm scripts.

## Environment variables

Vite variables prefixed with `VITE_` are included in the browser bundle. They are public and must not contain secrets.

Use `.env.example` only for documented placeholder values:

```text
VITE_EXAMPLE_PUBLIC_VALUE=
```

Keep real `.env` files local. If a secret is accidentally committed, removing the file from the latest commit is not enough—rotate the credential immediately because it remains in Git history.

## Before pushing

Review staged files:

```powershell
git status
git diff --cached
```

Search tracked files for suspicious names:

```powershell
git ls-files | Select-String -Pattern "\.env|secret|credential|service-account|\.pem|\.key"
```

Then run:

```powershell
npm run lint
npm run build
```

## Reporting a security issue

Do not post credentials or private customer data in public issues. Revoke exposed credentials first, then investigate and clean repository history if necessary.
