import { Link } from "react-router-dom";
import { site } from "../../data/content";
import { useLocale } from "../../hooks/useLocale";

export function HomeHero() {
  const { prefix, t } = useLocale();
  return (
    <section className="hero-video" aria-label="KK Furniture">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={site.logo}
        src={site.heroVideo}
      />
      <div className="hero-video__shade" />
      <div className="hero-video__content">
        <p>KK FURNITURE</p>
        <h1>{t.heroTitle}</h1>
        <span>{t.heroText}</span>
        <Link to={`${prefix}/works`}>
          {t.explore}
          <b aria-hidden="true">→</b>
        </Link>
      </div>
      <div className="hero-video__scroll" aria-hidden="true">
        <span />
        SCROLL
      </div>
    </section>
  );
}
