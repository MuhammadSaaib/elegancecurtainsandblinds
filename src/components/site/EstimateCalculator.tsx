import { useMemo, useState } from "react";
import { ArrowRight, Calculator, Check } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { ESTIMATE_CATEGORIES, ESTIMATE_PRODUCTS } from "@/lib/site";

const PROPERTY = ["Apartment", "Villa", "Office", "Hotel"] as const;

export function EstimateCalculator() {
  const [category, setCategory] = useState<(typeof ESTIMATE_CATEGORIES)[number]>(
    ESTIMATE_CATEGORIES[0]
  );
  const productsInCategory = useMemo(
    () => ESTIMATE_PRODUCTS.filter((p) => p.category === category),
    [category]
  );
  const [productId, setProductId] = useState<string>(productsInCategory[0].id);
  const product = ESTIMATE_PRODUCTS.find((p) => p.id === productId)!;
  const [width, setWidth] = useState<number>(product.w);
  const [height, setHeight] = useState<number>(product.h);
  const [propertyType, setPropertyType] = useState<(typeof PROPERTY)[number]>("Apartment");
  const [showResult, setShowResult] = useState(false);

  const price = useMemo(() => {
    const baseArea = product.w * product.h;
    const area = Math.max(0.5, width * height);
    const ratio = area / baseArea;
    return Math.round((product.price * ratio) / 5) * 5;
  }, [product, width, height]);

  return (
    <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] items-start">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setShowResult(true);
        }}
        className="rounded-2xl bg-white border border-border p-6 md:p-8 shadow-[var(--shadow-soft)]"
      >
        <div className="flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-accent">
          <Calculator className="h-4 w-4" /> Instant Estimate
        </div>
        <div className="grid gap-5 mt-6">
          <Field label="Category">
            <div className="grid grid-cols-2 gap-2">
              {ESTIMATE_CATEGORIES.map((c) => (
                <button
                  type="button"
                  key={c}
                  onClick={() => {
                    if (c === category) return;
                    const firstInCategory = ESTIMATE_PRODUCTS.find((p) => p.category === c)!;
                    setCategory(c);
                    setProductId(firstInCategory.id);
                    setWidth(firstInCategory.w);
                    setHeight(firstInCategory.h);
                    setShowResult(false);
                  }}
                  className={`rounded-lg border px-2 py-2.5 text-xs uppercase tracking-wider transition-colors ${
                    category === c
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border text-foreground hover:border-accent"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </Field>

          <Field label="Select Product">
            <select
              value={productId}
              onChange={(e) => {
                const p = productsInCategory.find((x) => x.id === e.target.value)!;
                setProductId(p.id);
                setWidth(p.w);
                setHeight(p.h);
                setShowResult(false);
              }}
              className={inputCls}
            >
              {productsInCategory.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.name}
                </option>
              ))}
            </select>
          </Field>

          <div className="grid grid-cols-2 gap-4">
            <Field label={`Width (m)`}>
              <input
                type="number"
                step="0.1"
                min="0.5"
                value={width}
                onChange={(e) => setWidth(Number(e.target.value) || 0)}
                className={inputCls}
              />
            </Field>
            <Field label={`Height (m)`}>
              <input
                type="number"
                step="0.1"
                min="0.5"
                value={height}
                onChange={(e) => setHeight(Number(e.target.value) || 0)}
                className={inputCls}
              />
            </Field>
          </div>

          <Field label="Property Type">
            <div className="grid grid-cols-4 gap-2">
              {PROPERTY.map((p) => (
                <button
                  type="button"
                  key={p}
                  onClick={() => setPropertyType(p)}
                  className={`rounded-lg border px-2 py-2.5 text-xs uppercase tracking-wider transition-colors ${
                    propertyType === p
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border text-foreground hover:border-accent"
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
          </Field>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              type="submit"
              className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-primary py-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary-foreground hover:bg-royal"
            >
              Calculate Estimate <ArrowRight className="h-4 w-4" />
            </button>
            <Link
              to="/book"
              className="flex-1 inline-flex items-center justify-center rounded-full border border-primary py-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary hover:bg-primary hover:text-primary-foreground"
            >
              Book Free Visit
            </Link>
          </div>
        </div>
      </form>

      <div
        className={`rounded-2xl p-8 border transition-all duration-500 ${
          showResult
            ? "bg-primary text-primary-foreground border-primary shadow-[var(--shadow-luxury)]"
            : "bg-secondary/60 text-primary border-border"
        }`}
      >
        <p className="text-xs uppercase tracking-[0.24em] opacity-70">Your Estimated Price</p>
        <div className="mt-3 flex items-baseline gap-2">
          <span className="font-display text-5xl md:text-6xl">
            {showResult ? price.toLocaleString() : "—"}
          </span>
          <span className="text-sm opacity-80">AED</span>
        </div>
        <p className="mt-1 text-sm opacity-80">
          {product.name} · {width}m × {height}m · {propertyType}
        </p>
        <ul className="mt-6 space-y-2.5 text-sm">
          {[
            "Installation Included",
            "Delivery Included",
            "Professional Fitting",
            "Premium Materials",
            ("warranty" in product && product.warranty) ? "1 Year Warranty Included" : "VAT Included",
          ].map((item) => (
            <li key={item} className="flex items-center gap-2.5">
              <span
                className={`grid h-5 w-5 place-items-center rounded-full ${
                  showResult ? "bg-accent text-accent-foreground" : "bg-accent/30 text-primary"
                }`}
              >
                <Check className="h-3 w-3" />
              </span>
              {item}
            </li>
          ))}
        </ul>
        <Link
          to="/book"
          className={`mt-8 inline-flex items-center gap-2 rounded-full px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] transition-colors ${
            showResult
              ? "bg-accent text-accent-foreground hover:bg-white hover:text-primary"
              : "bg-primary text-primary-foreground hover:bg-royal"
          }`}
        >
          Book Free Home Visit <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}

const inputCls =
  "w-full rounded-lg border border-border bg-white px-3.5 py-2.5 text-sm text-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20";

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
