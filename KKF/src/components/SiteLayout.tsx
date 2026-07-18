import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { direction } from "../lib/i18n";
import { useLocale } from "../hooks/useLocale";
import { HomeHero } from "./layout/HomeHero";
import { SiteFooter } from "./layout/SiteFooter";
import { SiteHeader } from "./layout/SiteHeader";

export function SiteLayout() {
  const { locale } = useLocale();
  const location = useLocation();
  const isHome =
    location.pathname === "/" || /^\/(en|ru|ir)\/?$/.test(location.pathname);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = direction(locale);
    window.scrollTo({ top: 0 });
  }, [locale, location.pathname]);

  return (
    <div className="site-shell">
      <SiteHeader />
      {isHome && <HomeHero />}
      <main id="main-content">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}
