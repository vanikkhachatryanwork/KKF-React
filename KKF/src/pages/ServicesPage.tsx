import { StateView } from '../components/StateView'
import { api } from '../lib/api'
import { useApi } from '../hooks/useApi'
import { useLocale } from '../hooks/useLocale'
import type { Media, Service } from '../types'
const value = (service: Service, key: 'title' | 'description', locale: string) => String(service[locale === 'am' ? key : `${key}_${locale}` as keyof Service] || service[key] || '')
const media = (service: Service): Media | undefined => typeof service.image === 'string' ? { url: service.image } : typeof service.image === 'object' ? service.image : undefined
export function ServicesPage() {
  const { locale, t } = useLocale(); const { data, error, loading } = useApi((s) => api.page('services', s), [])
  if (loading || error) return <StateView loading={loading} error={error} />
  return <section className="services-page"><p className="eyebrow">KK FURNITURE</p><h1>{t.services}</h1><div className="service-list">{(data?.services || []).map((service, index) => <article className="service-card" key={`${value(service, 'title', locale)}-${index}`}><div><span>0{index + 1}</span><h2>{value(service, 'title', locale)}</h2><div className="rich-text" dangerouslySetInnerHTML={{ __html: value(service, 'description', locale) }} /></div>{media(service)?.url ? <img src={media(service)?.url} alt="" loading="lazy" /> : null}</article>)}</div></section>
}
