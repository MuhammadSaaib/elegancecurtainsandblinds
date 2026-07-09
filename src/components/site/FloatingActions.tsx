import { Instagram } from "lucide-react";
import { SITE } from "@/lib/site";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M20.52 3.48A11.86 11.86 0 0 0 12.05 0C5.5 0 .2 5.3.2 11.85c0 2.09.55 4.13 1.6 5.93L0 24l6.4-1.68a11.83 11.83 0 0 0 5.65 1.44h.01c6.55 0 11.85-5.3 11.85-11.85 0-3.17-1.23-6.15-3.39-8.43ZM12.06 21.5h-.01a9.6 9.6 0 0 1-4.9-1.34l-.35-.21-3.8 1 1.02-3.7-.23-.38a9.6 9.6 0 1 1 8.27 4.63Z" />
  </svg>
);

export function FloatingActions() {
  return (
    <div className="fixed right-4 bottom-4 md:right-6 md:bottom-6 z-40 flex flex-col gap-3">
      <a
        href={SITE.instagram}
        target="_blank"
        rel="noreferrer"
        aria-label="Instagram"
        className="grid h-12 w-12 place-items-center rounded-full bg-white text-primary shadow-[var(--shadow-luxury)] hover:bg-accent hover:text-accent-foreground transition-colors border border-border"
      >
        <Instagram className="h-5 w-5" />
      </a>
      <a
        href={SITE.whatsapp}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[var(--shadow-luxury)] hover:scale-105 transition-transform"
      >
        <WhatsAppIcon className="h-6 w-6" />
      </a>
    </div>
  );
}
