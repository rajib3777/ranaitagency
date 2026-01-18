import React, { useMemo, useState } from "react";
import Container from "../ui/Container.jsx";
import { FadeIn } from "../ui/Motion.jsx";
import Button from "../ui/Button.jsx";
import { projects } from "../ui/mock.js";
import { ArrowRight } from "lucide-react";

const tags = ["All", "Web", "UI", "Brand", "Design", "Marketing", "SMM", "Ads", "Video", "Editing"];

export default function ProjectsShowcase({ limit = 8 }) {
  const [active, setActive] = useState("All");

  const filtered = useMemo(() => {
    const list = active === "All"
      ? projects
      : projects.filter((p) => p.tags.includes(active));
    return list.slice(0, limit);
  }, [active, limit]);

  return (
    <section id="showcase" className="relative mt-12 md:mt-16">
      <Container>
        <FadeIn>
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div>
              <div className="text-xs uppercase tracking-wider text-white/50">Projects</div>
              <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-white">
                Work that looks expensive — on purpose.
              </h2>
              <p className="mt-3 text-white/70 max-w-2xl">
                Showcase with picture mock data, aligned with a premium agency style. Backend can be connected later.
              </p>
            </div>
            <Button variant="ghost" href="/projects">
              View all <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mt-6 flex flex-wrap gap-2">
            {tags.map((t) => (
              <button
                key={t}
                className={`focus-ring rounded-full px-3 py-1.5 text-xs font-semibold border transition ${
                  active === t
                    ? "bg-white text-black border-white/20"
                    : "bg-white/5 text-white/75 border-white/10 hover:bg-white/8 hover:text-white"
                }`}
                onClick={() => setActive(t)}
              >
                {t}
              </button>
            ))}
          </div>
        </FadeIn>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p, idx) => (
            <FadeIn key={p.id} delay={0.03 * idx}>
              <div className="group glass noise rounded-3xl overflow-hidden transition hover:translate-y-[-2px] hover:shadow-glow2">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-black/10 opacity-90" />
                  <div className="absolute left-4 bottom-4 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="rounded-full bg-white/10 border border-white/12 px-2.5 py-1 text-[11px] text-white/80 backdrop-blur-md">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-5">
                  <div className="text-lg font-extrabold text-white">{p.title}</div>
                  <p className="mt-2 text-sm text-white/70 leading-relaxed">{p.blurb}</p>
                  <div className="mt-4 text-sm font-semibold text-white/75 group-hover:text-white transition inline-flex items-center gap-2">
                    View details <span className="opacity-70 group-hover:opacity-100">→</span>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
