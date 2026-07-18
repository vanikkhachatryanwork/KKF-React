import { useParams } from 'react-router-dom'
import { Gallery } from '../components/Gallery'
import { StateView } from '../components/StateView'
import { api } from '../lib/api'
import { useApi } from '../hooks/useApi'
import { useLocale } from '../hooks/useLocale'
import { localize } from '../lib/i18n'
export function WorkPage() { const { slug = '' } = useParams(); const { locale } = useLocale(); const { data, loading, error } = useApi((s) => api.work(slug, s), [slug]); if (loading || error) return <StateView loading={loading} error={error} />; return <article className="work-page"><p className="eyebrow">KK FURNITURE</p><h1>{localize(data?.title, locale)}</h1>{localize(data?.content, locale) && <div className="work-page__content rich-text" dangerouslySetInnerHTML={{ __html: localize(data?.content, locale) }} />}<Gallery images={data?.gallery} variant="coverflow" /></article> }
