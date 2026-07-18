import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { site, works } from "../../data/content";
import { copy, locales } from "../../lib/i18n";
import { useLocale } from "../../hooks/useLocale";
import type { Locale } from "../../types";

const flags: Record<Locale, string> = {
  am: "am-flag.gif",
  en: "uk-flag.gif",
  ir: "ir-flag.gif",
  ru: "ru-flag.gif",
};

export function SiteHeader() {
  const { locale, prefix, t } = useLocale();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [worksOpen, setWorksOpen] = useState(false);
  const closeMenus = () => {
    setMenuOpen(false);
    setWorksOpen(false);
  };
  const localizedPath = (next: Locale) => {
    const rest = location.pathname.replace(/^\/(en|ru|ir)(?=\/|$)/, "") || "/";
    return next === "am" ? rest : `/${next}${rest === "/" ? "" : rest}`;
  };

  return (
    <header className="site-header">
      <Link to={`${prefix}/`} className="brand" aria-label="KK Furniture home">
        <img src={site.logo} alt="KK Furniture" />
      </Link>
      <button
        className="menu-toggle"
        onClick={() => setMenuOpen((open) => !open)}
        aria-expanded={menuOpen}
        aria-controls="primary-nav"
        aria-label="Toggle navigation"
      >
        <span />
        <span />
        <span />
      </button>
      <nav
        id="primary-nav"
        className={`primary-nav${menuOpen ? " is-open" : ""}`}
        aria-label="Primary navigation"
        onClick={(event) => {
          if ((event.target as HTMLElement).closest("a")) closeMenus();
        }}
      >
        <NavLink to={`${prefix}/`} end>
          {t.home}
        </NavLink>
        <NavLink to={`${prefix}/services`}>{t.services}</NavLink>
        <div className="works-menu">
          <button
            onClick={() => setWorksOpen((open) => !open)}
            aria-expanded={worksOpen}
          >
            {t.works}
            <svg
              className="works-menu__chevron"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path d="m5 7.5 5 5 5-5" />
            </svg>
          </button>
          {worksOpen && (
            <div className="works-menu__panel">
              <Link to={`${prefix}/works`}>{t.allWorks}</Link>
              {works.map((work) => (
                <Link key={work.id} to={`${prefix}/works/${work.slug}`}>
                  {work.title[locale] || work.title.am}
                </Link>
              ))}
            </div>
          )}
        </div>
        <div className="language-list">
          {locales.map((item) => (
            <Link
              key={item}
              to={localizedPath(item)}
              aria-label={copy[item].home}
              aria-current={item === locale ? "page" : undefined}
            >
              <img src={`/assets/flags/${flags[item]}`} alt="" />
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
