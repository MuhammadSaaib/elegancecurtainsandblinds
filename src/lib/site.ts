export const SITE = {
  name: "Elegance Curtains & Blinds",
  tagline: "A Legacy of Refinement",
  phone: "+971 54 711 6465",
  phoneHref: "tel:+971547116465",
  whatsapp: "https://wa.me/971547116465",
  instagram: "https://instagram.com/elegancecurtains.ae",
  instagramHandle: "@elegancecurtains.ae",
  facebook: "https://www.facebook.com/share/18mN9kizE5/?mibextid=wwXIfr",
  email: "elegancecurtainsandblindsuae@gmail.com",
  locations: ["Dubai", "Abu Dhabi"],
  address: "Shop No. FBD 14 Tai Zhan Building, Dragon Mart 1, Dubai",
} as const;

export const NAV = [
  { label: "Curtains", href: "/curtains" },
  { label: "Blinds", href: "/blinds" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const ESTIMATE_CATEGORIES = ["Blinds", "Curtains"] as const;

export const ESTIMATE_PRODUCTS = [
  { id: "zebra-blinds", name: "Zebra Blinds", category: "Blinds", w: 1.5, h: 2, price: 1025, warranty: true },
  { id: "sheer-eyelet-curtains", name: "Sheers Eyelet Curtains", category: "Curtains", w: 2, h: 3, price: 527 },
  { id: "wooden-blinds", name: "Wooden Blinds", category: "Blinds", w: 1.5, h: 2, price: 716 },
  { id: "aluminium-blinds", name: "Aluminium Blinds", category: "Blinds", w: 1.5, h: 2, price: 428 },
  { id: "blackout-roller-blinds", name: "Blackout Roller Blinds", category: "Blinds", w: 1.5, h: 2, price: 347 },
  { id: "sheer-roman-blinds", name: "Sheers Roman Blinds", category: "Blinds", w: 1.5, h: 2, price: 418 },
  { id: "blackout-roman-blinds", name: "Blackout Roman Blinds", category: "Blinds", w: 1.5, h: 2, price: 528 },
  { id: "motorized-blinds", name: "Motorized Blinds", category: "Blinds", w: 1.5, h: 2, price: 1275, warranty: true },
  { id: "blackout-eyelet-curtains", name: "Blackout Eyelet Curtains", category: "Curtains", w: 2, h: 3, price: 786 },
  { id: "wave-curtains", name: "Wave Curtains", category: "Curtains", w: 2, h: 3, price: 845 },
  { id: "wave-sheers", name: "Wave Sheers", category: "Curtains", w: 2, h: 3, price: 595 },
  { id: "wave-curtains-sheers", name: "Wave Curtains + Sheers", category: "Curtains", w: 2, h: 3, price: 1310 },
  { id: "pinch-pleat-sheers", name: "Pinch Pleat Sheers", category: "Curtains", w: 2, h: 3, price: 490 },
  { id: "pinch-pleat-blackout", name: "Pinch Pleat Blackout", category: "Curtains", w: 2, h: 3, price: 765 },
  {
    id: "pinch-pleat-blackout-sheers",
    name: "Pinch Pleat Blackout + Sheers",
    category: "Curtains",
    w: 2,
    h: 3,
    price: 1156,
  },
  {
    id: "motorized-curtains-sheers",
    name: "Motorized Curtains + Sheers",
    category: "Curtains",
    w: 2,
    h: 3,
    price: 1876,
    warranty: true,
  },
] as const;
