# AGENTS.md

## What this repo is

A single-page, Persian (RTL) marketing homepage for an RO water-purification shop.
React 18 + Vite, no backend and no database. All copy lives in `src/data/content.js`.

## Running it

```bash
docker compose -f docker-compose.base44.yml up -d --build
```

- One service (`web`, image `node:22-alpine`) with the repo bind-mounted at `/app`.
- Dependencies are installed at container start with `npm install` (no separate build step);
  the dev server runs with `--host 0.0.0.0 --port 3000 --strictPort`.
- Host port 3000 is the preview entry point; the compose healthcheck probes `/`.
- Stop with `docker compose -f docker-compose.base44.yml down`. `node_modules/` and `dist/`
  are git-ignored and can be deleted freely.

## Checks

```bash
docker compose -f docker-compose.base44.yml exec -T web npm run build   # compile check
curl -sS -o /dev/null -w "%{http_code}\n" http://localhost:3000/        # dev server check
```

There is no test suite or linter in this project.

## Sandbox quirks (non-obvious)

- **Preview host allowlist.** Vite's dev server receives the proxy host
  `<port>-<sandbox id>.${BASE44_SANDBOX_HOST_DOMAIN}`. `vite.config.js` extends `allowedHosts`
  with `.${BASE44_SANDBOX_HOST_DOMAIN}` **only** when `BASE44_PREVIEW_MODE === '1'`; with the
  flag unset it stays `['localhost']` (default behaviour preserved). Compose also forwards
  `__VITE_ADDITIONAL_SERVER_ALLOWED_HOSTS`, which Vite ≥ 6.1 appends automatically.
- **Mobile drawer is portalled to `document.body`.** `.site-header` uses `backdrop-filter`,
  which makes the header a containing block for `position: fixed` descendants — the drawer
  collapsed to the header's 74px height until it was rendered through `createPortal`. Keep it
  portalled if you restructure the header.
- **Animated hero** reads scroll position into a CSS variable (`--parallax`) only when
  `prefers-reduced-motion` is not set; bubbles/float animations are disabled by the media query
  in `base.css`. Never make content depend on the animation to become visible.

## Content rules

Placeholder data is intentional: `[نام برند]`, placeholder products marked «نمونه», no prices,
no star ratings, no testimonials and no contact details. Do not invent them — the page explains
in-place that they come from the connected store.
