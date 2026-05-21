# Contributing to claudegpt-pilot

## Setup

1. Install [Node.js 20.x](https://nodejs.org/).
2. Clone the repository: `git clone https://github.com/nishadsukumaran/claudegpt-pilot.git`
3. Install dependencies: `npm install`

## Running locally

| Command | Purpose |
|---------|---------|
| `npm run lint` | Lint source with ESLint |
| `npm run typecheck` | Type-check with TypeScript (no emit) |
| `npm test` | Run unit tests with Vitest |
| `npm run build` | Compile TypeScript to `dist/` |

Run all checks before opening a PR:

```
npm install && npm run lint && npm run typecheck && npm test && npm run build
```

## Submitting changes

1. Branch from `main` using the format `feature/issue-{N}-<short-slug>`.
2. Make your changes and ensure all checks pass (see above).
3. Open a pull request targeting `main` with the title `[{N}] {issue title}`.
4. The PR body must include `Closes #N`, a summary, and the commands you ran.
5. A code review is required before merging. Do not merge your own PR.
