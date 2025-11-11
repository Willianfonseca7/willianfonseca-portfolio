export default function Navbar() {
  return (
    <header className="border-b bg-white/70 backdrop-blur sticky top-0 z-50">
      <div className="mx-auto max-w-5xl px-4 h-14 flex items-center justify-between">
        <a href="/" className="font-semibold">Willian.dev</a>
        <nav className="flex items-center gap-4 text-sm">
          <a href="#projects" className="hover:underline">Projetos</a>
          <a href="#contact" className="hover:underline">Contato</a>
        </nav>
      </div>
    </header>
  );
}
