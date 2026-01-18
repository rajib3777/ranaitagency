import React from "react";
import Container from "../ui/Container.jsx";
import Button from "../ui/Button.jsx";
import Badge from "../ui/Badge.jsx";
import SplineEmbed from "../ui/SplineEmbed.jsx";
import { FadeIn } from "../ui/Motion.jsx";
import { ArrowRight, Sparkles, ShieldCheck, Zap } from "lucide-react";

const HERO_SPLINE = "https://my.spline.design/glassknotvortex-oXmkXfjdYQXCsR5LCEvyRpke/";

export default function Hero() {
  return (
    <section className="relative pt-28 md:pt-32">
      <div className="relative bg-stripes noise">
        <div className="absolute inset-0 opacity-70" />
        <div className="relative min-h-[92vh]">
          {/* Spline background */}
          <div className="absolute inset-0">
            <SplineEmbed
              src={HERO_SPLINE}
              title="Hero 3D"
              eager={true}
              className="w-full h-full"
            />
            {/* glossy overlay gradient to make text pop */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/25 to-black/70" />
          </div>

          {/* Content */}
          <Container className="relative z-10">
            <div className="grid gap-10 lg:grid-cols-12 items-center">
              <div className="lg:col-span-7">
                <FadeIn>
                  <div className="flex flex-wrap gap-2">
                    <Badge><Sparkles className="w-4 h-4" /> Futuristic • Premium • Fast</Badge>
                    <Badge><ShieldCheck className="w-4 h-4" /> Agency-Grade Quality</Badge>
                    <Badge><Zap className="w-4 h-4" /> Conversion-First</Badge>
                  </div>
                </FadeIn>

                <FadeIn delay={0.08}>
                  <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
                    Where innovation, expertise, and technology come together
                    <span className="block text-white/90">to shape the future of business.</span>
                  </h1>
                </FadeIn>

                <FadeIn delay={0.14}>
                  <p className="mt-5 max-w-xl text-base sm:text-lg text-white/75 leading-relaxed">
                    We build premium Web + UI, Design, Marketing & Video — crafted for modern IT firms and agencies that want an international-grade presence.
                  </p>
                </FadeIn>

                <FadeIn delay={0.2}>
                  <div className="mt-7 flex flex-wrap gap-3">
                    <Button href="/contact">
                      Start a Project <ArrowRight className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" href="/projects">
                      See Our Work
                    </Button>
                    <Button variant="subtle" href="/services">
                      Explore Services
                    </Button>
                  </div>
                </FadeIn>

                <FadeIn delay={0.28}>
                  <div className="mt-10 grid grid-cols-3 gap-3 max-w-xl">
                    {[
                      { k: "50+", v: "Projects Delivered" },
                      { k: "98%", v: "Client Satisfaction" },
                      { k: "24/7", v: "Support & Care" }
                    ].map((s) => (
                      <div key={s.v} className="glass rounded-2xl p-4">
                        <div className="text-2xl font-extrabold text-white">{s.k}</div>
                        <div className="mt-1 text-xs text-white/60">{s.v}</div>
                      </div>
                    ))}
                  </div>
                </FadeIn>
              </div>

              
            </div>

            <div className="h-16" />
          </Container>
        </div>
      </div>
    </section>
  );
}
