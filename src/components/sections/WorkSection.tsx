import { useLanguage } from "../../hooks/useLanguage";
import Container from "../ui/Container";
import { Link } from "react-router-dom";
export default function WorkSection() {
  const { content } = useLanguage();
  return (
    <section className="section-space section-tinted">
      <Container>
        <div className="section-heading">
          <p className="eyebrow">03 / Engineering</p>
          <h2>{content.home.workTitle}</h2>
          <p className="text-muted">{content.home.workSubtitle}</p>
        </div>
        <div className="work-grid">
          {content.home.workItems.map((item, index) => (
            <article key={item.title}>
              <span className="work-number" aria-hidden="true">
                0{index + 1}
              </span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <Link className="text-link" to={`/projekte/${item.projectId}`}>
                {content.projects.ui.caseLink} →
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
