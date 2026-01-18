import React, { useEffect, useRef, useState } from "react";

/**
 * Performance-first Spline embed:
 * - Mount iframe only when near viewport (IntersectionObserver)
 * - Avoid auto reload by default (reload causes jank)
 * - On touch devices: default to scroll-friendly mode, user can tap "Interact" to enable pointer events
 */
export default function SplineEmbed({
  src,
  title = "Spline",
  className = "",
  reloadEverySec = null,
  allow = "autoplay; fullscreen; clipboard-write",
  framed = false,
  eager = false,
  minHeightClass = "",
  /**
   * Defer mounting the iframe a bit to avoid blocking first render.
   * This keeps the design the same (same container) but removes the "open -> jank" feeling.
   */
  deferMs = 1200
}) {
  const [key, setKey] = useState(0);
  const [inView, setInView] = useState(false);
  const [ready, setReady] = useState(false);
  const [touchMode, setTouchMode] = useState(false);
  const [interactive, setInteractive] = useState(false);
  const hostRef = useRef(null);

  useEffect(() => {
    const mq = window.matchMedia?.("(hover: none) and (pointer: coarse)");
    const apply = () => setTouchMode(!!mq?.matches);
    apply();
    mq?.addEventListener?.("change", apply);
    return () => mq?.removeEventListener?.("change", apply);
  }, []);

  // When eager, still defer mount until after first paint/idle to keep initial interaction smooth.
  useEffect(() => {
    let cancelled = false;
    const start = () => {
      const run = () => {
        if (cancelled) return;
        setReady(true);
      };

      // requestIdleCallback when available (best), otherwise timeout.
      if (typeof window !== "undefined" && "requestIdleCallback" in window) {
        // @ts-ignore
        window.requestIdleCallback(run, { timeout: Math.max(1200, deferMs) });
      } else {
        window.setTimeout(run, Math.max(900, deferMs));
      }
    };

    // If user interacts quickly, load earlier.
    const onFirstInput = () => {
      window.removeEventListener("pointerdown", onFirstInput);
      window.removeEventListener("keydown", onFirstInput);
      if (!cancelled) setReady(true);
    };
    window.addEventListener("pointerdown", onFirstInput, { once: true, passive: true });
    window.addEventListener("keydown", onFirstInput, { once: true });

    // Start deferring after first frame.
    const raf = requestAnimationFrame(start);
    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      window.removeEventListener("pointerdown", onFirstInput);
      window.removeEventListener("keydown", onFirstInput);
    };
  }, [deferMs]);

  useEffect(() => {
    if (eager) {
      // show as soon as we're ready
      if (ready) setInView(true);
      return;
    }

    const el = hostRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const ent of entries) {
          if (ent.isIntersecting) setInView(true);
        }
      },
      { root: null, rootMargin: "500px 0px", threshold: 0.01 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [eager, ready]);

  // For non-eager, only mount when BOTH ready and in view.
  const shouldMount = ready && inView;

  useEffect(() => {
    if (!reloadEverySec) return;
    const t = setInterval(() => setKey((k) => k + 1), reloadEverySec * 1000);
    return () => clearInterval(t);
  }, [reloadEverySec]);

  const frameClass = framed
    ? "glass-strong shimmer-border rounded-3xl overflow-hidden"
    : "rounded-3xl overflow-hidden";

  const pointerEvents = touchMode ? (interactive ? "auto" : "none") : "auto";

  return (
    <div ref={hostRef} className={`${frameClass} ${minHeightClass} ${className} relative`}>
      {!shouldMount && (
        <div className="w-full h-full min-h-[220px] bg-gradient-to-br from-white/8 via-white/5 to-white/3 border border-white/10 rounded-3xl" />
      )}

      {shouldMount && (
        <iframe
          key={key}
          src={src}
          title={title}
          frameBorder="0"
          width="100%"
          height="100%"
          allow={allow}
          loading="lazy"
          fetchpriority="low"
          className="w-full h-full"
          style={{ pointerEvents, contain: "layout paint size" }}
        />
      )}

      {touchMode && shouldMount && (
        <div className="absolute inset-x-0 bottom-3 flex justify-center pointer-events-none">
          {!interactive ? (
            <button
              className="pointer-events-auto focus-ring rounded-full border border-white/14 bg-black/40 backdrop-blur-md px-4 py-2 text-xs font-semibold text-white/85 hover:text-white hover:bg-black/55 transition"
              onClick={() => setInteractive(true)}
              type="button"
            >
              Tap to interact with 3D
            </button>
          ) : (
            <button
              className="pointer-events-auto focus-ring rounded-full border border-white/14 bg-black/40 backdrop-blur-md px-4 py-2 text-xs font-semibold text-white/85 hover:text-white hover:bg-black/55 transition"
              onClick={() => setInteractive(false)}
              type="button"
            >
              Exit 3D
            </button>
          )}
        </div>
      )}
    </div>
  );
}
