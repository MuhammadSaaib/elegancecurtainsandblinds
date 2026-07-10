import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  Check,
  ChevronRight,
  Clock,
  Hammer,
  Heart,
  Instagram,
  MapPin,
  Ruler,
  Sparkles,
  Star,
  Truck,
  Users,
} from "lucide-react";

import heroImg from "@/assets/hero.jpg";
import logoUrl from "@/assets/elegance-logo.png";
import curtainsImg from "@/assets/curtains.jpg";
import blindsImg from "@/assets/blinds.jpg";

import p1 from "@/assets/project1.jpg";
import p2 from "@/assets/project2.jpg";
import p3 from "@/assets/project3.jpg";
import p4 from "@/assets/project4.jpg";
import p5 from "@/assets/project5.jpg";
import p6 from "@/assets/project6.jpg";

import { BookingCard } from "@/components/site/BookingCard";
import { QuickEstimateWizard } from "@/components/site/QuickEstimateWizard";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Luxury Curtains & Blinds Dubai & Abu Dhabi | Elegance" },
      {
        name: "description",
        content:
          "Premium custom curtains, blinds and motorized systems across Dubai & Abu Dhabi. Free home visit, free installation, 1-year warranty. Book your complimentary consultation.",
      },
      { property: "og:title", content: "Elegance Curtains & Blinds — Dubai & Abu Dhabi" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="bg-background">
      <Hero />
      <BookingStrip />
      <TrustStrip />
      <WhyTrust />
      <Collections />
      <EstimateSection />
      <BestSellers />
      <Process />
      <FeaturedProjects />
      <WhatsAppHelp />
      <Testimonials />
      <InstagramSection />
      <FAQ />
      <FinalCta />
    </div>
  );
}

