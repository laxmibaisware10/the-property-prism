import { Link } from "@tanstack/react-router";
import { BRAND, navLinks } from "@/lib/site-data";
import { Instagram, Facebook, Youtube, Linkedin, Phone, Mail, MapPin, MessageCircle } from "lucide-react";

const socials = [
  { icon: Instagram, label: "Instagram", href: "https://instagram.com/aangan.estates" },
  { icon: Facebook, label: "Facebook", href: "https://facebook.com/aanganestates" },
  { icon: Youtube, label: "YouTube", href: "https://youtube.com/@aanganestates" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/company/aangan-estates" },
  { icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/919822000000" },
];

export function SiteFooter() {
  return (
    <footer className="bg-ink text-marble">
      <div className="mx-auto max-w-[1400px] px-6 py-20">
        <div className="grid gap-14 lg:grid-cols-12">
          {/* Brand block */}
          <div className="lg:col-span-5">
            <Link to="/" className="font-display text-4xl font-bold">
              {BRAND.name}<span className="text-brass">.</span>
            </Link>
            <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.3em] text-brass-soft">
              {BRAND.tagline}
            </p>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-marble/70">
              Nagpur's most trusted real estate house since {BRAND.founded}. Flats, bungalows,
              farmhouses, plots and commercial spaces — every listing personally vetted.
            </p>

            {/* Social */}
            <div className="mt-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-brass mb-4">Follow us</p>
              <div className="flex gap-3">
                {socials.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="group flex size-11 items-center justify-center border border-marble/20 hover:border-brass hover:bg-brass transition-colors"
                  >
                    <Icon className="size-4 text-marble/80 group-hover:text-marble" strokeWidth={1.5} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Explore */}
          <div className="lg:col-span-3">
            <h4 className="font-mono text-[10px] uppercase tracking-[0.3em] text-brass mb-6">Explore</h4>
            <ul className="space-y-3 text-sm text-marble/75">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="hover:text-brass transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4">
            <h4 className="font-mono text-[10px] uppercase tracking-[0.3em] text-brass mb-6">Visit our office</h4>
            <ul className="space-y-4 text-sm text-marble/75">
              <li className="flex gap-3">
                <MapPin className="size-4 mt-0.5 text-brass shrink-0" strokeWidth={1.5} />
                <span>{BRAND.address}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="size-4 mt-0.5 text-brass shrink-0" strokeWidth={1.5} />
                <a href={`tel:${BRAND.phone}`} className="hover:text-brass transition-colors">{BRAND.phone}</a>
              </li>
              <li className="flex gap-3">
                <Mail className="size-4 mt-0.5 text-brass shrink-0" strokeWidth={1.5} />
                <a href={`mailto:${BRAND.email}`} className="hover:text-brass transition-colors">{BRAND.email}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-marble/15 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-marble/50">
            © {new Date().getFullYear()} {BRAND.name} Estates · {BRAND.rera}
          </p>
          <div className="flex gap-6 font-mono text-[10px] uppercase tracking-[0.25em] text-marble/50">
            <Link to="/about" className="hover:text-brass">Privacy</Link>
            <Link to="/about" className="hover:text-brass">Terms</Link>
            <Link to="/about" className="hover:text-brass">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
