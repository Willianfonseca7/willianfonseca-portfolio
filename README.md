# Willian Santos Fonseca — Portfolio

Multilingual React / TypeScript portfolio for junior frontend and fullstack roles.
German is the default language; Portuguese and English have equivalent content.

Published site: <https://willianfonseca7.github.io/willianfonseca-portfolio/>.

## Current structure

- Hero: professional positioning, React, Next.js, TypeScript, Node.js and AI integration.
- Waiturn: main case with a product visualization; private repository.
- ORLA+: frontend collaboration with public PR evidence; Next.js migration in progress, API integration pending.
- GrowthBot-DE: Telegram / OpenAI integration, input and response validation, SQLite persistence.
- InvestAgent: React dashboard, Node.js API, worker and modular market-data processing.
- Earlier projects: Heilpraktiker-Bleialf, LEGO Set Explorer, ContainerHub and Pokédex.
- Technology groups, IHK certificates, profile and contact.

Technical facts, links, visibility and screenshots live in `src/data/projects.ts`.
Narrative copy lives in `src/locales/{de,en,pt}.json`. `src/data/projects.json` is a
retained historical file and is not imported by the application.

Image galleries support thumbnails, arrows and Escape. Native dialogs provide
keyboard focus handling. The contact form prepares and copies an email draft and
opens the visitor's email app; it does not send email automatically.

## Run and verify locally

Node.js 22.12+ or compatible Node.js 24 is recommended for the configured toolchain.

```bash
npm ci
npm run dev
npm run lint
npm run typecheck
npm test
npm run test:e2e
npm run build
npm run preview -- --host 127.0.0.1 --port 4174
```

Local production preview: <http://127.0.0.1:4174/willianfonseca-portfolio/>.
Playwright uses the same project basename. The suite checks image galleries,
certificates, private project handling, contact email drafts, responsive navigation,
DE/EN/PT and theme persistence, reduced motion and automated WCAG AA checks.
Automated checks supplement manual visual and keyboard review.

## Publication

GitHub Actions publishes pushes to `main` after lint, unit tests, browser tests and
the TypeScript/build checks pass. The production build is served through GitHub
Pages. Local build and preview commands do not publish anything.
