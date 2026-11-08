#!/usr/bin/env bash
# =============================================================================
# git-guard.sh - PreToolUse(Bash) hook: block the git moves that can't be undone
# =============================================================================
#
# PreToolUse(Bash): agents may commit, push, branch and merge on any branch,
# master included. Only moves that destroy shared history are denied:
#   - git push with --force, -f, --force-with-lease, --mirror, --delete or -d
#   - git reset --hard while HEAD is already pushed (contained in its upstream)
#   - gh pr|release|issue|repo merge|delete
#
# FINDING git IN A COMMAND LINE
#   The command is split into pieces by segments() from lib.sh, which also
#   breaks at $( ... ), parentheses, backticks and a lone &. Each piece is
#   normalised first: quotes removed; wrappers such as sudo, env, command,
#   exec, eval, nohup, time, shell keywords, "bash -c" and VAR=value prefixes
#   removed; a path in front of git or gh removed.
#
# OUTPUT
#   Prints a deny decision for the first blocked command, nothing otherwise.
# =============================================================================

source "$(dirname "$0")/lib.sh"

# No globbing while splitting command words.
set -f

[ "$TOOL_NAME" = "Bash" ] || allow
CMD="$(jget '.tool_input.command')"
[ -z "$CMD" ] && allow
printf '%s' "$CMD" | grep -Eq '(^|[^[:alnum:]_.-])(git|gh)([[:space:]]|$)' || allow

# head_is_pushed: true when HEAD has an upstream that already contains it.
head_is_pushed() {
  git -C "$CWD" rev-parse --abbrev-ref '@{u}' >/dev/null 2>&1 || return 1
  git -C "$CWD" merge-base --is-ancestor HEAD '@{u}' 2>/dev/null
}

while IFS= read -r seg; do
  seg="$(printf '%s' "$seg" | tr -d "\"'" | sed -E 's/^[[:space:]]+//; s/^((sudo|env|command|exec|eval|nohup|time|if|then|else|elif|do|while|until|!|\{)[[:space:]]+|(bash|sh|zsh)[[:space:]]+-c[[:space:]]+|[A-Za-z_][A-Za-z0-9_]*=[^[:space:]]*[[:space:]]+)*//; s#^[^[:space:]]*/(git|gh)([[:space:]]|$)#\1\2#')"
  case "$seg" in
    git\ *|git)
      set -- $seg; shift
      # Skip global options so `git -C dir push` is read as push.
      while [ $# -gt 0 ]; do
        case "$1" in -C|-c|--git-dir|--work-tree) shift; [ $# -gt 0 ] && shift;; --*|-*) shift;; *) break;; esac
      done
      sub="${1:-}"; shift || true; rest="$*"
      case "$sub" in
        push)
          printf '%s' "$rest" | grep -Eq -- '(^|[[:space:]])(--force|-f|--force-with-lease(=[^[:space:]]*)?|--force-if-includes|--mirror|--delete|-d)([[:space:]]|$)' \
            && deny "git-guard: 'git push $rest' rewrites or deletes remote history. Push normally; ask the user if history really must change."
          printf '%s' "$rest" | grep -Eq '(^|[[:space:]])\+[^[:space:]]' \
            && deny "git-guard: a '+' refspec force-pushes. Push normally; ask the user if history really must change."
          ;;
        reset)
          printf '%s' "$rest" | grep -Eq -- '(^|[[:space:]])--hard([[:space:]]|$)' && head_is_pushed \
            && deny "git-guard: 'git reset --hard' on a pushed commit throws away shared work and needs a force-push to publish. Use git revert, or ask the user."
          ;;
      esac
      ;;
    gh\ *)
      printf '%s' "$seg" | grep -Eq '^gh[[:space:]]+(pr|release|issue|repo)[[:space:]]+(merge|delete)([[:space:]]|$)' \
        && deny "git-guard: '$seg' merges or deletes on GitHub. Ask the user to run it."
      ;;
  esac
done < <(segments "$CMD")
allow
