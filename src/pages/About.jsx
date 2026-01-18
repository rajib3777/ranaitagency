import React from "react";
import Container from "../ui/Container.jsx";
import { FadeIn } from "../ui/Motion.jsx";
import CTA from "../sections/CTA.jsx";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <div className="pt-28 md:pt-32">
      <Container>
        <FadeIn>
          <div id="about" className="text-xs uppercase tracking-wider text-white/50">Company</div>
          <h1 className="mt-2 text-4xl sm:text-5xl font-extrabold text-white">
            A premium IT agency built for modern growth.
          </h1>
          <p className="mt-3 text-white/70 max-w-3xl">
            We combine futuristic UI, clean engineering and creative marketing — so your brand looks expensive and performs.
          </p>
        </FadeIn>

        <div id="process" className="mt-10 grid gap-4 lg:grid-cols-3">
          {[
            ["Discovery & Strategy", "We define goals, audience and the premium direction."],
            ["Design & Production", "We craft a clean system: layout, typography, motion and content."],
            ["Launch & Scale", "We ship fast, iterate, and connect backend/CMS when you’re ready."]
          ].map(([t, d], i) => (
            <FadeIn key={t} delay={0.05 * i}>
              <div className="glass noise rounded-3xl p-6">
                <div className="flex items-center gap-2 text-white font-extrabold">
                  <CheckCircle2 className="w-5 h-5" /> {t}
                </div>
                <p className="mt-3 text-sm text-white/70 leading-relaxed">{d}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>

      <CTA />
      <div className="h-10" />
    </div>
  );
}
