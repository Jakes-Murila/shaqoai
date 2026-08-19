# ShaqoAI refactoring rules

## Project tree

```text
index.html
css/
  styles.css          # CSS entry point
  variables.css       # design tokens
  base.css            # reset and document defaults
  components.css      # reusable visual primitives
  layout.css          # animation and layout helpers
js/
  app.js              # application bootstrap
  components/
    landing.jsx       # page sections: Nav through Footer
  utils/
    runtime.js         # shared React globals
```

## Commands

```bash
npm install
npm run dev
npm run build
```

Vite serves `index.html` and bundles the ES-module graph rooted at `js/app.js`. CDN React and Tailwind remain unchanged so the rendered page keeps its existing design system.

## Prompt context protocol

1. Work on one named target and inspect only that file plus direct imports.
2. Preserve existing classes, custom properties, animation names, and markup unless the requested change requires an edit.
3. Respond as `[File Target Path] -> [Code Segment/Diff] -> [one-sentence explanation]`.
4. Use snippets or diffs; do not repeat unmodified file contents.
5. End each atomic task with `git diff --check`, a focused verification, and a Conventional Commit.
6. Store decisions here rather than restating architecture in future prompts.

## Token optimization

- Start each task with target, invariant, acceptance check, and token cap.
- Prefer file paths, symbols, and line ranges over pasted context.
- Batch read-only searches with `rg`; load source ranges only when changing them.
- Keep generated code limited to the edited module; summarize untouched modules in one line.
- Separate discovery, edit, validation, and commit into short turns unless end-to-end delivery is requested.
