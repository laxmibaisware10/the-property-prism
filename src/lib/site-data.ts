import heroNagpur from "@/assets/hero-nagpur.jpg";
import nagpurFlat from "@/assets/nagpur-flat.jpg";
import nagpurFarmhouse from "@/assets/nagpur-farmhouse.jpg";
import nagpurPlot from "@/assets/nagpur-plot.jpg";
import nagpurCommercial from "@/assets/nagpur-commercial.jpg";
import nagpurBungalow from "@/assets/nagpur-bungalow.jpg";
import visit1 from "@/assets/visit-1.jpg";
import visit2 from "@/assets/visit-2.jpg";
import visit3 from "@/assets/visit-3.jpg";

export const IMG = {
  heroNagpur,
  nagpurFlat,
  nagpurFarmhouse,
  nagpurPlot,
  nagpurCommercial,
  nagpurBungalow,
  visit1,
  visit2,
  visit3,
  // Backwards-compat aliases (legacy routes)
  heroEstate: heroNagpur,
  propMumbai: nagpurFlat,
  propGoa: nagpurFarmhouse,
  propGurgaon: nagpurCommercial,
  propDelhi: nagpurBungalow,
  propBangalore: nagpurFlat,
  cityMumbai: nagpurFlat,
  cityDelhi: nagpurBungalow,
  cityBangalore: nagpurFlat,
  cityHyderabad: nagpurCommercial,
  cityPune: nagpurFarmhouse,
  cityGoa: nagpurPlot,
};

export const BRAND = {
  name: "AANGAN",
  tagline: "Estates of Nagpur",
  motto: "आँगन · Where the home begins.",
  phone: "+91 712 660 0000",
  whatsapp: "+91 98220 00000",
  email: "concierge@aangan.estate",
  address: "1st Floor, Landmark House, Ramdaspeth, Nagpur 440010",
  founded: 2011,
  rera: "MahaRERA · A52100019876",
};

export type Property = {
  id: string;
  name: string;
  locality: string;
  city: string;
  price: string;
  priceValue: number;
  config: string;
  area: string;
  status: "Ready to Move" | "Under Construction" | "New Launch" | "Resale";
  tags: string[];
  image: string;
  rera: string;
  developer: string;
  possession: string;
  category: "Flat" | "Bungalow" | "Farmhouse" | "Plot" | "Commercial";
};

export const properties: Property[] = [
  {
    id: "aangan-civil-lines-residences",
    name: "The Civil Lines Residences",
    locality: "Civil Lines",
    city: "Nagpur",
    price: "₹4.85 Cr",
    priceValue: 4.85,
    config: "4 BHK Sky Apartment",
    area: "3,240 sq.ft.",
    status: "Ready to Move",
    tags: ["Heritage Precinct", "Skyline View", "RERA Verified"],
    image: nagpurFlat,
    rera: "P50500029111",
    developer: "Ashiana Landmark",
    possession: "Ready",
    category: "Flat",
  },
  {
    id: "sunwood-farmhouse-koradi",
    name: "Sunwood Farmhouse",
    locality: "Koradi Road",
    city: "Nagpur",
    price: "₹3.20 Cr",
    priceValue: 3.20,
    config: "4 BHK Farmhouse",
    area: "1.1 acres",
    status: "Ready to Move",
    tags: ["Pool", "Mango Orchard", "Weekend Home"],
    image: nagpurFarmhouse,
    rera: "P50500031204",
    developer: "Greenscape Estates",
    possession: "Ready",
    category: "Farmhouse",
  },
  {
    id: "amrai-plots-hingna",
    name: "Amrai Plotted Township",
    locality: "Hingna – Wardha Road",
    city: "Nagpur",
    price: "₹42 L onwards",
    priceValue: 0.42,
    config: "2,400 – 6,000 sq.ft. Plots",
    area: "42 acres · Gated",
    status: "New Launch",
    tags: ["NA Sanctioned", "Clubhouse", "Investment Grade"],
    image: nagpurPlot,
    rera: "P50500034512",
    developer: "Bhoomi Developers",
    possession: "Dec 2026",
    category: "Plot",
  },
  {
    id: "mihan-signature-tower",
    name: "MIHAN Signature Tower",
    locality: "MIHAN SEZ",
    city: "Nagpur",
    price: "₹1.20 Cr onwards",
    priceValue: 1.20,
    config: "Grade-A Office · 850–12,000 sq.ft.",
    area: "IT/ITES Ready",
    status: "Under Construction",
    tags: ["SEZ Benefits", "Metro-Connected", "Lease Guarantee"],
    image: nagpurCommercial,
    rera: "P50500036098",
    developer: "Vidarbha Corp Realty",
    possession: "Sep 2026",
    category: "Commercial",
  },
  {
    id: "seminary-hills-bungalow",
    name: "The Seminary Hills Bungalow",
    locality: "Seminary Hills",
    city: "Nagpur",
    price: "₹8.75 Cr",
    priceValue: 8.75,
    config: "5 BHK Bungalow",
    area: "8,200 sq.ft. plot",
    status: "Resale",
    tags: ["Corner Plot", "Colonial Heritage", "Vastu"],
    image: nagpurBungalow,
    rera: "P50500028745",
    developer: "Private Estate",
    possession: "Ready",
    category: "Bungalow",
  },
  {
    id: "wardha-road-signature",
    name: "The Wardha Road Signature",
    locality: "Wardha Road – Besa",
    city: "Nagpur",
    price: "₹1.85 Cr",
    priceValue: 1.85,
    config: "3 BHK Premium",
    area: "1,860 sq.ft.",
    status: "New Launch",
    tags: ["Metro Line", "Pre-Launch", "5-Year Payment Plan"],
    image: heroNagpur,
    rera: "P50500037821",
    developer: "Godrej Vidarbha",
    possession: "Jun 2027",
    category: "Flat",
  },
];

