// Rodapé do site (comentário em português)
export default function Footer() {
  return (
    <footer className="border-t border-slate-800 py-4 mt-8 text-center text-xs text-primary0">
      © {new Date().getFullYear()} Willian Fonseca – Portfolio in Entwicklung.
    </footer>
  );
}
