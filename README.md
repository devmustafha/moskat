# Moskat

Hospital & medical supplies storefront built with Next.js (App Router), TypeScript and
Tailwind CSS, running on Cloudflare Workers via [vinext](https://github.com/cloudflare/vinext),
following Cloudflare's [Next.js guide](https://developers.cloudflare.com/workers/framework-guides/web-apps/nextjs/).

## Requirements

- Node.js `>= 22.23.0` (see `.nvmrc`)

## Scripts

| Command             | Description                                  |
| ------------------- | -------------------------------------------- |
| `npm run dev`       | Start the local dev server                   |
| `npm run build`     | Build the Cloudflare Worker output           |
| `npm run start`     | Preview the built Worker locally             |
| `npm run deploy`    | Deploy to Cloudflare Workers                 |
| `npm run typecheck` | Type-check the project                       |

## Project structure

```
app/                 Routes (App Router)
  api/health/        GET /api/health health check
  layout.tsx         Root layout (header + footer)
  page.tsx           Home page
components/          Shared React components
  layout/            Site header and footer
lib/                 Utilities and config
  site.ts            Site name, tagline, description
  utils.ts           `cn()` class name helper
cloudflare.config.ts Worker config (name, bindings, compatibility)
vite.config.ts       vinext + Cloudflare Vite plugins
```
