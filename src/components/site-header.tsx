import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { navLinks } from "@/lib/site-data";
import { Menu, X } from "lucide-react";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
      {/* Utility bar */}
      <div className="hidden md:block border-b border-border/60">
        <div className="mx-auto flex h-9 max-w-[1400px] items-center justify-between px-6 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
          <div className="flex gap-6">
            <span className="flex items-center gap-2">
              <span className="size-1 rounded-full bg-brass" /> INR (₹)
            </span>
            <button className="hover:text-foreground transition-colors">EN</button>
            <button className="hover:text-foreground transition-colors">हिं</button>
          </div>
          <div className="flex gap-6">
            <Link to="/nri" className="hover:text-foreground transition-colors">NRI Desk</Link>
            <Link to="/insights" className="hover:text-foreground transition-colors">Market Insights</Link>
            <a href="tel:+911800123456" className="hover:text-foreground transition-colors">1800-123-456</a>
            <Link to="/post-property" className="text-brass hover:text-foreground transition-colors">Post Property · Free</Link>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-6">
        <Link to="/" className="font-display text-2xl font-bold tracking-tight">
          VAYUVA<span className="text-brass">.</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7 text-[13px] font-medium">
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
            to="/builders"
            className="hidden md:inline-block border-b border-transparent px-3 py-1.5 text-xs font-mono uppercase tracking-[0.2em] hover:border-brass transition-colors"
          >
            For Builders
          </Link>
          <Link
            to="/channel-partners"
            className="hidden md:inline-block bg-ink px-5 py-3 text-[11px] font-mono uppercase tracking-[0.2em] text-marble hover:bg-brass transition-colors"
          >
            Partner Portal
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
                className="py-2 text-sm border-b border-border/60"
              >
                {l.label}
              </Link>
            ))}
            <Link to="/builders" onClick={() => setOpen(false)} className="py-2 text-sm border-b border-border/60">For Builders</Link>
            <Link to="/channel-partners" onClick={() => setOpen(false)} className="py-2 text-sm">Channel Partners</Link>
          </div>
        </div>
      )}
    </header>
  );
}
