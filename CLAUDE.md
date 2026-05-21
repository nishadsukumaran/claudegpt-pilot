# CLAUDE.md — ClaudeGPT Pilot

You are Claude Code working under the ClaudeGPT delivery system. Read `.claudegpt/agent-policy.md` before doing anything.

## Project Summary

**Name:** ClaudeGPT Pilot
**Purpose:** First real test repository for the ClaudeGPT orchestrator. Real implementation tasks get routed here so the loop (issue → Claude builds → PR → ChatGPT reviews → labels → ClickUp sync) can be verified end-to-end.
**Stage:** prototype
**Tech stack:** TypeScript, Node 20, Vitest

## Coding Conventions

- TypeScript strict mode, ESM modules
- File size under 400 lines where reasonable
- Tests required for every new function
- No `console.log` left in committed code

## Commands

| Command | What it does |
|---------|--------------|
| `npm install` | Install dependencies |
| `npm run lint` | Run linter |
| `npm run typecheck` | Run type checker |
| `npm test` | Run tests |
| `npm run build` | Build for production |

Run lint + typecheck + test + build **before** marking any PR ready.

## Branch and PR Format

- Branch: `feature/issue-{N}-<short-slug>`
- PR title: `[{N}] {issue title}`
- PR body must include: `Closes #{N}`, Summary, Files Changed, Tests Run, Known Limitations, Follow-Up Tasks, Agent Notes

## Hard Rules (mirrors agent-policy.md §2)

- No push to `main`, `master`, `production`, `release/*`
- No force-push
- No merge PRs (humans only)
- No `.env*` or secret files
- No DB migrations against production
- Strict scope discipline — only what the issue says to do

## When Stuck

Stop. Comment on the issue. Add `blocked`. If owner input needed, also `needs-nishad`.
