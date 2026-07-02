import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { IMG } from "@/lib/site-data";

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [
      { title: "Market Insights & Research · Vayuva" },
      { name: "description", content: "Institutional-grade research on Indian real estate. Price trends, yield reports, and micro-market analysis." },
      { property: "og:title", content: "Market Insights · Vayuva" },
      { property: "og:url", content: "/insights" },
    ],
    links: [{ rel: "canonical", href: "/insights" }],
  }),
  component: Insights,
});

const articles = [
  { c: "Cover Story", t: "Why Alibaug is India's Hamptons — and where prices go from here", d: "Nov 18, 2026", r: "8 min", img: IMG.cityGoa },
  { c: "NRI Advisory", t: "The complete NRI guide to buying property in India — 2026 edition", d: "Nov 12, 2026", r: "14 min", img: IMG.propMumbai },
  { c: "Commercial", t: "Grade-A office absorption crosses 65 msf — the yield story matures", d: "Nov 05, 2026", r: "6 min", img: IMG.cityDelhi },
  { c: "Micro-Market", t: "Whitefield vs. Sarjapur: five-year appreciation, decoded", d: "Oct 28, 2026", r: "9 min", img: IMG.cityBangalore },
  { c: "Policy", t: "New RERA amendments — what buyers and developers need to know", d: "Oct 21, 2026", r: "7 min", img: IMG.propDelhi },
  { c: "Investment", t: "Fractional real estate in India — the SEBI SM REIT playbook", d: "Oct 14, 2026", r: "11 min", img: IMG.propGurgaon },
];

function Insights() {
  return (
    <>
      <PageHero
        eyebrow="The Journal · Research & Insight"
        title={<>Read the <span className="italic font-normal">room.</span></>}
        intro="Micro-market analyses, capital-markets briefings, policy explainers and long-form journalism from India's most rigorous real estate desk."
      />

      {/* Featured */}
      <section className="mx-auto max-w-[1400px] px-6 py-20">
        <article className="grid gap-12 lg:grid-cols-12 group cursor-pointer">
          <div className="lg:col-span-7 aspect-[4/3] overflow-hidden">
            <img src={articles[0].img} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
          <div className="lg:col-span-5 flex flex-col justify-center">
            <p className="eyebrow">{articles[0].c} · {articles[0].d}</p>
            <h2 className="mt-6 font-display text-4xl md:text-5xl leading-[1.05] group-hover:text-brass transition-colors">{articles[0].t}</h2>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              Land prices on Alibaug's Mandwa-Awas coastline have compounded at 22% CAGR
              since 2019. We dissect what's driving the appreciation — the Ro-Ro ferry,
              coastal-road connectivity, and the arrival of institutional developers.
            </p>
            <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.25em]">{articles[0].r} read →</p>
          </div>
        </article>
      </section>

      {/* Grid */}
      <section className="border-t border-border bg-linen">
        <div className="mx-auto max-w-[1400px] px-6 py-20">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
            {articles.slice(1).map((a) => (
              <article key={a.t} className="group cursor-pointer">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={a.img} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="pt-6">
                  <p className="eyebrow">{a.c} · {a.d}</p>
                  <h3 className="mt-3 font-display text-xl leading-tight group-hover:text-brass transition-colors">{a.t}</h3>
                  <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{a.r} read →</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Data band */}
      <section className="mx-auto max-w-[1400px] px-6 py-24">
        <p className="eyebrow mb-4">Live Market Data · Q4 2026</p>
        <h2 className="font-display text-4xl md:text-5xl max-w-2xl">The dashboard, <span className="italic font-normal">quarterly refreshed.</span></h2>
        <div className="mt-14 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-4">
          {[
            ["Mumbai · SoBo", "₹68,400/sq.ft", "+11.2%"],
            ["Gurugram · Golf Course Rd", "₹34,200/sq.ft", "+16.8%"],
            ["Bengaluru · Whitefield", "₹12,800/sq.ft", "+9.4%"],
            ["Hyderabad · Kokapet", "₹11,600/sq.ft", "+18.1%"],
            ["Pune · Kharadi", "₹9,800/sq.ft", "+7.2%"],
            ["Chennai · OMR", "₹8,400/sq.ft", "+6.9%"],
            ["Alibaug · Waterfront", "₹18,200/sq.yd", "+22.4%"],
            ["Goa · North", "₹14,600/sq.ft", "+13.8%"],
          ].map(([m, r, y]) => (
            <div key={m} className="bg-background p-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{m}</p>
              <p className="mt-4 font-display text-2xl">{r}</p>
              <p className="mt-2 text-xs text-brass">↑ {y} YoY</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
