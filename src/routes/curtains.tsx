import { createFileRoute } from "@tanstack/react-router";
import { CollectionPage } from "@/components/site/PageShells";
import curtainsImg from "@/assets/curtains.jpg";
import sheerAsset from "@/assets/curtains/sheer_curtain.jpg";
import blackoutAsset from "@/assets/curtains/blackout_curtain.jpg";
import waveAsset from "@/assets/curtains/wave_curtain.jpg";
import pinchPleatAsset from "@/assets/curtains/pinch_pleat.jpg";
import pinchPleatSheerAsset from "@/assets/curtains/pinch_pleat_sheer.png";
import eyeletAsset from "@/assets/curtains/eyelet_curtains.png";
import sheerWaveAsset from "@/assets/curtains/sheer_wave.png";
import motorizedCurtainAsset from "@/assets/curtains/motorized_curtain.jpg";

export const Route = createFileRoute("/curtains")({
  head: () => ({
    meta: [
      { title: "Custom Curtains Dubai | Luxury Sheer & Blackout Curtains" },
      { name: "description", content: "Custom sheer, blackout, wave, pinch pleat, eyelet and motorized curtains for villas & apartments in Dubai and Abu Dhabi. Free measurement, delivery and installation." },
      { property: "og:title", content: "Custom Curtains Dubai — Elegance" },
      { property: "og:url", content: "/curtains" },
    ],
    links: [{ rel: "canonical", href: "/curtains" }],
  }),
  component: () => (
    <CollectionPage
      eyebrow="Curtains Collection"
      title="Custom curtains for elegant Dubai homes"
      intro="Sheers that soften light. Blackouts that hush the room. Motorized systems that respond to a whisper. Every curtain is tailored to your window, your style and your life."
      image={curtainsImg}
      items={[
        { name: "Sheer Curtains", from: 490, estimateId: "sheer-curtains", image: sheerAsset, desc: "Delicate day curtains in linen, voile & silk-blend. Diffuse harsh Dubai sun into a soft, luminous glow." },
        { name: "Blackout Curtains", from: 786, estimateId: "blackout-eyelet-curtains", image: blackoutAsset, desc: "Triple-layered blackout fabric with weighted hems. True darkness for bedrooms and media rooms." },
        { name: "Wave Curtains", from: 845, estimateId: "wave-curtains", image: waveAsset, desc: "Continuous, sculpted S-fold drape. The most architectural silhouette for floor-to-ceiling windows." },
        { name: "Pinch Pleat Curtains", from: 490, estimateId: "pinch-pleat-sheers", image: pinchPleatAsset, desc: "A timeless triple-pinch pleat — tailored, formal and enduring. Available in sheer or blackout." },
        { name: "Eyelet Curtains", from: 527, estimateId: "sheer-eyelet-curtains", image: eyeletAsset, desc: "Modern chrome or brass eyelets on a slim rod. Clean, casual, easy to draw." },
        { name: "Motorized Curtains", from: 1876, estimateId: "motorized-curtains-sheers", image: motorizedCurtainAsset, desc: "Silent motors with app, remote and Alexa / HomeKit control. The everyday luxury of quiet automation." },
        { name: "Wave + Sheer", from: 1310, estimateId: "wave-curtains-sheers", image: sheerWaveAsset, desc: "Layered wave curtains with day sheer on a dual track. Our most requested combination." },
        { name: "Pinch Pleat + Sheer", from: 1156, estimateId: "pinch-pleat-blackout-sheers", image: pinchPleatSheerAsset, desc: "Formal double-layer configuration for majlis, master bedrooms and lounge spaces." },
      ]}

    />
  ),
});
