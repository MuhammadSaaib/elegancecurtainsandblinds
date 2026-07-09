import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SimpleHero } from "@/components/site/PageShells";
import p1 from "@/assets/project1.jpg";
import p2 from "@/assets/project2.jpg";
import p3 from "@/assets/project3.jpg";
import p4 from "@/assets/project4.jpg";
import p5 from "@/assets/project5.jpg";
import p6 from "@/assets/project6.jpg";

const PROJECTS = [
  { img: p1, title: "Palm Jumeirah Villa", tag: "Wave Curtains + Sheer", location: "Palm Jumeirah, Dubai" },
  { img: p2, title: "Downtown Skyline Apartment", tag: "Blackout Wave", location: "Downtown Dubai" },
  { img: p3, title: "Saadiyat Formal Dining", tag: "Pinch Pleat + Wooden Blinds", location: "Saadiyat, Abu Dhabi" },
  { img: p4, title: "DIFC Boardroom", tag: "Motorized Roller Blinds", location: "DIFC, Dubai" },
  { img: p5, title: "Emirates Hills Master Suite", tag: "Layered Wave Sheers", location: "Emirates Hills" },
  { img: p6, title: "Al Reem Reading Room", tag: "Wave Curtains", location: "Al Reem, Abu Dhabi" },
];

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Our Projects — Luxury Curtains & Blinds Across Dubai & Abu Dhabi" },
      { name: "description", content: "A selection of our recently completed curtain and blinds projects across Palm Jumeirah, Downtown Dubai, DIFC, Emirates Hills, Saadiyat and Al Reem." },
      { property: "og:title", content: "Featured Projects — Elegance Curtains & Blinds" },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: () => (
    <div>
      <SimpleHero
        eyebrow="Selected Projects"
        title="A portfolio of quiet, considered interiors"
        subtitle="From beachfront villas to city-view boardrooms — every project is a study in fabric, light and craftsmanship."
        image={p1}
      />
      <section className="py-24">
        <div className="container-luxury">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.map((p) => (
              <div key={p.title} className="group rounded-2xl overflow-hidden border border-border bg-white hover-lift">
                <div className="image-zoom aspect-[4/5]">
                  <img src={p.img} alt={p.title} loading="lazy" className="h-full w-full object-cover" />
                </div>
                <div className="p-6">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-accent">{p.tag}</p>
                  <h3 className="mt-2 font-display text-xl text-primary">{p.title}</h3>
                  <p className="text-sm text-muted-foreground">{p.location}</p>
                  <Link to="/book" className="mt-5 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-primary hover:text-accent">
                    Book Similar Visit <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  ),
});
