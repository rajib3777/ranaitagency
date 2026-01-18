import React from "react";
import Container from "../ui/Container.jsx";
import { FadeIn } from "../ui/Motion.jsx";
import Button from "../ui/Button.jsx";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "৳ 60k+",
    desc: "For a clean, premium landing and essentials.",
    items: ["Hero + Services", "Projects showcase", "Basic motion", "Mobile responsive"]
  },
  {
    name: "Premium",
    price: "৳ 1.5L+",
    highlight: true,
    desc: "Full agency-grade presence with premium polish.",
    items: ["Multi-page system", "3D hero + sections", "Micro-interactions", "Reviews + FAQ", "Conversion CTAs"]
  },
  {
    name: "Elite",
    price: "৳ 3–5L",
    desc: "International-grade design system and scale-ready UI.",
    items: ["Advanced sections", "Brand system polish", "Performance tuning", "Backend/CMS-ready", "Future iterations"]
  }
];

export default function PricingPackages() {
  return (
    <section className="relative mt-12 md:mt-16">
      <Container>
        <FadeIn>
          <div className="text-xs uppercase tracking-wider text-white/50">Packages</div>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-white">
            Premium Packages
          </h2>
          <p className="mt-3 text-white/75 max-w-2xl">
            Let's Discuss .
          </p>
        </FadeIn>

        <div className="mt-8 grid gap-4 lg:grid-cols-3 auto-rows-fr">
          {plans.map((p, i) => (
            <FadeIn key={p.name} delay={0.05 * i}>
              <div className={`${p.highlight ? "glass-strong shimmer-border" : "glass"} noise rounded-3xl p-7 h-full flex flex-col hover:shadow-glow2 transition`}>
                <div className="flex items-baseline justify-between gap-3">
                  <div className="text-xl font-extrabold text-white">{p.name}</div>
                  <div className="text-sm font-extrabold text-white/85">{p.price}</div>
                </div>
                <div className="mt-2 text-sm text-white/75">{p.desc}</div>

                <div className="mt-5 grid gap-2 text-sm text-white/80 flex-1">
                  {p.items.map((it) => (
                    <div key={it} className="flex items-start gap-2">
                      <span className="mt-0.5 rounded-md border border-white/12 bg-white/6 p-1">
                        <Check className="w-4 h-4" />
                      </span>
                      <span>{it}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <Button href="/contact" variant={p.highlight ? "primary" : "ghost"} className="w-full">
                    Get this package
                  </Button>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
