import React from "react";
import Container from "../ui/Container.jsx";
import { FadeIn } from "../ui/Motion.jsx";
import ServicesSection from "../sections/ServicesSection.jsx";
import CTA from "../sections/CTA.jsx";

export default function Services() {
  return (
    <div className="pt-28 md:pt-32">
      <Container>
        <FadeIn>
          <div className="text-xs uppercase tracking-wider text-white/50">Services</div>
          <h1 className="mt-2 text-4xl sm:text-5xl font-extrabold text-white">
            Premium services for modern brands.
          </h1>
          <p className="mt-3 text-white/70 max-w-2xl">
            Web + UI, design, marketing and video — delivered with agency-grade quality and futuristic alignment.
          </p>
        </FadeIn>
      </Container>

      <ServicesSection showTitle={false} reloadEverySec={null} />
      <CTA />
      <div className="h-10" />
    </div>
  );
}
