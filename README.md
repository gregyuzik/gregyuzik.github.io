# gregyuzik.github.io

Personal portfolio for Gregory Yuzik — Cloud Architect & Developer.

[**View the site →**](https://gregyuzik.github.io)

## Stack

Single-page static site, hand-written HTML/CSS/JS. No build, no framework, no
dependencies. Self-hosted fonts (Inter, Audiowide). Deployed via GitHub Pages
from `main`.

## Layout

```
index.html                  Single-page site
404.html                    Custom 404 page
favicon.ico                 Root favicon (16/32/48 sizes)
assets/
├── favicon-32.png          32×32 PNG favicon
├── favicon.png             256×256 PNG favicon
├── icon-192.png            192×192 PWA icon
├── icon-512.png            512×512 PWA icon
├── icon-maskable-512.png   512×512 maskable PWA icon (80% safe zone)
├── apple-touch-icon.png    180×180 iOS home-screen icon
├── og-image.jpg            1200×630 social-card preview
├── VultyrIcon.png          App tile (144×144 source, 72×72 displayed)
├── KlosytIcon.png          App tile (144×144 source, 72×72 displayed)
├── resume.pdf              Downloadable résumé
└── fonts/                  Self-hosted WOFF2 (Inter + Audiowide, latin)
manifest.webmanifest        PWA manifest
robots.txt                  Allow-all + sitemap pointer
sitemap.xml                 Single-URL sitemap
```
