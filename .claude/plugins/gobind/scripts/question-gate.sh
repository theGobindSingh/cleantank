#!/usr/bin/env bash
# =============================================================================
# question-gate.sh - PreToolUse(AskUserQuestion) hook: no questions when autonomous
# =============================================================================
#
# In collab mode every question passes. In autonomous mode the user is away
# and told the agent to decide from the data it has, so questions are denied.
# The one exception: the user named a stop-condition when going autonomous
# ("only ask if data could be lost"), and the question text carries the tag
# [stop-condition]. Without a named stop-condition, nothing passes.
# =============================================================================

source "$(dirname "$0")/lib.sh"

[ "$TOOL_NAME" = "AskUserQuestion" ] || allow
[ "$(state_get '.mode')" = "autonomous" ] || allow

SC="$(state_get '.stop_condition')"
if [ -n "$SC" ] && printf '%s' "$INPUT" | jq -r '.tool_input.questions[]?.question' 2>/dev/null | grep -q '\[stop-condition\]'; then
  allow
fi

deny "question-gate: autonomous mode, so no questions. Decide from the docs, the code and the data you have, record the assumption in your recap, and keep going.${SC:+ The only exception is the stop-condition: $SC (tag the question [stop-condition]).}"
