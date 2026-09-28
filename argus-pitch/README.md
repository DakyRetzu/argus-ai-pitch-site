# ARGUS AI pitch site

Single-page product presentation for ARGUS AI, revised to `ARGUS_FINAL_REVISION_PROMPT.md`
(built on the structure from `ARGUS_MASTER_PROMPT.md`).
Next.js (static export), TypeScript, Tailwind CSS. No backend, no ARGUS services, no webcam access.

## Run

```powershell
npm install
npm run dev        # http://localhost:3000
npm run typecheck
npm run build      # static site in out/
```

Deploy the `out/` folder to any static host (Vercel, Netlify, GitHub Pages, …).
The host must serve `.mov`, `.webm` and `.mp4` with HTTP range requests (all common hosts do).

## Page structure

Hero, About ARGUS, ARGUS in operation (demo video), Persistent entity tracking (screenshot, 60/40),
Structured visual events (screenshot, 40/60), Designed for real-world visual monitoring,
Better input produces better visual results, What ARGUS is built with, Contact.

One centered container (max 1240 px) for every section; no offset grid columns.

## Links

Set in `src/content/site.ts` (`links`):

- Portfolio: https://danijeltupajicportfolio.vercel.app/ (new tab)
- LinkedIn: https://www.linkedin.com/in/danijel-tupaji%C4%87-a1a3b63a1/ (new tab)
- Email: `mailto:danijeltupajic7@gmail.com`

All page copy lives in `src/content/site.ts`, verbatim from the revision brief.

## Assets

`public/assets/` holds the supplied files, **byte-identical** to the package (SHA-256 verified):

| File | Notes |
|---|---|
| `argus-logo.png` | 2048×682, opaque black ground. Blended into the page with `mix-blend-mode: lighten`, never redrawn or recoloured. |
| `argus-demo.mov` | HEVC (H.265), 1836×838, 60 fps, 46.3 s, silent audio track. First video source. |
| `argus-debug-tracking.png` | 382×712. Shown up to 1.35× (516 px) in its panel, so the text stays readable. |
| `argus-recent-events.png` | 1325×305. Shown at native size inside a frame that scrolls sideways: shrinking it into a 60% column would make its text about 7 px tall. |

`public/media/` holds **delivery files derived from the same recording**. No edits, cuts or overlays:

| File | Why |
|---|---|
| `argus-demo.webm` | VP9, 1836×838, 60 fps, 2780 frames (same as original). For Chrome, Firefox and Edge without HEVC support. SSIM vs original ≥ 0.992. |
| `argus-demo.mp4` | H.264 High@4.2, 1836×838, 60 fps, 2780 frames. Universal fallback. SSIM vs original ≥ 0.993. |
| `argus-demo-poster.jpg` | Frame at 34.5 s of the recording (PERSON #01, WATCH #06, RING #07). Shown before playback. |

HEVC plays reliably only in Safari (and on some hardware in Chrome and Edge), so without the
derived files many visitors would see a black box instead of the demo. Browsers use the first
source they can decode: the original `.mov` where HEVC is supported, otherwise WebM, then MP4.
The silent audio track was not carried into the derived files.

## Fonts

IBM Plex Sans and IBM Plex Sans Condensed via `next/font/google`: downloaded at build time and
served from the site itself (no runtime font CDN). Same family as the ARGUS interface.
If the fonts are unavailable, the stack falls back to Helvetica Neue / Arial.

## Structure

```
src/app/layout.tsx        fonts, metadata, section-reveal script (no React dependency)
src/app/page.tsx          section order from the brief
src/app/globals.css       tokens (also exposed to Tailwind) and all layout
src/components/*          one component per section; DemoVideo is the only client component
src/content/site.ts       all copy, links and media paths
```

## Verification

Done in the build environment:

- strict TypeScript check (`strict`, `noUnusedLocals`)
- server-rendered and hydrated in Chromium at 390, 834, 1024, 1280, 1440 and 1920 px:
  no horizontal overflow, no console errors, no failed requests, all images loaded
- centering: every section block's center is exactly on the viewport center (0 px offset)
  at 390, 834, 1440 and 1920 px; no text spills out of its column at any tested width
- links: portfolio and LinkedIn open in a new tab (`noopener noreferrer`), email is `mailto:`;
  the portfolio URL was fetched and responds, and it links the identical LinkedIn URL
- video: WATCH DEMO scrolls to the demo; play starts playback at 1836×838 for the full
  46.3 s, controls appear; poster and `preload="metadata"` before playback
- supplied assets: all four present, byte-identical (SHA-256) and referenced
- section reveal: all content visible after scrolling; reduced motion disables all motion

Not possible in the build environment (no network): `npm install` / `npm run build`, and
HEVC/H.264 playback (checked with the VP9 source). Run `npm run build` and view it in
Safari and Chrome once.
