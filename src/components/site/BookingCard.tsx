import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronDown, ArrowRight } from "lucide-react";

const PROPERTY_TYPES = ["Villa", "Apartment", "Office", "Hotel"];
const INTERESTS = [
  "Custom Curtains",
  "Blinds",
  "Motorized Curtains",
  "Motorized Blinds",
  "Free Consultation",
];
const TIMES = ["Morning (9–12)", "Afternoon (12–4)", "Evening (4–8)"];

const WHATSAPP_NUMBER = "971547116465";

export function BookingCard({ compact = false }: { compact?: boolean }) {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    location: "Dubai",
    propertyType: PROPERTY_TYPES[0],
    interest: INTERESTS[0],
    date: "",
    time: TIMES[0],
  });

  function update<K extends keyof typeof form>(key: K, value: (typeof form)[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const lines = [
      "Hi! I'd like to book a free home visit.",
      "",
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Location: ${form.location}`,
      `Property Type: ${form.propertyType}`,
      `Interested In: ${form.interest}`,
      form.date ? `Preferred Date: ${form.date}` : null,
      `Preferred Time: ${form.time}`,
    ].filter(Boolean);

    const message = encodeURIComponent(lines.join("\n"));
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank", "noreferrer");

    setSent(true);
  }

  return (
    <div
      className={`relative rounded-2xl bg-white border border-border shadow-[var(--shadow-luxury)] ${
        compact ? "p-6" : "p-7 md:p-8"
      }`}
    >
      <div className="absolute -top-3 left-8 rounded-full bg-accent px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-accent-foreground">
        Complimentary
      </div>
      <div className="flex items-baseline justify-between">
        <h3 className="font-display text-2xl text-primary">Book Your Home Visit</h3>
        <span className="text-xs uppercase tracking-[0.24em] text-muted-foreground">Free</span>
      </div>
      <p className="mt-1.5 text-sm text-muted-foreground">
        Our design consultant visits, measures & advises — no obligation.
      </p>

      {sent ? (
        <div className="mt-8 rounded-xl bg-secondary p-6 text-center">
          <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-accent text-accent-foreground">
            ✓
          </div>
          <p className="mt-3 font-display text-lg text-primary">Thank you</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Our team will contact you shortly to confirm your visit.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-6 grid gap-3">
          <Field label="Full Name">
            <input
              required
              placeholder="Your name"
              className={inputCls}
              value={form.name}
              onChange={(e) => update("name", e.target.value)}
            />
          </Field>
          <div className="grid grid-cols-2 gap-3">
            <Field label="Phone">
              <input
                required
                placeholder="+971"
                className={inputCls}
                value={form.phone}
                onChange={(e) => update("phone", e.target.value)}
              />
            </Field>
            <Field label="Location">
              <Select value={form.location} onChange={(e) => update("location", e.target.value)}>
                <option>Dubai</option>
                <option>Abu Dhabi</option>
                <option>Sharjah</option>
              </Select>
            </Field>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <Field label="Property Type">
              <Select
                value={form.propertyType}
                onChange={(e) => update("propertyType", e.target.value)}
              >
                {PROPERTY_TYPES.map((p) => (
                  <option key={p}>{p}</option>
                ))}
              </Select>
            </Field>
            <Field label="Interested In">
              <Select value={form.interest} onChange={(e) => update("interest", e.target.value)}>
                {INTERESTS.map((p) => (
                  <option key={p}>{p}</option>
                ))}
              </Select>
            </Field>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <Field label="Preferred Date">
              <input
                type="date"
                className={inputCls}
                value={form.date}
                onChange={(e) => update("date", e.target.value)}
              />
            </Field>
            <Field label="Preferred Time">
              <Select value={form.time} onChange={(e) => update("time", e.target.value)}>
                {TIMES.map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </Select>
            </Field>
          </div>
          <button
            type="submit"
            className="mt-3 group inline-flex items-center justify-center gap-2 rounded-full bg-primary py-3.5 text-sm font-semibold uppercase tracking-[0.18em] text-primary-foreground transition-all hover:bg-royal"
          >
            Book Free Visit via WhatsApp
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </button>
          <p className="text-center text-[11px] text-muted-foreground">
            You'll be taken to WhatsApp with your details pre-filled — just hit send.
          </p>
        </form>
      )}
    </div>
  );
}

const inputCls =
  "w-full rounded-lg border border-border bg-white px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
        {label}
      </span>
      <div className="mt-1.5">{children}</div>
    </label>
  );
}

function Select({
  children,
  value,
  onChange,
}: {
  children: React.ReactNode;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}) {
  return (
    <div className="relative">
      <select
        className={`${inputCls} appearance-none pr-9`}
        value={value}
        onChange={onChange}
      >
        {children}
      </select>
      <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
    </div>
  );
}

export function BookingCta() {
  return (
    <Link
      to="/book"
      className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
    >
      Book Free Home Visit <ArrowRight className="h-4 w-4" />
    </Link>
  );
}
