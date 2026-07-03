import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { ShieldCheck } from "lucide-react";
import { Section, Eyebrow, Reveal } from "@/components/landing/primitives";

/* ── Numbered doc steps ────────────────────────────────────────────────────────
 * Same card treatment as HowItWorks (icon chip + mono step number) so docs pages
 * read as part of the same design language, in a 2-up grid that fits 4–5 steps. */
export type DocStep = { icon: LucideIcon; title: string; body: ReactNode };

export function DocSteps({
  eyebrow,
  title,
  steps,
}: {
  eyebrow: ReactNode;
  title: string;
  steps: DocStep[];
}) {
  return (
    <Section>
      <Reveal className="text-center">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
          {title}
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-5 md:grid-cols-2">
        {steps.map((s, i) => (
          <Reveal key={s.title} delay={i * 90}>
            <div className="card-edge relative h-full rounded-xl border border-hairline bg-surface p-6">
              <div className="mb-5 flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-lg border border-amber/30 bg-amber/10 text-amber">
                  <s.icon className="h-[18px] w-[18px]" />
                </span>
                <span className="font-mono text-sm text-ink-muted">0{i + 1}</span>
              </div>
              <h3 className="text-lg font-semibold text-ink">{s.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-body [&_a:hover]:opacity-80 [&_a]:text-amber [&_a]:transition-opacity [&_strong]:font-semibold [&_strong]:text-ink">
                {s.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ── Shared reassurance block ─────────────────────────────────────────────────
 * Every API-key docs page ends with this so users deep-linked from the desktop
 * app get the same privacy answer no matter which provider they picked. */
export function KeyReassurance() {
  return (
    <Section>
      <Reveal className="mx-auto max-w-3xl">
        <div className="card-edge flex flex-col gap-4 rounded-xl border border-amber/25 bg-amber/[0.06] p-6 sm:flex-row">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-amber/30 bg-amber/10 text-amber">
            <ShieldCheck className="h-5 w-5" />
          </span>
          <div>
            <h2 className="text-[17px] font-semibold text-ink">
              Your key stays on your machine
            </h2>
            <p className="mt-2 text-[15px] leading-relaxed text-ink-body">
              FlowType stores it encrypted and calls the provider directly, never through our
              servers. AI cleanup is optional; FlowType works fully offline without it.
            </p>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
