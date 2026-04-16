---
description: Führt einen Prompt non-interaktiv über die OpenAI Codex CLI aus.
argument-hint: <prompt>
allowed-tools: Bash
---

Du rufst die OpenAI Codex CLI auf, um den folgenden Auftrag auszuführen. Nutze
`codex exec` im non-interactive Modus, damit die Ausgabe sauber in den Chat
zurückfließt. Der komplette Nutzer-Prompt steht in `$ARGUMENTS`.

Voraussetzungen:
- Die `codex` CLI ist im PATH installiert (`npm i -g @openai/codex` oder via
  Homebrew). Falls `codex` fehlt, melde das dem User, **ohne** zu raten.
- API-Key ist als `OPENAI_API_KEY` gesetzt (oder via `codex login` eingerichtet).

Ablauf:
1. Prüfe, dass `codex` verfügbar ist: `!command -v codex >/dev/null && codex --version`
2. Führe aus:
   ```
   codex exec --skip-git-repo-check -- "$ARGUMENTS"
   ```
3. Fasse das Ergebnis kurz zusammen und zeige relevante Diffs oder Outputs.

Wenn `$ARGUMENTS` leer ist, frage den User nach dem gewünschten Prompt, bevor du
Codex aufrufst.
