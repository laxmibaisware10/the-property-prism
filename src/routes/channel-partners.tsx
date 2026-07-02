import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";

export const Route = createFileRoute("/channel-partners")({
  head: () => ({
    meta: [
      { title: "Channel Partner Program · Vayuva" },
      { name: "description", content: "Join India's most exclusive real estate brokerage network. Access off-market inventory and higher commissions." },
      { property: "og:title", content: "Channel Partners · Vayuva" },
      { property: "og:url", content: "/channel-partners" },
    ],
    links: [{ rel: "canonical", href: "/channel-partners" }],
  }),
  component: Channel,
});

const tiers = [
  { name: "Associate", commission: "1.5% – 2.0%", perks: ["Access to public inventory", "Basic training", "Monthly settlement", "Marketing collateral"], badge: "Entry" },
  { name: "Platinum", commission: "2.0% – 2.75%", perks: ["Off-market previews", "Priority leads", "Bi-weekly settlement", "Co-branded marketing", "Site-visit concierge"], badge: "By invitation", featured: true },
  { name: "Elite", commission: "2.75% – 3.5%", perks: ["Private client register", "Exclusive project mandates", "Weekly settlement", "Dedicated RM", "Annual retreat", "Elite closing bonuses"], badge: "Curated cohort" },
];

function Channel() {
  return (
    <>
      <PageHero
        eyebrow="Channel Partner Program"
        title={<>The brokerage <span className="italic font-normal">circle.</span></>}
        intro="1,200+ vetted partners. ₹300 Cr in shared inventory every quarter. We build the tools, mandates, and closing infrastructure — you close the deals."
      />

      <section className="mx-auto max-w-[1400px] px-6 py-24">
        <div className="grid gap-6 md:grid-cols-3">
          {tiers.map(t => (
            <div key={t.name} className={`p-10 ${t.featured ? "bg-ink text-marble" : "bg-linen"} relative`}>
              {t.featured && <span className="absolute -top-3 left-10 bg-brass px-3 py-1 font-mono text-[9px] uppercase tracking-[0.25em] text-marble">Most joined</span>}
              <p className={`eyebrow ${t.featured ? "" : ""}`} style={t.featured ? { color: "var(--brass-soft)" } : {}}>{t.badge}</p>
              <h3 className="mt-4 font-display text-4xl">{t.name}</h3>
              <p className="mt-6 font-display text-3xl">{t.commission}</p>
              <p className={`mt-1 font-mono text-[10px] uppercase tracking-[0.25em] ${t.featured ? "text-marble/60" : "text-muted-foreground"}`}>Commission range</p>
              <ul className={`mt-10 space-y-4 border-t pt-8 ${t.featured ? "border-marble/15" : "border-border"}`}>
                {t.perks.map(p => (
                  <li key={p} className="flex gap-3 text-sm">
                    <span className="text-brass">✓</span>{p}
                  </li>
                ))}
              </ul>
              <button className={`mt-10 w-full py-4 font-mono text-[11px] uppercase tracking-[0.25em] ${t.featured ? "bg-brass hover:brightness-110" : "bg-ink text-marble hover:bg-brass"} transition-all`}>
                Apply
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-linen">
        <div className="mx-auto max-w-[1400px] px-6 py-20">
          <div className="grid gap-8 md:grid-cols-4">
            {[
              ["1,200+", "Active Partners"],
              ["₹1.2 Cr", "Avg. Annual Earnings"],
              ["3.2×", "Closing Uplift vs. Solo"],
              ["48 hrs", "Payout Turnaround"],
            ].map(([n, l]) => (
              <div key={l} className="border-t border-foreground/20 pt-6">
                <p className="font-display text-4xl">{n}</p>
                <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
