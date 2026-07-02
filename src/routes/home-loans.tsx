import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { useState } from "react";

export const Route = createFileRoute("/home-loans")({
  head: () => ({
    meta: [
      { title: "Home Loans & EMI Calculator · Vayuva" },
      { name: "description", content: "Compare home loan rates from India's leading banks. EMI calculator, pre-approval, balance transfer." },
      { property: "og:title", content: "Home Loans · Vayuva" },
      { property: "og:url", content: "/home-loans" },
    ],
    links: [{ rel: "canonical", href: "/home-loans" }],
  }),
  component: HomeLoans,
});

const banks = [
  { n: "SBI Home Loans", rate: "8.50%", processing: "0.35% + GST", tag: "Lowest rate" },
  { n: "HDFC Bank", rate: "8.75%", processing: "0.50% + GST", tag: "Fastest disbursal" },
  { n: "ICICI Bank", rate: "8.90%", processing: "0.50% + GST", tag: "Digital process" },
  { n: "Axis Bank", rate: "9.00%", processing: "1.00% + GST", tag: "High LTV" },
  { n: "LIC Housing Finance", rate: "8.65%", processing: "0.25% + GST", tag: "Long tenure" },
  { n: "Bajaj Housing", rate: "8.80%", processing: "Nil (offer)", tag: "Zero PF" },
];

function HomeLoans() {
  const [amt, setAmt] = useState(50000000);
  const [rate, setRate] = useState(8.75);
  const [yrs, setYrs] = useState(20);
  const r = rate / 12 / 100;
  const n = yrs * 12;
  const emi = Math.round((amt * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1));
  const total = emi * n;
  const interest = total - amt;

  return (
    <>
      <PageHero
        eyebrow="Home Loans & Advisory"
        title={<>The <span className="italic font-normal">financing</span>, quietly handled.</>}
        intro="Compare rates from 14 banks and NBFCs, calculate your EMI, and get pre-approved in 72 hours. Our loan desk closes over ₹1,800 Cr in home loans every year."
      />

      {/* Calculator */}
      <section className="mx-auto max-w-[1400px] px-6 py-20">
        <div className="grid gap-16 lg:grid-cols-2">
          <div className="bg-linen p-10">
            <h2 className="font-display text-3xl">EMI Calculator</h2>
            <div className="mt-10 space-y-8">
              <SliderInput label="Loan Amount" value={`₹${(amt/10000000).toFixed(2)} Cr`} min={500000} max={200000000} step={100000} val={amt} onChange={setAmt} />
              <SliderInput label="Interest Rate" value={`${rate.toFixed(2)}%`} min={6} max={14} step={0.05} val={rate} onChange={setRate} />
              <SliderInput label="Tenure" value={`${yrs} years`} min={5} max={30} step={1} val={yrs} onChange={setYrs} />
            </div>
          </div>
          <div className="bg-ink text-marble p-10">
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-marble/60">Monthly EMI</p>
            <p className="mt-3 font-display text-6xl">₹{emi.toLocaleString("en-IN")}</p>
            <div className="mt-12 space-y-6 border-t border-marble/15 pt-8">
              {[
                ["Principal", `₹${(amt/10000000).toFixed(2)} Cr`],
                ["Total Interest", `₹${(interest/10000000).toFixed(2)} Cr`],
                ["Total Payment", `₹${(total/10000000).toFixed(2)} Cr`],
                ["Instalments", `${n}`],
              ].map(([l, v]) => (
                <div key={l} className="flex items-baseline justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-marble/60">{l}</span>
                  <span className="font-display text-xl">{v}</span>
                </div>
              ))}
            </div>
            <button className="mt-10 w-full bg-brass py-4 font-mono text-[11px] uppercase tracking-[0.25em] hover:brightness-110 transition">
              Get pre-approved →
            </button>
          </div>
        </div>
      </section>

      {/* Bank comparison */}
      <section className="border-t border-border bg-linen">
        <div className="mx-auto max-w-[1400px] px-6 py-20">
          <p className="eyebrow mb-4">Compare Bank Rates · Live</p>
          <h2 className="font-display text-4xl">The lowest rate, <span className="italic font-normal">right now.</span></h2>
          <div className="mt-12 divide-y divide-border border border-border bg-background">
            {banks.map((b, i) => (
              <div key={b.n} className="grid grid-cols-2 md:grid-cols-5 items-center gap-4 p-6 hover:bg-linen/50 transition-colors">
                <div className="col-span-2 flex items-center gap-4">
                  <span className="grid size-10 place-items-center bg-linen font-mono text-[10px]">{String(i+1).padStart(2, "0")}</span>
                  <p className="font-display text-lg">{b.n}</p>
                </div>
                <div><p className="eyebrow">Rate</p><p className="mt-1 font-mono text-lg">{b.rate}</p></div>
                <div><p className="eyebrow">Processing</p><p className="mt-1 text-sm">{b.processing}</p></div>
                <div className="flex items-center justify-end gap-3">
                  <span className="hidden md:inline text-xs text-brass">{b.tag}</span>
                  <button className="border border-foreground px-4 py-2 font-mono text-[10px] uppercase tracking-[0.25em] hover:bg-ink hover:text-marble hover:border-ink transition-colors">Apply</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function SliderInput({ label, value, min, max, step, val, onChange }: {
  label: string; value: string; min: number; max: number; step: number; val: number; onChange: (n: number) => void;
}) {
  const pct = ((val - min) / (max - min)) * 100;
  return (
    <div>
      <div className="flex items-baseline justify-between">
        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{label}</span>
        <span className="font-display text-xl">{value}</span>
      </div>
      <input type="range" min={min} max={max} step={step} value={val} onChange={e => onChange(Number(e.target.value))} className="mt-4 w-full accent-brass"
        style={{ background: `linear-gradient(to right, var(--brass) ${pct}%, var(--border) ${pct}%)` }}
      />
    </div>
  );
}
