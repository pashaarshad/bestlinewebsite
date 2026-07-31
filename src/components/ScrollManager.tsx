import { useLocation } from "@tanstack/react-router";
import { useEffect } from "react";

export function ScrollManager() {
  const location = useLocation();

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (location.hash) {
      const target = document.getElementById(location.hash.slice(1));
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }

    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location.pathname, location.hash]);

  return null;
}
