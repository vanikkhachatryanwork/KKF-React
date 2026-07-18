import { FeaturedShowcase } from '../components/FeaturedShowcase'
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
    <section className="about-section"><div className="about-section__copy"><p className="eyebrow">KK FURNITURE</p><h1>{field(about, 'titles', locale)}</h1><div className="rich-text" dangerouslySetInnerHTML={{ __html: field(about, 'descriptions', locale) }} /><div className="about-points"><span><b>01</b>{t.custom}</span><span><b>02</b>{t.quality}</span><span><b>03</b>{t.fullCycle}</span></div></div><div className="about-section__visual"><MediaImage media={image} /><span>KK<br/>FURNITURE</span></div></section>
    {!works.error && <FeaturedShowcase works={works.data || []} />}
    <section className="value-section"><article><span>01</span><h3>{t.custom}</h3><p>{t.customText}</p></article><article><span>02</span><h3>{t.quality}</h3><p>{t.qualityText}</p></article><article><span>03</span><h3>{t.fullCycle}</h3><p>{t.fullCycleText}</p></article></section>
    <section className="works-section"><div className="works-section__heading"><div><p className="eyebrow">KK FURNITURE</p><h2>{t.ourWorks}</h2></div><span>07 / COLLECTIONS</span></div>{works.error ? <StateView error={works.error} /> : <WorkGrid works={works.data || []} variant="editorial" />}</section>
  </>
}
