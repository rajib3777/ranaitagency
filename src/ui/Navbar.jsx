import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Container from "./Container.jsx";
import Button from "./Button.jsx";
import { navItems } from "./mock.js";
import logo from "../assets/client-logo.png";
import { Menu, X, ArrowRight } from "lucide-react";

function NavItem({ item }) {
  if (!item.dropdown) {
    return (
      <NavLink
        to={item.href}
        className={({ isActive }) =>
          `px-3 py-2 rounded-lg text-sm font-semibold transition ${
            isActive ? "text-white" : "text-white/75 hover:text-white"
          } hover:bg-white/5`
        }
      >
        {item.label}
      </NavLink>
    );
  }

  return (
    <div className="relative group">
      <NavLink
        to={item.href}
        className={({ isActive }) =>
          `px-3 py-2 rounded-lg text-sm font-semibold transition inline-flex items-center gap-2 ${
            isActive ? "text-white" : "text-white/75 hover:text-white"
          } hover:bg-white/5`
        }
      >
        {item.label}
        <span className="text-white/50 group-hover:text-white/80 transition">▾</span>
      </NavLink>

      {/* Hover dropdown */}
      <div className="absolute left-0 top-[calc(100%+10px)] hidden group-hover:block">
        <div className="dropdown-panel noise shimmer-border rounded-2xl p-2 w-72">
          <div className="text-[11px] uppercase tracking-wider text-white/50 px-2 py-2">
            {item.label}
          </div>
          <div className="h-px bg-white/10 mb-1" />
          <div className="grid">
            {item.dropdown.map((d) => (
              <Link
                key={d.href}
                to={d.href}
                className="rounded-xl px-3 py-2.5 text-sm font-semibold text-white/90 hover:text-white hover:bg-white/6 transition flex items-center justify-between"
              >
                <span>{d.label}</span>
                <ArrowRight className="w-4 h-4 opacity-60" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-[9999]">
      <div className={`transition ${scrolled ? "pt-3" : "pt-5"}`}>
        <Container>
          <div className={`glass noise shimmer-border rounded-2xl px-4 py-3 flex items-center justify-between ${scrolled ? "shadow-glow2" : "shadow-glow"}`}>
            <Link to="/" className="flex items-center gap-2 min-w-0">
              <img src={logo} alt="Rana IT Agency" className="h-10 w-auto logo-white" />
            <span className="inline text-white font-extrabold tracking-tight text-sm sm:text-base truncate max-w-[40vw]">Rana IT Agency</span></Link>

            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <NavItem key={item.label} item={item} />
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-2">
              <Button variant="ghost" href="/projects">
                View Work
              </Button>
              <Button href="/contact">Get a Quote</Button>
            </div>

            <button
              className="lg:hidden focus-ring rounded-xl p-2 text-white/80 hover:text-white hover:bg-white/5 border border-white/10"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {open ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile sheet */}
          {open && (
            <div className="lg:hidden mt-3 glass-strong noise shimmer-border rounded-2xl p-3">
              <div className="grid gap-1">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.href}
                    className="rounded-xl px-3 py-3 text-sm font-semibold text-white/85 hover:bg-white/6 hover:text-white transition"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              <div className="mt-3 grid grid-cols-2 gap-2">
                <Button variant="ghost" href="/projects" className="w-full">
                  View Work
                </Button>
                <Button href="/contact" className="w-full">
                  Get a Quote
                </Button>
              </div>
            </div>
          )}
        </Container>
      </div>
    </header>
  );
}
