import { createFileRoute, Link } from "@tanstack/react-router";
import { SimpleHero } from "@/components/site/PageShells";
import hero from "@/assets/hero.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Elegance — Luxury Curtains & Blinds Dubai" },
      { name: "description", content: "A design-led curtain and blinds atelier serving discerning homeowners and businesses across Dubai and Abu Dhabi. A legacy of refinement." },
      { property: "og:title", content: "About Elegance Curtains & Blinds" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: () => (
    <div>
      <SimpleHero eyebrow="About Us" title="A legacy of refinement" subtitle="Founded to bring atelier-level craftsmanship to Dubai homes, Elegance is a design-led curtain and blinds studio serving villas, apartments, hotels and premium offices across the UAE." image={hero} />
      <section className="py-24">
        <div className="container-luxury grid gap-14 md:grid-cols-2 items-start">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-accent gold-line">Our Studio</p>
            <h2 className="mt-5 font-display text-4xl text-primary leading-tight">More design consultancy than curtain shop</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              We began with a simple belief: the difference between a beautiful room
              and an ordinary one is often the window. Since our first installation,
              we've completed hundreds of projects across the Emirates — each one
              measured, tailored and installed by our own team.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Today, Elegance is trusted by interior designers, developers,
              hospitality groups and homeowners who understand that quality is felt
              long before it is seen.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { n: "500+", l: "Homes Transformed" },
              { n: "4.9★", l: "Google Rating" },
              { n: "12+", l: "Years Crafting" },
              { n: "1 Yr", l: "Warranty" },
            ].map((s) => (
              <div key={s.l} className="rounded-2xl border border-border bg-white p-8">
                <div className="font-display text-4xl text-primary">{s.n}</div>
                <div className="mt-2 text-xs uppercase tracking-[0.24em] text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="container-luxury mt-16 text-center">
          <Link to="/book" className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-accent-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
            Book Your Free Home Visit
          </Link>
        </div>
      </section>
    </div>
  ),
});
