# LittleCures

[![CI](https://github.com/AEVentures/littlecures/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/AEVentures/littlecures/actions/workflows/ci.yml)
[![Deploy](https://github.com/AEVentures/littlecures/actions/workflows/deploy.yml/badge.svg?branch=main)](https://github.com/AEVentures/littlecures/actions/workflows/deploy.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)
[![Website](https://img.shields.io/website?url=https%3A%2F%2Flittlecures.org&label=littlecures.org)](https://littlecures.org)

**Open infrastructure to accelerate cures for children with cancer.**

LittleCures is a public, open-source effort to build shared tools, data, and models for pediatric oncology — starting with the deadliest and most neglected diseases.

## Why this exists

- Most cancer drugs are developed for adults; children are an afterthought.
- The deadliest pediatric brain cancers, like DIPG/DMG, have seen almost no survival improvement in decades.
- Data is siloed across institutions, making rare pediatric cancers impossible to model at scale.
- Access is wildly unequal: survival can be 80% in high-income countries and below 20% in low-income countries for the same disease.

We do not accept that a child's life is worth less because the market is small.

## What we are building

1. **Open pediatric trial matching** — help oncologists and families find relevant clinical trials fast.
2. **Open target and IP registry** — map molecular drivers, patent status, trials, and models for neglected pediatric cancers.
3. **Federated learning tools** — train shared models without moving patient data.
4. **Access and advocacy infrastructure** — open IP, equitable licensing, and policy tools.

## Tech stack

- [Vite](https://vitejs.dev/) + [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide](https://lucide.dev/) icons
- [Vitest](https://vitest.dev/) for testing

## Run locally

```bash
pnpm install
pnpm dev
```

## Build

```bash
pnpm build
pnpm preview
```

## Test

```bash
pnpm test
```

## Documentation

- [Mission](docs/MISSION.md)
- [White Paper](docs/WHITEPAPER.md)
- [Architecture](docs/ARCHITECTURE.md)
- [Roadmap](docs/ROADMAP.md)
- [Collaboration Guide](docs/COLLABORATION.md)
- [Getting Started](docs/GETTING_STARTED.md)

## Deploy

The live site is at https://littlecures.org/ and is hosted on GitHub Pages. Pushes to `main` trigger the `.github/workflows/deploy.yml` action, which builds and deploys automatically.

You can also run `pnpm build` and serve the `dist/` directory on any static host.

## Contribute

See [CONTRIBUTING.md](./CONTRIBUTING.md). We welcome engineers, designers, clinicians, researchers, and advocates.

## License

[MIT](./LICENSE)
