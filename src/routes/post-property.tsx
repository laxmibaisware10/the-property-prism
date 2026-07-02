import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";

export const Route = createFileRoute("/post-property")({
  head: () => ({
    meta: [
      { title: "Post Your Property · Free · Vayuva" },
      { name: "description", content: "List your property free on Vayuva. Verified buyers, dedicated relationship manager, and a valuation within 48 hours." },
      { property: "og:title", content: "Post Property · Vayuva" },
      { property: "og:url", content: "/post-property" },
    ],
    links: [{ rel: "canonical", href: "/post-property" }],
  }),
  component: PostProp,
});

function PostProp() {
  return (
    <>
      <PageHero
        eyebrow="Post Property · Free"
        title={<>List with <span className="italic font-normal">Vayuva.</span></>}
        intro="Free listing, verified buyer network, and a dedicated relationship manager for every mandate above ₹5 Cr. Complete in under 5 minutes."
      />

      <section className="mx-auto grid max-w-[1400px] gap-16 px-6 py-20 lg:grid-cols-12">
        <form className="lg:col-span-8 space-y-12">
          <Section n="01" t="Property basics">
            <div className="grid gap-6 md:grid-cols-2">
              <Field label="Listing purpose">
                <select className="w-full bg-transparent py-3 outline-none"><option>Sell</option><option>Rent</option><option>Both</option></select>
              </Field>
              <Field label="Property type">
                <select className="w-full bg-transparent py-3 outline-none">
                  <option>Apartment / Flat</option><option>Villa</option><option>Bungalow</option>
                  <option>Plot / Land</option><option>Office</option><option>Retail</option>
                </select>
              </Field>
              <Field label="City"><input placeholder="Mumbai" className="w-full bg-transparent py-3 outline-none" /></Field>
              <Field label="Locality"><input placeholder="Worli Sea Face" className="w-full bg-transparent py-3 outline-none" /></Field>
            </div>
          </Section>

          <Section n="02" t="Configuration & area">
            <div className="grid gap-6 md:grid-cols-3">
              <Field label="Bedrooms"><input placeholder="3 BHK" className="w-full bg-transparent py-3 outline-none" /></Field>
              <Field label="Carpet area"><input placeholder="2,400 sq.ft." className="w-full bg-transparent py-3 outline-none" /></Field>
              <Field label="Floor"><input placeholder="18 / 42" className="w-full bg-transparent py-3 outline-none" /></Field>
              <Field label="Facing"><input placeholder="Sea-facing" className="w-full bg-transparent py-3 outline-none" /></Field>
              <Field label="Age"><input placeholder="Under 5 years" className="w-full bg-transparent py-3 outline-none" /></Field>
              <Field label="Furnishing"><input placeholder="Semi-furnished" className="w-full bg-transparent py-3 outline-none" /></Field>
            </div>
          </Section>

          <Section n="03" t="Pricing & compliance">
            <div className="grid gap-6 md:grid-cols-2">
              <Field label="Expected price (₹)"><input placeholder="₹12.5 Cr" className="w-full bg-transparent py-3 outline-none" /></Field>
              <Field label="Negotiable">
                <select className="w-full bg-transparent py-3 outline-none"><option>Slightly negotiable</option><option>Fixed</option><option>On request</option></select>
              </Field>
              <Field label="RERA number"><input placeholder="P51900012345" className="w-full bg-transparent py-3 outline-none" /></Field>
              <Field label="OC / Title status"><input placeholder="OC received · Freehold" className="w-full bg-transparent py-3 outline-none" /></Field>
            </div>
          </Section>

          <Section n="04" t="Photos & tour">
            <div className="grid gap-4 md:grid-cols-4">
              {[1,2,3,4].map(i => (
                <div key={i} className="aspect-[4/5] border-2 border-dashed border-border grid place-items-center text-xs text-muted-foreground uppercase tracking-[0.2em]">
                  Photo {i}
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs text-muted-foreground">Upload up to 24 photos, floor plans, and a walkthrough video. We'll add drone cinematography for signature listings.</p>
          </Section>

          <Section n="05" t="Your contact">
            <div className="grid gap-6 md:grid-cols-2">
              <Field label="Full name"><input className="w-full bg-transparent py-3 outline-none" /></Field>
              <Field label="Phone"><input placeholder="+91 …" className="w-full bg-transparent py-3 outline-none" /></Field>
              <Field label="Email"><input type="email" className="w-full bg-transparent py-3 outline-none" /></Field>
              <Field label="You are a">
                <select className="w-full bg-transparent py-3 outline-none"><option>Owner</option><option>Broker / CP</option><option>Developer</option></select>
              </Field>
            </div>
          </Section>

          <button type="button" className="w-full bg-ink py-5 font-mono text-[11px] uppercase tracking-[0.25em] text-marble hover:bg-brass transition-colors">
            Publish listing (free)
          </button>
        </form>

        <aside className="lg:col-span-4 space-y-8">
          <div className="bg-linen p-8">
            <p className="eyebrow mb-4">Why Vayuva</p>
            <ul className="space-y-4 text-sm">
              {[
                "Zero listing fee, ever",
                "Verified buyer network of 240k+",
                "48-hr market valuation",
                "Dedicated RM for ₹5 Cr+ mandates",
                "Drone & Matterport for signature listings",
                "Legal & title support included",
              ].map(x => <li key={x} className="flex gap-3"><span className="text-brass">✓</span>{x}</li>)}
            </ul>
          </div>
          <div className="bg-ink text-marble p-8">
            <p className="eyebrow" style={{ color: "var(--brass-soft)" }}>Prefer a call?</p>
            <h4 className="mt-4 font-display text-2xl">Talk to our listing desk</h4>
            <p className="mt-3 text-sm text-marble/70">1800-123-456 · 7 days · 9am-9pm IST</p>
          </div>
        </aside>
      </section>
    </>
  );
}

function Section({ n, t, children }: { n: string; t: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="mb-6 flex items-baseline gap-4 border-b border-border pb-3">
        <span className="font-display text-2xl italic text-brass">{n}</span>
        <h2 className="font-display text-2xl">{t}</h2>
      </div>
      {children}
    </div>
  );
}
function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block border-b border-border">
      <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-muted-foreground">{label}</span>
      {children}
    </label>
  );
}
