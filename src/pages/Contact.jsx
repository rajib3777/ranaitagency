import React from "react";
import Container from "../ui/Container.jsx";
import { FadeIn } from "../ui/Motion.jsx";
import Button from "../ui/Button.jsx";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <div className="pt-28 md:pt-32">
      <Container>
        <FadeIn>
          <div className="text-xs uppercase tracking-wider text-white/50">Contact</div>
          <h1 className="mt-2 text-4xl sm:text-5xl font-extrabold text-white">
            Let’s build something premium.
          </h1>
          <p className="mt-3 text-white/70 max-w-2xl">
            This is frontend-only; backend form submission can be connected later. For now it looks and feels premium.
          </p>
        </FadeIn>

        <div className="mt-10 grid gap-6 lg:grid-cols-12">
          <FadeIn className="lg:col-span-7">
            <div className="glass-strong noise shimmer-border rounded-3xl p-6 md:p-7">
              <div className="text-lg font-extrabold text-white">Request a Proposal</div>
              <p className="mt-2 text-sm text-white/70">
                Fill the form — later you can connect it to any backend (Node, PHP, Firebase, etc.).
              </p>

              <form className="mt-6 grid gap-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input className="focus-ring rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40" placeholder="Full Name" />
                  <input className="focus-ring rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40" placeholder="Email Address" />
                </div>
                <input className="focus-ring rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40" placeholder="Project Type (Web / UI / Marketing / Video)" />
                <textarea rows="5" className="focus-ring rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40" placeholder="Tell us about your project..." />
                <div className="flex flex-wrap gap-3">
                  <Button type="button">
                    Send Request <ArrowRight className="w-4 h-4" />
                  </Button>
                  <Button type="button" variant="ghost">Download Company Profile</Button>
                </div>
                <div className="text-xs text-white/50">
                  * Demo button only (no backend). Connect later.
                </div>
              </form>
            </div>
          </FadeIn>

          <FadeIn className="lg:col-span-5">
            <div className="glass noise rounded-3xl p-6 md:p-7">
              <div className="text-lg font-extrabold text-white">Direct Contact</div>
              <div className="mt-5 grid gap-3 text-sm text-white/75">
                <div className="flex items-center gap-2"><Phone className="w-4 h-4 opacity-70" /> +880 1335-5590137</div>
                <div className="flex items-center gap-2"><Mail className="w-4 h-4 opacity-70" />agency@ranait.cloud</div>
                <div className="flex items-center gap-2"><MapPin className="w-4 h-4 opacity-70" />East Shewrapara,Mirpur ,Dhaka, Bangladesh</div>
              </div>

              <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/70">
                <div className="font-extrabold text-white">Office Hours</div>
                <div className="mt-1">Sat–Thu: 10:00 AM – 7:00 PM</div>
                <div>Friday: Closed</div>
              </div>

              <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/70">
                <div className="font-extrabold text-white">What you’ll get</div>
                <ul className="mt-2 grid gap-1">
                  <li>• Premium UI + animations</li>
                  <li>• Mobile-perfect responsiveness</li>
                  <li>• Backend-ready structure</li>
                  <li>• Clear sections to sell services</li>
                </ul>
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>

      <div className="h-10" />
    </div>
  );
}
