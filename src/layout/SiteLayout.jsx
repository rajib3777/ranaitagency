import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../ui/Navbar.jsx";
import Footer from "../ui/Footer.jsx";
import ScrollToTop from "../ui/ScrollToTop.jsx";

export default function SiteLayout() {
  const location = useLocation();
  return (
    <div className="min-h-screen relative flex flex-col">
      <ScrollToTop pathname={location.pathname} />
      <Navbar />
      <main className="relative flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
