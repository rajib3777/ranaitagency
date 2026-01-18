import React from "react";
import Container from "../ui/Container.jsx";
import { FadeIn } from "../ui/Motion.jsx";
import SplineEmbed from "../ui/SplineEmbed.jsx";
import Button from "../ui/Button.jsx";
import { serviceCards } from "../ui/mock.js";
import { ArrowRight } from "lucide-react";

const SERVICES_SPLINE = "https://my.spline.design/webdiagram-zcYmGY3EKDpOMX4l5nDE8z4b/";

export default function ServicesSection({ showTitle = true, reloadEverySec = null }) {
  return (
    <section className="relative mt-12 md:mt-16" id="services">
      <Container>
        {showTitle && (
          <FadeIn>
            <div className="flex items-end justify-between gap-6 flex-wrap">
              <div>
                <div className="text-xs uppercase tracking-wider text-white/50">Services</div>
                <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-white">
                  Services We Provide.
                </h2>
                <p className="mt-3 text-white/75 max-w-2xl">
                  We don't create service,We create trust and get aligned.
                </p>
              </div>
              <Button href="/contact" variant="ghost">
                Get a proposal <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </FadeIn>
        )}

        {/* FULL SIZE spline (as requested) */}
        <FadeIn delay={0.08}>
          <div className="mt-8 glass-strong noise shimmer-border rounded-3xl overflow-hidden">
            <div className="flex items-center justify-between gap-4 px-5 py-4 border-b border-white/10">
              <div>
                <div className="text-xs uppercase tracking-wider text-white/50">Services Map</div>
                <div className="text-sm text-white/80">{reloadEverySec}</div>
              </div>
              <div className="text-xs text-white/55">Let's build together</div>
            </div>
            <div className="h-[420px] sm:h-[520px] lg:h-[620px]">
              <SplineEmbed
                src={SERVICES_SPLINE}
                title="Services 3D"
                reloadEverySec={reloadEverySec}
                className="w-full h-full"
              />
            </div>
          </div>
        </FadeIn>

        {/* 2D icon services grid */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
          {serviceCards.map(({ id, title, desc, Icon, accent }, idx) => (
            <FadeIn key={id} delay={0.03 * idx}>
              <a
                href={`/services#${id}`}
                className="group glass noise rounded-3xl p-6 h-full flex flex-col transition hover:translate-y-[-2px] hover:shadow-glow2"
              >
                <div className={`rounded-2xl p-3 bg-gradient-to-br ${accent} border border-white/12`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="mt-4 text-lg font-extrabold text-white">{title}</div>
                <p className="mt-2 text-sm text-white/75 leading-relaxed flex-1">{desc}</p>
                <div className="mt-4 text-sm font-semibold text-white/80 group-hover:text-white transition inline-flex items-center gap-2">
                  Explore <span className="opacity-80 group-hover:opacity-100">→</span>
                </div>
              </a>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
