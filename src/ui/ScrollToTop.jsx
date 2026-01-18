import { useEffect } from "react";

export default function ScrollToTop({ pathname }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}
