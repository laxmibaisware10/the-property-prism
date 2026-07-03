import { createFileRoute, Link } from "@tanstack/react-router";
import { visitJourney, properties, BRAND } from "@/lib/site-data";
import { PlayCircle, MessageCircle, MapPin, Sparkles } from "lucide-react";

export const Route = createFileRoute("/tours")({
  head: () => ({
    meta: [
      { title: "Property Tours & Site Visits · Aangan Nagpur" },
      { name: "description", content: "3D walkthroughs, drone tours, and chauffeur-driven site visits across Nagpur properties." },
    ],
  }),
  component: Tours,
});

function Tours() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-ink text-marble py-24 md:py-32 overflow-hidden">
        <div className="mx-auto max-w-[1400px] px-6 relative">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-brass mb-6">Tours & Site Visits</p>
          <h1 className="font-display text-5xl md:text-7xl leading-[0.95] max-w-3xl">
            See it before <span className="italic font-normal text-brass-soft">you sign it.</span>
          </h1>
          <p className="mt-8 max-w-xl text-marble/70">
            Every mandate includes a 4K drone flyover, immersive 3D walkthrough,
            and an in-person chauffeured site visit with our legal team.
          </p>
        </div>
      </section>

      {/* Journey */}
      <section className="mx-auto max-w-[1400px] px-6 py-24">
        <p className="eyebrow mb-4">How a site visit works</p>
        <h2 className="font-display text-4xl md:text-5xl max-w-2xl">
          A curated <span className="italic font-normal">day-out.</span>
        </h2>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {visitJourney.map((v) => (
            <div key={v.step}>
              <div className="relative aspect-[4/5] overflow-hidden">
                <img src={v.image} alt={v.title} loading="lazy" className="h-full w-full object-cover" />
                <div className="absolute top-4 left-4 bg-brass text-ink px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.25em]">
                  Step {v.step}
                </div>
              </div>
              <h3 className="mt-6 font-display text-2xl">{v.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{v.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured virtual tours */}
      <section className="border-y border-border bg-linen py-24">
        <div className="mx-auto max-w-[1400px] px-6">
          <p className="eyebrow mb-4">Virtual walkthroughs</p>
          <h2 className="font-display text-4xl md:text-5xl">
            3D tours of <span className="italic font-normal">this month's launches.</span>
          </h2>

          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {properties.slice(0, 6).map((p) => (
              <Link key={p.id} to="/property/$id" params={{ id: p.id }} className="group relative block aspect-[4/3] overflow-hidden bg-ink">
                <img src={p.image} alt={p.name} loading="lazy" className="h-full w-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-ink/40" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <PlayCircle className="size-16 text-marble transition-transform group-hover:scale-110" strokeWidth={0.8} />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-ink to-transparent">
                  <p className="font-display text-lg text-marble">{p.name}</p>
                  <p className="flex items-center gap-1.5 text-xs text-marble/70 mt-1">
                    <MapPin className="size-3" /> {p.locality}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Perks */}
      <section className="mx-auto max-w-[1400px] px-6 py-24">
        <div className="grid gap-px bg-border md:grid-cols-2 lg:grid-cols-4">
          {[
            "Chauffeur pickup & drop",
            "On-site legal counsel",
            "Live drone flyover",
            "Zero obligation",
          ].map((f) => (
            <div key={f} className="bg-background p-8 flex items-center gap-4">
              <Sparkles className="size-5 text-brass" />
              <span className="font-display text-lg">{f}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink text-marble py-24 text-center">
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="font-display text-4xl md:text-5xl">
            Ready to <span className="italic font-normal text-brass-soft">visit?</span>
          </h2>
          <p className="mt-6 text-sm text-marble/70">
            Pick 2–3 properties from our register, we'll organise the rest.
          </p>
          <a href={`https://wa.me/${BRAND.whatsapp.replace(/\D/g, "")}`}
            className="mt-10 inline-flex items-center gap-3 bg-brass px-8 py-4 font-mono text-[11px] uppercase tracking-[0.25em] text-ink hover:bg-marble transition-colors">
            <MessageCircle className="size-4" /> Book a site visit
          </a>
        </div>
      </section>
    </>
  );
}
