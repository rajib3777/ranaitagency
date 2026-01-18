import React from "react";
import Container from "../ui/Container.jsx";
import { FadeIn } from "../ui/Motion.jsx";
import ProjectsShowcase from "../sections/ProjectsShowcase.jsx";
import Testimonials from "../sections/Testimonials.jsx";
import CTA from "../sections/CTA.jsx";

export default function Projects() {
  return (
    <div className="pt-28 md:pt-32">
      <Container>
        <FadeIn>
          <div className="text-xs uppercase tracking-wider text-white/50">Work</div>
          <h1 className="mt-2 text-4xl sm:text-5xl font-extrabold text-white">
            Projects & case studies.
          </h1>
          <p className="mt-3 text-white/70 max-w-2xl">
            A premium showcase layout with image mock data — ready for backend/CMS later.
          </p>
        </FadeIn>
      </Container>

      <ProjectsShowcase limit={12} />
      <Testimonials />
      <CTA />
      <div className="h-10" />
    </div>
  );
}
