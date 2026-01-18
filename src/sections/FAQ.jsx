import React, { useState } from "react";
import Container from "../ui/Container.jsx";
import { FadeIn } from "../ui/Motion.jsx";
import { faqs } from "../ui/mock.js";

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section id="faq" className="relative mt-12 md:mt-16">
      <Container>
        <FadeIn>
          <div className="text-xs uppercase tracking-wider text-white/50">FAQ</div>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-white">
            Answers that remove doubt.
          </h2>
          <p className="mt-3 text-white/70 max-w-2xl">
            Questions you can ask.
          </p>
        </FadeIn>

        <div className="mt-8 grid gap-3">
          {faqs.map((f, idx) => {
            const isOpen = open === idx;
            return (
              <div
                key={idx}
                className="glass noise rounded-3xl p-5 transition hover:shadow-glow2"
                onMouseEnter={() => setOpen(idx)}
                onMouseLeave={() => setOpen(null)}
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="font-extrabold text-white">{f.q}</div>
                  <div className="text-white/60">{isOpen ? "—" : "+"}</div>
                </div>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr] mt-3 opacity-100" : "grid-rows-[0fr] mt-0 opacity-60"
                  }`}
                >
                  <div className="overflow-hidden text-sm text-white/75 leading-relaxed">
                    {f.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
