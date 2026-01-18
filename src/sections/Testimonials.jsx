import React from "react";
import Container from "../ui/Container.jsx";
import { FadeIn } from "../ui/Motion.jsx";
import { testimonials } from "../ui/mock.js";
import { Star } from "lucide-react";

export default function Testimonials() {
  return (
    <section id="reviews" className="relative mt-12 md:mt-16">
      <Container>
        <FadeIn>
          <div className="text-xs uppercase tracking-wider text-white/50">What Clients Say</div>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-white">
            Reviews
          </h2>
          <p className="mt-3 text-white/70 max-w-2xl">
            Social proof, trust and our presence.
          </p>
        </FadeIn>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <FadeIn key={t.name} delay={0.04 * i}>
              <div className="glass noise rounded-3xl p-6 hover:shadow-glow2 transition">
                <div className="flex items-center gap-1 text-white/90">
                  {Array.from({ length: t.rating }).map((_, idx) => (
                    <Star key={idx} className="w-4 h-4" />
                  ))}
                </div>
                <p className="mt-4 text-sm text-white/75 leading-relaxed">“{t.quote}”</p>
                <div className="mt-5">
                  <div className="font-extrabold text-white">{t.name}</div>
                  <div className="text-xs text-white/55">{t.role}</div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
