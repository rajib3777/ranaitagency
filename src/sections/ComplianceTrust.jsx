import React from "react";
import Container from "../ui/Container.jsx";
import { FadeIn } from "../ui/Motion.jsx";
import { ShieldCheck, Lock, FileText, HeartPulse } from "lucide-react";

const items = [
  { title: "Secure by design", Icon: Lock, desc: "Best-practice UI patterns, clean structure, and safe integrations later." },
  { title: "Compliance-ready", Icon: FileText, desc: "Documentation-friendly layouts for healthcare / pharma / regulated teams." },
  { title: "Trust-first UX", Icon: ShieldCheck, desc: "Clear hierarchy, readable contrast and premium credibility signals." },
  { title: "Healthcare/Pharma friendly", Icon: HeartPulse, desc: "Sections that support clinics, labs and pharma-style service offerings." }
];

export default function ComplianceTrust() {
  return (
    <section className="relative mt-12 md:mt-16">
      <Container>
        <FadeIn>
          <div className="text-xs uppercase tracking-wider text-white/50">Trust & Compliance</div>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-white">
            Built for trust-driven industries.
          </h2>
          <p className="mt-3 text-white/75 max-w-2xl">
            Let' Built Together
          </p>
        </FadeIn>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <FadeIn key={it.title} delay={0.04 * i}>
              <div className="glass noise rounded-3xl p-6 h-full hover:shadow-glow2 transition">
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
