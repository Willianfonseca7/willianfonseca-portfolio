export interface Project {
  id: string;
  stack: string[];
  demoUrl: string | null;
  codeUrl: string | null;
  visibility: "public" | "private";
  status: "development" | "migration" | "demo";
  priority: "featured" | "selected" | "archive";
  images: string[];
  evidence: { label: string; url: string }[];
  hidden?: boolean;
}

// Technical facts and URLs live here; narrative copy lives in locales/*.json.
// A private repository has no outbound code URL. Screenshots must be real and approved.
export const projects: Project[] = [
  {
    id: "waiturn",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Better Auth",
      "Socket.IO",
      "Vitest",
      "Playwright",
    ],
    demoUrl: null,
    codeUrl: null,
    visibility: "private",
    status: "development",
    priority: "featured",
    images: ["/waiturn-presentation.jpg"],
    evidence: [],
  },
  {
    id: "orla-plus",
    stack: ["HTML", "CSS", "JavaScript", "i18n", "Git / Pull Requests"],
    demoUrl: "https://www.orlamais.com.br/",
    codeUrl: "https://github.com/polifilho/orlamais-website",
    visibility: "public",
    status: "migration",
    priority: "selected",
    images: ["/orla-landing.jpg"],
    evidence: [5, 6, 8].map((number) => ({
      label: `PR #${number}`,
      url: `https://github.com/polifilho/orlamais-website/pull/${number}`,
    })),
  },
  {
    id: "growthbot-de",
    stack: [
      "Next.js",
      "TypeScript",
      "OpenAI API",
      "Telegram",
      "Zod",
      "SQLite",
      "Vitest",
      "Playwright",
    ],
    demoUrl: "https://growthbot-de.vercel.app/",
    codeUrl: "https://github.com/Willianfonseca7/growthbot-de",
    visibility: "public",
    status: "demo",
    priority: "selected",
    images: ["/growthbot-de-demo.jpg"],
    evidence: [
      {
        label: "Source",
        url: "https://github.com/Willianfonseca7/growthbot-de/tree/main/src",
      },
    ],
  },
  {
    id: "invest-agent",
    stack: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "Binance API",
      "Docker",
      "GitHub Actions",
    ],
    demoUrl: "https://invest-agent-1.onrender.com/",
    codeUrl: "https://github.com/Willianfonseca7/invest-agent",
    visibility: "public",
    status: "demo",
    priority: "selected",
    images: ["/investagent-overview.jpg", "/investagent-charts.png"],
    evidence: [
      {
        label: "Source",
        url: "https://github.com/Willianfonseca7/invest-agent/tree/main/packages",
      },
    ],
  },
  {
    id: "heilpratika",
    stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    demoUrl: "https://heilpraktiker-bleialf.vercel.app/",
    codeUrl: "https://github.com/Willianfonseca7/heilpraktiker-bleialf",
    visibility: "public",
    status: "demo",
    priority: "archive",
    images: ["/heilpraktiker-bleialf-home.png"],
    evidence: [],
  },
  {
    id: "lego-set-explore",
    stack: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Docker",
    ],
    demoUrl: "https://lego-set-explore.vercel.app/",
    codeUrl: "https://github.com/Willianfonseca7/Lego-Set-Explore",
    visibility: "public",
    status: "demo",
    priority: "archive",
    images: ["/lego-set-explore-home.png"],
    evidence: [],
  },
  {
    id: "containerhub",
    stack: ["React", "Vite", "Strapi", "PostgreSQL"],
    demoUrl: "https://kontainer-flame.vercel.app/",
    codeUrl: "https://github.com/Willianfonseca7/ContainerHub",
    visibility: "public",
    status: "demo",
    priority: "archive",
    images: ["/containerhub-home.png"],
    evidence: [],
  },
  {
    id: "pokedex-web",
    stack: ["React", "JavaScript", "PokéAPI"],
    demoUrl: "https://willianfonseca7.github.io/Pokedex-web/",
    codeUrl: "https://github.com/Willianfonseca7/Pokemon-App",
    visibility: "public",
    status: "demo",
    priority: "archive",
    images: ["/pokedex-home.png"],
    evidence: [],
  },
  {
    id: "toytopia",
    stack: ["React", "UI/UX"],
    demoUrl: null,
    codeUrl: null,
    visibility: "public",
    status: "development",
    priority: "archive",
    images: [],
    evidence: [],
    hidden: true,
  },
];
