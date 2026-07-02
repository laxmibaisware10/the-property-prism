import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { IMG } from "@/lib/site-data";

export const Route = createFileRoute("/plots")({
  head: () => ({
    meta: [
      { title: "Plots & Land in India · Vayuva" },
      { name: "description", content: "Investment-grade residential plots, farmland and second-home land parcels across India." },
      { property: "og:title", content: "Plots & Land · Vayuva" },
      { property: "og:url", content: "/plots" },
    ],
    links: [{ rel: "canonical", href: "/plots" }],
  }),
  component: Plots,
});

const plots = [
  { name: "Alibaug Beachfront · Awas", area: "1.2 acres", price: "₹9.5 Cr", ppsf: "₹18,200/sq.yd", type: "N.A. Titled", img: IMG.cityGoa },
  { name: "Kasauli Ridge Estates", area: "8,000 sq.ft.", price: "₹2.4 Cr", ppsf: "₹3,000/sq.ft", type: "Freehold", img: IMG.cityPune },
  { name: "Devanahalli Airport Corridor", area: "2,400 sq.ft.", price: "₹1.1 Cr", ppsf: "₹4,600/sq.ft", type: "BDA-Approved", img: IMG.cityBangalore },
  { name: "Coorg Coffee Estate", area: "5 acres", price: "₹4.8 Cr", ppsf: "By parcel", type: "Agricultural", img: IMG.propBangalore },
];

function Plots() {
  return (
    <>
      <PageHero
        eyebrow="Plots · Land · Farms"
        title={<>Land, the <span className="italic font-normal">original asset.</span></>}
        intro="Titled, N.A.-approved, RERA-registered plots — from second-home parcels in Alibaug and Kasauli to appreciation plays along infrastructure corridors."
      />
      <section className="mx-auto max-w-[1400px] px-6 py-20">
        <div className="grid gap-10 md:grid-cols-2">
          {plots.map(p => (
            <div key={p.name} className="group cursor-pointer">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={p.img} alt={p.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="pt-6 grid gap-6 md:grid-cols-[1fr_auto]">
                <div>
                  <h3 className="font-display text-2xl">{p.name}</h3>
                  <p className="mt-2 text-xs text-muted-foreground">{p.type} · Ready for construction</p>
                </div>
                <div className="text-right">
                  <p className="font-display text-2xl">{p.price}</p>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{p.area} · {p.ppsf}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
