# gregyuzik.github.io — project notes for Claude

Single-page personal portfolio for Gregory Yuzik. Hand-written static site
(HTML/CSS/JS, no build, no framework, no dependencies). Deployed via GitHub
Pages from `main` at <https://gregyuzik.github.io>.

The shared `~/git/CLAUDE.md` is Swift-focused — most of it does not apply
here. Use the conventions in this file instead.

## Architecture

```
index.html                  Single-page site (hand-edited)
404.html                    Custom 404 page
manifest.webmanifest        PWA manifest
robots.txt, sitemap.xml     SEO
favicon.ico                 Root favicon
assets/
├── favicon-32.png, favicon.png
├── icon-192.png, icon-512.png, icon-maskable-512.png
├── apple-touch-icon.png    180×180 iOS home-screen icon
├── og-image.jpg            1200×630 social-card preview
├── VultyrIcon.png, KlosytIcon.png   App tiles (144×144 source)
├── resume.pdf              Downloadable résumé
└── fonts/                  Self-hosted WOFF2 (Inter + Audiowide, latin)
```

## Workflow

There is no build step. Edit HTML/CSS/JS directly, commit, and push to
`main` — GitHub Pages serves within ~1 minute. For local preview:

```sh
python3 -m http.server 8000
# then open http://localhost:8000
```

## CSP & analytics

- **CSP uses `'unsafe-inline'`** for `script-src` and `style-src` — simpler
  than site-vultyr's hashed-inline approach. Computing SHA-256 for every
  inline block on every edit is not worth it for a single-page site.
- **GA4** loads via `googletagmanager.com` (allowed in `connect-src`,
  `script-src`, `img-src`). Cookieless, anonymized IP.
- **External resources:** only Google Tag Manager / GA4. No third-party
  fonts, no CDNs, no remote images.

## Icons & branding

- **PWA icons** (`icon-192.png`, `icon-512.png`, `icon-maskable-512.png`)
  must stay in sync with the `manifest.webmanifest` reference.
- **App tiles** (`VultyrIcon.png`, `KlosytIcon.png`) are project-linked —
  update here when either app rebrands.
- **`og-image.jpg`** is 1200×630 for Open Graph; regenerate if the title or
  tagline changes.

## Branching & PRs

- **Never commit directly to `main`.** Create a feature branch first:
  `git checkout -b <short-topic>` (kebab-case, no `claude/` prefix).
- Open a PR with `gh pr create` and let the user merge.
- Read-only tasks don't need a branch.

## Gotchas

- **Merging to `main` ships immediately.** GitHub Pages deploys from `main`
  on merge — verify the site after.
- **CSP drift with site-vultyr**: these two sites deliberately use
  *different* CSP strategies (`'unsafe-inline'` here vs hashed inline
  there). Do not copy CSP snippets between them without understanding
  which model each uses.
- **Fonts are self-hosted WOFF2** — if you add a new weight/style, add it
  to `assets/fonts/` and preload in `<head>`. Never pull from Google Fonts
  (would break CSP and privacy claims).
- **`resume.pdf` is committed binary** — keep updates small and purposeful.
