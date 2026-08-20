# ShaqoAI monorepo

| Area | Path | Runtime |
| --- | --- | --- |
| Web | `apps/web` | React, Vite |
| Mobile/Desktop | `apps/mobile` | Flutter scaffold |
| Agent API | `apps/backend` | Python, FastAPI scaffold |
| Shared contracts | `packages/shared-types` | TypeScript |

## Web development

```bash
cd apps/web
npm install
npm run dev
```

For workspace commands, install pnpm then run `pnpm install` and `pnpm dev:web` from the repository root.

## Vercel

Deploy from repository root. The root `vercel.json` builds `@shaqoai/web`, emits `apps/web/dist`, and rewrites client-side routes such as `/login` to the Vite entry point.
