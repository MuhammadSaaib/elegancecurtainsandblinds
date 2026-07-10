import { createFileRoute } from "@tanstack/react-router";
import { SimpleHero } from "@/components/site/PageShells";
import { EstimateCalculator } from "@/components/site/EstimateCalculator";
import { ESTIMATE_PRODUCTS } from "@/lib/site";
import blindsImg from "@/assets/blinds.jpg";

type EstimateSearch = { product?: string };

export const Route = createFileRoute("/estimate")({
  validateSearch: (search: Record<string, unknown>): EstimateSearch => {
    const product = typeof search.product === "string" ? search.product : undefined;
    const valid = product && ESTIMATE_PRODUCTS.some((p) => p.id === product) ? product : undefined;
    return { product: valid };
  },
  head: () => ({
    meta: [
      { title: "Instant Curtain & Blinds Estimate — Dubai & Abu Dhabi" },
      { name: "description", content: "Get an instant estimate for custom curtains, blinds and motorized systems. Includes installation, delivery and premium materials across Dubai and Abu Dhabi." },
      { property: "og:title", content: "Get Instant Estimate — Elegance" },
      { property: "og:url", content: "/estimate" },
    ],
    links: [{ rel: "canonical", href: "/estimate" }],
  }),
  component: EstimatePage,
});

function EstimatePage() {
  const { product } = Route.useSearch();
  return (
    <div>
      <SimpleHero
        eyebrow="Instant Estimate"
        title="Get an instant price estimate"
        subtitle="Select a product and your window dimensions. Every quote includes installation, delivery, professional fitting and premium materials."
        image={blindsImg}
      />
      <section className="py-24">
        <div className="container-luxury">
          <EstimateCalculator initialProductId={product} />
        </div>
      </section>
    </div>
  );
}
