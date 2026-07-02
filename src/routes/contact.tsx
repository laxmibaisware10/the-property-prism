import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { Mail, Phone, MapPin } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Vayuva · Get in Touch" },
      { name: "description", content: "Speak to our team of real estate advisors. Mumbai, Delhi, Bengaluru, Dubai, London offices." },
      { property: "og:title", content: "Contact · Vayuva" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

const offices = [
  { c: "Mumbai · HQ", a: "Level 24, Nariman Bhavan\nNariman Point, Mumbai 400 021", p: "+91 22 6789 4500" },
  { c: "New Delhi", a: "The Chanakya, 5th Floor\nYashwant Place, Chanakyapuri 110 021", p: "+91 11 4321 8800" },
  { c: "Bengaluru", a: "Prestige Trade Tower, Level 12\nPalace Road, Bengaluru 560 001", p: "+91 80 4567 2200" },
  { c: "Dubai · NRI Desk", a: "One Central, Level 18\nDubai World Trade Centre", p: "+971 4 123 6600" },
];

function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title={<>Let's <span className="italic font-normal">talk.</span></>}
        intro="Whether you're buying, selling, financing, or investing — a Vayuva advisor is one call away. All conversations are private and complimentary."
      />

      <section className="mx-auto grid max-w-[1400px] gap-16 px-6 py-24 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <form className="space-y-8">
            <div className="grid gap-6 md:grid-cols-2">
              <Field label="Full name"><input className="w-full bg-transparent py-3 outline-none" /></Field>
              <Field label="Phone"><input placeholder="+91 …" className="w-full bg-transparent py-3 outline-none" /></Field>
              <Field label="Email"><input type="email" className="w-full bg-transparent py-3 outline-none" /></Field>
              <Field label="I am a">
                <select className="w-full bg-transparent py-3 outline-none">
                  <option>Buyer</option><option>Seller</option><option>NRI Investor</option>
                  <option>Developer</option><option>Channel Partner</option><option>Media / Press</option>
                </select>
              </Field>
            </div>
            <Field label="How can we help?">
              <textarea rows={5} className="w-full bg-transparent py-3 outline-none resize-none" />
            </Field>
            <button className="w-full bg-ink py-5 font-mono text-[11px] uppercase tracking-[0.25em] text-marble hover:bg-brass transition-colors">
              Send enquiry
            </button>
          </form>
        </div>
        <aside className="lg:col-span-5 space-y-8">
          <div className="bg-linen p-8">
            <p className="eyebrow mb-6">Reach us directly</p>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3"><Phone className="size-4 text-brass mt-0.5" /> 1800-123-456 (Toll free, 7 days)</li>
              <li className="flex gap-3"><Mail className="size-4 text-brass mt-0.5" /> concierge@vayuva.in</li>
              <li className="flex gap-3"><MapPin className="size-4 text-brass mt-0.5" /> 4 offices across India + Dubai</li>
            </ul>
          </div>
          <div>
            <p className="eyebrow mb-6">Offices</p>
            <div className="grid gap-6 sm:grid-cols-2">
              {offices.map(o => (
                <div key={o.c} className="border border-border p-6">
                  <p className="font-display text-lg">{o.c}</p>
                  <p className="mt-2 whitespace-pre-line text-xs text-muted-foreground leading-relaxed">{o.a}</p>
                  <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.25em] text-brass">{o.p}</p>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </section>
    </>
  );
}
function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block border-b border-border">
      <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-muted-foreground">{label}</span>
      {children}
    </label>
  );
}
