import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { api } from '../lib/api'
import { copy, direction, locales } from '../lib/i18n'
import { useApi } from '../hooks/useApi'
import { useLocale } from '../hooks/useLocale'
import type { Locale } from '../types'

const flags: Record<Locale, string> = { am: 'am-flag.gif', en: 'uk-flag.gif', ir: 'ir-flag.gif', ru: 'ru-flag.gif' }
export function SiteLayout() {
  const { locale, t, prefix } = useLocale(); const location = useLocation()
  const { data: site } = useApi(api.site, [])
  const { data: works = [] } = useApi(api.works, [])
  const [menu, setMenu] = useState(false); const [worksOpen, setWorksOpen] = useState(false)
  useEffect(() => { document.documentElement.lang = locale; document.documentElement.dir = direction(locale); window.scrollTo({ top: 0 }) }, [locale, location.pathname])
  const localizedPath = (next: Locale) => { const rest = location.pathname.replace(/^\/(en|ru|ir)(?=\/|$)/, '') || '/'; return next === 'am' ? rest : `/${next}${rest === '/' ? '' : rest}` }
  const logo = site?.logo || '/assets/brand/logo-new.webp'
  const isHome = location.pathname === '/' || /^\/(en|ru|ir)\/?$/.test(location.pathname)
  return <div className="site-shell">
    <header className="site-header">
      <Link to={`${prefix}/`} className="brand" aria-label="KKF home"><img src={logo} alt="KKF" /></Link>
      <button className="menu-toggle" onClick={() => setMenu(!menu)} aria-expanded={menu} aria-controls="primary-nav"><span /><span /><span /></button>
      <nav id="primary-nav" className={menu ? 'primary-nav is-open' : 'primary-nav'} aria-label="Primary navigation" onClick={(event) => { if ((event.target as HTMLElement).closest('a')) { setMenu(false); setWorksOpen(false) } }}>
        <NavLink to={`${prefix}/`} end>{t.home}</NavLink><NavLink to={`${prefix}/services`}>{t.services}</NavLink>
        <div className="works-menu"><button onClick={() => setWorksOpen(!worksOpen)} aria-expanded={worksOpen}>{t.works}<svg className="works-menu__chevron" viewBox="0 0 20 20" aria-hidden="true"><path d="m5 7.5 5 5 5-5" /></svg></button>
          {worksOpen && <div className="works-menu__panel"><Link to={`${prefix}/works`}>{t.allWorks}</Link>{works.map(work => <Link key={work.id} to={`${prefix}/works/${work.slug}`}>{work.title[locale] || work.title.am}</Link>)}</div>}
        </div>
        <div className="language-list">{locales.map(item => <Link key={item} to={localizedPath(item)} aria-label={copy[item].home} aria-current={item === locale ? 'page' : undefined}><img src={`/assets/flags/${flags[item]}`} alt="" /></Link>)}</div>
      </nav>
    </header>
    {isHome && <section className="hero-video" aria-label="KKF"><video autoPlay muted loop playsInline preload="metadata" poster="/assets/brand/logo-new.webp" src={site?.heroVideo || '/assets/brand/hero.mp4'} /><div className="hero-video__shade" /><div className="hero-video__content"><p>KK FURNITURE · EST. 2024</p><h1>{t.heroTitle}</h1><span>{t.heroText}</span><Link to={`${prefix}/works`}>{t.explore}<b aria-hidden="true">→</b></Link></div><div className="hero-video__scroll" aria-hidden="true"><span />SCROLL</div></section>}
    <main id="main-content"><Outlet /></main>
    <footer className="site-footer">
      <div className="site-footer__contact"><strong>KK FURNITURE</strong><a href={`tel:${site?.phone || '+37494000305'}`}><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.6 10.8a15.5 15.5 0 006.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.2 1.2.4 2.5.7 3.8.7.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.7 21 3 13.3 3 3.7c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.6.7 3.8.1.4 0 .8-.3 1.1l-2.3 2.2z"/></svg><span>{t.call}<small>{site?.phone || '+37494000305'}</small></span></a></div>
      <div className="site-footer__social"><strong>{t.tagline}</strong><div className="social-links">
        <a href={site?.socials?.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className="social-link social-link--facebook"><svg viewBox="0 0 24 24"><path d="M14 8h3V4h-3c-3 0-5 2-5 5v3H6v4h3v8h4v-8h3l1-4h-4V9c0-.7.3-1 1-1z"/></svg></a>
        <a href={site?.socials?.viber} aria-label="Viber" className="social-link social-link--viber"><svg viewBox="0 0 24 24"><path d="M19.5 3.7C17.9 2.2 15.4 1.5 12 1.5 6.5 1.5 2.8 4.3 2.5 9.8c-.2 4.2.8 7.4 3.9 9.2v3.3c0 .4.5.7.8.4l3.3-2.8c.5.1 1 .1 1.5.1 5.5 0 9-2.7 9.5-8.3.3-3.4-.3-6.4-2-8zm-7.2 12.8s-1.2-.3-3-1.9c-1.5-1.4-2-2.7-2-2.7-.3-.8.2-1.4.7-1.8l.7-.5c.3-.2.7-.1.9.2l1 1.3c.2.3.2.6-.1.9l-.5.6c-.2.2-.1.5 0 .7.5.7 1 1.2 1.7 1.7.2.1.5.2.7 0l.6-.5c.3-.2.7-.3.9 0l1.3 1c.3.2.4.6.2.9l-.5.7c-.5.5-1.1 1-2.6.4zm3.4-5.2c-.1-1.8-1-2.7-2.8-2.8V7.4c2.4.1 3.8 1.5 3.9 3.9h-1.1zm2-2.6c-.8-2-2.3-3.3-4.7-3.5V4c3 .2 5.1 1.9 5.9 4.4l-1.2.3z"/></svg></a>
        <a href={site?.socials?.instagram} aria-label="Instagram" className="social-link social-link--instagram"><svg viewBox="0 0 24 24"><path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm0 2a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H7zm10.5 1.5a1 1 0 110 2 1 1 0 010-2zM12 7a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6z"/></svg></a>
      </div></div>
    </footer>
  </div>
}
