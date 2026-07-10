import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, MapPin } from "lucide-react";
import { SITE } from "@/lib/site";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M20.52 3.48A11.86 11.86 0 0 0 12.05 0C5.5 0 .2 5.3.2 11.85c0 2.09.55 4.13 1.6 5.93L0 24l6.4-1.68a11.83 11.83 0 0 0 5.65 1.44h.01c6.55 0 11.85-5.3 11.85-11.85 0-3.17-1.23-6.15-3.39-8.43Z" />
  </svg>
);

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-luxury py-16 grid gap-14 md:grid-cols-2">
        <div>
          <h4 className="font-display text-lg text-accent">Collections</h4>
          <ul className="mt-5 space-y-3 text-sm text-primary-foreground/75">
            <li><Link to="/curtains" className="hover:text-accent">Curtains</Link></li>
            <li><Link to="/blinds" className="hover:text-accent">Blinds</Link></li>
            <li><Link to="/estimate" className="hover:text-accent">Get Estimate</Link></li>
            <li><Link to="/projects" className="hover:text-accent">Projects</Link></li>
            <li><Link to="/about" className="hover:text-accent">About</Link></li>
            <li><Link to="/contact" className="hover:text-accent">Contact</Link></li>
            <li><Link to="/book" className="hover:text-accent">Book Free Visit</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg text-accent">Visit Us</h4>
          <ul className="mt-5 space-y-4 text-sm text-primary-foreground/80">
            <li className="flex gap-3">
              <MapPin className="h-4 w-4 mt-0.5 text-accent shrink-0" />
              <div>
                <div className="font-medium text-primary-foreground">{SITE.address}</div>
                <div className="text-primary-foreground/60">Open Daily · By appointment</div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="container-luxury flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-full border border-accent/40 text-accent">
              <span className="font-display text-lg italic">E</span>
            </span>
            <div className="leading-tight">
              <div className="font-display text-xl">Elegance</div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-accent">
                A Legacy of Refinement
              </div>
            </div>
          </div>
          <div className="flex gap-3">
            {[
              { href: SITE.instagram, icon: Instagram, label: "Instagram" },
              { href: SITE.whatsapp, icon: WhatsAppIcon, label: "WhatsApp" },
              { href: SITE.facebook, icon: Facebook, label: "Facebook" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="grid h-9 w-9 place-items-center rounded-full border border-primary-foreground/20 text-primary-foreground/80 hover:border-accent hover:text-accent transition-colors"
              >
                <s.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
          <p className="text-xs text-primary-foreground/50">
            © {new Date().getFullYear()} Elegance Curtains & Blinds · Dubai, UAE
          </p>
        </div>
      </div>
    </footer>
  );
}
