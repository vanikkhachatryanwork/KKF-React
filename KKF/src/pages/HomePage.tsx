import { FeaturedShowcase } from "../components/FeaturedShowcase";
import { MediaImage } from "../components/MediaImage";
import { WorkGrid } from "../components/WorkGrid";
import { pages, works } from "../data/content";
import { useLocale } from "../hooks/useLocale";
import { localize } from "../lib/i18n";

export default function HomePage() {
  const { locale, t } = useLocale();
  const about = pages.home.about!;
  return (
    <>
      <section className="about-section">
        <div className="about-section__copy">
          <p className="eyebrow">KK FURNITURE</p>
          <h1>{localize(about.title, locale)}</h1>
          <p className="rich-text">{localize(about.description, locale)}</p>
          <div className="about-points">
            <span>
              <b>01</b>
              {t.custom}
            </span>
            <span>
              <b>02</b>
              {t.quality}
            </span>
            <span>
              <b>03</b>
              {t.fullCycle}
            </span>
          </div>
        </div>
        <div className="about-section__visual">
          <MediaImage media={about.image} />
          <span>
            KK
            <br />
            FURNITURE
          </span>
        </div>
      </section>
      <FeaturedShowcase works={works} />
      <section className="value-section">
        <article>
          <span>01</span>
          <h3>{t.custom}</h3>
          <p>{t.customText}</p>
        </article>
        <article>
          <span>02</span>
          <h3>{t.quality}</h3>
          <p>{t.qualityText}</p>
        </article>
        <article>
          <span>03</span>
          <h3>{t.fullCycle}</h3>
          <p>{t.fullCycleText}</p>
        </article>
      </section>
      <section className="works-section">
        <div className="works-section__heading">
          <div>
            <p className="eyebrow">KK FURNITURE</p>
            <h2>{t.ourWorks}</h2>
          </div>
          <span>07 / COLLECTIONS</span>
        </div>
        <WorkGrid works={works} variant="editorial" />
      </section>
    </>
  );
}
