import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { Building2, Store, Warehouse, Users } from "lucide-react";
import { IMG } from "@/lib/site-data";

export const Route = createFileRoute("/commercial")({
  head: () => ({
    meta: [
      { title: "Commercial Real Estate in India · Vayuva" },
      { name: "description", content: "Grade-A office space, retail high streets, warehousing and coworking across India. Institutional-grade leasing and investment advisory." },
      { property: "og:title", content: "Commercial Real Estate · Vayuva" },
      { property: "og:url", content: "/commercial" },
    ],
    links: [{ rel: "canonical", href: "/commercial" }],
  }),
  component: Commercial,
});

const segments = [
  { i: Building2, t: "Grade-A Office Space", d: "Pre-leased and greenfield offices across BKC, Cyber City, ORR and Hitec City.", stat: "65 msf" },
  { i: Store, t: "Retail & High Street", d: "Anchor spaces, flagships and F&B locations in prime consumption corridors.", stat: "1,240 units" },
  { i: Warehouse, t: "Warehousing & Logistics", d: "Grade-A warehousing near NH corridors, Tier-1 city peripheries and port hinterlands.", stat: "18 msf" },
  { i: Users, t: "Coworking & Managed", d: "Enterprise-grade managed workspaces for 20 to 2,000-seat mandates.", stat: "42 cities" },
];

function Commercial() {
  return (
    <>
      <PageHero
        eyebrow="Commercial · B2B"
        title={<>Institutional real estate, <span className="italic font-normal">institutionally advised.</span></>}
        intro="From ₹500 Cr Grade-A office transactions to 1 lakh sq.ft. warehousing mandates. Our commercial desk works with REITs, developers, occupiers and family offices."
      />

      <section className="mx-auto max-w-[1400px] px-6 py-24">
        <div className="grid gap-px bg-border md:grid-cols-2 lg:grid-cols-4">
          {segments.map(({ i: Icon, t, d, stat }) => (
            <div key={t} className="bg-background p-10">
              <Icon className="size-6 text-brass" strokeWidth={1.2} />
              <p className="mt-6 font-display text-3xl">{stat}</p>
              <h3 className="mt-3 font-display text-xl">{t}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-linen">
        <div className="mx-auto grid max-w-[1400px] gap-16 px-6 py-24 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow mb-4">Investment Advisory</p>
            <h2 className="font-display text-4xl md:text-5xl">Yield-grade assets, <span className="italic font-normal">underwritten.</span></h2>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
              Pre-leased Grade-A assets with 7.5-9.5% cap rates, backed by AAA tenants
              and 5+5 lease structures. Every deal underwritten by our capital-markets team.
            </p>
            <ul className="mt-10 space-y-6 border-t border-border pt-8">
              {[
                ["Cap Rate Range", "7.5% – 9.5%"],
                ["Typical Ticket Size", "₹50 Cr – ₹500 Cr"],
                ["WALE", "6.2 years avg."],
                ["Occupancy", "97.4% portfolio"],
              ].map(([l, v]) => (
                <li key={l} className="flex items-baseline justify-between border-b border-border pb-4">
                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{l}</span>
                  <span className="font-display text-xl">{v}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="aspect-[4/5] overflow-hidden">
            <img src={IMG.cityDelhi} alt="Grade-A commercial" loading="lazy" className="h-full w-full object-cover" />
          </div>
        </div>
      </section>
    </>
  );
}
