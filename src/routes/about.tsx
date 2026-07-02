import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { IMG } from "@/lib/site-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Vayuva · Our Story" },
      { name: "description", content: "Vayuva is India's premier real estate institution — founded in 2014 to bring institutional rigour and personal service to Indian luxury real estate." },
      { property: "og:title", content: "About Vayuva" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHero
        eyebrow="About · Est. 2014"
        title={<>A house built <span className="italic font-normal">on trust.</span></>}
        intro="Vayuva was founded in 2014 by three ex-JLL, KPMG and Sotheby's professionals with a simple thesis: India deserves a real estate institution as rigorous as its private banks, and as warm as its family lawyers."
      />

      <section className="mx-auto grid max-w-[1400px] gap-16 px-6 py-24 lg:grid-cols-2 lg:items-center">
        <div className="aspect-[4/5] overflow-hidden">
          <img src={IMG.propMumbai} alt="" loading="lazy" className="h-full w-full object-cover" />
        </div>
        <div>
          <p className="eyebrow mb-4">Our thesis</p>
          <h2 className="font-display text-4xl md:text-5xl">Real estate, <span className="italic font-normal">re-institutionalised.</span></h2>
          <p className="mt-8 text-sm leading-relaxed text-muted-foreground">
            Indian real estate has long been the largest asset class held by Indian
            households — yet the industry serving it was often the least professional.
            We founded Vayuva to change that: title-verified inventory, transparent
            pricing, published research, and a service standard closer to private
            banking than to broking.
          </p>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            Twelve years later, we serve buyers, developers, investors and NRIs across
            42 cities — and remain independently owned, privately funded, and
            fanatically buyer-first.
          </p>
        </div>
      </section>

      <section className="border-y border-border bg-linen">
        <div className="mx-auto max-w-[1400px] px-6 py-20">
          <p className="eyebrow mb-8">Milestones</p>
          <div className="grid gap-8 md:grid-cols-4">
            {[
              ["2014", "Founded in Mumbai", "with 3 clients and one mandate"],
              ["2018", "Delhi & Bengaluru", "opened flagship offices"],
              ["2021", "NRI Bespoke Desk", "operational in 8 countries"],
              ["2024", "FICCI Award", "Luxury Consultancy of the Year"],
            ].map(([y, t, s]) => (
              <div key={y}>
                <p className="font-display text-4xl italic text-brass">{y}</p>
                <p className="mt-3 font-display text-xl">{t}</p>
                <p className="mt-1 text-xs text-muted-foreground">{s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-24">
        <p className="eyebrow mb-4">Awards & Recognition</p>
        <h2 className="font-display text-4xl">The register of <span className="italic font-normal">record.</span></h2>
        <ul className="mt-12 divide-y divide-border border-t border-b border-border">
          {[
            ["2024", "FICCI Real Estate Awards", "Luxury Consultancy of the Year"],
            ["2024", "Realty+ Excellence", "Best NRI Advisory Firm"],
            ["2023", "The Economic Times", "India's Most Trusted Brand · Real Estate Services"],
            ["2022", "ET NOW", "Best Boutique Real Estate Firm"],
            ["2021", "CNBC-TV18 IBLA", "Emerging Brand of the Year"],
          ].map(([y, a, c]) => (
            <li key={a} className="grid grid-cols-[80px_1fr_auto] gap-6 py-6 items-baseline">
              <span className="font-display text-2xl italic text-brass">{y}</span>
              <span className="font-display text-xl">{a}</span>
              <span className="text-xs text-muted-foreground text-right">{c}</span>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
