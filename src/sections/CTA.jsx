import React from "react";
import Container from "../ui/Container.jsx";
import Button from "../ui/Button.jsx";
import { FadeIn } from "../ui/Motion.jsx";
import { Sparkles, ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative mt-12 md:mt-16">
      <Container>
        <FadeIn>
          <div className="glass-strong noise shimmer-border rounded-3xl p-8 md:p-10 overflow-hidden relative">
            <div className="absolute -top-24 -right-24 w-[320px] h-[320px] rounded-full bg-violet-500/20 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 w-[320px] h-[320px] rounded-full bg-blue-500/20 blur-3xl" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-white/50">
                <Sparkles className="w-4 h-4" /> Premium CTA
              </div>
              <h3 className="mt-3 text-3xl sm:text-4xl font-extrabold text-white">
                Ready to launch a premium brand experience?
              </h3>
              <p className="mt-3 text-white/70 max-w-2xl">
                Tell us your goal — we’ll respond with a clean plan, timeline and a premium execution strategy.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button href="/contact">
                  Get a Quote <ArrowRight className="w-4 h-4" />
                </Button>
                <Button variant="ghost" href="/projects">Explore our work</Button>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
