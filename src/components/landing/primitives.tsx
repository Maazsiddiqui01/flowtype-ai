import { useEffect, useRef, useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { Download } from "lucide-react";
import { cn } from "@/lib/utils";
import { DOWNLOAD, RELEASES_URL } from "@/lib/site";
import { useOS } from "@/hooks/useOS";

/* ── SmartLink ────────────────────────────────────────────────────────────────
 * Routes internal navigation through react-router <Link> so hrefs stay correct
 * on both the GitHub Pages subpath (/flowtype-ai/) and the root production domain
 * (basename is honored). External URLs render as a plain anchor; a bare "#section"
 * is treated as a homepage anchor ("/#section") so it works from any page. */
export function SmartLink({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: ReactNode;
}) {
  const isExternal = /^(https?:|mailto:|tel:)/.test(href);
  if (isExternal) {
    return (
      <a href={href} className={className} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  }
  const to = href.startsWith("#") ? `/${href}` : href;
  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
}

/* ── Reveal on scroll ─────────────────────────────────────────────────────── */
export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: keyof JSX.IntrinsicElements;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const Comp = Tag as any;
  return (
    <Comp
      ref={ref as any}
      className={cn("reveal", shown && "in", className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Comp>
  );
}

/* ── Section wrapper (container + vertical rhythm) ─────────────────────────── */
export function Section({
  id,
  children,
  className,
  containerClassName,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
}) {
  return (
    <section id={id} className={cn("scroll-mt-24 py-16 sm:py-24", className)}>
      <div className={cn("mx-auto w-full max-w-container px-6", containerClassName)}>{children}</div>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="mb-4 inline-flex items-center gap-2 text-[12.5px] font-medium uppercase tracking-[0.14em] text-amber">
      <span className="h-1 w-1 rounded-full bg-amber" />
      {children}
    </div>
  );
}

/* ── Prose (unique long-form content column) ──────────────────────────────────
 * Used on landing sub-pages to carry page-specific, intent-matched copy so each
 * page has substantial unique content (not just shared sections). */
export function Prose({
  id,
  eyebrow,
  title,
  children,
}: {
  id?: string;
  eyebrow?: ReactNode;
  title: string;
  children: ReactNode;
}) {
  return (
    <Section id={id}>
      <Reveal className="mx-auto max-w-3xl">
        {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
        <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-[28px]">{title}</h2>
        <div className="mt-6 space-y-4 text-[15.5px] leading-relaxed text-ink-body [&_strong]:font-semibold [&_strong]:text-ink">
          {children}
        </div>
      </Reveal>
    </Section>
  );
}

/* ── Brand glyphs ─────────────────────────────────────────────────────────── */
export function WindowsGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M3 5.5 10.5 4.4v7.1H3V5.5Zm0 13 7.5 1.1v-7H3v5.9Zm8.6 1.2L21 21V12.5h-9.4v7.2Zm0-15.4v7.2H21V3l-9.4 1.3Z" />
    </svg>
  );
}
export function AppleGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M16.36 12.9c-.02-2.3 1.88-3.4 1.96-3.46-1.07-1.56-2.73-1.78-3.32-1.8-1.41-.14-2.76.83-3.48.83-.72 0-1.82-.81-3-.79-1.54.02-2.96.9-3.75 2.28-1.6 2.78-.41 6.89 1.15 9.14.76 1.1 1.67 2.34 2.86 2.29 1.15-.05 1.58-.74 2.97-.74 1.38 0 1.77.74 2.98.72 1.23-.02 2.01-1.12 2.76-2.23.87-1.28 1.23-2.52 1.25-2.58-.03-.01-2.4-.92-2.42-3.65ZM14.1 6.15c.63-.77 1.06-1.83.94-2.9-.91.04-2.02.61-2.68 1.37-.59.67-1.1 1.75-.96 2.78 1.02.08 2.06-.52 2.7-1.25Z" />
    </svg>
  );
}
export function GitHubGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.09.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.36-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05a9.36 9.36 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.79-4.57 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.82 0 .27.18.59.69.49A10.26 10.26 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
    </svg>
  );
}

/* ── Buttons ──────────────────────────────────────────────────────────────── */
export function DownloadCTA({ size = "lg" }: { size?: "lg" | "md" }) {
  const os = useOS();
  const primary = os === "mac" ? DOWNLOAD.mac : DOWNLOAD.windows;
  const secondary = os === "mac" ? DOWNLOAD.windows : DOWNLOAD.mac;
  const Glyph = primary === DOWNLOAD.mac ? AppleGlyph : WindowsGlyph;
  const SecGlyph = secondary === DOWNLOAD.mac ? AppleGlyph : WindowsGlyph;
  const pad = size === "lg" ? "h-12 px-6 text-[15px]" : "h-10 px-5 text-sm";
  return (
    <div className="flex flex-col items-center gap-3 sm:flex-row">
      <a
        href={primary.url}
        className={cn(
          "group inline-flex items-center justify-center gap-2.5 rounded-lg bg-white font-semibold text-black transition-transform hover:-translate-y-0.5",
          pad,
        )}
      >
        <Glyph className="h-[18px] w-[18px]" />
        Download free for {primary.label}
        {primary.status === "beta" && <BetaTag />}
        <Download className="h-4 w-4 opacity-60 transition-transform group-hover:translate-y-0.5" />
      </a>
      <a
        href={secondary.url}
        className="inline-flex items-center gap-2 text-sm text-ink-body transition-colors hover:text-ink"
      >
        <SecGlyph className="h-4 w-4 opacity-70" />
        Also on {secondary.label}
        {secondary.status === "beta" && <span className="text-ink-muted">(beta)</span>}
        <span aria-hidden>→</span>
      </a>
    </div>
  );
}

export function BetaTag() {
  return (
    <span className="rounded bg-amber/15 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-amber">
      beta
    </span>
  );
}

export function Card({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "card-edge rounded-xl border border-hairline bg-surface p-6 transition-colors hover:border-white/12",
        className,
      )}
    >
      {children}
    </div>
  );
}
