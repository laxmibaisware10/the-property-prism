import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { IMG } from "@/lib/site-data";
import { Globe, FileCheck, Coins, HeartHandshake } from "lucide-react";

export const Route = createFileRoute("/nri")({
  head: () => ({
    meta: [
      { title: "NRI Real Estate Services · Vayuva" },
      { name: "description", content: "FEMA-compliant real estate advisory for NRIs. Buy, manage, and monetize property in India from anywhere in the world." },
      { property: "og:title", content: "NRI Services · Vayuva" },
      { property: "og:url", content: "/nri" },
    ],
    links: [{ rel: "canonical", href: "/nri" }],
  }),
  component: NRI,
});

function NRI() {
  return (
    <>
      <PageHero
        eyebrow="NRI Bespoke Desk · Since 2016"
        title={<>Property in India, <span className="italic font-normal">from anywhere.</span></>}
        intro="For the global Indian in Dubai, London, Singapore, New York or Toronto — FEMA-compliant advisory, POA handling, remote closings and end-to-end property management."
      />

      <section className="mx-auto max-w-[1400px] px-6 py-24">
        <div className="grid gap-px bg-border md:grid-cols-2 lg:grid-cols-4">
          {[
            { i: FileCheck, t: "FEMA Compliance", d: "Repatriation, source-of-funds documentation, and RBI/AD Bank filings, handled end-to-end." },
            { i: Globe, t: "Remote Closings", d: "POA drafting, apostille, e-registration where permitted, and video-witnessed signings." },
            { i: Coins, t: "Tax & Remittance", d: "TDS optimization u/s 195, Form 15CA/CB filings, and DTAA planning with Big-4 partners." },
            { i: HeartHandshake, t: "Property Management", d: "Tenant sourcing, rent remittance to your NRE/NRO account, and periodic asset audits." },
          ].map(({ i: Icon, t, d }) => (
            <div key={t} className="bg-background p-10">
              <Icon className="size-6 text-brass" strokeWidth={1.2} />
              <h3 className="mt-8 font-display text-xl">{t}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-linen">
        <div className="mx-auto grid max-w-[1400px] gap-16 px-6 py-24 lg:grid-cols-2 lg:items-center">
          <div className="aspect-[4/5] overflow-hidden">
            <img src={IMG.propMumbai} alt="" loading="lazy" className="h-full w-full object-cover" />
          </div>
          <div>
            <p className="eyebrow mb-4">The NRI Journey · 5 Steps</p>
            <h2 className="font-display text-4xl md:text-5xl">From shortlist to <span className="italic font-normal">closing</span> — remotely.</h2>
            <ol className="mt-12 space-y-8">
              {[
                ["Discovery & Shortlisting", "Video briefings, curated inventory, and micro-market briefs delivered to your timezone."],
                ["Virtual & Physical Visits", "Matterport 3D walkthroughs, drone footage, and family-visit coordination."],
                ["Documentation & Due Diligence", "Title verification, encumbrance certificates, and RERA compliance audits."],
                ["POA & Remote Signing", "Consular-attested POA, digital escrow, and remote registration where possible."],
                ["Post-Purchase Management", "Rental, maintenance, tax filing and periodic asset reporting."],
              ].map(([t, d], i) => (
                <li key={t} className="flex gap-6 border-b border-border pb-6 last:border-0">
                  <span className="font-display text-3xl text-brass italic">0{i+1}</span>
                  <div><h4 className="font-display text-xl">{t}</h4><p className="mt-2 text-sm text-muted-foreground">{d}</p></div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-24 text-center">
        <h2 className="mx-auto max-w-3xl font-display text-4xl md:text-5xl">Book a private call with the <span className="italic font-normal">NRI desk.</span></h2>
        <p className="mx-auto mt-6 max-w-md text-sm text-muted-foreground">
          Complimentary 45-minute consultation. Available across all major timezones.
        </p>
        <button className="mt-10 bg-ink px-10 py-5 font-mono text-[11px] uppercase tracking-[0.25em] text-marble hover:bg-brass transition-colors">
          Schedule consultation
        </button>
      </section>
    </>
  );
}
