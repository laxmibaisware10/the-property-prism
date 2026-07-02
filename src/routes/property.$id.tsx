import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { properties } from "@/lib/site-data";
import { PropertyCard } from "@/components/property-card";
import { Bed, Ruler, MapPin, Calendar, Shield, Phone, Heart, Share2, PlayCircle, ChevronRight } from "lucide-react";

export const Route = createFileRoute("/property/$id")({
  loader: ({ params }) => {
    const p = properties.find(x => x.id === params.id);
    if (!p) throw notFound();
    return { property: p };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Property not found" }, { name: "robots", content: "noindex" }] };
    const p = loaderData.property;
    return {
      meta: [
        { title: `${p.name} · ${p.locality}, ${p.city} · Vayuva` },
        { name: "description", content: `${p.config} · ${p.area} · ${p.price} · ${p.status}. RERA ${p.rera}. By ${p.developer}.` },
        { property: "og:title", content: `${p.name} · ${p.price}` },
        { property: "og:description", content: `${p.locality}, ${p.city} · ${p.config} · ${p.area}` },
        { property: "og:type", content: "product" },
        { property: "og:image", content: `https://id-preview--c8d7eac7-4dab-4c0f-b3ac-14df2c0ecdb4.lovable.app${p.image}` },
        { property: "og:url", content: `/property/${p.id}` },
      ],
      links: [{ rel: "canonical", href: `/property/${p.id}` }],
    };
  },
  component: PropertyPage,
  notFoundComponent: () => (
    <div className="mx-auto max-w-2xl px-6 py-32 text-center">
      <p className="eyebrow mb-6">Not found</p>
      <h1 className="font-display text-5xl">This listing has been withdrawn.</h1>
      <Link to="/buy" className="mt-10 inline-block bg-ink px-8 py-4 font-mono text-[11px] uppercase tracking-[0.25em] text-marble hover:bg-brass transition-colors">Browse listings</Link>
    </div>
  ),
});

