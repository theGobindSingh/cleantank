#!/usr/bin/env bash
# =============================================================================
# edit-counter.sh - PostToolUse(Edit|Write|MultiEdit) hook: count source edits
# =============================================================================
#
# Counts source files edited this session in .source_edits, so done-gate.sh
# knows whether there is anything to verify. Docs, config and data files
# (*.md, *.txt, *.json, *.lock, *.yaml, *.yml, .gitignore, anything under
# .claude/) are not counted. Prints nothing; always exits 0.
# =============================================================================

source "$(dirname "$0")/lib.sh"

FP="$(jget '.tool_input.file_path')"; [ -z "$FP" ] && exit 0
case "${FP#$PROJECT_DIR/}" in
  .claude/*|*.md|*.txt|*.json|*.lock|*.yaml|*.yml|.gitignore|*/.gitignore) exit 0;;
esac
state_set '.source_edits+=1'
exit 0
