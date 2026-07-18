import { Link } from 'react-router-dom'
import { A11y, Keyboard, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useLocale } from '../hooks/useLocale'
import { localize } from '../lib/i18n'
import type { Work } from '../types'
import { MediaImage } from './MediaImage'

export function FeaturedShowcase({ works }: { works: Work[] }) {
  const { locale, prefix, t } = useLocale()
  return <section className="featured-showcase">
    <div className="featured-showcase__heading"><div><p className="eyebrow">KK FURNITURE</p><h2>{t.featured}</h2></div><p>{t.featuredText}</p></div>
    <Swiper className="featured-slider" modules={[A11y, Keyboard, Navigation]} navigation keyboard={{ enabled: true }} spaceBetween={18} slidesPerView={1.08} breakpoints={{ 700: { slidesPerView: 1.65, spaceBetween: 24 }, 1100: { slidesPerView: 2.2, spaceBetween: 28 } }}>
      {works.slice(0, 5).map((work, index) => <SwiperSlide key={work.id}><Link to={`${prefix}/works/${work.slug}`} className="featured-slide">
        <MediaImage media={work.featuredImage} eager={index < 2} /><span className="featured-slide__number">0{index + 1}</span><div><h3>{localize(work.title, locale)}</h3><span>{t.viewCollection} →</span></div>
      </Link></SwiperSlide>)}
    </Swiper>
  </section>
}
