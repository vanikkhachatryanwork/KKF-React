import { pages, site, works } from '../data/content'
import type { PageData, SiteData, Work } from '../types'

const clone = <T>(value: T): T => structuredClone(value)
const abortable = async <T>(value: T, signal?: AbortSignal): Promise<T> => {
  if (signal?.aborted) throw new DOMException('Request aborted', 'AbortError')
  return clone(value)
}
export const api = {
  site: (signal?: AbortSignal) => abortable<SiteData>(site, signal),
  page: (slug: string, signal?: AbortSignal) => pages[slug] ? abortable<PageData>(pages[slug], signal) : Promise.reject(new Error('Page not found')),
  works: (signal?: AbortSignal) => abortable<Work[]>(works, signal),
  work: (slug: string, signal?: AbortSignal) => { const work = works.find(item => item.slug === slug); return work ? abortable<Work>(work, signal) : Promise.reject(new Error('Work not found')) },
}
