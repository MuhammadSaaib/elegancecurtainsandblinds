import { Link } from "@tanstack/react-router";
import { ArrowRight, MapPin } from "lucide-react";
import type { ReactNode } from "react";

/* Shared cream split-hero used across every subpage. Mirrors the home page. */
function CreamSplitHero({
  eyebrow,
  title,
  subtitle,
  image,
  ctas,
  children,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  image?: string;
  ctas?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="overflow-hidden">
      <div className="grid min-h-[460px] lg:grid-cols-2">
        {/* Content panel */}
        <div className="relative order-1 lg:order-none flex flex-col justify-center bg-cream px-6 py-14 md:px-12 lg:py-20 animate-fade-up">
          <p className="font-display italic text-accent text-lg tracking-[0.05em]">
            {eyebrow}
          </p>
          <h1 className="mt-3 font-display text-4xl md:text-5xl lg:text-[3.2rem] font-bold leading-[1.15] text-foreground">
            {title}
          </h1>
          <p className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary">
            <MapPin className="h-4 w-4" /> Dubai
          </p>
          {subtitle && (
            <p className="mt-4 max-w-md text-[1.02rem] leading-[1.7] text-muted-foreground">
              {subtitle}
            </p>
          )}
          {ctas && <div className="mt-8 flex flex-wrap items-center gap-3">{ctas}</div>}
          {children}
        </div>

        {/* Image panel */}
        {image ? (
          <div className="relative order-none lg:order-1 min-h-[320px] lg:min-h-full">
            <img
              src={image}
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/25 via-transparent to-transparent" />
            {/* wave transition between panels on desktop */}
            <svg
              className="hidden lg:block absolute inset-y-0 left-0 h-full w-12 -translate-x-[99%] text-cream"
              viewBox="0 0 48 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path d="M0,0 C24,25 24,75 0,100 L48,100 L48,0 Z" fill="currentColor" />
            </svg>
          </div>
        ) : (
          <div className="hidden lg:block bg-secondary" />
        )}
      </div>
    </section>
  );
}

export function CollectionPage({
  eyebrow,
  title,
  intro,
  image,
  items,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  image: string;
  items: { name: string; from?: number; desc: string }[];
}) {
  return (
    <div className="bg-background">
      <CreamSplitHero
        eyebrow={eyebrow}
        title={title}
        subtitle={intro}
        image={image}
        ctas={
          <>
            <Link
              to="/book"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-[0.9rem] font-semibold tracking-[0.02em] text-primary-foreground shadow-[0_4px_16px_rgba(4,22,54,0.25)] transition-all hover:bg-royal hover:-translate-y-px"
            >
              Book Free Home Visit
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/estimate"
              className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-white px-7 py-4 text-[0.9rem] font-semibold tracking-[0.02em] text-primary transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground"
            >
              Get Instant Estimate
            </Link>
          </>
        }
      />

      <section className="py-24">
        <div className="container-luxury">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {items.map((it) => (
              <div key={it.name} className="rounded-2xl border border-border bg-white p-7 hover-lift">
                <h3 className="font-display text-xl text-primary">{it.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
                {it.from && (
                  <div className="mt-4 text-xs uppercase tracking-wider text-muted-foreground">
                    Starting from <span className="text-accent font-semibold text-sm">AED {it.from.toLocaleString()}</span>
                  </div>
                )}
                <div className="mt-6 flex gap-2">
                  <Link to="/estimate" className="flex-1 rounded-full border border-primary py-2.5 text-center text-[11px] font-semibold uppercase tracking-wider text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                    Estimate
                  </Link>
                  <Link to="/book" className="flex-1 rounded-full bg-accent py-2.5 text-center text-[11px] font-semibold uppercase tracking-wider text-accent-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                    Book Visit
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export function SimpleHero({
  eyebrow,
  title,
  subtitle,
  image,
  children,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  image?: string;
  children?: ReactNode;
}) {
  return (
    <CreamSplitHero eyebrow={eyebrow} title={title} subtitle={subtitle} image={image}>
      {children}
    </CreamSplitHero>
  );
}
