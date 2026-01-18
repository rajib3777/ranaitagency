import React from "react";
import Container from "../ui/Container.jsx";
import { FadeIn } from "../ui/Motion.jsx";
import { Cpu, Database, Shield, Gauge, Wand2, Globe } from "lucide-react";

const stack = [
  { title: "React + Vite", Icon: Cpu, desc: "Fast dev + optimized build." },
  { title: "Backend-ready", Icon: Database, desc: "Connect Node/PHP/Firebase/CMS later." },
  { title: "SEO foundation", Icon: Globe, desc: "Semantic structure + metadata ready." },
  { title: "Performance mindset", Icon: Gauge, desc: "Smooth UI, minimal layout shift." },
  { title: "Security aware UI", Icon: Shield, desc: "Safe patterns and clean structure." },
  { title: "Motion & polish", Icon: Wand2, desc: "Micro-interactions that feel premium." }
];

export default function TechStack() {
  return (
    <section className="relative mt-12 md:mt-16">
      <Container>
        <FadeIn>
          <div className="text-xs uppercase tracking-wider text-white/50">Stack</div>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-white">
            Modern stack, premium delivery.
          </h2>
          <p className="mt-3 text-white/75 max-w-2xl">
            Clean architecture .
          </p>
        </FadeIn>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {stack.map((s, i) => (
            <FadeIn key={s.title} delay={0.03 * i}>
              <div className="glass noise rounded-3xl p-6 hover:shadow-glow2 transition">
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
