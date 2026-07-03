import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { navLinks, BRAND } from "@/lib/site-data";
import { Menu, X, Phone } from "lucide-react";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
      {/* Utility bar */}
      <div className="hidden md:block border-b border-border/60 bg-ink text-marble/80">
        <div className="mx-auto flex h-9 max-w-[1400px] items-center justify-between px-6 font-mono text-[10px] uppercase tracking-[0.25em]">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2 text-brass-soft">
              <span className="size-1 rounded-full bg-brass" /> {BRAND.tagline}
            </span>
            <span className="text-marble/50">·</span>
            <span>MahaRERA Verified</span>
          </div>
          <div className="flex items-center gap-6">
            <a href={`tel:${BRAND.phone}`} className="flex items-center gap-2 hover:text-brass transition-colors">
              <Phone className="size-3" /> {BRAND.phone}
            </a>
            <Link to="/post-property" className="text-brass hover:text-marble transition-colors">Post Property · Free</Link>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-6">
        <Link to="/" className="flex items-baseline gap-2">
          <span className="font-display text-3xl font-bold tracking-tight leading-none">
            {BRAND.name}
          </span>
          <span className="text-brass text-3xl leading-none">·</span>
          <span className="hidden sm:inline font-mono text-[9px] uppercase tracking-[0.3em] text-muted-foreground pt-1">
            Nagpur
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8 text-[13px] font-medium">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-foreground/80 transition-colors hover:text-brass"
              activeProps={{ className: "text-brass" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/post-property"
            className="hidden md:inline-block bg-ink px-5 py-3 text-[11px] font-mono uppercase tracking-[0.2em] text-marble hover:bg-brass transition-colors"
          >
            List with us
          </Link>
          <button
            className="lg:hidden p-2"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="mx-auto max-w-[1400px] px-6 py-4 grid gap-1">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="py-3 text-sm border-b border-border/60"
              >
                {l.label}
              </Link>
            ))}
            <Link to="/post-property" onClick={() => setOpen(false)} className="py-3 text-sm text-brass">
              Post Property · Free
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
