import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { GITHUB_URL, NAV_LINKS } from "@/lib/site";
import { GitHubGlyph } from "./primitives";
import { useOS } from "@/hooks/useOS";
import { DOWNLOAD } from "@/lib/site";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const os = useOS();
  const primary = os === "mac" ? DOWNLOAD.mac : DOWNLOAD.windows;
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled ? "border-b border-hairline bg-canvas/80 backdrop-blur-md" : "border-b border-transparent",
      )}
    >
      <nav className="mx-auto flex h-16 max-w-container items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-2.5">
          <Logo />
          <span className="text-[17px] font-semibold tracking-tight text-ink">FlowType</span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[14px] text-ink-body transition-colors hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 rounded-lg border border-hairline px-3 py-2 text-sm text-ink-body transition-colors hover:border-white/15 hover:text-ink sm:inline-flex"
          >
            <GitHubGlyph className="h-4 w-4" />
            GitHub
          </a>
          <a
            href={primary.url}
            className="inline-flex h-9 items-center rounded-lg bg-white px-4 text-sm font-semibold text-black transition-transform hover:-translate-y-0.5"
          >
            Download
          </a>
        </div>
      </nav>
    </header>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "grid h-7 w-7 place-items-center rounded-md bg-gradient-to-b from-amber to-amber-soft text-black",
        className,
      )}
    >
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
        <path d="M5 8v8M9.5 5v14M14 9v6M18.5 11v2" />
      </svg>
    </span>
  );
}
