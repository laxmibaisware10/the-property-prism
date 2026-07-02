import { Link } from "@tanstack/react-router";

const cols = [
  {
    title: "Residential",
    links: [
      ["Buy Property", "/buy"],
      ["Rent Property", "/rent"],
      ["New Projects", "/new-projects"],
      ["Plots & Land", "/plots"],
      ["Farmhouses", "/buy"],
    ],
  },
  {
    title: "Commercial",
    links: [
      ["Office Space", "/commercial"],
      ["Retail & F&B", "/commercial"],
      ["Warehousing", "/commercial"],
      ["Coworking", "/commercial"],
      ["Investment Grade", "/insights"],
    ],
  },
  {
    title: "Services",
    links: [
      ["Home Loans & EMI", "/home-loans"],
      ["NRI Desk", "/nri"],
      ["Market Insights", "/insights"],
      ["Property Valuation", "/insights"],
      ["Legal & RERA", "/insights"],
    ],
  },
  {
    title: "For Business",
    links: [
      ["Post Property", "/post-property"],
      ["Builder Portal", "/builders"],
      ["Channel Partners", "/channel-partners"],
      ["Corporate Leasing", "/commercial"],
      ["Advertise", "/contact"],
    ],
  },
  {
    title: "Company",
    links: [
      ["About Vayuva", "/about"],
      ["Press & Awards", "/about"],
      ["Careers", "/contact"],
      ["Contact", "/contact"],
      ["Sitemap", "/sitemap.xml"],
    ],
  },
] as const;

const cityChips = [
  "Mumbai", "Delhi NCR", "Gurugram", "Noida", "Bengaluru",
  "Hyderabad", "Pune", "Chennai", "Kolkata", "Ahmedabad",
  "Goa", "Alibaug", "Chandigarh", "Kochi", "Jaipur",
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-linen">
      <div className="mx-auto max-w-[1400px] px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <Link to="/" className="font-display text-3xl font-bold">
              VAYUVA<span className="text-brass">.</span>
            </Link>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-muted-foreground">
              India's premier real estate institution — for discerning buyers,
              global investors, and Grade-A developers.
            </p>
            <div className="mt-8">
              <p className="eyebrow mb-3">Newsletter · The Register</p>
              <div className="flex border-b border-foreground/20 pb-1">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full bg-transparent py-2 text-sm outline-none"
                />
                <button className="font-mono text-[10px] uppercase tracking-[0.25em] text-brass">
                  Subscribe →
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 md:grid-cols-5 lg:col-span-9">
            {cols.map((c) => (
              <div key={c.title}>
                <h4 className="eyebrow mb-6">{c.title}</h4>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  {c.links.map(([label, href]) => (
                    <li key={label}>
                      <Link to={href} className="hover:text-brass transition-colors">
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 border-t border-border pt-10">
          <p className="eyebrow mb-4">Properties Across India</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-muted-foreground">
            {cityChips.map((c) => (
              <Link key={c} to="/buy" className="hover:text-brass transition-colors">
                Property in {c}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-border pt-8 md:flex-row md:items-center md:justify-between">
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
            © 2026 Vayuva Luxury Real Estate Pvt Ltd · All rights reserved
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
            RERA Agent · A51900045321 · MahaRERA
          </p>
          <div className="flex gap-6 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
            <Link to="/about" className="hover:text-brass">Privacy</Link>
            <Link to="/about" className="hover:text-brass">Terms</Link>
            <Link to="/about" className="hover:text-brass">RERA</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
