import { Link } from "react-router-dom";
import { useLocale } from "../hooks/useLocale";
export default function NotFoundPage() {
  const { t, prefix } = useLocale();
  return (
    <section className="not-found">
      <span>404</span>
      <h1>{t.notFound}</h1>
      <Link to={`${prefix}/`}>{t.back}</Link>
    </section>
  );
}
