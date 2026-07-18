import { useState } from 'react'
import { A11y, EffectCoverflow, Keyboard, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import type { Media } from '../types'
import { MediaImage } from './MediaImage'

export function Gallery({ images, variant = 'wide' }: { images?: Media[]; variant?: 'wide' | 'coverflow' }) {
  const [active, setActive] = useState<Media | null>(null)
  if (!images?.length) return null
  return <>
    <Swiper className={`gallery gallery--${variant}`} modules={[A11y, EffectCoverflow, Keyboard, Navigation, Pagination]} navigation pagination={{ clickable: true }} keyboard={{ enabled: true }} loop={images.length > 2} centeredSlides={variant === 'coverflow'} effect={variant === 'coverflow' ? 'coverflow' : 'slide'} coverflowEffect={{ rotate: 0, stretch: 20, depth: 140, modifier: 1, slideShadows: true }} slidesPerView={variant === 'coverflow' ? 'auto' : 1} spaceBetween={24}>
      {images.map((image, index) => <SwiperSlide key={image.id ?? image.url}>
        <button className="gallery__button" onClick={() => setActive(image)} aria-label={image.caption || `Open image ${index + 1}`}>
          <MediaImage media={image} eager={index === 0} />{image.caption && <span>{image.caption}</span>}
        </button>
      </SwiperSlide>)}
    </Swiper>
    {active && <div className="lightbox" role="dialog" aria-modal="true" aria-label={active.caption || active.alt || 'Image preview'} onClick={() => setActive(null)}>
      <button className="lightbox__close" onClick={() => setActive(null)} aria-label="Close">×</button><MediaImage media={active} eager />
    </div>}
  </>
}
