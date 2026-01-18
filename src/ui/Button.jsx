import React from "react";

export default function Button({
  children,
  variant = "primary",
  href,
  onClick,
  className = "",
  type = "button"
}) {
  const base =
    "focus-ring inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition active:scale-[0.99]";
  const styles = {
    primary:
      "bg-white text-black hover:bg-white/90 shadow-glow",
    ghost:
      "bg-white/6 text-white hover:bg-white/10 border border-white/12",
    subtle:
      "bg-transparent text-white/80 hover:text-white hover:bg-white/5"
  }[variant];

  const Comp = href ? "a" : "button";
  const props = href ? { href } : { onClick, type };

  return (
    <Comp className={`${base} ${styles} ${className}`} {...props}>
      {children}
    </Comp>
  );
}
