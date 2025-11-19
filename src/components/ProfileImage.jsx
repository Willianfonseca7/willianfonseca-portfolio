// Componente de imagem de perfil (comentário em português)
import profilBild from "../assets/profilbild.jpg";

export default function ProfileImage() {
  return (
    <img
      src={profilBild}
      alt="Profilbild von Willian"
      className="h-30 w-3 rounded-full object-cover shadow-lg border border-slate-700"
    />
  );
}
