#!/bin/bash
# Sovereign Skill Loader
# Usage: ./skill-loader.sh [profile]

AGENT_ROOT="$HOME/.agent"
SOURCE_SKILLS="$HOME/.sov-agent/skills"
TARGET_SKILLS="$AGENT_ROOT/skills"

# 1. Define Pillars (Profiles)
declare -A PILLARS

# Core Framework
PILLARS[core]="agent-skill-mastery sovereign-doctor environment-binder kaizen-log"

# Architecture
PILLARS[arch]="architecture-blueprint-mastery modular-monolith-mastery clean-architecture-mastery solid-principles-mastery ddd-mastery port-adapter-mastery design-pattern-mastery"

# Engineering
PILLARS[eng]="typescript-mastery clean-code-mastery testing-mastery turborepo-smart-caching legacy-refactor deep-trace-auditor"

# Frontend/UI
PILLARS[frontend]="ui-ux-mastery nextjs-mastery react-clean-craft tailwind-mastery premium-presentation tailwind-ux-craft"

# Operations & Security
PILLARS[ops]="ops-center git-sentinel security-sentinel security-mastery quality-gatekeeper context-archivist memory-vortex error-sentinel"

# Quality & Governance (Combined)
PILLARS[gov]="scrum-mastery quality-assurance-mastery swe-standard-mastery jira-integrity-guard"

# Full Profile (All Active)
PILLARS[full]="${PILLARS[core]} ${PILLARS[arch]} ${PILLARS[eng]} ${PILLARS[frontend]} ${PILLARS[ops]} ${PILLARS[gov]}"

# 2. Helper Functions
log() {
    echo -e "[\033[1;34mSKILL-LOADER\033[0m] $1"
}

load_skill() {
    local skill=$1
    if [ -d "$SOURCE_SKILLS/$skill" ]; then
        if [ ! -L "$TARGET_SKILLS/$skill" ]; then
            ln -s "$SOURCE_SKILLS/$skill" "$TARGET_SKILLS/$skill"
            log "Linked: \033[1;32m$skill\033[0m"
        else
            log "Active: \033[0;90m$skill\033[0m"
        fi
    else
        log "Warning: Skill '$skill' not found in library."
    fi
}

# 3. Execution
PROFILE=$1

if [ -z "$PROFILE" ]; then
    echo "Usage: ./skill-loader.sh [core|arch|eng|frontend|ops|gov|full]"
    exit 1
fi

if [[ -z "${PILLARS[$PROFILE]}" ]]; then
    echo "Error: Profile '$PROFILE' not defined."
    exit 1
fi

log "Loading Profile: \033[1;33m${PROFILE^^}\033[0m"
echo "----------------------------------------"

for skill in ${PILLARS[$PROFILE]}; do
    load_skill "$skill"
done

echo "----------------------------------------"
log "Skill Profile Loaded Successfully."
