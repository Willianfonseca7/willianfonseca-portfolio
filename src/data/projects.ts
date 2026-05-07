export interface Project {
  id: number;
  title: string;
  description: string;
  techs: string[];
  playUrl: string;
  codeUrl: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "ContainerHub",
    description:
      "Full-stack monorepo for container rental management. React + Vite frontend consuming a Strapi CMS REST API backed by PostgreSQL. Implements draft/active status workflow and admin panel.",
    techs: ["React", "Vite", "Tailwind", "Strapi", "PostgreSQL"],
    playUrl: "https://kontainer-flame.vercel.app/",
    codeUrl: "https://github.com/Willianfonseca7/ContainerHub",
  },
  {
    id: 2,
    title: "Heilpraktiker-Bleialf",
    description:
      "Production-grade platform for a German alternative medicine practice. Next.js App Router with Prisma ORM, PostgreSQL, JWT authentication, appointment booking, admin panel and transactional emails.",
    techs: ["Next.js", "React", "Tailwind", "Prisma", "PostgreSQL"],
    playUrl: "https://heilpraktiker-bleialf.vercel.app/",
    codeUrl: "https://github.com/Willianfonseca7/heilpraktiker-bleialf",
  },
  {
    id: 3,
    title: "Lego Set Explorer",
    description:
      "Full-stack app with React + TypeScript frontend and Node.js/Express API. Features search and filters, JWT auth, personal collections and a statistics dashboard. Dockerized PostgreSQL for local dev.",
    techs: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Docker"],
    playUrl: "https://lego-set-explore.vercel.app",
    codeUrl: "https://github.com/Willianfonseca7/Lego-Set-Explore",
  },
  {
    id: 4,
    title: "Pokedex-Web",
    description:
      "Pokémon search app consuming the PokéAPI. Built to practice React component composition, async state management and responsive CSS layout.",
    techs: ["React", "JavaScript", "PokéAPI"],
    playUrl: "https://willianfonseca7.github.io/Pokedex-web/",
    codeUrl: "https://github.com/Willianfonseca7/Pokedex-web",
  },
  {
    id: 5,
    title: "Portfolio",
    description:
      "This portfolio — React + Vite, Tailwind CSS, multilingual support (DE/EN/PT) with context-based i18n, and automated CI/CD deploy to GitHub Pages via GitHub Actions.",
    techs: ["React", "TypeScript", "Vite", "Tailwind CSS", "i18n", "GitHub Actions"],
    playUrl: "https://willianfonseca7.github.io/willianfonseca-portfolio/",
    codeUrl: "https://github.com/Willianfonseca7/willianfonseca-portfolio",
  },
];