/* ================= HERO ================= */
function Hero() {
  return (
    <section className="overflow-hidden">
      <div className="grid min-h-[560px] lg:grid-cols-2">
        {/* Content panel */}
        <div className="relative order-1 lg:order-none flex flex-col justify-center bg-cream px-6 py-12 pb-20 md:px-12 lg:py-16 lg:pb-24 animate-fade-up">
          <p className="font-display italic text-accent text-lg tracking-[0.05em]">
            A Legacy of Refinement
          </p>
          <h1 className="mt-3 font-display text-4xl md:text-5xl lg:text-[3.4rem] font-bold leading-[1.15] text-foreground">
            Bespoke curtains, crafted
            <span className="block text-primary italic">for a life well-lived.</span>
          </h1>
          <p className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary">
            <MapPin className="h-4 w-4" /> Dubai
          </p>
          <p className="mt-4 max-w-md text-[1.05rem] leading-[1.7] text-muted-foreground">
            From fabric selection to final installation in as little as{" "}
            <span className="font-semibold text-primary">3–5 working days</span> —
            luxury custom curtains, blinds and motorised systems, hand-finished for
            the most beautiful homes and offices in Dubai & Abu Dhabi.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              to="/book"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-[0.95rem] font-semibold tracking-[0.02em] text-primary-foreground shadow-[0_4px_16px_rgba(4,22,54,0.25)] transition-all hover:bg-royal hover:-translate-y-px hover:shadow-[0_6px_24px_rgba(4,22,54,0.35)]"
            >
              Book Free Home Visit
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <a
              href="#estimate"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("estimate")
                  ?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              className="inline-flex items-center gap-2 rounded-full border-2 border-primary bg-white px-6 py-3.5 text-[0.9rem] font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              Get Instant Estimate
            </a>
          </div>

          {/* Rating pill */}
          <div className="mt-8 inline-flex w-fit items-center gap-3 rounded-full border border-primary/10 bg-white px-5 py-2.5 text-xs text-muted-foreground shadow-[0_2px_12px_rgba(4,22,54,0.06)]">
            <div className="flex text-accent">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-accent" />
              ))}
            </div>
            <span className="font-semibold text-primary">4.9 / 5</span>
            <span className="h-3 w-px bg-border" />
            <span>Trusted by homes across the UAE</span>
          </div>

          {/* Wave */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[60px]">
            <svg
              viewBox="0 0 1440 60"
              preserveAspectRatio="none"
              className="h-full w-full"
              aria-hidden="true"
            >
              <path
                d="M0,32 C240,64 480,0 720,24 C960,48 1200,8 1440,32 L1440,60 L0,60 Z"
                fill="var(--background)"
              />
            </svg>
          </div>
        </div>

        {/* Image panel */}
        <div className="relative order-0 lg:order-none h-[320px] overflow-hidden lg:h-auto">
          <div className="h-full w-full lg:[clip-path:polygon(8%_0,100%_0,100%_100%,0_100%)]">
            <img
              src={heroImg}
              alt="Luxury custom curtains in an elegant Dubai living room"
              className="h-full w-full object-cover animate-hero-zoom"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================= BOOKING STRIP ================= */
function BookingStrip() {
  return (
    <section className="relative bg-cream/60 border-b border-border">
      <div className="container-luxury py-14 md:py-20 grid gap-10 lg:grid-cols-[1.05fr_1fr] items-center">
        <div>
          <p className="text-xs uppercase tracking-[0.32em] text-accent gold-line">
            Complimentary Consultation
          </p>
          <h2 className="mt-5 font-display text-3xl md:text-4xl lg:text-5xl text-primary leading-tight">
            Book your free home visit —<br />
            <span className="italic">no obligation, ever.</span>
          </h2>
          <p className="mt-5 max-w-lg text-muted-foreground">
            A senior designer visits your home with fabric swatches, measures
            every window and prepares a transparent quote — usually within 24 hours.
          </p>
          <ul className="mt-6 grid gap-2.5 text-sm text-primary/85">
            {[
              "Free measurement & design consultation",
              "Hundreds of premium fabrics on hand",
              "Transparent pricing with no hidden charges",
              "Free installation across Dubai & Abu Dhabi",
            ].map((t) => (
              <li key={t} className="flex items-start gap-2.5">
                <Check className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="animate-fade-up">
          <BookingCard />
        </div>
      </div>
    </section>
  );
}


/* ================= TRUST STRIP ================= */
function TrustStrip() {
  const items = [
    { icon: Star, label: "4.9 Google Rating" },
    { icon: Users, label: "Trusted UAE-wide" },
    { icon: Award, label: "1 Year Warranty" },
    { icon: Hammer, label: "Free Installation" },
    { icon: Ruler, label: "Free Measurement" },
    { icon: Sparkles, label: "Dubai & Abu Dhabi" },
  ];
  return (
    <section className="border-b border-border bg-cream/40">
      <div className="container-luxury py-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {items.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-2.5 text-xs md:text-sm text-primary/80">
            <Icon className="h-4 w-4 text-accent shrink-0" />
            <span className="uppercase tracking-wider">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ================= WHY TRUST ================= */
function WhyTrust() {
  const reasons = [
    { icon: Sparkles, title: "Premium Materials", copy: "Curated European & Turkish fabrics selected for texture, drape and longevity." },
    { icon: Hammer, title: "Professional Installation", copy: "White-glove installation by trained fitters — no mess, no compromise." },
    { icon: Users, title: "Experienced Designers", copy: "In-home consultations with senior designers who understand your space." },
    { icon: Award, title: "Luxury Finishing", copy: "Hand-stitched hems, weighted pleats and bespoke hardware." },
    { icon: Heart, title: "Honest Pricing", copy: "Transparent quotes with no hidden charges. Ever." },
    { icon: Truck, title: "Fast Delivery", copy: "Custom production delivered in as little as 3–5 working days." },
    { icon: Check, title: "Dedicated Support", copy: "A single point of contact from consultation to installation." },
    { icon: Clock, title: "1 Year Warranty", copy: "Comprehensive warranty on materials, motors and workmanship." },
  ];
  return (
    <section className="py-24 md:py-32">
      <div className="container-luxury">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.32em] text-accent gold-line">Why Elegance</p>
          <h2 className="mt-5 font-display text-4xl md:text-5xl text-primary leading-tight">
            Why homeowners across the UAE trust Elegance
          </h2>
          <p className="mt-4 text-muted-foreground">
            We're not simply a curtain supplier. We're a design partner who shapes
            light, privacy and atmosphere — the details that turn a house into a home.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map(({ icon: Icon, title, copy }) => (
            <div
              key={title}
              className="group rounded-2xl border border-border bg-white p-7 hover-lift"
            >
              <span className="grid h-11 w-11 place-items-center rounded-full bg-secondary text-primary group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-display text-lg text-primary">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================= COLLECTIONS ================= */
function Collections() {
  const cats = [
    {
      title: "Curtains",
      href: "/curtains",
      img: curtainsImg,
      copy: "Sheers, blackout, wave, pinch pleat, eyelet, Roman & motorized curtains — tailored to your window.",
      items: ["Sheer Curtains", "Blackout Curtains", "Wave Curtains", "Pinch Pleat", "Motorized"],
    },
    {
      title: "Blinds",
      href: "/blinds",
      img: blindsImg,
      copy: "Zebra, roller, Roman, wooden, aluminium, venetian and motorized blinds for every setting.",
      items: ["Zebra Blinds", "Roller Blinds", "Wooden Blinds", "Aluminium", "Motorized"],
    },
  ];

  return (
    <section id="collections" className="py-24 md:py-32 bg-cream/50">
      <div className="container-luxury">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-xl">
            <p className="text-xs uppercase tracking-[0.32em] text-accent gold-line">Collections</p>
            <h2 className="mt-5 font-display text-4xl md:text-5xl text-primary leading-tight">
              A collection composed<br />with quiet intention
            </h2>
          </div>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm text-primary hover:text-accent"
          >
            View all projects <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {cats.map((cat) => (
            <Link
              key={cat.title}
              to={cat.href}
              className="group rounded-3xl bg-white border border-border overflow-hidden hover-lift"
            >
              <div className="image-zoom aspect-[4/5] bg-secondary">
                <img
                  src={cat.img}
                  alt={cat.title}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-7">
                <h3 className="font-display text-2xl text-primary">{cat.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{cat.copy}</p>
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {cat.items.map((i) => (
                    <li key={i} className="rounded-full bg-secondary px-3 py-1 text-[11px] uppercase tracking-wider text-primary/80">
                      {i}
                    </li>
                  ))}
                </ul>
                <span className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-primary group-hover:text-accent transition-colors">
                  Explore Collection <ChevronRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================= ESTIMATE ================= */
function EstimateSection() {
  return (
    <section id="estimate" className="py-24 md:py-32 scroll-mt-24">
      <div className="container-luxury">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.32em] text-accent">Instant Estimate</p>
          <h2 className="mt-5 font-display text-4xl md:text-5xl text-primary">Get Instant Estimate</h2>
          <p className="mt-4 text-muted-foreground">
            Four quick steps — window size, fabric, control type — and you'll see
            a transparent price range including installation and delivery.
          </p>
        </div>
        <div className="mt-14">
          <QuickEstimateWizard />
        </div>
      </div>
    </section>
  );
}

/* ================= BEST SELLERS ================= */
function BestSellers() {
  const items = [
    { name: "Wave Curtains + Sheers", img: p1, from: 1310 },
    { name: "Motorized Curtains + Sheers", img: p5, from: 1876 },
    { name: "Zebra Blinds", img: p3, from: 1025 },
    { name: "Blackout Eyelet Curtains", img: p2, from: 786 },
    { name: "Wooden Blinds", img: p6, from: 716 },
    { name: "Motorized Blinds", img: p4, from: 1275 },
  ];
  return (
    <section className="py-24 md:py-32 bg-primary text-white">
      <div className="container-luxury">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-xl">
            <p className="text-xs uppercase tracking-[0.32em] text-accent gold-line">Best Sellers</p>
            <h2 className="mt-5 font-display text-4xl md:text-5xl">Signature pieces our<br />clients ask for by name</h2>
          </div>
          <Link to="/estimate" className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-accent">
            Get quick estimate <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <div key={it.name} className="group rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-accent/50 transition-colors">
              <div className="image-zoom aspect-[4/3]">
                <img src={it.img} loading="lazy" alt={it.name} className="h-full w-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl">{it.name}</h3>
                <div className="mt-1 text-sm text-white/60">Starting from <span className="text-accent font-semibold">AED {it.from.toLocaleString()}</span></div>
                <div className="mt-5 flex gap-2">
                  <Link to="/estimate" className="flex-1 rounded-full border border-white/30 py-2.5 text-center text-[11px] font-semibold uppercase tracking-wider hover:bg-white hover:text-primary transition-colors">
                    Quick Estimate
                  </Link>
                  <Link to="/book" className="flex-1 rounded-full bg-accent py-2.5 text-center text-[11px] font-semibold uppercase tracking-wider text-accent-foreground hover:bg-white transition-colors">
                    Book Visit
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================= PROCESS ================= */
function Process() {
  const steps = [
    { n: "01", title: "Book Free Visit", copy: "Choose a time. Our consultant comes to you." },
    { n: "02", title: "Home Measurement", copy: "Precise measurements & on-the-spot design guidance." },
    { n: "03", title: "Custom Manufacturing", copy: "Made in our atelier from premium materials." },
    { n: "04", title: "Professional Installation", copy: "Meticulous, mess-free installation by our team." },
  ];
  return (
    <section className="py-24 md:py-32">
      <div className="container-luxury">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.32em] text-accent gold-line">Our Process</p>
          <h2 className="mt-5 font-display text-4xl md:text-5xl text-primary">
            Four considered steps<br />from consultation to install
          </h2>
        </div>

        <ol className="mt-14 grid gap-6 md:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.n} className="relative rounded-2xl border border-border bg-white p-7">
              <span className="font-display text-5xl text-accent/80">{s.n}</span>
              <h3 className="mt-4 font-display text-xl text-primary">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.copy}</p>
              {i < steps.length - 1 && (
                <ChevronRight className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-accent" />
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ================= PROJECTS ================= */
function FeaturedProjects() {
  const items = [
    { img: p1, title: "Palm Jumeirah Villa", tag: "Wave Curtains" },
    { img: p2, title: "Downtown Apartment", tag: "Blackout Curtains" },
    { img: p3, title: "Abu Dhabi Dining", tag: "Pinch Pleat + Blinds" },
    { img: p4, title: "DIFC Boardroom", tag: "Motorized Blinds" },
    { img: p5, title: "Emirates Hills Suite", tag: "Wave Sheers" },
    { img: p6, title: "Saadiyat Reading Nook", tag: "Wave Curtains" },
  ];
  return (
    <section className="py-24 md:py-32 bg-cream/50">
      <div className="container-luxury">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-xl">
            <p className="text-xs uppercase tracking-[0.32em] text-accent gold-line">Selected Projects</p>
            <h2 className="mt-5 font-display text-4xl md:text-5xl text-primary">Recently completed<br />across the Emirates</h2>
          </div>
          <Link to="/projects" className="inline-flex items-center gap-2 text-sm text-primary hover:text-accent">
            View full portfolio <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-3 md:grid-rows-2 md:auto-rows-fr">
          {items.map((it, i) => (
            <div
              key={i}
              className={`relative group image-zoom rounded-2xl overflow-hidden border border-border bg-secondary ${
                i === 0 ? "md:row-span-2 md:col-span-1" : ""
              }`}
              style={{ aspectRatio: i === 0 ? "3/4" : "4/3" }}
            >
              <img src={it.img} loading="lazy" alt={it.title} className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-x-0 bottom-0 p-5 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all">
                <p className="text-[10px] uppercase tracking-[0.3em] text-accent">{it.tag}</p>
                <h3 className="mt-1 font-display text-xl text-white">{it.title}</h3>
                <Link to="/book" className="mt-3 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-white hover:text-accent">
                  Book Similar Visit <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================= WHATSAPP HELP ================= */
function WhatsAppHelp() {
  return (
    <section className="py-24 md:py-32 bg-primary text-white overflow-hidden">
      <div className="container-luxury grid gap-14 lg:grid-cols-2 items-center">
        <div>
          <p className="text-xs uppercase tracking-[0.32em] text-accent gold-line">We're Here</p>
          <h2 className="mt-5 font-display text-4xl md:text-5xl">Need help choosing<br />the right curtains?</h2>
          <p className="mt-5 text-white/70 max-w-lg">
            Our design experts are available every day to guide you through
            fabrics, styles and motorization — from your phone.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={SITE.whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-7 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-white hover:opacity-90">
              Chat on WhatsApp
            </a>
            <Link to="/book" className="inline-flex items-center gap-2 rounded-full border border-white/40 px-7 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-white hover:bg-white hover:text-primary transition-colors">
              Book Free Visit
            </Link>
          </div>
        </div>

        <div className="relative mx-auto">
          <div className="relative w-[280px] h-[560px] rounded-[3rem] bg-primary-foreground/5 border-[10px] border-primary-foreground/10 shadow-[var(--shadow-luxury)] overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-6 bg-primary-foreground/10 flex items-center justify-center">
              <span className="h-1.5 w-16 rounded-full bg-primary-foreground/30" />
            </div>
            <div className="pt-10 px-4 space-y-3">
              {[
                { me: false, t: "Hi! I'd love wave curtains for my Palm villa 🏝️" },
                { me: true, t: "Wonderful. May I ask which room and window height?" },
                { me: false, t: "Living room, 3.2m ceilings, floor to ceiling glass." },
                { me: true, t: "Perfect for Wave + Sheer. Shall we book a free home visit?" },
                { me: false, t: "Yes please 🙌" },
              ].map((m, i) => (
                <div key={i} className={`flex ${m.me ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[80%] rounded-2xl px-3 py-2 text-xs leading-relaxed ${
                    m.me ? "bg-[#25D366] text-white rounded-br-sm" : "bg-white text-primary rounded-bl-sm"
                  }`}>
                    {m.t}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================= TESTIMONIALS ================= */
function Testimonials() {
  const reviews = [
    { name: "Aisha K.", city: "Palm Jumeirah", text: "The wave curtains completely transformed our villa. Elegance's team was punctual, respectful and truly meticulous.", rating: 5 },
    { name: "Rahul M.", city: "Downtown Dubai", text: "From WhatsApp inquiry to installation in under two weeks. The motorized blinds work flawlessly with our home automation.", rating: 5 },
    { name: "Layla H.", city: "Saadiyat Abu Dhabi", text: "Beautiful fabrics, honest pricing and a designer who actually listened. Our home finally feels finished.", rating: 5 },
    { name: "James P.", city: "Emirates Hills", text: "We used them for three villas now. Consistency is what sets Elegance apart. Recommended without hesitation.", rating: 5 },
  ];
  return (
    <section className="py-24 md:py-32">
      <div className="container-luxury">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.32em] text-accent gold-line">Happy Customers</p>
          <h2 className="mt-5 font-display text-4xl md:text-5xl text-primary">4.9 stars from over<br />1,200 verified reviews</h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {reviews.map((r) => (
            <blockquote key={r.name} className="rounded-2xl border border-border bg-white p-7 hover-lift">
              <div className="flex text-accent">
                {Array.from({ length: r.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent" />
                ))}
              </div>
              <p className="mt-4 text-sm text-primary/85 leading-relaxed">"{r.text}"</p>
              <footer className="mt-6 flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-primary text-primary-foreground font-display text-lg">
                  {r.name[0]}
                </div>
                <div>
                  <div className="text-sm font-medium text-primary">{r.name}</div>
                  <div className="text-xs text-muted-foreground">{r.city}</div>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================= INSTAGRAM ================= */
function InstagramSection() {
  const images = [p1, p2, p3, p4, p5, p6];
  return (
    <section className="py-24 md:py-32 bg-cream/50">
      <div className="container-luxury">
        <div className="text-center max-w-2xl mx-auto">
          <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.32em] text-accent">
            <Instagram className="h-4 w-4" /> {SITE.instagramHandle}
          </p>
          <h2 className="mt-5 font-display text-4xl md:text-5xl text-primary">Follow our latest transformations</h2>
          <p className="mt-4 text-muted-foreground">
            Explore our latest installations, luxury interiors and completed
            projects across Dubai & Abu Dhabi.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {images.map((src, i) => (
            <a
              key={i}
              href={SITE.instagram}
              target="_blank"
              rel="noreferrer"
              className="group relative aspect-square rounded-xl overflow-hidden image-zoom border border-border"
            >
              <img src={src} loading="lazy" alt="" className="h-full w-full object-cover" />
              <div className="absolute inset-0 grid place-items-center bg-primary/70 opacity-0 group-hover:opacity-100 transition-opacity">
                <Instagram className="h-6 w-6 text-accent" />
              </div>
            </a>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href={SITE.instagram}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            <Instagram className="h-4 w-4" /> Follow {SITE.instagramHandle}
          </a>
        </div>
      </div>
    </section>
  );
}

/* ================= FAQ ================= */
const FAQS = [
  {
    q: "How does the Elegance free home visit work?",
    a: "Super simple. You book a slot online, and one of our design experts arrives at your place with fabric samples, style ideas and a measuring tape. We help you choose the right curtains or blinds for your space, take precise measurements and send you a transparent quote. It's quick, helpful and totally free.",
  },
  {
    q: "Is installation included in the service?",
    a: "Yes, absolutely. Once your curtains are ready, we come back to install them — no extra steps, no hidden fees. Our team handles the full installation, so you don't have to lift a finger. Everything is measured, fitted and mounted by trained professionals.",
  },
  {
    q: "Do you offer custom curtain measurements?",
    a: "That's our thing. Every curtain we deliver is made-to-measure, based on your space and your style. During the home visit we take exact measurements to make sure the fit is perfect — no awkward lengths, no second-guessing.",
  },
  {
    q: "Can I book a visit online?",
    a: "Yes. You can book your consultation directly from our website in under a minute — pick your slot, fill in your details and you're set. We even have evening slots for after-work visits across Dubai and Abu Dhabi.",
  },
  {
    q: "What areas in the UAE do you serve?",
    a: "We currently serve Dubai and Abu Dhabi. If you're nearby and not sure if we can reach you, just drop us a message on WhatsApp or the website chat — we'll confirm right away.",
  },
  {
    q: "How long does it take from booking to installation?",
    a: "From fabric selection to installation, everything is typically done in 3–5 working days. After the home visit and once you approve your quote, we start crafting your custom curtains and book your installation. Fast, simple and fully managed.",
  },
  {
    q: "What types of curtains and blinds can I choose from?",
    a: "You can choose from a wide range of styles — eyelet, wave, American pleat, pinch pleat, layered sheers and more. Not just curtains, by the way — you can also pick from our full selection of zebra, roller, Roman, wooden and motorised blinds. Our team will help you match the right product to your space.",
  },
];

function FAQ() {
  const [open, setOpen] = useState<number>(0);
  return (
    <section className="py-24 md:py-32">
      <div className="container-luxury grid gap-14 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.32em] text-accent gold-line">FAQ</p>
          <h2 className="mt-5 font-display text-4xl md:text-5xl text-primary leading-tight">Answers to the<br />things most asked</h2>
          <p className="mt-5 text-muted-foreground max-w-md">
            Still have questions? Our team is available every day on WhatsApp
            or by phone.
          </p>
          <Link to="/book" className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
            Book Free Home Visit <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="divide-y divide-border rounded-2xl border border-border bg-white">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q}>
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="w-full flex items-center justify-between gap-6 p-6 md:p-7 text-left"
                >
                  <span className="font-display text-lg text-primary">{f.q}</span>
                  <span className={`grid h-8 w-8 place-items-center rounded-full border transition-all ${
                    isOpen ? "bg-accent border-accent text-accent-foreground rotate-45" : "border-border text-primary"
                  }`}>
                    +
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 md:px-7 pb-6 md:pb-7 -mt-2 text-sm text-muted-foreground leading-relaxed animate-fade-in">
                    {f.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ================= FINAL CTA ================= */
function FinalCta() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-cover bg-center opacity-30" style={{ backgroundImage: `url(${p1})` }} />
      <div className="absolute inset-0 -z-10 bg-primary/92" />
      <div className="container-luxury py-24 md:py-32 text-center text-white">
        <p className="text-xs uppercase tracking-[0.32em] text-accent">Transform Your Space</p>
        <h2 className="mt-5 font-display text-5xl md:text-6xl leading-tight">
          Transform your space<br /><span className="italic text-accent">with Elegance</span>
        </h2>
        <p className="mt-6 max-w-xl mx-auto text-white/75">
          Book your complimentary home visit today. Our design consultant will
          bring fabric swatches, measure your windows and provide honest, expert advice.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link to="/book" className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-accent-foreground hover:bg-white hover:text-primary transition-colors">
            Book Free Home Visit
          </Link>
          <Link to="/estimate" className="inline-flex items-center gap-2 rounded-full border border-white/40 px-7 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-white hover:bg-white hover:text-primary transition-colors">
            Get Instant Estimate
          </Link>
          <a href={SITE.whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-7 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-white hover:opacity-90">
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
