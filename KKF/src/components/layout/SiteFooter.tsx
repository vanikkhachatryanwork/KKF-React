import { site } from "../../data/content";
import { useLocale } from "../../hooks/useLocale";

const socialIcons = {
  facebook: (
    <path d="M14 8h3V4h-3c-3 0-5 2-5 5v3H6v4h3v8h4v-8h3l1-4h-4V9c0-.7.3-1 1-1z" />
  ),
  viber: (
    <path d="M19.5 3.7C17.9 2.2 15.4 1.5 12 1.5 6.5 1.5 2.8 4.3 2.5 9.8c-.2 4.2.8 7.4 3.9 9.2v3.3c0 .4.5.7.8.4l3.3-2.8c.5.1 1 .1 1.5.1 5.5 0 9-2.7 9.5-8.3.3-3.4-.3-6.4-2-8zm-7.2 12.8s-1.2-.3-3-1.9c-1.5-1.4-2-2.7-2-2.7-.3-.8.2-1.4.7-1.8l.7-.5c.3-.2.7-.1.9.2l1 1.3c.2.3.2.6-.1.9l-.5.6c-.2.2-.1.5 0 .7.5.7 1 1.2 1.7 1.7.2.1.5.2.7 0l.6-.5c.3-.2.7-.3.9 0l1.3 1c.3.2.4.6.2.9l-.5.7c-.5.5-1.1 1-2.6.4z" />
  ),
  instagram: (
    <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm0 2a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H7zm5 3a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6z" />
  ),
};

export function SiteFooter() {
  const { t } = useLocale();
  const socials = Object.entries(site.socials).filter(
    ([, url]) => url && url !== "#",
  );
  return (
    <footer className="site-footer">
      <div className="site-footer__contact">
        <strong>KK FURNITURE</strong>
        <a href={`tel:${site.phone}`}>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M6.6 10.8a15.5 15.5 0 006.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.2 1.2.4 2.5.7 3.8.7.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.7 21 3 13.3 3 3.7c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.6.7 3.8.1.4 0 .8-.3 1.1l-2.3 2.2z" />
          </svg>
          <span>
            {t.call}
            <small>{site.phone}</small>
          </span>
        </a>
      </div>
      <div className="site-footer__social">
        <strong>{t.tagline}</strong>
        <div className="social-links">
          {socials.map(([name, url]) => (
            <a
              key={name}
              href={url}
              target={name === "facebook" ? "_blank" : undefined}
              rel={name === "facebook" ? "noreferrer" : undefined}
              aria-label={name}
              className={`social-link social-link--${name}`}
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                {socialIcons[name as keyof typeof socialIcons]}
              </svg>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
