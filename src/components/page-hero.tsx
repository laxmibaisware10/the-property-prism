import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: string;
  children?: ReactNode;
}) {
  return (
    <section className="border-b border-border bg-linen">
      <div className="mx-auto max-w-[1400px] px-6 pt-20 pb-16">
        <p className="eyebrow mb-6">{eyebrow}</p>
        <h1 className="font-display text-5xl leading-[0.98] text-balance md:text-7xl">
          {title}
        </h1>
        {intro && (
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground">
            {intro}
          </p>
        )}
        {children && <div className="mt-10">{children}</div>}
      </div>
    </section>
  );
}