function PropertyPage() {
  const { property: p } = Route.useLoaderData();
  const similar = properties.filter(x => x.id !== p.id).slice(0, 3);

  return (
    <>
      {/* Breadcrumb */}
      <div className="border-b border-border">
        <div className="mx-auto flex max-w-[1400px] items-center gap-2 px-6 py-4 text-xs text-muted-foreground">
          <Link to="/" className="hover:text-brass">Home</Link>
          <ChevronRight className="size-3" />
          <Link to="/buy" className="hover:text-brass">Buy</Link>
          <ChevronRight className="size-3" />
          <span>{p.city}</span>
          <ChevronRight className="size-3" />
          <span className="text-foreground">{p.name}</span>
        </div>
      </div>

      {/* Gallery */}
      <section className="mx-auto max-w-[1400px] px-6 pt-8">
        <div className="grid gap-3 md:grid-cols-4 md:grid-rows-2 md:h-[560px]">
          <div className="relative md:col-span-2 md:row-span-2 overflow-hidden">
            <img src={p.image} alt={p.name} className="h-full w-full object-cover" />
            <button className="absolute bottom-4 left-4 flex items-center gap-2 bg-background/90 backdrop-blur px-4 py-2 font-mono text-[10px] uppercase tracking-[0.25em] hover:bg-background">
              <PlayCircle className="size-4" /> 3D Tour · 4K Video
            </button>
          </div>
          {[...Array(4)].map((_, i) => (
            <div key={i} className="overflow-hidden bg-linen aspect-[4/3] md:aspect-auto">
              <img src={p.image} alt="" className="h-full w-full object-cover opacity-90 hover:opacity-100 transition-opacity" style={{ filter: `hue-rotate(${i*15}deg)` }} />
            </div>
          ))}
        </div>
        <button className="mt-3 text-xs font-mono uppercase tracking-[0.25em] text-brass">+ 24 more photos & floor plans</button>
      </section>

      {/* Header row */}
      <section className="mx-auto max-w-[1400px] px-6 pt-12">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow mb-3">{p.status} · By {p.developer}</p>
            <h1 className="font-display text-5xl md:text-6xl">{p.name}</h1>
            <p className="mt-3 flex items-center gap-2 text-muted-foreground"><MapPin className="size-4" /> {p.locality}, {p.city}</p>
          </div>
          <div className="text-right">
            <p className="font-display text-5xl">{p.price}</p>
            <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">≈ ₹{Math.round(p.priceValue*10000000/parseInt(p.area.replace(/[^\d]/g,"")||"1")).toLocaleString("en-IN")}/sq.ft.</p>
            <div className="mt-4 flex justify-end gap-2">
              <button className="border border-border p-3 hover:bg-linen"><Heart className="size-4" /></button>
              <button className="border border-border p-3 hover:bg-linen"><Share2 className="size-4" /></button>
            </div>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="mx-auto grid max-w-[1400px] gap-16 px-6 py-16 lg:grid-cols-12">
        <div className="lg:col-span-8 space-y-16">
          {/* Quick facts */}
          <div className="grid grid-cols-2 gap-px bg-border md:grid-cols-4">
            {[
              [Bed, "Configuration", p.config],
              [Ruler, "Area", p.area],
              [Calendar, "Possession", p.possession],
              [Shield, "RERA", "Verified ✓"],
            ].map(([Icon, l, v], i) => (
              <div key={l as string} className="bg-background p-6">
                {/* @ts-expect-error dynamic icon */}
                <Icon className="size-4 text-brass" strokeWidth={1.5} />
                <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{l as string}</p>
                <p className="mt-1 font-medium">{v as string}</p>
              </div>
            ))}
          </div>

          {/* Overview */}
          <div>
            <h2 className="font-display text-3xl">Overview</h2>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              {p.name} is a rare {p.config.toLowerCase()} at {p.locality} — one of {p.city}'s
              most sought-after micro-markets. The residence offers {p.area} of carpet area,
              designed by an award-winning architectural practice with double-height living
              spaces, imported Italian marble, and full-height glazing framing uninterrupted views.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              The tower is fully RERA-registered ({p.rera}) by {p.developer}, with occupancy
              certificate {p.status === "Ready to Move" ? "already received" : "expected on schedule"}.
              Amenities include a rooftop infinity pool, private theatre, wine cellar, guest
              suites, and 24/7 concierge — a hallmark of the developer's ultra-luxury portfolio.
            </p>
          </div>

          {/* Amenities */}
          <div>
            <h2 className="font-display text-3xl">Amenities</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {["Infinity Pool", "Concierge & Doorman", "Private Theatre", "Wine Cellar",
                "Grand Lobby", "Guest Suites", "Squash Court", "Yoga & Meditation Deck",
                "Bespoke Gym", "EV Charging", "24×7 Security", "Vastu-Compliant Layout"].map(a => (
                <div key={a} className="flex items-center gap-3 border-b border-border py-3 text-sm">
                  <span className="text-brass">·</span>{a}
                </div>
              ))}
            </div>
          </div>

          {/* Neighborhood */}
          <div>
            <h2 className="font-display text-3xl">The neighbourhood</h2>
            <p className="mt-6 text-sm text-muted-foreground">{p.locality} is defined by leafy streets, heritage buildings and a concentration of premium retail, F&B and cultural institutions.</p>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {[["International School", "0.8 km"], ["Metro Station", "1.2 km"], ["Airport", "24 km"], ["Grade-A Hospital", "2.4 km"], ["Fine Dining", "0.4 km"], ["Retail Boulevard", "0.6 km"]].map(([k, v]) => (
                <div key={k} className="flex items-center justify-between border-b border-border py-3 text-sm">
                  <span>{k}</span><span className="font-mono text-brass">{v}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Price trend */}
          <div>
            <h2 className="font-display text-3xl">Price trend · {p.locality}</h2>
            <div className="mt-8 bg-linen p-8">
              <div className="flex items-baseline justify-between">
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">5-year appreciation</p>
                <p className="font-display text-3xl">+14.2% <span className="text-sm font-normal text-brass">CAGR</span></p>
              </div>
              <div className="mt-8 flex items-end gap-2 h-32">
                {[40, 52, 61, 74, 82, 95, 100].map((h, i) => (
                  <div key={i} className="flex-1 bg-brass/30 relative" style={{ height: `${h}%` }}>
                    <div className="absolute inset-x-0 bottom-0 bg-brass" style={{ height: `${h}%` }} />
                  </div>
                ))}
              </div>
              <div className="mt-4 flex justify-between font-mono text-[9px] uppercase tracking-[0.25em] text-muted-foreground">
                {["2020","2021","2022","2023","2024","2025","2026"].map(y => <span key={y}>{y}</span>)}
              </div>
            </div>
          </div>
        </div>

        {/* Enquiry card */}
        <aside className="lg:col-span-4">
          <div className="sticky top-32 space-y-6">
            <div className="bg-ink text-marble p-8">
              <p className="eyebrow" style={{ color: "var(--brass-soft)" }}>Speak to the RM</p>
              <h3 className="mt-4 font-display text-2xl">Priya Deshmukh</h3>
              <p className="mt-1 text-xs text-marble/60">Senior Advisor · Mumbai Luxury</p>
              <form className="mt-8 space-y-4">
                <input placeholder="Full name" className="w-full border-b border-marble/25 bg-transparent py-3 text-sm outline-none focus:border-brass" />
                <input placeholder="Phone" className="w-full border-b border-marble/25 bg-transparent py-3 text-sm outline-none focus:border-brass" />
                <input placeholder="Email" className="w-full border-b border-marble/25 bg-transparent py-3 text-sm outline-none focus:border-brass" />
                <button className="mt-2 w-full bg-brass py-4 font-mono text-[11px] uppercase tracking-[0.25em] hover:brightness-110 transition">
                  Request a private viewing
                </button>
                <button type="button" className="w-full border border-marble/25 py-4 font-mono text-[11px] uppercase tracking-[0.25em] hover:bg-marble/10 transition-colors flex items-center justify-center gap-2">
                  <Phone className="size-4" /> Call now
                </button>
              </form>
            </div>
            <div className="border border-border p-6">
              <p className="eyebrow mb-3">EMI Estimate</p>
              <p className="font-display text-3xl">₹4,42,440<span className="text-sm text-muted-foreground">/mo</span></p>
              <p className="mt-1 text-xs text-muted-foreground">₹5 Cr loan · 8.75% · 20 yrs</p>
              <Link to="/home-loans" className="mt-4 inline-block font-mono text-[10px] uppercase tracking-[0.25em] text-brass">Get pre-approved →</Link>
            </div>
          </div>
        </aside>
      </section>

      {/* Similar */}
      <section className="border-t border-border bg-linen">
        <div className="mx-auto max-w-[1400px] px-6 py-24">
          <p className="eyebrow mb-4">Similar residences</p>
          <h2 className="font-display text-4xl">You may also <span className="italic font-normal">consider.</span></h2>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {similar.map(sp => <PropertyCard key={sp.id} p={sp} />)}
          </div>
        </div>
      </section>
    </>
  );
}
