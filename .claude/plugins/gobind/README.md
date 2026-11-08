# gobind (ct copy)

Clean Tank's copy of the `gobind` working-style plugin (from
`~/Programming/working-style-skill`), cut down and adapted for this repo. `AGENTS.md` wins
wherever the two differ.

## Hooks

Registered in `hooks/hooks.json`, scripts in `scripts/`:

| Hook | Event | Effect |
|---|---|---|
| git-guard | PreToolUse Bash | Git is open. Denies force-push, `reset --hard` on pushed work, and `gh` merge/delete. |
| secrets-guard | PreToolUse Read/Edit/Write/Bash | No reading, editing or printing `.env*`, keys, credentials, or the whole environment. |
| server-guard | PreToolUse Bash | No `pkill node`, no killing a PID that serves a port, no second dev server on a busy port. |
| question-gate | PreToolUse AskUserQuestion | Autonomous mode: questions denied, except one tagged `[stop-condition]` when the user named one. |
| config-guard | PreToolUse Edit/Write/Bash | Editing settings, hooks or the guard scripts asks first. |
| test-guard | PreToolUse Edit/Write/Bash | Skipping, focusing or deleting tests asks first (`/gobind:test-allow` lifts it). |
| session-index | SessionStart | ≤20 lines: mode, branch, the core rules. Survives compaction. |
| prompt-reminder | UserPromptSubmit | Mode each turn; "going to sleep" / "full autonomous" switches to autonomous, "i'm back" to collab. |
| edit-counter | PostToolUse Edit/Write | Counts source edits for the done-gate. |
| gate-tracker | PostToolUse Bash | Records lint / build / test runs. |
| done-gate | Stop | Autonomous mode only: holds the session open (max twice) until a gate ran after source edits. |

## Skill, commands, agents

- `skills/working-style/`: the rules, with `references/working-agreement.md` (full agreement)
  and `references/delegation.md` (agent tree).
- Commands: `/gobind:mode`, `/gobind:test-allow`, `/gobind:recap`, `/gobind:handoff`
  (writes to Track Suru), `/gobind:questions`, `/gobind:rca`, `/gobind:add-rule`.
- Agents: `phase-lead` (Opus; thinking and smart work, sizes its own team, may start any
  agent), `worker` (Sonnet; mundane tasks), `drone` (Haiku; lookups).
- Templates in `assets/templates/`: brief, questions, recap, handoff.

Session state lives in `.claude/gobind/session-<id>.json` (git-ignored).

## Test

```bash
bash .claude/plugins/gobind/tests/run.sh   # hook cases: git, secrets, server, question gate, mode, gates
```

Not installed yet.
