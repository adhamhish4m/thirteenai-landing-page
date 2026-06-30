# vantage — brand spec

**Wordmark:** `vantage` (lowercase, no period)
**Mark:** the `v` monogram

## Type
- Font: **Gambetta**, weight 500 (Google Fonts)
- Wordmark = Gambetta 500, upright. Only the `v` is tinted gold; the rest is ink.

## Colour
- Gold (the v): `#c3a368`
- Ink (rest of wordmark): `#2c2823`
- Ground: white `#ffffff`

## Assets in this repo
- `favicon-256.png`, `apple-touch-icon.png` — gold v on white, from the monogram
- `og-image.png` (1200x630) — wordmark + "AI Transformation Partner"
- `public/brand/v-mark-1024.png` — 1024 master of the v monogram
- `public/brand/render-favicon.html`, `render-og.html` — Chrome-headless render sources (regenerate any size from these)

## Regenerate
Open a render-*.html in Chrome headless with `--force-device-scale-factor=2 --window-size=W,H --screenshot`, then `sips -z` to target size.
