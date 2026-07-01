import type { ReactNode } from "react";
import { Reveal, DownloadCTA, Eyebrow } from "./primitives";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow: ReactNode;
  title: ReactNode;
  subtitle: ReactNode;
  children?: ReactNode;
}) {
  return (
    <div className="relative overflow-hidden pt-32 sm:pt-40">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[420px] glow-amber" />
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-50 [mask-image:radial-gradient(55%_45%_at_50%_0%,black,transparent)]" />
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={60}>
          <h1 className="text-balance text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl">
            {title}
          </h1>
        </Reveal>
        <Reveal delay={120}>
          <p className="mx-auto mt-5 max-w-2xl text-pretty text-[17px] leading-relaxed text-ink-body">
            {subtitle}
          </p>
        </Reveal>
        <Reveal delay={180} className="mt-9 flex justify-center">
          <DownloadCTA />
        </Reveal>
        {children && (
          <Reveal delay={240} className="mt-6 text-[13px] text-ink-muted">
            {children}
          </Reveal>
        )}
      </div>
    </div>
  );
}
