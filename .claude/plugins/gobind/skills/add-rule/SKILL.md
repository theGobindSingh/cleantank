---
name: add-rule
description: Record a new standing rule from Gobind in its one home so it sticks: AGENTS.md (or the doc it points to) for ct rules, the plugin's working agreement for rules that apply everywhere. Use when he says "add to claude.md", "remember this", "from now on", "write in notes", "make this a rule", or /gobind:add-rule.
argument-hint: "<the rule in his words>"
---

Rule as given: `$ARGUMENTS`

He iterates until the form is exact (example: "always start with 0", "so basically 3 numbers", "yes"), and then expects it written once and followed forever.

1. **Pin the exact form.** If any part is ambiguous (numbers, naming, scope), ask one short question now with an example of what you understood. Do not write until confirmed. If it is unambiguous, do not ask.
2. **Write it in exactly one place**, in one or two sentences with the why. Every rule has one source of truth:
   - a rule for this repo goes in the repo's `CLAUDE.md` / `AGENTS.md` (or the doc it points to for that domain), under the section it belongs to;
   - a rule for every project goes in `${CLAUDE_PLUGIN_ROOT}/skills/working-style/references/working-agreement.md`.
   If the rule is already written somewhere, edit it there instead of adding a copy. Do not write it to memory as well.
3. If the rule is a hard prohibition an agent might break under pressure (git, secrets, servers, deletions), say so and propose a hook in `hooks/hooks.json` rather than only prose. Do not add the hook without his go.
4. Reply with the location and the exact sentence written.
