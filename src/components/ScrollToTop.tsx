import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * On client-side navigation: if the URL has a hash, smooth-scroll to that section
 * (so homepage-section links like "/#features" work from any page); otherwise
 * reset to the top of the page.
 */
export function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}
