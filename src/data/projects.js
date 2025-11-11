export default [
  { slug: 'pokemon-webapp', title: 'Pokémon WebApp', summary: 'Pokédex com busca, favoritos e dark-mode.', link: 'https://github.com/Willianfonseca7/Pokemon-App' },
];
EO
cat > src/pages/Home.jsx <<'EOF'
import Navbar from "../components/Navbar";
import SectionTitle from "../components/SectionTitle";
import ProjectCard from "../components/ProjectCard";
import Footer from "../components/Footer";
import projects from "../data/projects";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main className="mx-auto max-w-5xl px-4 py-10">
        {/* HERO */}
        <section className="py-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Willian Santos Fonseca
          </h1>
          <p className="mt-3 text-slate-600 max-w-2xl">
            Desenvolvedor em transição (Umschulung no Syntax Institut – Berlin).
            Foco em <span className="text-indigo-600">React</span>, <span className="text-indigo-600">UI/UX</span> e acessibilidade.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="#projects" className="px-4 py-2 rounded-xl bg-indigo-600 text-white">Ver projetos</a>
            <a href="#contact" className="px-4 py-2 rounded-xl bg-slate-100">Contato</a>
          </div>
        </section>

        {/* PROJETOS */}
        <section id="projects" className="py-8">
          <SectionTitle subtitle="Seleção do que estou construindo">Projetos</SectionTitle>
          <div className="grid sm:grid-cols-2 gap-6">
            {projects.map(p => <ProjectCard key={p.slug} {...p} />)}
          </div>
        </section>

        {/* CONTATO */}
        <section id="contact" className="py-8">
          <SectionTitle subtitle="Vamos conversar?">Contato</SectionTitle>
          <p className="text-slate-700">willian.s.fonseca@email.com</p>
          <p className="text-slate-700">LinkedIn: linkedin.com/in/…</p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
