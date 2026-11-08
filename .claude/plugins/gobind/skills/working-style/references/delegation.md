# Delegation tree for big work

Gobind's standing instruction for any feature, migration or bug list larger than one sitting:
the main session "behaves like a thinker and orchestrator only". This saves tokens (cheap
models do the lookups), keeps the main context free for decisions, and lets him hand off work
overnight. The agents live in this plugin's `agents/`.

## Roles

| Level | Agent        | Model             | Does                                                                                                                                                                               |
| ----- | ------------ | ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0     | main session | the session model | Plans the whole job, splits it into phases, dispatches one lead per phase, judges reports, decides, recaps to the user. Does not implement, research or verify in its own context. |
| 1     | `phase-lead` | Opus              | Owns one phase end to end. Re-plans it, does the thinking and the smart work, decides how many agents it needs, verifies, reports. May start any agent, including another phase lead for a sub-phase. |
| 2     | `worker`     | Sonnet            | One mundane, well-specified task: a mechanical edit, a content or config change, running and reading checks. Hands its lookups to drones.                                          |
| 3     | `drone`      | Haiku             | Mindless, no decisions: read a named file and answer one question, grep a named dir, run one given command, fetch given URLs, check a hash. Cannot edit.                           |

Rule of thumb: thinking and real work stay with Opus (the main session and the leads).
Mundane but hands-on work goes to a worker; pure lookups go to a drone. Never hand a drone a
decision.

**How many agents.** As many as finish the job fast without mistakes or overlap, and no more.
More agents is not the goal: each one costs a brief, a report and a chance to collide. A small
phase may need none. The lead decides.

Nesting depth is raised to 5 via `CLAUDE_CODE_MAX_SUBAGENT_SPAWN_DEPTH` in settings so the
full tree fits.

## How the orchestrator runs a job

1. **Research first, read-only.** Read the repo's docs and the code; use explore agents only
   when the sweep is large.
2. **Ask only what stays ambiguous**, with that evidence in hand, before any implementation.
   In autonomous mode there are no questions; decide and record the assumption.
3. **Write the phase plan.** One phase per feature slice, or one phase per bug when doing RCA.
   For a bug list, run read-only RCA phases first, then fix phases only from proven causes.
4. **Dispatch leads with self-contained briefs**: goal, verified facts, constraints, what to
   verify, what to report, and every hard rule from the repo's CLAUDE.md repeated verbatim at
   the top. Subagents do not inherit the conversation; a rule not in the brief does not exist
   for them. This is how a subagent once accessed a forbidden machine.
   Assign file ownership up front: two agents editing one file collide.
   If the repo's docs require a particular model or effort level for subagents, use it.
5. **Parallel only without shared mutable state.** One working copy shared by agents that
   edit or commit means sequential. Phases that share one build dir, one
   working copy or one database run sequentially.
6. **Judge every report against the plan.** Reports come up as conclusions with evidence,
   never raw output; "verified by X" or "not verified" is stated explicitly.
7. **Watch the clock.** If a phase has been running far longer than expected, check on it.
   Kill stale agents. Give an estimate when asked. He monitors progress and asks "what's
   happening?".
8. **Recap** with what was done, what was verified and how, what deviated and why, what is
   left. Bad news first.

## Briefing a drone

A drone has no judgement. Every drone brief names the exact path or directory it may read
(never a filesystem root, home directory or drive letter), the exact command or URL, and the
single question to answer. "Find X" without a bounded location makes a drone scan the disk.
If you do not know where something is, that is a worker's task.

## Blockers

Minor blocker: pick the sensible default, note it in the report, continue.
Major blocker (would change scope, the visible result, or something hard to reverse, or the
brief is wrong as written): message the parent with the blocker, options and a
recommendation, then end the turn. Only the main session talks to the user, and in
autonomous mode it answers on its own authority unless the blocker hits the stop-condition he
named.
