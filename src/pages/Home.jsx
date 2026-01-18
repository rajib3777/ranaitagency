import React from "react";
import Hero from "../sections/Hero.jsx";
import ServicesSection from "../sections/ServicesSection.jsx";
import Industries from "../sections/Industries.jsx";
import Partners from "../sections/Partners.jsx";
import ComplianceTrust from "../sections/ComplianceTrust.jsx";
import PricingPackages from "../sections/PricingPackages.jsx";
import ProcessTimeline from "../sections/ProcessTimeline.jsx";
import TechStack from "../sections/TechStack.jsx";
import RobotCallout from "../sections/RobotCallout.jsx";
import ProjectsShowcase from "../sections/ProjectsShowcase.jsx";
import Testimonials from "../sections/Testimonials.jsx";
import FAQ from "../sections/FAQ.jsx";
import CTA from "../sections/CTA.jsx";

export default function Home() {
  return (
    <div>
      <Hero />

      {/* PERF: keep design identical but delay layout/paint work for below-the-fold */}
      <div className="cv-auto"><ServicesSection reloadEverySec={null} /></div>
      <div className="cv-auto"><Partners /></div>
      <div className="cv-auto"><ComplianceTrust /></div>
      <div className="cv-auto"><PricingPackages /></div>
      <div className="cv-auto"><Industries /></div>
      <div className="cv-auto"><ProcessTimeline /></div>
      <div className="cv-auto"><TechStack /></div>
      <div className="cv-auto"><RobotCallout /></div>
      <div className="cv-auto"><ProjectsShowcase limit={9} /></div>
      <div className="cv-auto"><Testimonials /></div>
      <div className="cv-auto"><FAQ /></div>
      <div className="cv-auto"><CTA /></div>
      <div className="h-10" />
    </div>
  );
}
