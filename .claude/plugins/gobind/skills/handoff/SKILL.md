---
name: handoff
description: Write a handoff into Track Suru so the next session (or Gobind in the morning) can resume without re-deriving anything. Use when Gobind says /gobind:handoff, "write a handoff", "i'm stopping here", when finishing an autonomous run, or when context is about to compact mid-task.
argument-hint: "[note]"
---

Repo state right now:

```
!`git status --short 2>/dev/null | head -20; echo "branch: $(git symbolic-ref --short -q HEAD 2>/dev/null)"`
```

1. Add a comment to the task's Track Suru issue, filled from `${CLAUDE_PLUGIN_ROOT}/assets/templates/handoff.md.template`: goal, current state, numbered next steps, constraints, gotchas, exact commands to resume. Include `$ARGUMENTS` if given. Redact any secret; name the variable, never the value.
2. File each open item as its own issue under the same epic.
3. Reply with three lines: where the handoff is, the first next step, and anything Gobind must do himself (secrets, approvals).
