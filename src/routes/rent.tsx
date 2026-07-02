import { createFileRoute } from "@tanstack/react-router";
import { properties } from "@/lib/site-data";
import { PropertyCard } from "@/components/property-card";
import { PageHero } from "@/components/page-hero";

export const Route = createFileRoute("/rent")({
  head: () => ({
    meta: [
      { title: "Rent Property in India · Vayuva" },
      { name: "description", content: "Rent premium apartments, villas and serviced residences across India. Verified landlords, background-checked tenants." },
      { property: "og:title", content: "Rent Property in India · Vayuva" },
      { property: "og:url", content: "/rent" },
    ],
    links: [{ rel: "canonical", href: "/rent" }],
  }),
  component: Rent,
});

function Rent() {
  const rentals = properties.slice(0, 6).map(p => ({
    ...p,
    price: `₹${Math.round(p.priceValue * 0.35 * 100) / 100} L / mo`,
  }));
  return (
    <>
      <PageHero
        eyebrow="Rent · Premium Residences"
        title={<>Homes for the <span className="italic font-normal">interim years.</span></>}
        intro="Serviced apartments, corporate leases, and long-stay villas. Every landlord is KYC-verified; every tenant background-checked. Rent from ₹80,000 to ₹15 Lakh per month."
      />
      <section className="mx-auto max-w-[1400px] px-6 py-20">
        <div className="mb-10 grid gap-4 md:grid-cols-4 border border-border p-6">
          {[["Location", "South Bombay"], ["Budget", "₹2-5 L/mo"], ["BHK", "3-4 BHK"], ["Furnishing", "Fully Furnished"]].map(([l, v]) => (
            <div key={l}><p className="eyebrow mb-1">{l}</p><p className="text-sm">{v}</p></div>
          ))}
        </div>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {rentals.map(p => <PropertyCard key={p.id} p={p} />)}
        </div>
      </section>
    </>
  );
}
