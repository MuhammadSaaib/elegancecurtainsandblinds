import { createFileRoute } from "@tanstack/react-router";
import { CollectionPage } from "@/components/site/PageShells";
import blindsImg from "@/assets/blinds.jpg";

export const Route = createFileRoute("/blinds")({
  head: () => ({
    meta: [
      { title: "Blinds Dubai | Zebra, Roller, Roman, Wooden & Motorized Blinds" },
      { name: "description", content: "Premium zebra, roller, Roman, wooden, aluminium and motorized blinds in Dubai and Abu Dhabi. Free consultation, measurement & installation. 1 year warranty." },
      { property: "og:title", content: "Luxury Blinds Dubai — Elegance" },
      { property: "og:url", content: "/blinds" },
    ],
    links: [{ rel: "canonical", href: "/blinds" }],
  }),
  component: () => (
    <CollectionPage
      eyebrow="Blinds Collection"
      title="Blinds that shape light with precision"
      intro="From dual-fabric zebra blinds to hand-finished wooden slats and whisper-quiet motorized systems — precision-engineered for the Dubai climate."
      image={blindsImg}
      items={[
        { name: "Zebra Blinds", from: 1025, estimateId: "zebra-blinds", desc: "Dual-layer sheer + opaque bands that transition from privacy to open view in a single pull." },
        { name: "Roller Blinds", from: 347, estimateId: "blackout-roller-blinds", desc: "Blackout or light-filtering rollers in over 200 fabrics. Minimal, clean, effortless." },
        { name: "Roman Blinds", from: 418, estimateId: "sheer-roman-blinds", desc: "Soft cascading folds in sheer or blackout. A gentle alternative to hard blinds." },
        { name: "Wooden Blinds", from: 716, estimateId: "wooden-blinds", desc: "Basswood slats with stained or painted finish. Warm, natural, timeless." },
        { name: "Aluminium Blinds", from: 428, estimateId: "aluminium-blinds", desc: "Slim, durable metal slats for offices, kitchens and bathrooms." },
        { name: "Venetian Blinds", from: 500, estimateId: "aluminium-blinds", desc: "Classic horizontal slats — adjust light, air and privacy with a twist." },
        { name: "Motorized Blinds", from: 1275, estimateId: "motorized-blinds", desc: "Rechargeable or hardwired motors. Compatible with all major home automation systems." },
      ]}

    />
  ),
});
