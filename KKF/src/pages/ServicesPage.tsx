import { services } from "../data/content";
import { useLocale } from "../hooks/useLocale";
import type { Media, Service } from "../types";

const localizedField = (
  service: Service,
  key: "title" | "description",
  locale: string,
) =>
  String(
    service[locale === "am" ? key : (`${key}_${locale}` as keyof Service)] ||
      service[key] ||
      "",
  );
const serviceImage = (service: Service): Media | undefined =>
  typeof service.image === "string"
    ? { url: service.image }
    : typeof service.image === "object"
      ? service.image
      : undefined;

export default function ServicesPage() {
  const { locale, t } = useLocale();
  return (
    <section className="services-page">
      <p className="eyebrow">KK FURNITURE</p>
      <h1>{t.services}</h1>
      <div className="service-list">
        {services.map((service, index) => {
          const image = serviceImage(service);
          return (
            <article
              className="service-card"
              key={`${localizedField(service, "title", locale)}-${index}`}
            >
              <div>
                <span>0{index + 1}</span>
                <h2>{localizedField(service, "title", locale)}</h2>
                <p className="rich-text">
                  {localizedField(service, "description", locale)}
                </p>
              </div>
              {image && <img src={image.url} alt="" loading="lazy" />}
            </article>
          );
        })}
      </div>
    </section>
  );
}
