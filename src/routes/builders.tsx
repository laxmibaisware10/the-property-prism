import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { developers } from "@/lib/site-data";

export const Route = createFileRoute("/builders")({
  head: () => ({
    meta: [
      { title: "For Builders & Developers · Vayuva" },
      { name: "description", content: "Sales, marketing, and channel-partner mobilization for Grade-A residential and commercial developers in India." },
      { property: "og:title", content: "For Builders · Vayuva" },
      { property: "og:url", content: "/builders" },
    ],
    links: [{ rel: "canonical", href: "/builders" }],
  }),
  component: Builders,
});

function Builders() {
  return (
    <>
      <PageHero
        eyebrow="For Developers · B2B"
        title={<>Sell out, <span className="italic font-normal">before you launch.</span></>}
        intro="A full-stack sales, marketing and channel-partner platform for Grade-A residential and commercial developers. We've closed ₹8,400 Cr of inventory across 62 projects."
      />

      <section className="mx-auto max-w-[1400px] px-6 py-24">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <p className="eyebrow mb-4">Services</p>
            <h2 className="font-display text-4xl md:text-5xl">Everything, from <span className="italic font-normal">pre-launch to registry.</span></h2>
            <ul className="mt-12 space-y-6 border-t border-border pt-8">
              {[
                ["Sales Strategy & Mandate Structuring", "Pricing, phasing, escalation curves, and inventory release strategy."],
                ["Channel Partner Mobilization", "1,200+ vetted partners activated per launch, across Tier-1 and Tier-2 markets."],
                ["Digital & Performance Marketing", "Programmatic media, CRM automation and micro-market SEO."],
                ["Experience Centre & Site Ops", "Site design, hospitality training, and closing-desk staffing."],
                ["NRI Roadshows", "Dubai, London, Singapore, US-East, US-West, Toronto."],
                ["Reporting & Analytics", "Weekly funnel, competitive intel, and inventory-status dashboards."],
              ].map(([t, d]) => (
                <li key={t} className="flex gap-6 border-b border-border pb-6 last:border-0">
                  <span className="grid size-8 shrink-0 place-items-center bg-brass text-marble font-mono text-xs">✓</span>
                  <div><h4 className="font-display text-xl">{t}</h4><p className="mt-2 text-sm text-muted-foreground">{d}</p></div>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-8">
            <div className="bg-ink text-marble p-10">
              <p className="eyebrow" style={{ color: "var(--brass-soft)" }}>By The Numbers · FY25</p>
              <div className="mt-8 grid grid-cols-2 gap-8">
                <div><p className="font-display text-4xl">62</p><p className="mt-2 font-mono text-[10px] uppercase tracking-[0.25em] text-marble/60">Projects</p></div>
                <div><p className="font-display text-4xl">₹8,400 Cr</p><p className="mt-2 font-mono text-[10px] uppercase tracking-[0.25em] text-marble/60">GMV Closed</p></div>
                <div><p className="font-display text-4xl">18,240</p><p className="mt-2 font-mono text-[10px] uppercase tracking-[0.25em] text-marble/60">Units Sold</p></div>
                <div><p className="font-display text-4xl">92 days</p><p className="mt-2 font-mono text-[10px] uppercase tracking-[0.25em] text-marble/60">Avg. Sell-Through</p></div>
              </div>
            </div>
            <div className="bg-linen p-10">
              <p className="eyebrow mb-6">Trusted by</p>
              <div className="flex flex-wrap gap-x-6 gap-y-4">
                {developers.map(d => <span key={d} className="font-display text-lg italic text-muted-foreground">{d}</span>)}
              </div>
            </div>
            <div className="border border-foreground/20 p-10">
              <h3 className="font-display text-2xl">Request a mandate brief</h3>
              <p className="mt-3 text-sm text-muted-foreground">Confidential 45-minute strategy call with our development advisory team.</p>
              <form className="mt-6 space-y-4">
                <input placeholder="Company" className="w-full border-b border-foreground/20 bg-transparent py-3 text-sm outline-none focus:border-brass" />
                <input placeholder="Project location & size" className="w-full border-b border-foreground/20 bg-transparent py-3 text-sm outline-none focus:border-brass" />
                <input placeholder="Business email" className="w-full border-b border-foreground/20 bg-transparent py-3 text-sm outline-none focus:border-brass" />
                <button className="mt-4 w-full bg-ink py-4 font-mono text-[11px] uppercase tracking-[0.25em] text-marble hover:bg-brass transition-colors">
                  Request brief
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
