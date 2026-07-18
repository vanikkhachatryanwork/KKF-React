import { useParams } from 'react-router-dom'
import { copy, isLocale } from '../lib/i18n'
import type { Locale } from '../types'

export function useLocale() {
  const { locale: segment } = useParams()
  const locale: Locale = isLocale(segment) ? segment : 'am'
  return { locale, t: copy[locale], prefix: locale === 'am' ? '' : `/${locale}` }
}
