# Klosyt Website Redesign & Modernization Plan

## 1. HTML Cleanup & SEO

**index.html:**
- Remove duplicate `<meta name="viewport">` (appears only once currently, but verify other pages)
- Add Open Graph meta tags (`og:title`, `og:description`, `og:image`, `og:url`, `og:type`)
- Add Twitter Card meta tags (`twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`)
- Add canonical `<link rel="canonical">`
- Replace `<a href="javascript:void(0)" onclick="rotateWallpaper()">` with a proper `<button>` element
- Remove inline `onmouseover`/`onmouseout` handlers on App Store badges (move to CSS `:hover`)
- Move inline `style` attributes from Pantone cards to CSS classes (e.g., `--swatch` values → named CSS classes per card)
- Add `loading="lazy"` to all images below the fold (app icons in grid, App Store badges)
- Add `aria-hidden="true"` to floating emoji cards (decorative)
- Add `role="img" aria-label="..."` to emoji-based tiles where they convey meaning

**privacy.html & support.html:**
- Same SEO meta tag additions
- Same `javascript:void(0)` → `<button>` fixes
- Add `loading="lazy"` to below-fold images

## 2. Image Optimization

- Convert wallpaper JPGs to WebP format using `cwebp` (fallback via `<picture>` elements not needed for this site's target audience — iOS/Mac users with modern browsers)
- Add `loading="lazy"` and `decoding="async"` to wallpaper/hero images
- Compress AppIcon PNGs if possible (they're already reasonably sized)
- Update `script.js` wallpaper references from `.jpg` to `.webp`
- Update the inline theme loader script in `<head>` to reference `.webp`

## 3. CSS Modernization

**Organization — add `@layer` structure:**
```css
@layer base, layout, components, patterns, utilities, responsive, light-mode;
```

**Variable consolidation:**
- Move card-specific `--swatch` values from inline HTML `style` attrs into named CSS classes:
  - `.card-theme-blue { --swatch: #1a3d8f; --swatch-2: #2a5ca8; }`
  - `.card-theme-gold { --swatch: #ffcc00; --swatch-2: #ff9500; }`
  - etc.
- Add spacing tokens: `--space-xs`, `--space-sm`, `--space-md`, `--space-lg`, `--space-xl`
- Add border-radius tokens: `--radius-sm`, `--radius-md`, `--radius-lg`, `--radius-pill`

**Visual enhancements:**
- Add subtle gradient border effect on Pantone cards using `border-image` or pseudo-element
- Improve hover micro-interactions: add scale + glow on glass-emoji-tiles
- Add staggered animation delays for scroll-reveal children (cards in a row animate sequentially)
- Smoother theme transition: add CSS transition on `background-image` for `.hero-background`
- Add subtle text shimmer effect on hero card title

**Responsive refinements:**
- Ensure language badges wrap cleanly on very narrow screens
- Test and adjust nav pill at 320px width

## 4. JavaScript Improvements

**i18n.js:**
- Change `el.innerHTML = value` to `el.textContent = value` for all translations that don't contain HTML (most of them)
- Add `.catch()` error handling to all `fetch()` calls with user-friendly fallback
- Add a small loading state indicator while translations load

**script.js:**
- Replace `innerHTML` usage for theme pill with `textContent` + separate emoji element
- Add error handling to `Image()` loading in `setWallpaper()`
- Move the inline scroll-reveal `<script>` from index.html into script.js to consolidate

## 5. Accessibility Improvements

- Replace all `<a href="javascript:void(0)">` with `<button>` elements
- Add `aria-hidden="true"` to `#floating-clothes` container (purely decorative)
- Add `aria-label` to theme switcher button ("Change wallpaper theme")
- Add `aria-label` to language switcher button ("Change language")
- Add `role="navigation"` and `aria-label="Main"` to `<nav>`
- Add skip-to-content link for keyboard users
- Ensure all interactive elements have visible focus styles (`:focus-visible`)
- Add `aria-expanded` attribute to language dropdown toggle

## 6. Visual Refresh Highlights

- **Staggered scroll reveals**: Cards in `.steps-row` and `.splash-grid` animate in sequentially with 100ms delays
- **Glass-emoji-tile hover**: Scale up slightly (1.05) with enhanced glow shadow
- **Pantone card hover**: Subtle border gradient shimmer
- **Footer**: Add a subtle gradient divider line above
- **Languages section**: Add a gentle wave/fade animation on the badges

## File Changes Summary

| File | Changes |
|------|---------|
| `index.html` | SEO meta, a11y attrs, remove inline styles/handlers, lazy loading |
| `privacy.html` | SEO meta, a11y fixes |
| `support.html` | SEO meta, a11y fixes |
| `styles.css` | @layer structure, CSS variables, card theme classes, micro-interactions, focus styles, stagger animations |
| `script.js` | Consolidate inline scripts, error handling, innerHTML→textContent |
| `i18n.js` | textContent for non-HTML strings, fetch error handling |
| `assets/` | WebP conversion of wallpaper images (if tooling available) |

## Execution Order

1. CSS: Add variables, @layer, card theme classes, micro-interactions, focus styles
2. HTML: Apply card theme classes, remove inline styles, add SEO/a11y, lazy loading
3. JS: Error handling, textContent, consolidate inline scripts
4. Images: WebP conversion (if cwebp available)
5. Test across pages, commit, push
