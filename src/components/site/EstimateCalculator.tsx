import { useMemo, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import {
  CATEGORY_FALLBACK_IMAGE,
  ESTIMATE_CATEGORIES,
  ESTIMATE_PRODUCTS,
  PRODUCT_IMAGES,
} from "@/lib/site";

export function EstimateCalculator({ initialProductId }: { initialProductId?: string }) {
  const initialProduct =
    ESTIMATE_PRODUCTS.find((p) => p.id === initialProductId) ?? null;

  const [category, setCategory] = useState<(typeof ESTIMATE_CATEGORIES)[number]>(
    (initialProduct?.category as (typeof ESTIMATE_CATEGORIES)[number]) ??
      ESTIMATE_CATEGORIES[0]
  );
  const productsInCategory = useMemo(
    () => ESTIMATE_PRODUCTS.filter((p) => p.category === category),
    [category]
  );
  const [productId, setProductId] = useState<string>(
    initialProduct?.id ?? productsInCategory[0].id
  );
  const product = ESTIMATE_PRODUCTS.find((p) => p.id === productId)!;
  const [width, setWidth] = useState<number>(product.w);
  const [height, setHeight] = useState<number>(product.h);

  const price = useMemo(() => {
    const baseArea = product.w * product.h;
    const area = Math.max(0.5, width * height);
    const ratio = area / baseArea;
    return Math.round((product.price * ratio) / 5) * 5;
  }, [product, width, height]);

  const productImage =
    PRODUCT_IMAGES[product.id] ?? CATEGORY_FALLBACK_IMAGE[product.category];

  return (
    <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-border bg-white shadow-[var(--shadow-soft)]">
      {/* Product showcase image */}
      {productImage && (
        <div className="relative">
          <img
            src={productImage}
            alt={product.name}
            className="h-[280px] w-full object-cover md:h-[380px]"
            key={productImage}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/25 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 text-primary-foreground">
            <p className="text-[11px] uppercase tracking-[0.28em] text-accent">{product.category}</p>
            <h2 className="mt-2 font-display text-3xl leading-tight md:text-4xl">{product.name}</h2>
          </div>
        </div>
      )}

      <div className="p-6 md:p-10">
        {/* Estimated price block (replaces the old blue card) */}
        <div className="border-b border-border pb-6">
          <p className="text-xs uppercase tracking-[0.28em] text-accent">Estimated Price</p>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="font-display text-5xl md:text-6xl text-primary">
              {price.toLocaleString()}
            </span>
            <span className="text-sm text-muted-foreground">AED</span>
          </div>
          <p className="mt-1 text-sm text-muted-foreground">
            {width}m × {height}m — includes installation, delivery & premium materials
          </p>
        </div>

        {/* Form */}
        <form onSubmit={(e) => e.preventDefault()} className="mt-8 grid gap-5">
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
            <Field label="Width (m)">
              <input
                type="number"
                step="0.1"
                min="0.5"
                value={width}
                onChange={(e) => setWidth(Number(e.target.value) || 0)}
                className={inputCls}
              />
            </Field>
            <Field label="Height (m)">
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

          {/* Two CTA buttons */}
          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground transition-colors hover:bg-royal"
            >
              Get Estimate <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/book"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-accent-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              Book Free Home Visit <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </form>
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
