import React from "react";
import Container from "../ui/Container.jsx";
import SplineEmbed from "../ui/SplineEmbed.jsx";
import Button from "../ui/Button.jsx";
import { FadeIn, Float } from "../ui/Motion.jsx";
import { Sparkles, ArrowRight } from "lucide-react";

const ROBOT_SPLINE = "https://my.spline.design/genkubgreetingrobot-Q4Jn2mHHI9mtnEFtTveRs27b/";

export default function RobotCallout() {
  return (
    <section className="relative mt-12 md:mt-16">
      <Container>
        <div className="grid gap-6 lg:grid-cols-12 items-stretch">
          <FadeIn className="lg:col-span-7">
            <div className="glass-strong noise shimmer-border rounded-3xl p-7 h-full">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-white/50">
                <Sparkles className="w-4 h-4" /> Premium execution
              </div>
              <h3 className="mt-3 text-2xl sm:text-3xl font-extrabold text-white">
                We aligned with you.
              </h3>
              <p className="mt-3 text-white/70 leading-relaxed max-w-2xl">
                We are not selling our services, We keep your Trust and walk Together.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button href="/projects">View Projects <ArrowRight className="w-4 h-4" /></Button>
                <Button variant="ghost" href="/contact">Book a call</Button>
              </div>

              <div className="mt-8 grid sm:grid-cols-3 gap-3">
                {[
                  ["Trust", "We keep our promises , to make your path easier"],
                  ["Create", "We not create products ,we create path"],
                  ["Vision", "It's very simple , we are aligned with you"]
                ].map(([t, s]) => (
                  <div key={t} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="font-extrabold text-white text-sm">{t}</div>
                    <div className="mt-1 text-xs text-white/60">{s}</div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn className="lg:col-span-5">
            <Float className="h-full">
              <div className="glass-strong noise shimmer-border rounded-3xl p-4 h-full">
                <div className="text-xs uppercase tracking-wider text-white/50 px-2 pt-1">
                  Robot Accent (framed)
                </div>
                <div className="mt-3 h-[360px] sm:h-[420px] lg:h-[520px]">
                  <SplineEmbed
                    src={ROBOT_SPLINE}
                    title="Robot 3D"
                    framed={false}
                    className="w-full h-full"
                  />
                </div>
              </div>
            </Float>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
