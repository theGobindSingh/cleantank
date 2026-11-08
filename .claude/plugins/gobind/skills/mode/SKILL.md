---
name: mode
description: Switch or show the agent's working mode for this session (autonomous or collab) and the stop-condition. Run when Gobind says /gobind:mode, "autonomous", "collab", "normal mode", or wants to see the current mode.
argument-hint: "[autonomous|collab|status] [stop-condition text]"
disable-model-invocation: true
allowed-tools: Bash(${CLAUDE_PLUGIN_ROOT}/scripts/state.sh *)
---

Result of the request `$ARGUMENTS`:

```
!`${CLAUDE_PLUGIN_ROOT}/scripts/state.sh "${CLAUDE_SESSION_ID}" $(case "$0" in autonomous|auto|collab|collaborative|normal) echo set-mode;; *) echo show;; esac) $ARGUMENTS 2>&1 || true`
```

If the block above shows an error, run the same command yourself with the Bash tool:
`"${CLAUDE_PLUGIN_ROOT}/scripts/state.sh" "${CLAUDE_SESSION_ID}" set-mode <mode> [stop-condition]`.

What each mode means:

- **autonomous**: Gobind is away. No questions: the question-gate hook denies AskUserQuestion, except a question tagged `[stop-condition]` when he named one. Decide everything from the repo's docs, the code and the data you have, and record each assumption in the Track Suru issue and the recap. The Stop hook will not let the session end with unverified source edits. Finish with a recap marking each item VERIFIED / NOT VERIFIED / BLOCKED.
- **collab**: check the repo's docs first; if something is still ambiguous, ask one short question with options; otherwise act.

Confirm the mode in one line and continue with the task at hand.
