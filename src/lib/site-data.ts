import heroEstate from "@/assets/hero-estate.jpg";
import propMumbai from "@/assets/property-mumbai.jpg";
import propGoa from "@/assets/property-goa.jpg";
import propGurgaon from "@/assets/property-gurgaon.jpg";
import propDelhi from "@/assets/property-delhi.jpg";
import propBangalore from "@/assets/property-bangalore.jpg";
import cityMumbai from "@/assets/city-mumbai.jpg";
import cityDelhi from "@/assets/city-delhi.jpg";
import cityBangalore from "@/assets/city-bangalore.jpg";
import cityHyderabad from "@/assets/city-hyderabad.jpg";
import cityPune from "@/assets/city-pune.jpg";
import cityGoa from "@/assets/city-goa.jpg";

export const IMG = {
  heroEstate, propMumbai, propGoa, propGurgaon, propDelhi, propBangalore,
  cityMumbai, cityDelhi, cityBangalore, cityHyderabad, cityPune, cityGoa,
};

export type Property = {
  id: string;
  name: string;
  locality: string;
  city: string;
  price: string;         // e.g. "₹42.5 Cr"
  priceValue: number;    // Cr numeric
  config: string;        // "4 BHK + Study"
  area: string;          // "6,200 sq.ft."
  status: "Ready to Move" | "Under Construction" | "New Launch" | "Resale";
  tags: string[];
  image: string;
  rera: string;
  developer: string;
  possession: string;
};

export const properties: Property[] = [
  {
    id: "azure-penthouse-worli",
    name: "The Azure Penthouse",
    locality: "Worli Sea Face",
    city: "Mumbai",
    price: "₹42.50 Cr",
    priceValue: 42.5,
    config: "4 BHK + Studio",
    area: "6,200 sq.ft.",
    status: "Ready to Move",
    tags: ["Sea-Facing", "Ultra-Luxury", "RERA Verified"],
    image: propMumbai,
    rera: "P51900012345",
    developer: "Lodha Luxury",
    possession: "Ready",
  },
  {
    id: "casa-olea-assagao",
    name: "Casa Oléa Villa",
    locality: "Assagao",
    city: "Goa",
    price: "₹18.00 Cr",
    priceValue: 18,
    config: "5 BHK Villa",
    area: "8,400 sq.ft.",
    status: "Ready to Move",
    tags: ["Private Pool", "Farmhouse", "Second Home"],
    image: propGoa,
    rera: "PRGO03210007",
    developer: "Isprava",
    possession: "Ready",
  },
  {
    id: "skyline-residence-gurgaon",
    name: "The Skyline Residence",
    locality: "Golf Course Road",
    city: "Gurugram",
    price: "₹24.50 Cr",
    priceValue: 24.5,
    config: "4 BHK Duplex",
    area: "5,800 sq.ft.",
    status: "New Launch",
    tags: ["Golf-Front", "Sky Villa", "Concierge"],
    image: propGurgaon,
    rera: "HRERA-GGM-2024-198",
    developer: "DLF Camellias",
    possession: "Dec 2027",
  },
  {
    id: "amrita-bungalow-lutyens",
    name: "The Amrita Bungalow",
    locality: "Lutyens' Delhi",
    city: "New Delhi",
    price: "₹120.00 Cr",
    priceValue: 120,
    config: "6 BHK Bungalow",
    area: "1.2 acres",
    status: "Resale",
    tags: ["Heritage", "LBZ Bungalow Zone", "By Appointment"],
    image: propDelhi,
    rera: "DLRERA2023P0089",
    developer: "Private Estate",
    possession: "Ready",
  },
  {
    id: "heritage-manor-sadashivanagar",
    name: "The Heritage Manor",
    locality: "Sadashivanagar",
    city: "Bengaluru",
    price: "₹28.00 Cr",
    priceValue: 28,
    config: "6 BHK Villa",
    area: "9,500 sq.ft.",
    status: "Ready to Move",
    tags: ["Corner Plot", "Garden", "Vastu-Compliant"],
    image: propBangalore,
    rera: "PRM/KA/RERA/1251/446/PR/220914/005112",
    developer: "Prestige Estates",
    possession: "Ready",
  },
  {
    id: "thalassa-estate-alibaug",
    name: "The Thalassa Estate",
    locality: "Awas Beach, Alibaug",
    city: "Alibaug",
    price: "₹32.75 Cr",
    priceValue: 32.75,
    config: "5 BHK Villa",
    area: "1.4 acres",
    status: "Under Construction",
    tags: ["Sea-Front", "Farmhouse", "Managed"],
    image: heroEstate,
    rera: "P52000023456",
    developer: "House of Abhinandan Lodha",
    possession: "Jun 2026",
  },
];

export const cities = [
  { name: "Mumbai", listings: "3,240", image: cityMumbai },
  { name: "Delhi NCR", listings: "4,180", image: cityDelhi },
  { name: "Bengaluru", listings: "2,910", image: cityBangalore },
  { name: "Hyderabad", listings: "1,880", image: cityHyderabad },
  { name: "Pune", listings: "1,540", image: cityPune },
  { name: "Goa", listings: "620", image: cityGoa },
];

export const collections = [
  { title: "Sea-Facing Homes", count: 184, note: "Marine Drive to Alibaug" },
  { title: "Golf-Front Residences", count: 92, note: "DLF, Prestige, Embassy" },
  { title: "Farmhouses & Estates", count: 148, note: "Alibaug · Kasauli · Coorg" },
  { title: "Ultra-Luxury ₹10 Cr+", count: 512, note: "The Signature Register" },
  { title: "Ready-to-Move", count: 2340, note: "OC-Received Inventory" },
  { title: "New Launches 2026", count: 88, note: "Pre-Launch Access" },
];

export const developers = [
  "Lodha", "DLF", "Prestige", "Godrej Properties", "Oberoi Realty",
  "Sobha", "Brigade", "Embassy", "Isprava", "House of Abhinandan Lodha",
  "Mahindra Lifespaces", "Piramal Realty",
];

export const navLinks = [
  { to: "/buy", label: "Buy" },
  { to: "/rent", label: "Rent" },
  { to: "/commercial", label: "Commercial" },
  { to: "/new-projects", label: "New Projects" },
  { to: "/plots", label: "Plots" },
  { to: "/home-loans", label: "Home Loans" },
  { to: "/nri", label: "NRI" },
  { to: "/insights", label: "Insights" },
] as const;
