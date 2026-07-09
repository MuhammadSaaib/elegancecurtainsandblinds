import { createFileRoute } from "@tanstack/react-router";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import { SimpleHero } from "@/components/site/PageShells";
import { BookingCard } from "@/components/site/BookingCard";
import { SITE } from "@/lib/site";
import hero from "@/assets/curtains.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Elegance Curtains & Blinds — Dubai & Abu Dhabi" },
      { name: "description", content: "Contact Elegance Curtains & Blinds. Call +971 54 711 6465, message on WhatsApp or book a complimentary home visit across Dubai and Abu Dhabi." },
      { property: "og:title", content: "Contact — Elegance Curtains & Blinds" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: () => (
    <div>
      <SimpleHero eyebrow="Contact" title="Let's shape your space" subtitle="Speak with a design consultant, request an estimate, or book a complimentary home visit — we're available every day." image={hero} />
      <section className="py-24">
        <div className="container-luxury grid gap-14 lg:grid-cols-2 items-start">
          <div>
            <div className="space-y-6">
              {[
                { icon: Phone, label: "Phone", value: SITE.phone, href: SITE.phoneHref },
                { icon: Mail, label: "Email", value: SITE.email, href: `mailto:${SITE.email}` },
                { icon: Instagram, label: "Instagram", value: SITE.instagramHandle, href: SITE.instagram },
                { icon: MapPin, label: "Address", value: SITE.address, href: "#" },
              ].map((c) => (
                <a key={c.label} href={c.href} className="flex items-start gap-4 rounded-2xl border border-border bg-white p-6 hover-lift">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-primary text-primary-foreground shrink-0">
                    <c.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="text-xs uppercase tracking-[0.24em] text-muted-foreground">{c.label}</div>
                    <div className="mt-1 font-display text-lg text-primary">{c.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
          <BookingCard />
        </div>
      </section>
    </div>
  ),
});
