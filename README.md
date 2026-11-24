# Willian Santos Fonseca — Portfolio

Portfolio eines Frontend- & Junior Fullstack-Entwicklers in Düsseldorf.
Die öffentlichen Inhalte sind auf Deutsch.

Website: <https://willianfonseca7.github.io/willianfonseca-portfolio/>.

## Projekte und Funktionen

- ORLA+: Frontend-Zusammenarbeit; laufende Migration zu Next.js App Router.
- WAITURN: eigenes Fullstack-SaaS-Projekt; privates Repository.
- GROWTHBOT-DE: Telegram-Assistent mit OpenAI API, Zod und SQLite.
- INVESTAGENT: React-Dashboard, Node.js-API und Worker für Marktdaten.
- Frühere Projekte, Technologien, IHK-Zertifikate, Profil und Kontakt.

Projektinformationen und öffentliche Links stehen in `src/data/projects.ts`.
Die verwendeten Texte stehen in `src/locales/de.json`. Frühere Übersetzungen
und `src/data/projects.json` bleiben als nicht eingebundene Dateien erhalten.

Bildergalerien unterstützen Vorschaubilder, Pfeiltasten und Escape. Dialoge
verwalten den Tastaturfokus. Das Kontaktformular bereitet einen E-Mail-Entwurf
vor; der Versand erfolgt im E-Mail-Programm des Besuchers.

## Lokal entwickeln und prüfen

Die Werkzeugkette benötigt Node.js 22.12+ oder eine kompatible Node.js-24-Version.

```bash
npm ci
npm run dev
npm run lint
npm test
npm run build
npm run test:e2e
npm run preview -- --host 127.0.0.1 --port 4174
```

Vorschau: <http://127.0.0.1:4174/willianfonseca-portfolio/>.

Der Build erzeugt zuerst die Browser-Dateien, dann einen Vite-SSR-Build in
`dist-ssr/`. `scripts/prerender.mjs` schreibt die Inhalte aller bestehenden
Routen in HTML-Dateien unter `dist/`. Im Browser übernimmt React die Hydration.
Die Hauptinhalte sind auch ohne JavaScript lesbar; interaktive Funktionen
benötigen JavaScript. Neue Abhängigkeiten sind dafür nicht erforderlich.

Die E2E-Prüfungen starten die gebaute Vorschau auf Port 4173. Sie prüfen unter
anderem HTML ohne JavaScript, Hydration, Themen, Galerien, Zertifikate,
E-Mail-Entwürfe, responsive Navigation und automatisierte WCAG-AA-Kriterien.

## Veröffentlichung

Ein Push auf `main` startet den bestehenden GitHub-Actions-Workflow. Nach
Lint, Unit-Tests, Browser-Tests und Build wird GitHub Pages aktualisiert.
Lokale Builds und Vorschauen veröffentlichen keine Änderungen.

`docs/` enthält ausschließlich lokale Berichte und private Referenzen und
wird nicht versioniert.
