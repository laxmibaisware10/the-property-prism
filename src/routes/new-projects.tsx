import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { IMG } from "@/lib/site-data";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/new-projects")({
  head: () => ({
    meta: [
      { title: "New Projects & Pre-Launches · Vayuva" },
      { name: "description", content: "Explore India's most anticipated new residential projects and pre-launches from Grade-A developers." },
      { property: "og:title", content: "New Projects · Vayuva" },
      { property: "og:url", content: "/new-projects" },
    ],
    links: [{ rel: "canonical", href: "/new-projects" }],
  }),
  component: NewProjects,
});

const projects = [
  { name: "Lodha Malabar Signature", dev: "Lodha", city: "Malabar Hill, Mumbai", price: "₹18 Cr onwards", possession: "Dec 2027", img: IMG.propMumbai, status: "Pre-Launch" },
  { name: "DLF Privana North", dev: "DLF", city: "Sector 76, Gurugram", price: "₹9.5 Cr onwards", possession: "Jun 2028", img: IMG.propGurgaon, status: "New Launch" },
  { name: "Prestige White Meadows Ph-II", dev: "Prestige Group", city: "Whitefield, Bengaluru", price: "₹6.2 Cr onwards", possession: "Mar 2027", img: IMG.propBangalore, status: "Under Construction" },
  { name: "Oberoi Elysian", dev: "Oberoi Realty", city: "Goregaon East, Mumbai", price: "₹7.8 Cr onwards", possession: "Sep 2027", img: IMG.propMumbai, status: "New Launch" },
  { name: "Godrej Zenith", dev: "Godrej Properties", city: "Sector 89, Gurugram", price: "₹4.2 Cr onwards", possession: "Dec 2028", img: IMG.propGurgaon, status: "Pre-Launch" },
  { name: "HoABL Sarjapur Estates", dev: "House of Abhinandan Lodha", city: "Sarjapur, Bengaluru", price: "₹1.8 Cr onwards", possession: "Ready plots", img: IMG.propBangalore, status: "Ready" },
];

function NewProjects() {
  return (
    <>
      <PageHero
        eyebrow="New Projects · 2026 Pipeline"
        title={<>Tomorrow's <span className="italic font-normal">addresses</span>, secured today.</>}
        intro="88 signature projects launching in 2026-27 from India's Grade-A developers. Early-bird pricing, private allocation, and inventory access before public launch."
      />
      <section className="mx-auto max-w-[1400px] px-6 py-20">
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((p) => (
            <Link to="/property/$id" params={{ id: "azure-penthouse-worli" }} key={p.name} className="group grid grid-cols-2 gap-6 border-b border-border pb-8 hover:bg-linen/60 -mx-4 px-4 py-4 transition-colors">
              <div className="aspect-[4/5] overflow-hidden">
                <img src={p.img} alt={p.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="flex flex-col justify-between py-2">
                <div>
                  <div className="flex items-center justify-between">
                    <p className="eyebrow">{p.dev}</p>
                    <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-brass">{p.status}</span>
                  </div>
                  <h3 className="mt-4 font-display text-2xl leading-tight group-hover:text-brass transition-colors">{p.name}</h3>
                  <p className="mt-2 text-xs text-muted-foreground">{p.city}</p>
                </div>
                <div className="mt-6 space-y-3 border-t border-border pt-4 text-xs">
                  <div className="flex justify-between"><span className="text-muted-foreground">Price</span><span className="font-mono">{p.price}</span></div>
                  <div className="flex justify-between"><span className="text-muted-foreground">Possession</span><span className="font-mono">{p.possession}</span></div>
                  <div className="flex justify-between"><span className="text-muted-foreground">RERA</span><span className="font-mono">Verified ✓</span></div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
