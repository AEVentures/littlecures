# Getting Started

This guide is for anyone who wants to contribute to LittleCures.

## Prerequisites

- Node.js 18 or newer
- pnpm 8 or newer
- Git

## Install and run

```bash
git clone https://github.com/littlecures/littlecures.git
cd littlecures
pnpm install
pnpm dev
```

The site will be available at `http://localhost:5173`.

## Build and test

```bash
pnpm build
pnpm test
```

`pnpm build` runs TypeScript and Vite. The output is in `dist/`.

`pnpm test` runs the Vitest suite.

## Project structure

```
littlecures/
├── docs/               # Mission, white paper, architecture, roadmap
├── public/             # Static assets like favicon
├── src/
│   ├── components/     # React components
│   │   ├── sections/   # Page sections
│   │   └── ui/         # Reusable UI primitives
│   ├── lib/            # Utility functions and tests
│   ├── App.tsx         # Main application
│   ├── index.css       # Tailwind entry point
│   └── main.tsx        # Application entry point
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## Style guide

- TypeScript with `strict: true`.
- React functional components with named exports.
- Tailwind CSS for styling.
- `cn()` from `src/lib/utils.ts` for class merging.
- Keep components small and focused.
- Write or update tests when adding logic.

## Find something to work on

1. Read `docs/ROADMAP.md`.
2. Check open issues and discussions on GitHub.
3. Look for the `good first issue` label.
4. Comment on an issue before starting so others know you are working on it.

## Need help?

Open a GitHub Discussion or comment on an issue. We will do our best to respond quickly.
