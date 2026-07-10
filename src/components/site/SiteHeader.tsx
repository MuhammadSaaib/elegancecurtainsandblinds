import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Instagram, Menu, Phone, X } from "lucide-react";
import { NAV, SITE } from "@/lib/site";
import { cn } from "@/lib/utils";
import logoUrl from "@/assets/elegance-logo.png";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M20.52 3.48A11.86 11.86 0 0 0 12.05 0C5.5 0 .2 5.3.2 11.85c0 2.09.55 4.13 1.6 5.93L0 24l6.4-1.68a11.83 11.83 0 0 0 5.65 1.44h.01c6.55 0 11.85-5.3 11.85-11.85 0-3.17-1.23-6.15-3.39-8.43ZM12.06 21.5h-.01a9.6 9.6 0 0 1-4.9-1.34l-.35-.21-3.8 1 1.02-3.7-.23-.38a9.6 9.6 0 1 1 8.27 4.63Zm5.55-7.19c-.3-.15-1.8-.89-2.08-.99-.28-.1-.48-.15-.68.15-.2.3-.78.99-.96 1.19-.18.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.79-1.68-2.09-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.07-.15-.68-1.65-.93-2.26-.25-.6-.5-.52-.68-.53l-.58-.01c-.2 0-.53.07-.8.38-.28.3-1.05 1.02-1.05 2.5s1.08 2.9 1.23 3.1c.15.2 2.12 3.24 5.13 4.55.72.31 1.28.5 1.71.63.72.23 1.37.2 1.88.12.58-.09 1.8-.74 2.05-1.45.25-.7.25-1.31.18-1.44-.08-.13-.28-.2-.58-.35Z" />
  </svg>
);

const ANNOUNCEMENTS = [
  `✦ Custom Curtains Curated for Your Home — ${SITE.locations.join(" & ")} ✦`,
  `✦ ${SITE.tagline} — ${SITE.name} ✦`,
  `✦ Free Consultation Available — Call ${SITE.phone} ✦`,
];

function AnnouncementBar() {
  return (
    <div className="overflow-hidden bg-primary py-2.5 text-[0.85rem] font-medium tracking-wide text-primary-foreground">
      <div className="flex w-max gap-12 whitespace-nowrap animate-marquee">
        {[...ANNOUNCEMENTS, ...ANNOUNCEMENTS].map((t, i) => (
          <span key={i} className="shrink-0">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { location } = useRouterState();

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header className="sticky top-0 z-50">
      <AnnouncementBar />
      <div className="border-b border-primary/10 bg-background shadow-[0_2px_12px_rgba(4,22,54,0.04)]">
        <div className="container-luxury flex h-[110px] items-center justify-between gap-6 md:h-[124px]">
          <Link to="/" className="flex shrink-0 items-center gap-4">
            <img src={logoUrl} alt="Elegance Curtains & Blinds" className="h-20 w-20 object-contain md:h-24 md:w-24 lg:h-28 lg:w-28" />
            <span className="hidden flex-col leading-tight sm:flex">
              <strong className="font-display text-2xl font-bold text-primary md:text-3xl">Elegance</strong>
              <small className="text-[0.72rem] uppercase tracking-[0.04em] text-muted-foreground">
                Curtains & Blinds
              </small>
            </span>
          </Link>


          <nav className="hidden h-full lg:block">
            <ul className="flex h-full items-stretch gap-8">
              {NAV.map((item) => (
                <li key={item.href} className="flex items-stretch">
                  <Link
                    to={item.href}
                    className="relative flex items-center text-[0.95rem] font-medium text-foreground transition-colors hover:text-royal after:absolute after:bottom-0 after:left-1/2 after:h-[3px] after:w-0 after:-translate-x-1/2 after:rounded-full after:bg-royal after:transition-all after:duration-200"
                    activeProps={{
                      className: "text-royal after:w-6",
                    }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={SITE.phoneHref}
              className="hidden items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-royal xl:inline-flex"
            >
              <Phone className="h-4 w-4" />
              {SITE.phone}
            </a>
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="hidden h-9 w-9 place-items-center rounded-full border-2 border-primary text-primary transition-colors hover:bg-[#25D366] hover:border-[#25D366] hover:text-white md:grid"
            >
              <WhatsAppIcon className="h-4 w-4" />
            </a>
            <Link
              to="/book"
              className="hidden items-center rounded-full bg-primary px-5 py-2.5 text-[0.85rem] font-semibold tracking-[0.02em] text-primary-foreground shadow-[0_4px_16px_rgba(4,22,54,0.25)] transition-all hover:bg-royal hover:-translate-y-px hover:shadow-[0_6px_24px_rgba(4,22,54,0.35)] sm:inline-flex"
            >
              Book Free Visit
            </Link>
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="Menu"
              aria-expanded={open}
              className={cn(
                "grid h-10 w-10 place-items-center rounded-full border transition-colors lg:hidden",
                open
                  ? "border-royal bg-royal text-white"
                  : "border-border text-primary"
              )}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="border-t border-border bg-background lg:hidden">
            <div className="container-luxury flex flex-col gap-1 py-6">
              {NAV.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="border-l-[3px] border-transparent py-3 pl-3 -ml-3 text-base font-medium text-foreground transition-colors hover:text-royal"
                  activeProps={{
                    className: "border-l-royal bg-royal/5 text-royal",
                  }}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex gap-3 pt-4">
                <a
                  href={SITE.phoneHref}
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border-2 border-primary px-4 py-3 text-sm font-semibold text-primary"
                >
                  <Phone className="h-4 w-4" /> Call
                </a>
                <a
                  href={SITE.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white"
                >
                  <WhatsAppIcon className="h-4 w-4" /> WhatsApp
                </a>
              </div>
              <Link
                to="/book"
                className="mt-3 inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
              >
                Book Free Home Visit
              </Link>
              <div className="mt-4 flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <Instagram className="h-4 w-4" />
                <a href={SITE.instagram} target="_blank" rel="noreferrer">
                  {SITE.instagramHandle}
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
