---
name: no-playwright-mcp-in-subagent-sessions
description: In this environment, phase-lead and worker agent sessions have no Playwright/browser-automation MCP tool available even when a brief assumes one exists
metadata:
  type: project
---

During the cleantank Phase E2 content-overhaul brief (2026-09-21), the brief assumed
"playwright MCP browser tools" would be available for a visual/console QA pass across routes.
Neither the phase-lead session nor a `gobind:worker` subagent it spawned had any
`mcp__playwright__*` (or equivalent browser-automation) tool in their actual tool set, despite
`mcp__*` being listed as an allowed tool category for those agent types. A `playwright-mcp`
node process was visible in `ps aux` on the host, but that did not mean the tool was wired into
this session.

**Why:** Wasted a full subagent round-trip before discovering the gap — the worker had to
report BLOCKED and hand back before a fallback plan could start.

**How to apply:** Before delegating or attempting any browser-driven verification task in this
project, check your own available tool list for an actual `mcp__playwright__*` (or similar)
function first. If absent, don't spawn a browser-verification subagent — go straight to an
HTTP/curl-based fallback (status codes per route, grep rendered HTML for expected markers like
anchor `id`s, spot-check `next/image` URLs) and clearly mark the visual/console/contrast checks
as NOT VERIFIED / BLOCKED in the report rather than guessing or claiming them done.
