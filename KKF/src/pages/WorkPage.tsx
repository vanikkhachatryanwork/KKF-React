import { Navigate, useParams } from "react-router-dom";
import { Gallery } from "../components/Gallery";
import { works } from "../data/content";
import { useLocale } from "../hooks/useLocale";
import { localize } from "../lib/i18n";

export default function WorkPage() {
  const { slug = "" } = useParams();
  const { locale } = useLocale();
  const work = works.find((item) => item.slug === slug);
  if (!work) return <Navigate to="/404" replace />;
  return (
    <article className="work-page">
      <p className="eyebrow">KK FURNITURE</p>
      <h1>{localize(work.title, locale)}</h1>
      {localize(work.content, locale) && (
        <p className="work-page__content rich-text">
          {localize(work.content, locale)}
        </p>
      )}
      <Gallery images={work.gallery} variant="coverflow" />
    </article>
  );
}
