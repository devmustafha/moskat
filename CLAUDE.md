# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Running commands

- Non-interactive shells resolve the system Node (22.22.1), which is too old. Prefix `npm run dev`/`build`/`start`/`deploy` with `. ~/.nvm/nvm.sh && nvm use &&` (Node 22.23.5 via `.nvmrc`). The symptom of a wrong Node is `ERR_UNKNOWN_FILE_EXTENSION ".ts"` for `cloudflare.config.ts`.
- No test runner or linter exists. `npm run typecheck` is the only automated check.

## This is vinext, not Next.js

The code uses the Next.js App Router API, but runs on **vinext** (Cloudflare's beta Vite-based reimplementation of Next.js). The `next` package is not installed; `next/*` imports resolve to vinext shims.

- Never install `next` or use the `next` CLI. Build and dev go through Vite.
- Before using a newer or less common Next.js API, check that vinext supports it.

## Cloudflare Workers runtime

- Code runs on Workers (`nodejs_compat`), not Node.js. Avoid libraries that need native Node modules or filesystem access; pick Workers-compatible ones (e.g. D1, Postgres over HTTP).
- Worker config is `cloudflare.config.ts` (`cf/config`). There is no `wrangler.toml`; don't create one. Add D1/KV/R2/etc. as bindings in its `env`; the `Env` types are regenerated into `.cloudflare/types/`.

## Conventions

- Tailwind CSS v4 is configured in CSS (`@theme` in `app/globals.css`). Don't create `tailwind.config.js`.
- Site branding (name, tagline, description) comes from `siteConfig` in `lib/site.ts`; don't hard-code it in components.
- `cf`, `@cloudflare/vite-plugin` and `vite` are pinned to exact (pre-release) versions on purpose. Upgrade them deliberately and together, never to `latest`.
