import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import heroImg from "@/assets/hero-nagpur.jpg";
import {
  properties,
  localities,
  collections,
  developers,
  testimonials,
  visitJourney,
  BRAND,
  IMG,
} from "@/lib/site-data";
import { PropertyCard } from "@/components/property-card";
import {
  Search, ArrowUpRight, Shield, Award, TrendingUp, Home as HomeIcon,
  Trees, Building2, LandPlot, Sparkles, PlayCircle, MapPin, Star,
  Phone, MessageCircle, CheckCircle2,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aangan · Nagpur's Most Trusted Real Estate House" },
      { name: "description", content: "Premium flats, bungalows, farmhouses, plots and Grade-A commercial spaces across Nagpur — Civil Lines, Ramdaspeth, Wardha Road, Seminary Hills, MIHAN, Hingna. MahaRERA verified." },
      { property: "og:title", content: "Aangan · Estates of Nagpur" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const searchCategories = [
  { key: "Flat", label: "Flats", icon: Building2 },
  { key: "Bungalow", label: "Bungalows", icon: HomeIcon },
  { key: "Farmhouse", label: "Farmhouses", icon: Trees },
  { key: "Plot", label: "Plots", icon: LandPlot },
  { key: "Commercial", label: "Commercial", icon: Building2 },
] as const;

function Home() {
  const [cat, setCat] = useState<(typeof searchCategories)[number]["key"]>("Flat");
  const featured = properties.slice(0, 3);

  return (
    <>
      {/* ═══════════════ HERO — Cinematic full-bleed ═══════════════ */}
      <section className="relative min-h-[92vh] overflow-hidden bg-ink text-marble">
        {/* Background image */}
        <img
          src={heroImg}
          alt="Luxury Nagpur estate at twilight"
          width={1600}
          height={1920}
          className="absolute inset-0 h-full w-full object-cover animate-ken"
        />
        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/70 to-ink/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/40" />

        {/* Content grid */}
        <div className="relative mx-auto grid min-h-[92vh] max-w-[1400px] gap-8 px-6 pt-32 pb-16 lg:grid-cols-12 lg:pt-40">
          <div className="lg:col-span-8 animate-reveal">
            <div className="flex items-center gap-3 mb-8">
              <span className="h-px w-12 bg-brass" />
              <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-brass-soft">
                {BRAND.motto}
              </p>
            </div>

            <h1 className="font-display text-[52px] leading-[0.95] tracking-tight text-balance md:text-7xl lg:text-[104px]">
              A home is not built
              <br />
              <span className="italic font-normal text-brass-soft">— it is chosen.</span>
            </h1>

            <p className="mt-10 max-w-xl text-base leading-relaxed text-marble/75">
              Nagpur's most trusted real estate house since {BRAND.founded}. From Civil
              Lines heritage flats to Koradi farmhouses, MIHAN Grade-A offices to
              Hingna plotted townships — every mandate personally vetted.
            </p>

            {/* CTA row */}
            <div className="mt-12 flex flex-wrap gap-4">
              <a href={`tel:${BRAND.phone}`} className="flex items-center gap-3 bg-brass px-8 py-4 font-mono text-[11px] uppercase tracking-[0.25em] text-ink hover:bg-marble transition-colors">
                <Phone className="size-4" /> Speak to a manager
              </a>
              <a href={`https://wa.me/${BRAND.whatsapp.replace(/\D/g, "")}`} className="flex items-center gap-3 border border-marble/25 px-8 py-4 font-mono text-[11px] uppercase tracking-[0.25em] text-marble hover:bg-marble/10 transition-colors">
                <MessageCircle className="size-4" /> WhatsApp us
              </a>
            </div>

            {/* Trust chips */}
            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-[11px] font-mono uppercase tracking-[0.2em] text-marble/60">
              <span className="flex items-center gap-2"><CheckCircle2 className="size-3.5 text-brass" /> MahaRERA Verified</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="size-3.5 text-brass" /> 14+ Years in Nagpur</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="size-3.5 text-brass" /> 2,400+ Happy Families</span>
            </div>
          </div>

          {/* Featured card floating on the right */}
          <div className="hidden lg:flex lg:col-span-4 items-end animate-reveal [animation-delay:200ms]">
            <div className="w-full bg-marble/5 backdrop-blur-md border border-marble/15 p-7">
              <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-brass mb-4">Currently Featured</p>
              <p className="font-display text-3xl leading-tight">The Wardha Road Signature</p>
              <p className="mt-2 text-xs text-marble/60">Besa · New Launch · Godrej Vidarbha</p>
              <div className="mt-6 grid grid-cols-2 gap-4 border-t border-marble/15 pt-6">
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-marble/50">Starting</p>
                  <p className="font-display text-xl mt-1">₹1.85 Cr</p>
                </div>
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-marble/50">Possession</p>
                  <p className="font-display text-xl mt-1">Jun ’27</p>
                </div>
              </div>
              <Link
                to="/property/$id"
                params={{ id: "wardha-road-signature" }}
                className="mt-6 flex items-center justify-between gap-2 border border-marble/25 px-5 py-3 font-mono text-[10px] uppercase tracking-[0.25em] hover:bg-brass hover:border-brass hover:text-ink transition-colors"
              >
                View residence <ArrowUpRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Search console — floating over hero bottom */}
        <div className="relative z-10 mx-auto max-w-[1400px] px-6 -mb-14">
          <div className="bg-background text-foreground shadow-editorial ring-1 ring-black/10">
            <div className="flex overflow-x-auto border-b border-border">
              {searchCategories.map(({ key, label, icon: Icon }) => (
                <button
                  key={key}
                  onClick={() => setCat(key)}
                  className={`flex items-center gap-2 shrink-0 px-6 py-4 font-mono text-[10px] uppercase tracking-[0.25em] transition-colors ${
                    cat === key
                      ? "text-brass border-b-2 border-brass -mb-px"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Icon className="size-3.5" /> {label}
                </button>
              ))}
            </div>
            <div className="grid gap-4 p-6 md:grid-cols-4">
              <Field label="Locality">
                <select className="w-full bg-transparent text-sm outline-none">
                  <option>Any locality</option>
                  {localities.map((l) => <option key={l.name}>{l.name}</option>)}
                </select>
              </Field>
              <Field label="Budget">
                <select className="w-full bg-transparent text-sm outline-none">
                  <option>Any budget</option>
                  <option>Under ₹50 L</option>
                  <option>₹50 L – ₹1 Cr</option>
                  <option>₹1 – 3 Cr</option>
                  <option>₹3 Cr+</option>
                </select>
              </Field>
              <Field label="Configuration">
                <select className="w-full bg-transparent text-sm outline-none">
                  <option>Any type</option>
                  <option>2 BHK</option><option>3 BHK</option>
                  <option>4 BHK</option><option>5+ BHK</option>
                </select>
              </Field>
              <Field label="Possession">
                <select className="w-full bg-transparent text-sm outline-none">
                  <option>Any status</option>
                  <option>Ready to Move</option>
                  <option>Under Construction</option>
                  <option>New Launch</option>
                </select>
              </Field>
            </div>
            <div className="flex flex-col gap-2 border-t border-border p-3 md:flex-row md:items-center md:justify-between">
              <div className="flex flex-wrap gap-3 px-3 py-1 text-[11px] text-muted-foreground">
                <span className="cursor-pointer hover:text-brass">Metro-connected</span>
                <span>·</span>
                <span className="cursor-pointer hover:text-brass">Vastu-compliant</span>
                <span>·</span>
                <span className="cursor-pointer hover:text-brass">Gated community</span>
                <span>·</span>
                <span className="cursor-pointer hover:text-brass">Pre-launch</span>
              </div>
              <Link
                to="/plots"
                className="flex items-center justify-center gap-2 bg-ink px-8 py-4 font-mono text-[11px] uppercase tracking-[0.25em] text-marble transition-colors hover:bg-brass"
              >
                <Search className="size-4" /> Search 850+ Nagpur properties
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ TRUST STRIP ═══════════════ */}
      <section className="bg-ink text-marble pt-24 pb-14">
        <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-8 px-6 md:grid-cols-4">
          {[
            { n: "2,400+", l: "Families Settled" },
            { n: "850+", l: "Live Listings in Nagpur" },
            { n: "₹1,240 Cr", l: "Transacted FY25" },
            { n: "14 Years", l: "Trusted Since 2011" },
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

      {/* ═══════════════ WHAT WE OFFER ═══════════════ */}
      <section className="mx-auto max-w-[1400px] px-6 py-28">
        <div className="mb-16 max-w-2xl">
          <p className="eyebrow mb-4">Property Categories</p>
          <h2 className="font-display text-4xl md:text-5xl">
            Every kind of address, <span className="italic font-normal">one house.</span>
          </h2>
        </div>
        <div className="grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
          {collections.map((c) => (
            <Link
              key={c.title}
              to="/plots"
              className="group relative overflow-hidden bg-background p-10 transition-colors hover:bg-marble"
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-brass">
                {String(c.count).padStart(3, "0")} in Nagpur
              </p>
              <h3 className="mt-6 font-display text-3xl leading-tight">{c.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{c.note}</p>
              <ArrowUpRight className="absolute right-8 top-8 size-4 text-muted-foreground transition-all group-hover:text-brass group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          ))}
        </div>
      </section>

      {/* ═══════════════ SIGNATURE PROPERTIES ═══════════════ */}
      <section className="border-y border-border bg-linen">
        <div className="mx-auto max-w-[1400px] px-6 py-28">
          <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="eyebrow mb-4">Featured This Month</p>
              <h2 className="font-display text-4xl md:text-5xl max-w-2xl">
                Handpicked <span className="italic font-normal">Nagpur homes.</span>
              </h2>
            </div>
            <Link to="/plots" className="group flex items-center gap-2 border-b border-foreground pb-1 text-sm font-mono uppercase tracking-[0.2em] hover:border-brass hover:text-brass transition-colors">
              View all 850 properties <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((p) => (<PropertyCard key={p.id} p={p} />))}
          </div>
        </div>
      </section>

      {/* ═══════════════ NAGPUR LOCALITIES ═══════════════ */}
      <section className="mx-auto max-w-[1400px] px-6 py-28">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow mb-4">Nagpur & Neighbourhoods</p>
            <h2 className="font-display text-4xl md:text-5xl max-w-xl">
              Best locations <span className="italic font-normal">in & around Nagpur.</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground">
            Deep local expertise across 24 micro-markets — from old-city heritage
            precincts to the new Wardha Road & MIHAN growth corridors.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {localities.map((c) => (
            <Link key={c.name} to="/plots" className="group block">
              <div className="relative aspect-[4/5] overflow-hidden">
                <img src={c.image} alt={c.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="bg-background/95 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.2em]">
                    {c.listings} listings
                  </span>
                </div>
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <div className="flex items-center gap-2 text-marble/70">
                    <MapPin className="size-3" strokeWidth={1.5} />
                    <p className="font-mono text-[9px] uppercase tracking-[0.25em]">Nagpur</p>
                  </div>
                  <p className="font-display text-2xl text-marble mt-1">{c.name}</p>
                  <p className="mt-1 text-[11px] text-marble/70">{c.note}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ═══════════════ LAND / SITE VISIT JOURNEY ═══════════════ */}
      <section className="relative bg-ink text-marble overflow-hidden">
        <div className="mx-auto max-w-[1400px] px-6 py-28">
          <div className="mb-16 grid gap-8 md:grid-cols-2 md:items-end">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-brass mb-4">
                The Site Visit Experience
              </p>
              <h2 className="font-display text-4xl md:text-5xl">
                From WhatsApp to <span className="italic font-normal text-brass-soft">house-warming.</span>
              </h2>
            </div>
            <p className="text-sm leading-relaxed text-marble/70 max-w-md md:justify-self-end">
              Har site visit ek curated experience hai. Chauffeur pickup se lekar
              drone-view, title-check aur legal walkthrough — sab kuch ek din mein.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {visitJourney.map((v, i) => (
              <div key={v.step} className="group">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={v.image}
                    alt={v.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
                  <div className="absolute top-5 left-5 bg-brass text-ink px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.25em]">
                    Step {v.step}
                  </div>
                </div>
                <div className="mt-6 border-t border-marble/15 pt-6">
                  <h3 className="font-display text-2xl">{v.title}</h3>
                  <p className="mt-3 text-sm text-marble/60 leading-relaxed">{v.note}</p>
                </div>
                {i < visitJourney.length - 1 && (
                  <div className="hidden md:block absolute" />
                )}
              </div>
            ))}
          </div>

          <div className="mt-16 flex flex-wrap items-center justify-center gap-4">
            <a href={`https://wa.me/${BRAND.whatsapp.replace(/\D/g, "")}?text=Hi%20Aangan%2C%20I%27d%20like%20to%20schedule%20a%20site%20visit`}
              className="flex items-center gap-3 bg-brass px-8 py-4 font-mono text-[11px] uppercase tracking-[0.25em] text-ink hover:bg-marble transition-colors">
              <MessageCircle className="size-4" /> Schedule a site visit
            </a>
            <Link to="/tours" className="flex items-center gap-3 border border-marble/25 px-8 py-4 font-mono text-[11px] uppercase tracking-[0.25em] hover:bg-marble/10 transition-colors">
              <PlayCircle className="size-4" /> Watch 3D tours
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════ WHY AANGAN ═══════════════ */}
      <section className="mx-auto max-w-[1400px] px-6 py-28">
        <div className="mb-14 max-w-2xl">
          <p className="eyebrow mb-4">The Aangan Difference</p>
          <h2 className="font-display text-4xl md:text-5xl">
            Old-Nagpur values, <span className="italic font-normal">new-age service.</span>
          </h2>
        </div>
        <div className="grid gap-px bg-border md:grid-cols-2 lg:grid-cols-4">
          {[
            { i: Shield, t: "MahaRERA Verified", d: "Har listing ka RERA number, title clearance aur developer background disclosed." },
            { i: Award, t: "Nagpur's #1 Rated", d: "Google 4.9★ · 1,200+ reviews · Times Business Awards 2024 winner." },
            { i: Sparkles, t: "Bespoke Site Visits", d: "Chauffeur pickup, drone view, on-site legal team — one seamless experience." },
            { i: TrendingUp, t: "Investment Advisory", d: "Data-led guidance across Nagpur's growth corridors and infra catalysts." },
          ].map(({ i: Icon, t, d }) => (
            <div key={t} className="bg-background p-10">
              <Icon className="size-6 text-brass" strokeWidth={1.2} />
              <h3 className="mt-8 font-display text-xl">{t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════ TESTIMONIALS ═══════════════ */}
      <section className="border-y border-border bg-linen">
        <div className="mx-auto max-w-[1400px] px-6 py-28">
          <div className="mx-auto max-w-3xl text-center mb-4">
            <p className="eyebrow mb-4">Voices from Nagpur</p>
            <h2 className="font-display text-4xl md:text-5xl">
              Trusted by families, <span className="italic font-normal">generations of them.</span>
            </h2>
            <div className="mt-8 inline-flex items-center gap-3 bg-background px-6 py-3 ring-1 ring-black/5">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-4 fill-brass text-brass" />
                ))}
              </div>
              <span className="font-display text-lg">4.9</span>
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                · 1,247 Google Reviews
              </span>
            </div>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {testimonials.map((t) => (
              <blockquote key={t.n} className="relative bg-background p-8 ring-1 ring-black/5 flex flex-col">
                {/* Quote mark */}
                <span className="absolute top-4 right-6 font-display text-6xl leading-none text-brass/20">"</span>

                <div className="flex gap-0.5 mb-5">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="size-3.5 fill-brass text-brass" />
                  ))}
                </div>
                <p className="text-[15px] leading-relaxed text-foreground/85 italic flex-1">
                  "{t.q}"
                </p>
                <footer className="mt-6 border-t border-border pt-5 flex items-center gap-3">
                  <div className="flex size-11 items-center justify-center rounded-full bg-ink text-marble font-display text-sm">
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-medium text-sm">{t.n}</p>
                    <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-muted-foreground mt-0.5">
                      {t.r}
                    </p>
                  </div>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ DEVELOPERS ═══════════════ */}
      <section className="mx-auto max-w-[1400px] px-6 py-16">
        <p className="eyebrow mb-8 text-center">Nagpur's Leading Developers · Under One Roof</p>
        <div className="flex flex-wrap items-center justify-center gap-x-14 gap-y-6">
          {developers.map((d) => (
            <span key={d} className="font-display text-xl italic text-muted-foreground/70 hover:text-foreground transition-colors cursor-pointer">
              {d}
            </span>
          ))}
        </div>
      </section>

      {/* ═══════════════ FINAL CTA ═══════════════ */}
      <section className="relative overflow-hidden bg-ink text-marble">
        <div className="absolute inset-0 opacity-30">
          <img src={IMG.heroNagpur} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/80 to-ink" />
        </div>
        <div className="relative mx-auto max-w-[1400px] px-6 py-32 text-center">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-brass mb-6">
            Your next address, curated
          </p>
          <h2 className="mx-auto max-w-4xl font-display text-5xl md:text-7xl leading-[0.95]">
            Let's find your <span className="italic font-normal text-brass-soft">aangan.</span>
          </h2>
          <p className="mx-auto mt-8 max-w-xl text-sm leading-relaxed text-marble/70">
            Ek 15-minute call. Zero obligation. Hum aapki zaroorat samjhenge aur
            Nagpur ke top 3–5 options curate karke bhejenge.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <a href={`tel:${BRAND.phone}`} className="bg-brass px-10 py-5 font-mono text-[11px] uppercase tracking-[0.25em] text-ink hover:bg-marble transition-colors">
              Call {BRAND.phone}
            </a>
            <Link to="/contact" className="border border-marble/25 px-10 py-5 font-mono text-[11px] uppercase tracking-[0.25em] hover:bg-marble/10 transition-colors">
              Request a callback
            </Link>
          </div>
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
