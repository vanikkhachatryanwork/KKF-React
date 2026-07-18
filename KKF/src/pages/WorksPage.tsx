import { StateView } from '../components/StateView'
import { WorkGrid } from '../components/WorkGrid'
import { api } from '../lib/api'
import { useApi } from '../hooks/useApi'
import { useLocale } from '../hooks/useLocale'
export function WorksPage() { const { t } = useLocale(); const { data, loading, error } = useApi(api.works, []); return <section className="archive-page"><p className="eyebrow">KK FURNITURE</p><h1>{t.allWorks}</h1>{loading || error ? <StateView loading={loading} error={error} /> : <WorkGrid works={data || []} />}</section> }
