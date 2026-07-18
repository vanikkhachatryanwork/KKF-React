import { WorkGrid } from "../components/WorkGrid";
import { works } from "../data/content";
import { useLocale } from "../hooks/useLocale";

export default function WorksPage() {
  const { t } = useLocale();
  return (
    <section className="archive-page">
      <p className="eyebrow">KK FURNITURE</p>
      <h1>{t.allWorks}</h1>
      <WorkGrid works={works} />
    </section>
  );
}
