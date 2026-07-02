import { createFileRoute, Link } from "@tanstack/react-router";
import { properties } from "@/lib/site-data";
import { PropertyCard } from "@/components/property-card";
import { PageHero } from "@/components/page-hero";
import { SlidersHorizontal, MapPin, Grid3x3, Map as MapIcon } from "lucide-react";

export const Route = createFileRoute("/buy")({
  head: () => ({
    meta: [
      { title: "Buy Property in India · Vayuva" },
      { name: "description", content: "Buy luxury apartments, villas, penthouses and bungalows across Mumbai, Delhi NCR, Bengaluru, Hyderabad, Pune and Goa. RERA-verified." },
      { property: "og:title", content: "Buy Property in India · Vayuva" },
      { property: "og:url", content: "/buy" },
    ],
    links: [{ rel: "canonical", href: "/buy" }],
  }),
  component: BuyPage,
});

const filterGroups = [
  { title: "Budget", options: ["Under ₹1 Cr", "₹1-5 Cr", "₹5-20 Cr", "₹20 Cr+"] },
  { title: "Configuration", options: ["1 BHK", "2 BHK", "3 BHK", "4 BHK", "5+ BHK", "Villa"] },
  { title: "Status", options: ["Ready to Move", "Under Construction", "New Launch", "Resale"] },
  { title: "Amenities", options: ["Sea-Facing", "Gated", "Pool", "Concierge", "Vastu", "Golf-Front"] },
];

function BuyPage() {
  return (
    <>
      <PageHero
        eyebrow="Buy · Residential"
        title={<>The <span className="italic font-normal">register</span> of Indian homes.</>}
        intro="14,320 verified listings across 42 cities. From ₹75 Lakh starter apartments to ₹200 Cr heritage bungalows — every mandate is title-checked, RERA-verified, and privately vetted."
      />

      {/* Toolbar */}
      <section className="sticky top-20 z-30 border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto flex max-w-[1400px] flex-wrap items-center gap-3 px-6 py-4">
          <button className="flex items-center gap-2 border border-border px-4 py-2 text-xs font-mono uppercase tracking-[0.2em] hover:bg-linen">
            <SlidersHorizontal className="size-3.5" /> All Filters
          </button>
          {["Mumbai", "Ready", "3 BHK", "₹5-20 Cr", "Sea-Facing"].map(f => (
            <span key={f} className="border border-border bg-linen px-3 py-2 text-xs">{f} ×</span>
          ))}
          <span className="ml-auto text-xs text-muted-foreground">
            Showing 6 of 14,320 · Sorted by <span className="text-foreground">Relevance</span>
          </span>
          <div className="flex border border-border">
            <button className="flex items-center gap-1 bg-ink px-3 py-2 text-marble"><Grid3x3 className="size-3.5" /></button>
            <button className="flex items-center gap-1 px-3 py-2"><MapIcon className="size-3.5" /></button>
          </div>
        </div>
      </section>

      {/* Layout */}
      <div className="mx-auto grid max-w-[1400px] gap-10 px-6 py-16 lg:grid-cols-12">
        <aside className="lg:col-span-3 space-y-10">
          {filterGroups.map(g => (
            <div key={g.title}>
              <h3 className="eyebrow mb-4">{g.title}</h3>
              <ul className="space-y-3">
                {g.options.map(o => (
                  <li key={o} className="flex items-center gap-3 text-sm">
                    <input type="checkbox" className="accent-brass" />
                    <span>{o}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h3 className="eyebrow mb-4">Nearby</h3>
            <div className="border border-border p-4 flex items-center gap-2 text-sm">
              <MapPin className="size-4 text-brass" /> Within 3 km of me
            </div>
          </div>
        </aside>

        <div className="lg:col-span-9 grid gap-10 md:grid-cols-2 xl:grid-cols-3">
          {properties.map(p => <PropertyCard key={p.id} p={p} />)}
        </div>
      </div>

      {/* Pagination */}
      <section className="mx-auto max-w-[1400px] px-6 pb-24">
        <div className="flex items-center justify-center gap-2 border-t border-border pt-10">
          {[1, 2, 3, "…", 894].map((n, i) => (
            <button key={i} className={`min-w-10 px-3 py-2 font-mono text-xs ${n === 1 ? "bg-ink text-marble" : "hover:bg-linen"}`}>
              {n}
            </button>
          ))}
          <Link to="/buy" className="ml-4 font-mono text-xs uppercase tracking-[0.25em] text-brass">Next →</Link>
        </div>
      </section>
    </>
  );
}
