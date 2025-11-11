export default function ProjectCard({ title, summary, link }) {
  return (
    <article className="border rounded-2xl p-5">
      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm text-slate-600 mt-1">{summary}</p>
      {link && (
        <a className="inline-block mt-3 text-indigo-600 underline" href={link} target="_blank" rel="noreferrer">
          Ver projeto
        </a>
      )}
    </article>
  );
}
