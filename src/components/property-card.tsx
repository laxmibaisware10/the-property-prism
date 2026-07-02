import { Link } from "@tanstack/react-router";
import type { Property } from "@/lib/site-data";

export function PropertyCard({ p, priority = false }: { p: Property; priority?: boolean }) {
  return (
    <Link
      to="/property/$id"
      params={{ id: p.id }}
      className="group block"
    >
      <div className="relative overflow-hidden bg-linen">
        <img
          src={p.image}
          alt={p.name}
          loading={priority ? "eager" : "lazy"}
          className="aspect-[4/5] w-full object-cover transition-transform duration-700 ease-signature group-hover:scale-[1.04]"
        />
        <div className="absolute left-4 top-4 flex flex-wrap gap-1.5">
          <span className="bg-background/95 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.2em] ring-1 ring-black/5">
            {p.status}
          </span>
          {p.tags.slice(0, 1).map((t) => (
            <span
              key={t}
              className="bg-ink/85 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.2em] text-marble backdrop-blur-sm"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="absolute bottom-3 right-3 font-mono text-[9px] uppercase tracking-[0.2em] text-background/90 bg-ink/60 backdrop-blur-sm px-2 py-1">
          RERA ✓
        </div>
      </div>
      <div className="pt-5">
        <p className="eyebrow mb-2">
          {p.locality} · {p.city}
        </p>
        <h3 className="font-display text-xl leading-tight group-hover:text-brass transition-colors">
          {p.name}
        </h3>
        <div className="mt-4 flex items-baseline justify-between border-t border-border pt-4">
          <span className="font-mono text-sm">{p.price}</span>
          <span className="text-[11px] text-muted-foreground">
            {p.config} · {p.area}
          </span>
        </div>
      </div>
    </Link>
  );
}
