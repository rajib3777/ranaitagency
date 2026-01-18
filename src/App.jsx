import React, { Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import SiteLayout from "./layout/SiteLayout.jsx";

// PERF: route-level code splitting (no visual change)
const Home = lazy(() => import("./pages/Home.jsx"));
const Services = lazy(() => import("./pages/Services.jsx"));
const Projects = lazy(() => import("./pages/Projects.jsx"));
const About = lazy(() => import("./pages/About.jsx"));
const Contact = lazy(() => import("./pages/Contact.jsx"));

export default function App() {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
