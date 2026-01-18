import React from "react";
import Container from "../ui/Container.jsx";
import { FadeIn } from "../ui/Motion.jsx";
import { Briefcase, HeartPulse, ShoppingBag, Building2, GraduationCap, Radar } from "lucide-react";

const items = [
  { title: "eCommerce", Icon: ShoppingBag, desc: "High-converting storefronts, product pages and performance UX." },
  { title: "Healthcare / Clinic", Icon: HeartPulse, desc: "Appointment, landing pages, trust-first design and clarity." },
  { title: "Corporate", Icon: Building2, desc: "Modern web presence for firms that want premium credibility." },
  { title: "Education", Icon: GraduationCap, desc: "Portals, landing pages and brand systems for institutions." },
  { title: "Startups", Icon: Radar, desc: "Fast MVPs, SaaS marketing pages, dashboards and iteration." },
  { title: "Agencies", Icon: Briefcase, desc: "Portfolio systems, case studies, lead funnels and premium UI." }
];

export default function Industries() {
  return (
    <section className="relative mt-12 md:mt-16">
      <Container>
        <FadeIn>
          <div className="text-xs uppercase tracking-wider text-white/50">Industries</div>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-white">
            Built for businesses that need trust.
          </h2>
          <p className="mt-3 text-white/75 max-w-2xl">
            Whether it’s an IT agency, clinic, or eCommerce brand — we align visuals + UX to feel premium and reliable.
          </p>
        </FadeIn>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <FadeIn key={it.title} delay={0.03 * i}>
              <div className="glass noise rounded-3xl p-6 hover:shadow-glow2 transition">
                <div className="rounded-2xl border border-white/12 bg-white/6 p-3 w-fit">
                  <it.Icon className="w-6 h-6 text-white" />
                </div>
                <div className="mt-4 text-lg font-extrabold text-white">{it.title}</div>
                <p className="mt-2 text-sm text-white/75 leading-relaxed">{it.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
