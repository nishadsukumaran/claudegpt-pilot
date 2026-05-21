# claudegpt-pilot

ClaudeGPT pilot — first test repo for the orchestrator. Issues get built by Claude, reviewed by ChatGPT GitHub App.

## Getting Started

### Prerequisites

- [Node.js 20.x](https://nodejs.org/)
- npm (bundled with Node)

### Install

```bash
npm install
```

### Available scripts

| Script | Purpose |
|--------|---------|
| `npm run lint` | Lint source files with ESLint |
| `npm run typecheck` | Type-check without emitting output |
| `npm test` | Run the Vitest test suite |
| `npm run build` | Compile TypeScript to `dist/` |

### Quick verification

Run all checks in sequence to confirm everything is working after a fresh clone:

```bash
npm install && npm run lint && npm run typecheck && npm test && npm run build
```

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for setup instructions, coding conventions, and the PR process.
