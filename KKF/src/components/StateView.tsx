import { useLocale } from '../hooks/useLocale'
export function StateView({ loading, error }: { loading?: boolean; error?: Error }) {
  const { t } = useLocale()
  if (loading) return <div className="state" role="status"><span className="loader" />{t.loading}</div>
  if (error) return <div className="state state--error" role="alert">{t.error}</div>
  return null
}
