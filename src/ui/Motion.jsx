import React from "react";
import { motion } from "framer-motion";

export function FadeIn({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      className={className}
      // PERF: animating CSS filters (blur) is expensive and causes noticeable jank on many devices.
      // Keep the same "premium" entrance feel with opacity + translate only.
      style={{ willChange: "transform, opacity" }}
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, ease: [0.2, 0.8, 0.2, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

export function Float({ children, className = "" }) {
  return (
    <motion.div
      className={className}
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: 4.0, repeat: Infinity, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}
