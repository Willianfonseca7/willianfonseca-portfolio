const profile = {
  de: {
    meta: {
      name: "Willian Santos Fonseca",
      role: "Junior Frontend Developer (in Ausbildung)",
      location: "Düsseldorf (Bilk)",
      tagline: "Frontend · React · Tailwind · UX",
    },
    nav: [
      { to: "/", label: "Startseite" },
      { to: "/about", label: "Über mich" },
      { to: "/skills", label: "Skills" },
      { to: "/projekte", label: "Projekte" },
      { to: "/kontakt", label: "Kontakt" },
    ],
    hero: {
      title: "Junior Frontend Developer (in Ausbildung)",
      subtitle: "React / Tailwind / JavaScript",
      description:
        "Quereinsteiger mit Fokus auf moderne UI, wiederverwendbare Komponenten und saubere API-Integration. Ich entwickle klare, responsive Interfaces und lerne kontinuierlich dazu.",
      ctas: {
        primary: { label: "Projekte ansehen", href: "/projekte" },
        secondary: { label: "Kontakt", href: "/kontakt" },
      },
      highlights: [
        {
          title: "React Components",
          description: "Strukturierte UI-Bausteine mit Props, Hooks und klaren Zuständigkeiten.",
        },
        {
          title: "REST APIs",
          description: "Fetch, Async/Await und Error-Handling für stabile Datenflüsse.",
        },
        {
          title: "Testing Basics",
          description: "Unit- und E2E-Tests für verlässliche Features.",
        },
      ],
    },
    home: {
      aboutPreviewTitle: "Über mich in 3 Sätzen",
      aboutPreviewSubtitle:
        "Kurz, klar und direkt: Wer ich bin und wie ich arbeite.",
      projectsPreviewSubtitle:
        "Ein kurzer Überblick über meine aktuellsten Arbeiten und Lernprojekte.",
      intro: [
        "Ich bin Willian, Quereinsteiger und aktuell in der Umschulung zum Web & WebApp Developer am Syntax Institut.",
        "Mein Fokus liegt auf Frontend-Entwicklung mit React, klarer UI-Struktur und sauberer UX.",
        "Projekte wie Kontainer, Pokémon WebApp und Toytopia zeigen meinen Weg und meine Lernkurve.",
      ],
    },
    about: {
      eyebrow: "Profil",
      title: "Über mich",
      description:
        "Ich bin Quereinsteiger und bringe eine starke Motivation für Frontend-Entwicklung und UX mit. In der Umschulung zum Web & WebApp Developer am Syntax Institut arbeite ich an modernen React-Projekten mit klarer Architektur, sauberem Styling und verständlichen UI-Flows. Projekte wie Kontainer (React/Tailwind + Strapi-API), die Pokémon WebApp und Toytopia helfen mir, API-Integration, State-Management und UI-Systeme praktisch umzusetzen.",
      valuesTitle: "Was mir wichtig ist",
      languagesTitle: "Sprachen",
      workStyle: [
        {
          title: "Strukturiert",
          description:
            "Ich plane Komponenten vorab und halte Zuständigkeiten klar, damit die UI wartbar bleibt.",
        },
        {
          title: "Kooperativ",
          description:
            "Ich arbeite gerne mit Git-Branches und Pull Requests und halte Kommunikation transparent.",
        },
        {
          title: "Nutzerzentriert",
          description:
            "Ich achte auf klare Layouts, responsive Verhalten und verständliche Interaktionen.",
        },
      ],
      values: [
        "Klarheit",
        "Zuverlässigkeit",
        "Lernbereitschaft",
        "Teamwork",
        "Sauberer Code",
      ],
      languages: ["Portugiesisch", "Deutsch", "Englisch"],
    },
    skills: {
      title: "Skills & Tech-Stack",
      subtitle:
        "Ein realistischer Überblick über meinen aktuellen Stack und die Konzepte, die ich täglich nutze.",
      groups: [
        {
          title: "Frontend",
          items: [
            "HTML5",
            "CSS3",
            "JavaScript (ES6+)",
            "React",
            "React Router",
            "Vite",
            "Tailwind CSS",
          ],
        },
        {
          title: "Tools",
          items: ["Git & GitHub (Branches/PR)", "npm/pnpm", "Postman", "VS Code"],
        },
        {
          title: "Design/UX",
          items: [
            "Figma",
            "Design System Basics",
            "Responsive Layouts",
            "Typografie & Kontrast",
          ],
        },
        {
          title: "Testing/Quality",
          items: ["Vitest", "React Testing Library", "Playwright"],
        },
      ],
      concepts: [
        "Komponentisierung",
        "Props & State",
        "Hooks",
        "Bedingtes Rendering",
        "Listen & Keys",
        "Formulare",
        "Fetch/REST",
        "Async/Await",
        "Error Handling",
        "Responsivität",
        "A11y Basics",
        "Performance Basics (React.memo)",
      ],
      learning: [
        "Advanced React Patterns",
        "Testing vertiefen",
        "State Management",
        "Design Tokens",
      ],
    },
    projects: {
      title: "Projekte",
      featuredTitle: "Ausgewählte Projekte",
      subtitle:
        "Kompakte Beschreibungen mit Fokus auf Technologie, Verantwortung und Lernziele.",
      list: [
        {
          id: "kontainer",
          title: "Kontainer",
          description:
            "Plattform für Containervermietung mit React, Tailwind und Strapi-API (draft/active).",
          stack: ["React", "Vite", "Tailwind", "Strapi"],
          highlights: [
            "API-Integration über /api/containers",
            "CRUD-Flow mit Statuslogik (draft/active)",
          ],
          demoUrl: "https://kontainer-flame.vercel.app/",
          codeUrl: "https://github.com/Willianfonseca7/kontainer",
          featured: true,
        },
        {
          id: "pokemon",
          title: "Pokémon WebApp",
          description:
            "API-basierte App mit Fokus auf UI-Komponenten, State und responsive Darstellung.",
          stack: ["React", "API", "UI Components"],
          highlights: ["Datenabfragen per Fetch", "Saubere Component-Struktur"],
          demoUrl: "https://willianfonseca7.github.io/Pokemon-App/",
          codeUrl: "https://github.com/Willianfonseca7/Pokemon-App",
          featured: true,
        },
        {
          id: "toytopia",
          title: "Toytopia",
          description:
            "E-Commerce UI für Spielzeug mit Fokus auf Layout, Komponenten und UX.",
          stack: ["React", "UI/UX", "State"],
          highlights: ["Produktkarten & Filter UI", "Zustandsverwaltung für Warenkorb"],
          demoUrl: null,
          codeUrl: null,
          featured: true,
        },
      ],
    },
    contact: {
      title: "Kontakt",
      description:
        "Du hast Fragen oder möchtest mit mir zusammenarbeiten? Schreib mir gerne eine Nachricht oder nutze die Links.",
      linksTitle: "Links & Profile",
      links: [
        {
          label: "E-Mail",
          href: "mailto:willianfonseca7@gmail.com",
          icon: "mail",
        },
        {
          label: "GitHub",
          href: "https://github.com/Willianfonseca7",
          icon: "github",
        },
        {
          label: "LinkedIn",
          href: "https://www.linkedin.com/in/willian-fonseca/",
          icon: "linkedin",
        },
      ],
      form: {
        title: "Schreib mir eine Nachricht",
        nameLabel: "Name",
        emailLabel: "E-Mail",
        messageLabel: "Nachricht",
        submitLabel: "Nachricht senden",
        successMessage: "Danke! Deine Nachricht wurde vorbereitet.",
        minMessageLength: 20,
        helper: "Ich antworte so schnell wie möglich.",
        copiedMessage: "Nachricht wurde in die Zwischenablage kopiert.",
        nameError: "Bitte gib mindestens 2 Zeichen ein.",
        emailError: "Bitte gib eine gültige E-Mail-Adresse ein.",
        messageError: "Bitte schreibe mindestens 20 Zeichen.",
        mailClientLabel: "Mail-Client öffnen",
      },
    },
  },
  pt: {
    meta: {
      name: "Willian Santos Fonseca",
      role: "Junior Frontend Developer (em formação)",
      location: "Düsseldorf (Bilk)",
      tagline: "Frontend · React · Tailwind · UX",
    },
    nav: [
      { to: "/", label: "Início" },
      { to: "/about", label: "Sobre" },
      { to: "/skills", label: "Skills" },
      { to: "/projekte", label: "Projetos" },
      { to: "/kontakt", label: "Contato" },
    ],
    hero: {
      title: "Junior Frontend Developer (em formação)",
      subtitle: "React / Tailwind / JavaScript",
      description:
        "Quereinsteiger com foco em UI moderna, componentes reutilizáveis e integração limpa de APIs. Desenvolvimento interfaces claras, responsivas e sigo aprendendo continuamente.",
      ctas: {
        primary: { label: "Ver projetos", href: "/projekte" },
        secondary: { label: "Contato", href: "/kontakt" },
      },
      highlights: [
        {
          title: "React Components",
          description: "UI estruturada com props, hooks e responsabilidades claras.",
        },
        {
          title: "REST APIs",
          description: "Fetch, Async/Await e tratamento de erros para fluxos estáveis.",
        },
        {
          title: "Testing Basics",
          description: "Tests unitários e E2E para manter confiança no código.",
        },
      ],
    },
    home: {
      aboutPreviewTitle: "Sobre mim em 3 frases",
      aboutPreviewSubtitle:
        "Curto e direto: quem sou e como trabalho.",
      projectsPreviewSubtitle:
        "Um resumo dos projetos mais recentes e estudos atuais.",
      intro: [
        "Sou Willian, Quereinsteiger e estou na Umschulung para Web & WebApp Developer no Syntax Institut.",
        "Meu foco é Frontend com React, UI clara e uma UX consistente.",
        "Projetos como Kontainer, Pokémon WebApp e Toytopia mostram minha evolução.",
      ],
    },
    about: {
      eyebrow: "Perfil",
      title: "Sobre mim",
      description:
        "Sou Quereinsteiger e trago uma forte motivação para Frontend e UX. Na Umschulung para Web & WebApp Developer no Syntax Institut, trabalho com projetos React modernos, arquitetura clara, styling limpo e fluxos de UI consistentes. Projetos como Kontainer (React/Tailwind + Strapi API), Pokémon WebApp e Toytopia me ajudam a praticar integração de APIs, state e sistemas de UI.",
      valuesTitle: "O que valorizo",
      languagesTitle: "Idiomas",
      workStyle: [
        {
          title: "Estruturado",
          description:
            "Planejo componentes antes e mantenho responsabilidades claras para facilitar manutenção.",
        },
        {
          title: "Colaborativo",
          description:
            "Uso branches e pull requests e mantenho comunicação transparente.",
        },
        {
          title: "Centrado no usuário",
          description:
            "Cuido de layouts claros, comportamento responsivo e interações diretas.",
        },
      ],
      values: ["Clareza", "Confiabilidade", "Aprendizado", "Equipe", "Código limpo"],
      languages: ["Português", "Alemão", "Inglês"],
    },
    skills: {
      title: "Skills & Tech-Stack",
      subtitle:
        "Visão realista do meu stack atual e dos conceitos que uso diariamente.",
      groups: [
        {
          title: "Frontend",
          items: [
            "HTML5",
            "CSS3",
            "JavaScript (ES6+)",
            "React",
            "React Router",
            "Vite",
            "Tailwind CSS",
          ],
        },
        {
          title: "Tools",
          items: ["Git & GitHub (Branches/PR)", "npm/pnpm", "Postman", "VS Code"],
        },
        {
          title: "Design/UX",
          items: [
            "Figma",
            "Design System básico",
            "Layouts responsivos",
            "Tipografia & contraste",
          ],
        },
        {
          title: "Testing/Quality",
          items: ["Vitest", "React Testing Library", "Playwright"],
        },
      ],
      concepts: [
        "Componentização",
        "Props & State",
        "Hooks",
        "Renderização condicional",
        "Listas & Keys",
        "Formulários",
        "Fetch/REST",
        "Async/Await",
        "Tratamento de erros",
        "Responsividade",
        "A11y Basics",
        "Performance Basics (React.memo)",
      ],
      learning: [
        "Advanced React Patterns",
        "Testing aprofundado",
        "State Management",
        "Design Tokens",
      ],
    },
    projects: {
      title: "Projetos",
      featuredTitle: "Projetos em destaque",
      subtitle:
        "Descrições curtas com foco em tecnologia, responsabilidade e aprendizado.",
      list: [
        {
          id: "kontainer",
          title: "Kontainer",
          description:
            "Plataforma de aluguel de containers com React, Tailwind e Strapi API (draft/active).",
          stack: ["React", "Vite", "Tailwind", "Strapi"],
          highlights: [
            "Integração de API via /api/containers",
            "CRUD com lógica de status (draft/active)",
          ],
          demoUrl: "https://kontainer-flame.vercel.app/",
          codeUrl: "https://github.com/Willianfonseca7/kontainer",
          featured: true,
        },
        {
          id: "pokemon",
          title: "Pokémon WebApp",
          description:
            "App baseada em API com foco em UI, componentes e estado.",
          stack: ["React", "API", "UI Components"],
          highlights: ["Fetch de dados", "Estrutura clara de componentes"],
          demoUrl: "https://willianfonseca7.github.io/Pokemon-App/",
          codeUrl: "https://github.com/Willianfonseca7/Pokemon-App",
          featured: true,
        },
        {
          id: "toytopia",
          title: "Toytopia",
          description:
            "UI de e-commerce com foco em layout, componentes e UX.",
          stack: ["React", "UI/UX", "State"],
          highlights: ["Cards de produto", "State para carrinho"],
          demoUrl: null,
          codeUrl: null,
          featured: true,
        },
      ],
    },
    contact: {
      title: "Contato",
      description:
        "Tem alguma pergunta ou quer colaborar? Envie uma mensagem ou use os links abaixo.",
      linksTitle: "Links & perfis",
      links: [
        {
          label: "E-Mail",
          href: "mailto:willianfonseca7@gmail.com",
          icon: "mail",
        },
        {
          label: "GitHub",
          href: "https://github.com/Willianfonseca7",
          icon: "github",
        },
        {
          label: "LinkedIn",
          href: "https://www.linkedin.com/in/willian-fonseca/",
          icon: "linkedin",
        },
      ],
      form: {
        title: "Envie uma mensagem",
        nameLabel: "Nome",
        emailLabel: "E-Mail",
        messageLabel: "Mensagem",
        submitLabel: "Enviar mensagem",
        successMessage: "Obrigado! Sua mensagem foi preparada.",
        minMessageLength: 20,
        helper: "Responderei o mais rápido possível.",
        copiedMessage: "Mensagem copiada para a área de transferência.",
        nameError: "Digite pelo menos 2 caracteres.",
        emailError: "Digite um e-mail válido.",
        messageError: "Escreva pelo menos 20 caracteres.",
        mailClientLabel: "Abrir cliente de e-mail",
      },
    },
  },
};

export default profile;
