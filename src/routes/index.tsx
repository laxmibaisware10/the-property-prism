import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import heroImg from "@/assets/hero-estate.jpg";
import { properties, cities, collections, developers, IMG } from "@/lib/site-data";
import { PropertyCard } from "@/components/property-card";
import {
  Search, ArrowUpRight, Shield, Award, Building2, TrendingUp,
  Globe, Calculator, Sparkles, PlayCircle,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vayuva · India's Premium Real Estate Institution" },
      { name: "description", content: "Buy, sell, rent luxury homes and commercial spaces across India. RERA-verified listings in Mumbai, Delhi NCR, Bengaluru, Hyderabad, Pune and Goa." },
      { property: "og:title", content: "Vayuva · India's Premium Real Estate Institution" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const searchTabs = ["Buy", "Rent", "Commercial", "New Projects", "Plots", "PG"] as const;

function Home() {
  const [tab, setTab] = useState<(typeof searchTabs)[number]>("Buy");
  const featured = properties.slice(0, 3);

  return (
    <>
      {/* ═══════════════ HERO ═══════════════ */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-6 pt-16 pb-24 lg:grid-cols-12 lg:gap-16 lg:pt-24 lg:pb-32">
          <div className="lg:col-span-7 animate-reveal">
            <p className="eyebrow mb-6">The Signature Register · Est. 2014</p>
            <h1 className="font-display text-5xl leading-[0.95] text-balance md:text-7xl lg:text-[88px]">
              Living, as a <span className="italic font-normal">fine art.</span>
            </h1>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground">
              A curated institution for India's most defining addresses — from sea-facing
              penthouses on Malabar Hill to Lutyens' bungalows and Alibaug estates. Every
              listing is RERA-verified and privately vetted.
            </p>

            {/* Search Console */}
            <div className="mt-12 bg-background shadow-editorial ring-1 ring-black/5">
              <div className="flex overflow-x-auto border-b border-border">
                {searchTabs.map((t) => (
                  <button
                    key={t}
                    onClick={() => setTab(t)}
                    className={`shrink-0 px-6 py-4 font-mono text-[10px] uppercase tracking-[0.25em] transition-colors ${
                      tab === t
                        ? "text-brass border-b-2 border-brass -mb-px"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
              <div className="grid gap-4 p-6 md:grid-cols-4">
                <Field label="City">
                  <select className="w-full bg-transparent text-sm outline-none">
                    <option>Mumbai</option><option>Delhi NCR</option>
                    <option>Bengaluru</option><option>Hyderabad</option>
                    <option>Pune</option><option>Goa</option>
                  </select>
                </Field>
                <Field label="Locality">
                  <input placeholder="Worli, Bandra…" className="w-full bg-transparent text-sm outline-none" />
                </Field>
                <Field label="Budget">
                  <select className="w-full bg-transparent text-sm outline-none">
                    <option>₹1 Cr – ₹5 Cr</option>
                    <option>₹5 Cr – ₹20 Cr</option>
                    <option>₹20 Cr+</option>
                  </select>
                </Field>
                <Field label="BHK">
                  <select className="w-full bg-transparent text-sm outline-none">
                    <option>2 BHK</option><option>3 BHK</option>
                    <option>4 BHK</option><option>5+ BHK</option>
                  </select>
                </Field>
              </div>
              <div className="flex flex-col gap-2 border-t border-border p-3 md:flex-row md:items-center md:justify-between">
                <div className="flex flex-wrap gap-2 px-3 py-1 text-[11px] text-muted-foreground">
                  <span className="cursor-pointer hover:text-brass">Ready-to-move</span>
                  <span>·</span>
                  <span className="cursor-pointer hover:text-brass">Sea-facing</span>
                  <span>·</span>
                  <span className="cursor-pointer hover:text-brass">Vastu</span>
                  <span>·</span>
                  <span className="cursor-pointer hover:text-brass">Gated</span>
                </div>
                <Link
                  to="/buy"
                  className="flex items-center justify-center gap-2 bg-ink px-8 py-4 font-mono text-[11px] uppercase tracking-[0.25em] text-marble transition-colors hover:bg-brass"
                >
                  <Search className="size-4" /> Search 14,320 listings
                </Link>
              </div>
            </div>
          </div>

          <div className="relative lg:col-span-5 animate-reveal [animation-delay:150ms]">
            <div className="relative overflow-hidden">
              <img
                src={heroImg}
                alt="Luxury Indian villa at sunset"
                width={1280}
                height={1600}
                className="aspect-[4/5] w-full object-cover animate-ken"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent p-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-marble/70">Currently Featured</p>
                <p className="mt-2 font-display text-2xl text-marble">The Thalassa Estate</p>
                <p className="text-xs text-marble/70">Awas Beach, Alibaug · ₹32.75 Cr</p>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 hidden bg-brass p-5 lg:block">
              <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-marble/80">Verified Since</p>
              <p className="font-display text-4xl text-marble">2014</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ TRUST STRIP ═══════════════ */}
      <section className="bg-ink text-marble">
        <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-8 px-6 py-14 md:grid-cols-4">
          {[
            { n: "14,320+", l: "RERA-Verified Listings" },
            { n: "42 Cities", l: "Pan-India Coverage" },
            { n: "₹8,400 Cr+", l: "Transacted GMV FY25" },
            { n: "98.2%", l: "Successful Mandates" },
          ].map((s, i) => (
            <div key={s.n} className={i > 0 ? "border-l border-marble/15 pl-8" : ""}>
              <p className="font-display text-3xl md:text-4xl">{s.n}</p>
              <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.25em] text-marble/60">
                {s.l}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════ SIGNATURE COLLECTION ═══════════════ */}
      <section className="mx-auto max-w-[1400px] px-6 py-28">
        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow mb-4">Signature Collection · The Register</p>
            <h2 className="font-display text-4xl md:text-5xl max-w-2xl">
              Properties of <span className="italic font-normal">distinction.</span>
            </h2>
          </div>
          <Link to="/buy" className="group flex items-center gap-2 border-b border-foreground pb-1 text-sm font-mono uppercase tracking-[0.2em] hover:border-brass hover:text-brass transition-colors">
            View all 512 signature residences <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) => (<PropertyCard key={p.id} p={p} />))}
        </div>
      </section>

      {/* ═══════════════ CURATED COLLECTIONS ═══════════════ */}
      <section className="border-y border-border bg-linen">
        <div className="mx-auto max-w-[1400px] px-6 py-24">
          <div className="mb-14 max-w-2xl">
            <p className="eyebrow mb-4">Curated Collections</p>
            <h2 className="font-display text-4xl md:text-5xl">
              Handpicked by our <span className="italic font-normal">research desk.</span>
            </h2>
          </div>
          <div className="grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
            {collections.map((c) => (
              <Link
                key={c.title}
                to="/buy"
                className="group relative overflow-hidden bg-background p-10 transition-colors hover:bg-marble"
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-brass">
                  {String(c.count).padStart(3, "0")} listings
                </p>
                <h3 className="mt-6 font-display text-3xl leading-tight">{c.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{c.note}</p>
                <ArrowUpRight className="absolute right-8 top-8 size-4 text-muted-foreground transition-all group-hover:text-brass group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ EXPLORE CITIES ═══════════════ */}
      <section className="mx-auto max-w-[1400px] px-6 py-28">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow mb-4">Explore by City</p>
            <h2 className="font-display text-4xl md:text-5xl max-w-xl">
              India's most sought-after <span className="italic font-normal">addresses.</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground">
            Deep local expertise across six flagship markets, backed by micro-market
            data and on-ground relationship managers.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-6">
          {cities.map((c) => (
            <Link key={c.name} to="/buy" className="group block">
              <div className="relative aspect-[4/5] overflow-hidden">
                <img src={c.image} alt={c.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="font-display text-2xl text-marble">{c.name}</p>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-marble/70">
                    {c.listings} listings
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ═══════════════ MARKET INSIGHTS + EMI ═══════════════ */}
      <section className="bg-linen">
        <div className="mx-auto grid max-w-[1400px] gap-16 px-6 py-28 lg:grid-cols-2">
          <div>
            <p className="eyebrow mb-4">Market Intelligence · Q4 2026</p>
            <h2 className="font-display text-4xl md:text-5xl max-w-xl">
              Data-driven decisions for <span className="italic font-normal">high-stakes capital.</span>
            </h2>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
              Institutional-grade research across the top 12 micro-markets. Track
              capital appreciation, rental yields, absorption cycles and upcoming
              infrastructure catalysts.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-4">
              {[
                { l: "Capital Appreciation", n: "+14.2%", s: "YoY · SoBo Corridor" },
                { l: "Rental Yield (Luxury)", n: "3.8%", s: "FY26 · Weighted Avg" },
                { l: "Ready Inventory", n: "18 mo", s: "Absorption Time" },
                { l: "New Launches", n: "88 proj", s: "Pipeline · 2026" },
              ].map((m) => (
                <div key={m.l} className="bg-background p-6 ring-1 ring-black/5">
                  <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{m.l}</p>
                  <p className="mt-3 font-display text-3xl">{m.n}</p>
                  <p className="mt-2 text-[11px] text-muted-foreground">{m.s}</p>
                </div>
              ))}
            </div>

            <Link to="/insights" className="mt-10 inline-flex items-center gap-2 border-b border-foreground pb-1 text-xs font-mono uppercase tracking-[0.25em] hover:border-brass hover:text-brass transition-colors">
              Read full market report <ArrowUpRight className="size-4" />
            </Link>
          </div>

          {/* EMI calculator */}
          <div className="bg-background p-10 ring-1 ring-black/5 shadow-editorial">
            <div className="mb-8 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Calculator className="size-5 text-brass" />
                <h3 className="font-mono text-xs uppercase tracking-[0.25em]">EMI & Affordability</h3>
              </div>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-brass">Live · SBI Rates</span>
            </div>
            <div className="space-y-8">
              <Slider label="Loan Amount" value="₹5.00 Cr" percent={65} />
              <Slider label="Interest Rate" value="8.75% p.a." percent={35} />
              <Slider label="Tenure" value="20 years" percent={70} />
            </div>
            <div className="mt-10 border-t border-border pt-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Estimated Monthly EMI</p>
              <p className="mt-2 font-display text-5xl">₹4,42,440</p>
              <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                <div><p className="font-display text-lg">₹5.62 Cr</p><p className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground">Total Interest</p></div>
                <div><p className="font-display text-lg">₹10.62 Cr</p><p className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground">Total Payment</p></div>
                <div><p className="font-display text-lg">240</p><p className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground">Instalments</p></div>
              </div>
              <Link to="/home-loans" className="mt-8 block w-full bg-ink py-4 text-center font-mono text-[11px] uppercase tracking-[0.25em] text-marble hover:bg-brass transition-colors">
                Get pre-approved →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ WHY VAYUVA ═══════════════ */}
      <section className="mx-auto max-w-[1400px] px-6 py-28">
        <div className="mb-14 max-w-2xl">
          <p className="eyebrow mb-4">The Vayuva Difference</p>
          <h2 className="font-display text-4xl md:text-5xl">
            Institutional rigour, <span className="italic font-normal">personal service.</span>
          </h2>
        </div>
        <div className="grid gap-px bg-border md:grid-cols-2 lg:grid-cols-4">
          {[
            { i: Shield, t: "RERA Verified", d: "Every listing carries the RERA number, developer credentials and title status." },
            { i: Award, t: "Awarded Excellence", d: "FICCI Real Estate Awards 2024 · Luxury Consultancy of the Year." },
            { i: Globe, t: "NRI Bespoke Desk", d: "FEMA-compliant transactions across 12 countries with white-glove closing support." },
            { i: TrendingUp, t: "Investment Advisory", d: "Data-led portfolio construction for HNI and family-office capital." },
          ].map(({ i: Icon, t, d }) => (
            <div key={t} className="bg-background p-10">
              <Icon className="size-6 text-brass" strokeWidth={1.2} />
              <h3 className="mt-8 font-display text-xl">{t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════ DEVELOPERS ROW ═══════════════ */}
      <section className="border-y border-border bg-linen">
        <div className="mx-auto max-w-[1400px] px-6 py-16">
          <p className="eyebrow mb-8 text-center">Trusted by India's Grade-A Developers</p>
          <div className="flex flex-wrap items-center justify-center gap-x-14 gap-y-6">
            {developers.map((d) => (
              <span key={d} className="font-display text-xl italic text-muted-foreground/70 hover:text-foreground transition-colors cursor-pointer">
                {d}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ NRI BAND ═══════════════ */}
      <section className="relative mx-auto max-w-[1400px] px-6 py-28">
        <div className="relative overflow-hidden bg-ink text-marble">
          <div className="absolute right-0 top-0 h-full w-1/2 opacity-25">
            <img src={IMG.propMumbai} alt="" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/60 to-transparent" />
          </div>
          <div className="relative grid gap-12 p-12 md:p-20 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="eyebrow mb-6" style={{ color: "var(--brass-soft)" }}>NRI Desk · 12 Countries</p>
              <h2 className="font-display text-4xl md:text-5xl">
                For the <span className="italic font-normal">global Indian.</span>
              </h2>
              <p className="mt-6 max-w-lg text-sm leading-relaxed text-marble/70">
                Bespoke advisory for NRIs in the US, UK, UAE, Singapore, Canada
                and beyond. FEMA-compliant transactions, POA handling, tax
                structuring, remittance and end-to-end property management.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link to="/nri" className="bg-marble px-8 py-4 font-mono text-[11px] uppercase tracking-[0.25em] text-ink hover:bg-brass hover:text-marble transition-colors">
                  Speak to an advisor
                </Link>
                <Link to="/nri" className="border border-marble/20 px-8 py-4 font-mono text-[11px] uppercase tracking-[0.25em] hover:bg-marble/10 transition-colors">
                  View compliance guide
                </Link>
              </div>
            </div>
            <div className="lg:col-span-5 grid grid-cols-2 gap-6 self-center">
              {[
                ["₹1,240 Cr", "NRI Transactions FY25"],
                ["12", "Countries Served"],
                ["48 hrs", "Avg. Advisory Turnaround"],
                ["100%", "FEMA Compliance"],
              ].map(([n, l]) => (
                <div key={l} className="border border-marble/10 p-6">
                  <p className="font-display text-2xl">{n}</p>
                  <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-marble/60">{l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ VIRTUAL TOUR ═══════════════ */}
      <section className="mx-auto max-w-[1400px] px-6 pb-28">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="eyebrow mb-4">Immersive Tours</p>
            <h2 className="font-display text-4xl md:text-5xl">
              Walk through, <span className="italic font-normal">before you fly in.</span>
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground max-w-md">
              Every signature listing includes a matterport 3D walkthrough, drone
              cinematography and a private video briefing with the relationship manager.
            </p>
            <ul className="mt-8 space-y-4 text-sm">
              {["3D Matterport walkthroughs", "4K aerial cinematography", "Live video viewings", "AR floor-plan overlays"].map(x => (
                <li key={x} className="flex items-center gap-3">
                  <Sparkles className="size-4 text-brass" />{x}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative lg:col-span-7 aspect-[16/10] overflow-hidden bg-linen group cursor-pointer">
            <img src={IMG.propGurgaon} alt="Virtual tour preview" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-ink/30" />
            <div className="absolute inset-0 flex items-center justify-center">
              <PlayCircle className="size-20 text-marble transition-transform group-hover:scale-110" strokeWidth={0.8} />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ TESTIMONIALS ═══════════════ */}
      <section className="border-y border-border bg-linen">
        <div className="mx-auto max-w-[1400px] px-6 py-28">
          <p className="eyebrow mb-4 text-center">Voices from Our Clients</p>
          <h2 className="mx-auto max-w-3xl text-center font-display text-4xl md:text-5xl">
            Trusted by families, funds and <span className="italic font-normal">first-time buyers alike.</span>
          </h2>
          <div className="mt-16 grid gap-10 md:grid-cols-3">
            {[
              { q: "Vayuva didn't just find us a home in Bandra — they curated four options that matched our brief exactly. The paperwork closure was effortless.", n: "Rohan & Anjali M.", r: "Buyers · Mumbai" },
              { q: "As an NRI investing from Dubai, I needed FEMA compliance and someone I could trust with the POA. The team handled every detail remotely.", n: "Kavya Iyer", r: "NRI Investor · Dubai" },
              { q: "The channel-partner platform gave us access to off-market inventory we could never source alone. Our closing rate has doubled this year.", n: "Vikram S.", r: "Channel Partner · Gurugram" },
            ].map(t => (
              <blockquote key={t.n} className="bg-background p-10 ring-1 ring-black/5">
                <p className="font-display text-2xl leading-snug italic">"{t.q}"</p>
                <footer className="mt-8 border-t border-border pt-6">
                  <p className="font-medium">{t.n}</p>
                  <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground mt-1">{t.r}</p>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ CHANNEL PARTNER INVITE ═══════════════ */}
      <section className="mx-auto max-w-[1400px] px-6 py-28">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow mb-4">By Invitation · Channel Partner Network</p>
            <h2 className="font-display text-4xl md:text-5xl">
              Join India's most exclusive <span className="italic font-normal">brokerage circle.</span>
            </h2>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
              Access off-market mandates, institutional inventory, higher commission
              tiers and white-glove closing support. Our network transacts ₹300+ Cr
              in shared inventory every quarter.
            </p>
            <div className="mt-10 grid grid-cols-3 gap-6 border-y border-border py-8">
              <div><p className="font-display text-3xl">1,200+</p><p className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Active Partners</p></div>
              <div><p className="font-display text-3xl">₹1.2 Cr</p><p className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Avg. Annual Payout</p></div>
              <div><p className="font-display text-3xl">3.2×</p><p className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Closing Uplift</p></div>
            </div>
            <Link to="/channel-partners" className="mt-10 inline-flex items-center gap-3 bg-ink px-8 py-4 font-mono text-[11px] uppercase tracking-[0.25em] text-marble hover:bg-brass transition-colors">
              <Building2 className="size-4" /> Apply for membership
            </Link>
          </div>
          <div className="relative aspect-[5/6] overflow-hidden bg-linen">
            <img src={IMG.propDelhi} alt="" loading="lazy" className="h-full w-full object-cover" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 to-transparent p-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-marble/70">Membership tiers</p>
              <p className="mt-2 font-display text-2xl text-marble">Associate · Platinum · Elite</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ INSIGHTS / BLOG ═══════════════ */}
      <section className="border-t border-border bg-linen">
        <div className="mx-auto max-w-[1400px] px-6 py-28">
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="eyebrow mb-4">The Journal</p>
              <h2 className="font-display text-4xl md:text-5xl">Insight, well-<span className="italic font-normal">written.</span></h2>
            </div>
            <Link to="/insights" className="border-b border-foreground pb-1 text-xs font-mono uppercase tracking-[0.25em] hover:border-brass hover:text-brass transition-colors">
              Browse all essays →
            </Link>
          </div>
          <div className="grid gap-10 md:grid-cols-3">
            {[
              { t: "Why Alibaug is India's Hamptons — and where prices go from here", c: "Market Analysis", d: "Nov 18, 2026", r: "8 min read" },
              { t: "The complete NRI guide to buying property in India (2026 edition)", c: "NRI Advisory", d: "Nov 12, 2026", r: "14 min read" },
              { t: "Grade-A office absorption crosses 65 msf — the yield story matures", c: "Commercial", d: "Nov 05, 2026", r: "6 min read" },
            ].map((a, i) => (
              <article key={i} className="group cursor-pointer">
                <div className="aspect-[4/3] overflow-hidden bg-background">
                  <img src={[IMG.cityGoa, IMG.propMumbai, IMG.cityDelhi][i]} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="pt-6">
                  <p className="eyebrow">{a.c} · {a.d}</p>
                  <h3 className="mt-3 font-display text-2xl leading-tight group-hover:text-brass transition-colors">{a.t}</h3>
                  <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{a.r}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ CTA / POST PROPERTY ═══════════════ */}
      <section className="mx-auto max-w-[1400px] px-6 py-32 text-center">
        <p className="eyebrow mb-6">Ready to List?</p>
        <h2 className="mx-auto max-w-4xl font-display text-5xl md:text-7xl leading-[0.95]">
          Post your property with <span className="italic font-normal">Vayuva.</span>
        </h2>
        <p className="mx-auto mt-8 max-w-xl text-sm leading-relaxed text-muted-foreground">
          Free listing, verified buyers, and a dedicated relationship manager for
          every mandate above ₹5 Cr. Get a valuation and market read in 48 hours.
        </p>
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <Link to="/post-property" className="bg-ink px-10 py-5 font-mono text-[11px] uppercase tracking-[0.25em] text-marble hover:bg-brass transition-colors">
            Post property · Free
          </Link>
          <Link to="/contact" className="border border-foreground/20 px-10 py-5 font-mono text-[11px] uppercase tracking-[0.25em] hover:bg-foreground hover:text-background transition-colors">
            Request valuation
          </Link>
        </div>
      </section>
    </>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="border-b border-border pb-2 md:border-b-0 md:border-r md:border-border md:pb-0 md:pr-4 last:border-0">
      <p className="mb-1 font-mono text-[9px] uppercase tracking-[0.25em] text-muted-foreground">{label}</p>
      {children}
    </div>
  );
}

function Slider({ label, value, percent }: { label: string; value: string; percent: number }) {
  return (
    <div>
      <div className="flex items-baseline justify-between text-sm">
        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{label}</span>
        <span className="font-medium">{value}</span>
      </div>
      <div className="mt-3 h-px bg-border relative">
        <div className="absolute inset-y-0 left-0 h-px bg-brass" style={{ width: `${percent}%` }} />
        <div className="absolute -top-1.5 size-3 rounded-full bg-brass ring-4 ring-background" style={{ left: `calc(${percent}% - 6px)` }} />
      </div>
    </div>
  );
}
