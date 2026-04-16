---
description: Holt eine unabhängige Zweitmeinung von Codex zu den aktuellen Git-Änderungen.
argument-hint: [optionaler Fokus, z.B. "Sicherheit" oder "Performance"]
allowed-tools: Bash
---

Lass Codex die aktuellen, nicht committeten Änderungen reviewen. Ziel ist eine
zweite, unabhängige Perspektive – Codex sieht die Claude-Konversation nicht.

Schritte:
1. Sammle den Diff gegen `HEAD` (staged + unstaged):
   ```
   !git diff HEAD
   ```
2. Falls kein Diff vorhanden ist, brich ab und sag dem User Bescheid.
3. Übergib den Diff an Codex zur Review. Der Fokus (falls gesetzt) steht in
   `$ARGUMENTS`:
   ```
   git diff HEAD | codex exec --skip-git-repo-check -- \
     "Review diesen Diff als erfahrener Reviewer. Fokus: ${ARGUMENTS:-allgemeine Qualität, Bugs, Sicherheit}. \
      Nenne konkrete Probleme mit Datei:Zeile und Vorschläge. Keine generischen Hinweise."
   ```
4. Präsentiere Codex' Rückmeldung wörtlich und hebe die aus deiner Sicht
   wichtigsten Punkte hervor.
