import type { Media } from '../types'
export function MediaImage({ media, className = '', eager = false }: { media?: Media | null; className?: string; eager?: boolean }) {
  if (!media?.url) return <div className={`image-placeholder ${className}`} aria-hidden="true" />
  return <img className={className} src={media.url} srcSet={media.srcSet || undefined} alt={media.alt || ''} width={media.width} height={media.height} loading={eager ? 'eager' : 'lazy'} decoding="async" />
}
