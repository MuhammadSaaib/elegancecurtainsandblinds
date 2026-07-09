import { createFileRoute } from "@tanstack/react-router";
import { SimpleHero } from "@/components/site/PageShells";
import { BookingCard } from "@/components/site/BookingCard";
import hero from "@/assets/hero.jpg";

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title: "Book a Free Home Visit — Elegance Curtains & Blinds Dubai" },
      { name: "description", content: "Book your complimentary in-home consultation with a senior curtain and blinds designer across Dubai and Abu Dhabi. Free measurement, honest advice, no obligation." },
      { property: "og:title", content: "Book Free Home Visit — Elegance" },
      { property: "og:url", content: "/book" },
    ],
    links: [{ rel: "canonical", href: "/book" }],
  }),
  component: () => (
    <div>
      <SimpleHero eyebrow="Complimentary" title="Book your free home visit" subtitle="Choose a time. We'll bring fabric swatches, take precise measurements and give honest, expert design advice — with no obligation to buy." image={hero} />
      <section className="py-24">
        <div className="container-luxury max-w-2xl mx-auto">
          <BookingCard />
        </div>
      </section>
    </div>
  ),
});
