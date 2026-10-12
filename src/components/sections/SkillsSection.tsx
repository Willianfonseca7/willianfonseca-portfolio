import { useLanguage } from "../../hooks/useLanguage";
import { useCertificateModal } from "../../hooks/useCertificateModal";
import { assetUrl } from "../../lib/assets";
import Container from "../ui/Container";
import SectionHeader from "../ui/SectionHeader";
import Tag from "../ui/Tag";
import Dialog from "../ui/Dialog";
export default function SkillsSection() {
  const { content } = useLanguage();
  const { skills } = content;
  const modal = useCertificateModal();
  const activeImage =
    modal.selected?.images?.[modal.activeTab]?.url ?? modal.selected?.imageUrl;
  return (
    <section className="section-space">
      <Container>
        <SectionHeader
          level={1}
          title={skills.title}
          subtitle={skills.subtitle}
        />
        <div className="skills-grid">
          {skills.groups.map((group) => (
            <div key={group.title}>
              <h2 className="small-heading">{group.title}</h2>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Tag key={item} label={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="education-summary">
          <div>
            <p className="eyebrow">Syntax Institut Berlin · 04/2025–04/2026</p>
            <h2>{content.home.educationTitle}</h2>
            <p className="text-muted">{content.home.educationBody}</p>
          </div>
          <p className="text-muted">{skills.statusSummary}</p>
        </div>
        <div id="zertifikate" className="section-heading">
          <h2>{skills.certificationsTitle}</h2>
          <p className="text-muted">{skills.certificationsHint}</p>
        </div>
        <div className="certificate-grid">
          {skills.certifications.map((item) => {
            const image =
              item.images?.[0]?.url ??
              ("imageUrl" in item ? item.imageUrl : undefined);
            return (
              <article key={item.title} className="certificate-card">
                <button
                  type="button"
                  className="certificate-image"
                  onClick={() => modal.open(item)}
                  aria-label={`${skills.openCertificateLabel}: ${item.title}`}
                >
                  <img
                    src={assetUrl(image ?? "")}
                    alt={item.title}
                    width="700"
                    height="990"
                    loading="lazy"
                  />
                </button>
                <div>
                  <h3>{item.title}</h3>
                  <span className="status-badge">{item.status}</span>
                  <p>{item.description}</p>
                  <button
                    type="button"
                    className="text-link"
                    onClick={() => modal.open(item)}
                  >
                    {skills.openCertificateLabel} ↗
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
      {modal.selected && activeImage && (
        <Dialog
          title={modal.selected.title}
          closeLabel={skills.closeCertificateLabel}
          onClose={modal.close}
        >
          {modal.selected.images && (
            <div className="gallery-toolbar">
              {modal.selected.images.map((image, index) => (
                <button
                  key={image.url}
                  type="button"
                  className="chip-button"
                  aria-pressed={modal.activeTab === index}
                  onClick={() => modal.setActiveTab(index)}
                >
                  {image.label}
                </button>
              ))}
            </div>
          )}
          <div className="gallery-image certificate-full">
            <img src={assetUrl(activeImage)} alt={modal.selected.title} />
          </div>
        </Dialog>
      )}
    </section>
  );
}
