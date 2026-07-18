import { Link } from 'react-router-dom'
import { useLocale } from '../hooks/useLocale'
import { localize } from '../lib/i18n'
import type { Work } from '../types'
import { MediaImage } from './MediaImage'
export function WorkGrid({ works }: { works: Work[] }) {
  const { locale, prefix } = useLocale()
  return <div className="work-grid">{works.map(work => <Link className="work-card" to={`${prefix}/works/${work.slug}`} key={work.id}>
    <MediaImage media={work.featuredImage} /><span><strong>{localize(work.title, locale)}</strong><small>KKF</small></span>
  </Link>)}</div>
}
