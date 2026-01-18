import React from "react";

export default function Badge({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/6 px-3 py-1 text-xs text-white/80 backdrop-blur-md">
      {children}
    </span>
  );
}
