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
  const logo = site?.logo || '/assets/brand/logo.webp'
  return <div className="site-shell">
    <header className="site-header">
      <Link to={`${prefix}/`} className="brand" aria-label="KKF home"><img src={logo} alt="KKF" /></Link>
      <button className="menu-toggle" onClick={() => setMenu(!menu)} aria-expanded={menu} aria-controls="primary-nav"><span /><span /><span /></button>
      <nav id="primary-nav" className={menu ? 'primary-nav is-open' : 'primary-nav'} aria-label="Primary navigation" onClick={(event) => { if ((event.target as HTMLElement).closest('a')) { setMenu(false); setWorksOpen(false) } }}>
        <NavLink to={`${prefix}/`} end>{t.home}</NavLink><NavLink to={`${prefix}/services`}>{t.services}</NavLink>
        <div className="works-menu"><button onClick={() => setWorksOpen(!worksOpen)} aria-expanded={worksOpen}>{t.works}<span aria-hidden="true">⌄</span></button>
          {worksOpen && <div className="works-menu__panel"><Link to={`${prefix}/works`}>{t.allWorks}</Link>{works.map(work => <Link key={work.id} to={`${prefix}/works/${work.slug}`}>{work.title[locale] || work.title.am}</Link>)}</div>}
        </div>
        <div className="language-list">{locales.map(item => <Link key={item} to={localizedPath(item)} aria-label={copy[item].home} aria-current={item === locale ? 'page' : undefined}><img src={`/assets/flags/${flags[item]}`} alt="" /></Link>)}</div>
      </nav>
    </header>
    <section className="hero-video" aria-label="KKF"><video autoPlay muted loop playsInline preload="metadata" poster="/assets/brand/logo.webp" src={site?.heroVideo || '/assets/brand/hero.mp4'} /></section>
    <main id="main-content"><Outlet /></main>
    <footer className="site-footer"><div><strong>KK FURNITURE</strong><a href={`tel:${site?.phone || '+37494000305'}`}>{t.call} {site?.phone || '+37494000305'}</a></div><div><span>{t.tagline}</span><a href={site?.socials?.facebook || 'https://www.facebook.com/profile.php?id=100009769080688'} target="_blank" rel="noreferrer" aria-label="Facebook">f</a></div></footer>
  </div>
}
