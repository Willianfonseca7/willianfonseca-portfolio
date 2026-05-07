# Willian Fonseca — Portfolio

**Live:** [willianfonseca7.github.io/willianfonseca-portfolio](https://willianfonseca7.github.io/willianfonseca-portfolio/)

Personal portfolio built with React + Vite, showcasing my projects, skills and certificates. Fully responsive, multilingual (DE / EN / PT) and deployed automatically via GitHub Actions.

![Portfolio Preview](https://willianfonseca7.github.io/willianfonseca-portfolio/og-preview.png)

---

## Tech Stack

![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=flat-square&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind-4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-7-CA4245?style=flat-square&logo=reactrouter&logoColor=white)
![Vitest](https://img.shields.io/badge/Vitest-unit_tests-6E9F18?style=flat-square&logo=vitest&logoColor=white)
![Playwright](https://img.shields.io/badge/Playwright-e2e_tests-45BA4B?style=flat-square&logo=playwright&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-CI%2FCD-2088FF?style=flat-square&logo=githubactions&logoColor=white)
![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-deployed-222222?style=flat-square&logo=github&logoColor=white)

---

## Features

- Responsive design — mobile, tablet and desktop
- Multilingual support (German / English / Portuguese) with context-based i18n
- Projects gallery with live demos and source links
- Skills section with certificates
- Contact form
- Automated CI/CD deploy to GitHub Pages on every push to `main`
- Unit tests (Vitest) + End-to-end tests (Playwright)

---

## Project Structure

```
willianfonseca-portfolio/
├── src/
│   ├── components/
│   │   ├── sections/       # Page sections (Hero, Projects, Skills, Contact…)
│   │   └── ui/             # Reusable UI components (Card, Button, Tag…)
│   ├── pages/              # Route-level pages
│   ├── hooks/              # Custom React hooks
│   ├── context/            # LanguageContext (i18n)
│   ├── data/               # Projects data
│   ├── locales/            # Translation files (de.json, en.json, pt.json)
│   └── main.jsx
├── public/                 # Static assets, screenshots, certificates
├── e2e/                    # Playwright E2E tests
├── index.html
├── vite.config.js
└── package.json
```

---

## Run Locally

```bash
# Clone the repository
git clone https://github.com/Willianfonseca7/willianfonseca-portfolio.git
cd willianfonseca-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Build & Deploy

```bash
# Production build
npm run build

# Manual deploy to GitHub Pages
npm run deploy
```

Deployment also runs **automatically** via GitHub Actions on every push to `main`.

---

## Tests

```bash
# Unit tests
npm run test

# Unit tests with UI
npm run test:ui

# End-to-end tests (Playwright)
npm run test:e2e
```

---

## Contact

**Willian Fonseca** — Frontend Developer  
Düsseldorf, Deutschland | Available for new opportunities

- Portfolio: [willianfonseca7.github.io/willianfonseca-portfolio](https://willianfonseca7.github.io/willianfonseca-portfolio/)
- GitHub: [@Willianfonseca7](https://github.com/Willianfonseca7)

---

© 2026 Willian Fonseca
