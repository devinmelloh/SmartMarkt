# Codex Plugin für Claude Code

Ein kleines Claude Code Plugin, das die **OpenAI Codex CLI** in Claude Code
integriert. Damit kannst du Codex aus einer Claude-Code-Session heraus als
Zweitmeinung oder als separaten Ausführer nutzen.

## Installation

1. Codex CLI installieren und einloggen:
   ```bash
   npm i -g @openai/codex
   codex login         # oder: export OPENAI_API_KEY=...
   ```
2. Dieses Plugin in Claude Code aktivieren, z.B. über ein Marketplace-Repo oder
   als lokales Plugin:
   ```
   /plugin marketplace add <dieses-repo>
   /plugin install codex
   ```

## Inhalt

- `commands/codex.md` – Slash-Command `/codex <prompt>` führt einen Prompt
  non-interaktiv über `codex exec` aus.
- `commands/codex-review.md` – `/codex-review [fokus]` pipet den aktuellen
  `git diff HEAD` an Codex und holt eine unabhängige Review.
- `agents/codex.md` – Subagent `codex`, den Claude über die `Agent`-Tool-Route
  aufrufen kann, um eine Aufgabe an Codex zu delegieren.

## Sicherheit / Scope

- Alle Commands verwenden `--skip-git-repo-check` und laufen damit im aktuellen
  Working Dir. Die Schreibrechte richten sich nach deiner Codex-Konfiguration
  (`~/.codex/config.toml`).
- Für reine Reviews empfiehlt sich ein Codex-Profil im Read-Only-Modus.
