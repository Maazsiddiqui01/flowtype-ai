import { useEffect, useState } from "react";

export type OS = "windows" | "mac" | "other";

/** Best-effort client OS detection so the primary download CTA matches the visitor. */
export function useOS(): OS {
  const [os, setOS] = useState<OS>("windows"); // SSR/default: lead with the shipped platform
  useEffect(() => {
    const ua = navigator.userAgent.toLowerCase();
    const platform = (navigator.platform || "").toLowerCase();
    if (ua.includes("mac") || platform.includes("mac")) setOS("mac");
    else if (ua.includes("win") || platform.includes("win")) setOS("windows");
    else setOS("other");
  }, []);
  return os;
}
