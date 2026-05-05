import { useLanguage } from "../../hooks/useLanguage.jsx";
import { useCertificateModal } from "../../hooks/useCertificateModal.js";
import Container from "../ui/Container.jsx";
import SectionHeader from "../ui/SectionHeader.jsx";
import Card from "../ui/Card.jsx";
import Tag from "../ui/Tag.jsx";

function resolveAssetUrl(url) {
  if (!url) return null;
  if (url.startsWith("http://") || url.startsWith("https://")) return url;
  if (url.startsWith("/")) return `${import.meta.env.BASE_URL}${url.slice(1)}`;
  return url;
}

function certThumbnail(cert) {
  if (cert.images?.length) return resolveAssetUrl(cert.images[0].url);
  return resolveAssetUrl(cert.imageUrl);
}

function CertificateModal({ cert, activeTab, setActiveTab, onClose, labels }) {
  const hasMultiple = cert.images?.length > 1;
  const currentUrl = hasMultiple
    ? resolveAssetUrl(cert.images[activeTab].url)
    : resolveAssetUrl(cert.imageUrl);

  return (
    <div
      className="fixed inset-0 z-100 flex items-center justify-center bg-slate-950/88 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative flex max-h-[92vh] max-w-[92vw] flex-col overflow-hidden rounded-(--radius-card) border border-white/10 bg-slate-950/80 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-4 px-4 pt-3 pb-2">
          {hasMultiple ? (
            <div className="flex gap-1">
              {cert.images.map((img, i) => (
                <button
                  key={img.label}
                  type="button"
                  onClick={() => setActiveTab(i)}
                  className={`rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] transition ${
                    activeTab === i
                      ? "bg-sky-500/20 text-sky-200"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  {img.label}
                </button>
              ))}
            </div>
          ) : (
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
              {cert.title}
            </span>
          )}
          <button
            type="button"
            className="rounded-full bg-slate-800/80 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-slate-100 transition hover:bg-slate-700"
            onClick={onClose}
          >
            {labels.close}
          </button>
        </div>

        <div className="overflow-auto">
          <img
            key={currentUrl}
            src={currentUrl}
            alt={cert.title}
            className="max-h-[82vh] max-w-[92vw] object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const { content } = useLanguage();
  const { skills } = content;
  const { selected, activeTab, setActiveTab, open, close } = useCertificateModal();

  return (
    <section className="py-20">
      <Container>
        <div className="space-y-12">
          <SectionHeader
            eyebrow={skills.title}
            title={skills.title}
            subtitle={skills.subtitle}
          />

          <div className="grid gap-6 lg:grid-cols-4">
            {skills.groups.map((group) => (
              <Card key={group.title} className="space-y-4">
                <h3 className="heading text-lg">{group.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Tag key={item} label={item} />
                  ))}
                </div>
              </Card>
            ))}
          </div>

          <div className="grid gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
            <Card className="space-y-4">
              <h3 className="heading text-lg">{skills.conceptsTitle}</h3>
              <div className="flex flex-wrap gap-2">
                {skills.concepts.map((item) => (
                  <Tag key={item} label={item} />
                ))}
              </div>
            </Card>
            <Card className="space-y-4">
              <h3 className="heading text-lg">{skills.learningTitle}</h3>
              <div className="flex flex-wrap gap-2">
                {skills.learning.map((item) => (
                  <Tag key={item} label={item} />
                ))}
              </div>
            </Card>
          </div>

          <Card className="space-y-4">
            <h3 className="heading text-lg">{skills.statusTitle}</h3>
            <div className="space-y-3">
              <p className="max-w-3xl text-sm text-muted">{skills.statusSummary}</p>
              <div className="flex flex-wrap gap-2">
                {skills.statusTags.map((item) => (
                  <Tag key={item} label={item} />
                ))}
              </div>
            </div>
          </Card>

          <div className="space-y-6">
            <SectionHeader
              eyebrow={skills.certificationsTitle}
              title={skills.certificationsTitle}
              subtitle={skills.certificationsHint}
            />

            <div className="grid gap-6 lg:grid-cols-2">
              {skills.certifications.map((item) => (
                <Card
                  key={item.title}
                  className="flex h-full flex-col gap-4 p-0"
                  interactive={false}
                >
                  <button
                    type="button"
                    className="group/cert block overflow-hidden rounded-t-(--radius-card) border-b border-white/10 text-left"
                    onClick={() => open(item)}
                  >
                    <div className="relative aspect-4/3 overflow-hidden bg-slate-950/60">
                      <img
                        src={certThumbnail(item)}
                        alt={item.title}
                        className="h-full w-full object-cover object-top transition duration-500 group-hover/cert:scale-[1.02]"
                        loading="lazy"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-slate-950/45 via-transparent to-transparent" />
                    </div>
                  </button>

                  <div className="space-y-3 px-6 pb-6">
                    <div className="flex flex-wrap items-center gap-2">
                      <h4 className="heading text-base">{item.title}</h4>
                      <span className="rounded-full bg-sky-400/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-sky-200">
                        {item.status}
                      </span>
                    </div>
                    <p className="text-sm text-muted">{item.description}</p>
                    <button
                      type="button"
                      className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-200/85 transition hover:text-sky-100"
                      onClick={() => open(item)}
                    >
                      {skills.openCertificateLabel}
                    </button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </Container>

      {selected ? (
        <CertificateModal
          cert={selected}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          onClose={close}
          labels={{ close: skills.closeCertificateLabel }}
        />
      ) : null}
    </section>
  );
}
