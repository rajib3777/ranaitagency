import React from "react";
import Container from "./Container.jsx";
import Button from "./Button.jsx";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative mt-16">
      <div className="absolute inset-0 bg-stripes opacity-60" />
      <Container className="relative pb-10">
        <div className="dropdown-panel noise shimmer-border rounded-3xl p-8 md:p-10">
          <div className="grid gap-10 md:grid-cols-3">
            <div>
              <div className="text-xl font-extrabold text-white">Rana IT Agency</div>
              <p className="mt-3 text-sm text-white/80 leading-relaxed">
                Premium Web + UI, Design, Marketing & Video — designed to make your brand feel international.
              </p>
              <div className="mt-5 flex gap-2 flex-wrap">
                <Button href="/contact">Start a Project</Button>
                <Button variant="ghost" href="/projects">See Work</Button>
              </div>

              <div className="mt-5 flex items-center gap-2 text-white/70">
                <a className="focus-ring rounded-xl p-2 hover:bg-white/6 border border-white/12" href="#" aria-label="Facebook"><Facebook className="w-5 h-5" /></a>
                <a className="focus-ring rounded-xl p-2 hover:bg-white/6 border border-white/12" href="#" aria-label="Instagram"><Instagram className="w-5 h-5" /></a>
                <a className="focus-ring rounded-xl p-2 hover:bg-white/6 border border-white/12" href="#" aria-label="LinkedIn"><Linkedin className="w-5 h-5" /></a>
              </div>
            </div>

            <div className="grid gap-3 text-sm text-white/80">
              <div className="text-xs uppercase tracking-wider text-white/60">Contact</div>
              <div className="flex items-center gap-2"><Phone className="w-4 h-4 opacity-80" /> +880 1335-5590137</div>
              <div className="flex items-center gap-2"><Mail className="w-4 h-4 opacity-80" /> agency@ranait.cloud</div>
              <div className="flex items-center gap-2"><MapPin className="w-4 h-4 opacity-80" />East Shewrapara,Mirpur ,Dhaka, Bangladesh</div>

              <div className="mt-4 rounded-2xl border border-white/12 bg-white/6 p-4">
                <div className="font-extrabold text-white text-sm">Office Hours</div>
                <div className="mt-1 text-xs text-white/70">Sat–Thu: 10:00 AM – 7.00 PM</div>
                <div className="text-xs text-white/70">Friday: Closed</div>
              </div>
            </div>

            <div className="grid gap-2 text-sm">
              <div className="text-xs uppercase tracking-wider text-white/60">Quick Links</div>
              <a className="text-white/80 hover:text-white transition" href="/services">Services</a>
              <a className="text-white/80 hover:text-white transition" href="/projects">Projects</a>
              <a className="text-white/80 hover:text-white transition" href="/about">About</a>
              <a className="text-white/80 hover:text-white transition" href="/contact">Contact</a>
              <div className="mt-6 text-xs text-white/55">
                © {new Date().getFullYear()} Rana IT Agency. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
