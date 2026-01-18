import React from "react";
import Container from "../ui/Container.jsx";
import { FadeIn } from "../ui/Motion.jsx";

const partners = ["AstraLab", "NeoHealth", "FinPro", "ClinicX", "RetailNova", "EduPulse", "MediaForge", "BrightPharm"];

export default function Partners() {
  return (
    <section className="relative mt-12 md:mt-16">
      <Container>
        <FadeIn>
          <div className="text-xs uppercase tracking-wider text-white/50">Partners</div>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-white">
            Brands we can elevate.
          </h2>
          <p className="mt-3 text-white/75 max-w-2xl">
            Our Happy Clients
          </p>
        </FadeIn>

        <FadeIn delay={0.08}>
          <div className="mt-8 glass-strong noise shimmer-border rounded-3xl p-6">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {partners.map((p) => (
                <div key={p} className="rounded-2xl border border-white/12 bg-white/6 px-4 py-4 text-sm font-extrabold text-white/85 text-center">
                  {p}
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
