import React from "react";
import Container from "../ui/Container.jsx";
import { FadeIn } from "../ui/Motion.jsx";
import { Search, PenTool, Code, Rocket } from "lucide-react";

const steps = [
  { title: "Discovery", Icon: Search, desc: "Goals, audience, competitors — we define the premium direction." },
  { title: "Design System", Icon: PenTool, desc: "Typography, spacing, components, motion — consistent across pages." },
  { title: "Build & Polish", Icon: Code, desc: "Responsive UI, clean code, micro-interactions, performance-first." },
  { title: "Launch & Scale", Icon: Rocket, desc: "Deploy, measure, iterate — connect backend/CMS whenever you want." }
];

export default function ProcessTimeline() {
  return (
    <section className="relative mt-12 md:mt-16">
      <Container>
        <FadeIn>
          <div className="text-xs uppercase tracking-wider text-white/50">Process</div>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-white">
            How we provide our service.
          </h2>
          <p className="mt-3 text-white/75 max-w-2xl">
            Clear steps, Better communication.
          </p>
        </FadeIn>

        <div className="mt-8 grid gap-4 lg:grid-cols-4">
          {steps.map((s, i) => (
            <FadeIn key={s.title} delay={0.05 * i}>
              <div className="glass noise rounded-3xl p-6 h-full hover:shadow-glow2 transition">
                <div className="rounded-2xl border border-white/12 bg-white/6 p-3 w-fit">
                  <s.Icon className="w-6 h-6 text-white" />
                </div>
                <div className="mt-4 text-lg font-extrabold text-white">{s.title}</div>
                <p className="mt-2 text-sm text-white/75 leading-relaxed">{s.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
