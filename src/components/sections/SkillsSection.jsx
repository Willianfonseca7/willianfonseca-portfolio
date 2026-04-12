import { useEffect, useState } from "react";
import { useLanguage } from "../../hooks/useLanguage.jsx";
import Container from "../ui/Container.jsx";
import SectionHeader from "../ui/SectionHeader.jsx";
import Card from "../ui/Card.jsx";
import Tag from "../ui/Tag.jsx";

function resolveAssetUrl(assetUrl) {
  if (!assetUrl) return null;
  if (assetUrl.startsWith("http://") || assetUrl.startsWith("https://")) {
    return assetUrl;
  }

  if (assetUrl.startsWith("/")) {
    return `${import.meta.env.BASE_URL}${assetUrl.slice(1)}`;
  }

  return assetUrl;
}

export default function SkillsSection() {
  const { content } = useLanguage();
  const { skills } = content;
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  useEffect(() => {
    if (!selectedCertificate) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedCertificate(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedCertificate]);

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
                    className="group/cert block overflow-hidden rounded-t-[var(--radius-card)] border-b border-white/10 text-left"
                    onClick={() =>
                      setSelectedCertificate({
                        title: item.title,
                        imageUrl: resolveAssetUrl(item.imageUrl),
                      })
                    }
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-slate-950/60">
                      <img
                        src={resolveAssetUrl(item.imageUrl)}
                        alt={item.title}
                        className="h-full w-full object-cover object-top transition duration-500 group-hover/cert:scale-[1.02]"
                        loading="lazy"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/45 via-transparent to-transparent" />
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
                      onClick={() =>
                        setSelectedCertificate({
                          title: item.title,
                          imageUrl: resolveAssetUrl(item.imageUrl),
                        })
                      }
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

      {selectedCertificate ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/88 p-4 backdrop-blur-sm"
          onClick={() => setSelectedCertificate(null)}
        >
          <div
            className="relative max-h-[92vh] max-w-[92vw] overflow-hidden rounded-[var(--radius-card)] border border-white/10 bg-slate-950/80 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="absolute right-3 top-3 z-10 rounded-full bg-slate-950/80 px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-100 transition hover:bg-slate-900"
              onClick={() => setSelectedCertificate(null)}
            >
              {skills.closeCertificateLabel}
            </button>
            <img
              src={selectedCertificate.imageUrl}
              alt={selectedCertificate.title}
              className="max-h-[92vh] max-w-[92vw] object-contain"
            />
          </div>
        </div>
      ) : null}
    </section>
  );
}