export const localities = [
  { name: "Civil Lines", listings: "48", note: "Heritage · Institutional", image: nagpurFlat },
  { name: "Ramdaspeth", listings: "72", note: "Central Business · Premium", image: nagpurBungalow },
  { name: "Dharampeth", listings: "56", note: "Old-money · Boutique", image: nagpurFlat },
  { name: "Wardha Road", listings: "124", note: "New Growth Corridor", image: heroNagpur },
  { name: "Seminary Hills", listings: "31", note: "Bungalow Zone · Green", image: nagpurBungalow },
  { name: "MIHAN", listings: "88", note: "SEZ · Grade-A Commercial", image: nagpurCommercial },
  { name: "Koradi Road", listings: "42", note: "Farmhouses · Weekend Homes", image: nagpurFarmhouse },
  { name: "Hingna – Butibori", listings: "215", note: "Plots · Industrial", image: nagpurPlot },
];

export const collections = [
  { title: "Premium Flats", count: 184, note: "Civil Lines · Ramdaspeth · Wardha Rd", category: "Flat" },
  { title: "Bungalows & Villas", count: 62, note: "Seminary Hills · Dharampeth", category: "Bungalow" },
  { title: "Farmhouses", count: 48, note: "Koradi · Kamptee · Katol Road", category: "Farmhouse" },
  { title: "Plots & Land", count: 312, note: "Hingna · Butibori · Amravati Rd", category: "Plot" },
  { title: "Commercial Grade-A", count: 74, note: "MIHAN · Wardha Road", category: "Commercial" },
  { title: "New Launches", count: 26, note: "Pre-Launch Access", category: null },
];

export const developers = [
  "Godrej Properties", "Ashiana", "Vidarbha Corp Realty",
  "Bhoomi Developers", "Greenscape Estates", "Landmark Group",
  "SMR Landmark", "Sanskruti Real Estate",
];

export const testimonials = [
  {
    q: "Aangan ne humein Civil Lines mein exact ghar dhundh ke diya jo hum chahte the. Site visit se possession tak sab kuch smooth — koi bhi cheez chupi nahi thi.",
    n: "Rohan & Anjali Deshmukh",
    r: "Flat Buyers · Civil Lines",
    initials: "RD",
    rating: 5,
  },
  {
    q: "As an NRI from Singapore, buying a farmhouse in Koradi felt impossible. The team handled POA, RERA, registration — even my septic tank inspection over video.",
    n: "Dr. Kavya Iyer",
    r: "NRI · Farmhouse · Koradi",
    initials: "KI",
    rating: 5,
  },
  {
    q: "Hamne Hingna mein 3 plots liye investment ke liye. Titles clean, layout NA-sanctioned, aur possession exactly time pe. Yeh Nagpur mein rare hai.",
    n: "Vikram Sethi",
    r: "Investor · Hingna Plots",
    initials: "VS",
    rating: 5,
  },
  {
    q: "The MIHAN office lease closed in 11 days flat. Aangan's commercial desk understood our IT expansion needs better than our in-house team.",
    n: "Priya Nair",
    r: "COO · TechCorp India",
    initials: "PN",
    rating: 5,
  },
];

export const visitJourney = [
  { step: "01", title: "Consultation", note: "Ghar baithe zaroorat samjhi jaati hai", image: visit2 },
  { step: "02", title: "Curated Shortlist", note: "3–5 properties matched to your brief", image: visit1 },
  { step: "03", title: "On-Site Visit", note: "Aerial drone view, walk-through, title docs", image: visit3 },
];

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/plots", label: "Plots" },
  { to: "/commercial", label: "Commercial" },
  { to: "/tours", label: "Tours" },
  { to: "/insights", label: "Insights" },
  { to: "/about", label: "About Us" },
  { to: "/contact", label: "Contact Us" },
] as const;

// Backwards-compat aliases (older routes still import these)
export const cities = localities.slice(0, 6).map((l) => ({
  name: l.name,
  listings: l.listings,
  image: l.image,
}));
