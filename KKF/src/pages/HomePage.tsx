import { Gallery } from '../components/Gallery'
import { MediaImage } from '../components/MediaImage'
import { StateView } from '../components/StateView'
import { WorkGrid } from '../components/WorkGrid'
import { api } from '../lib/api'
import { useApi } from '../hooks/useApi'
import { useLocale } from '../hooks/useLocale'
import type { Locale, Media } from '../types'

const field = (value: unknown, key: string, locale: Locale) => {
  if (!value || typeof value !== 'object') return ''
  const map = value as Record<string, unknown>; const nested = map[key]
  if (!nested || typeof nested !== 'object') return ''
  const item = nested as Record<string, unknown>; const localized = locale === 'am' ? key.slice(0, -1) : `${key.slice(0, -1)}_${locale}`
  return String(item[localized] || item[key.slice(0, -1)] || '')
}
export function HomePage() {
  const { locale, t } = useLocale(); const page = useApi((s) => api.page('home', s), []); const works = useApi(api.works, [])
  if (page.loading) return <StateView loading />
  const about = page.data?.about; const imageValue = about && typeof about === 'object' ? (about as Record<string, unknown>).image : null
  const image: Media | undefined = typeof imageValue === 'string' ? { url: imageValue } : imageValue && typeof imageValue === 'object' ? imageValue as Media : undefined
  return <>
    {page.error && <StateView error={page.error} />}
    <section className="about-section"><div className="about-section__copy"><p className="eyebrow">KKF</p><h1>{field(about, 'titles', locale)}</h1><div className="rich-text" dangerouslySetInnerHTML={{ __html: field(about, 'descriptions', locale) }} /></div><MediaImage media={image} /></section>
    <Gallery images={page.data?.gallery} />
    <section className="works-section"><p className="eyebrow">KK FURNITURE</p><h2>{t.ourWorks}</h2>{works.error ? <StateView error={works.error} /> : <WorkGrid works={works.data || []} />}</section>
  </>
}
