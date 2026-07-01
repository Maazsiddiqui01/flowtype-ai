import { Lock, WifiOff, CloudOff, Check } from "lucide-react";
import { Section, Eyebrow, Reveal, GitHubGlyph } from "./primitives";
import { GITHUB_URL } from "@/lib/site";

const POINTS = [
  ["Your voice is transcribed on your machine", "with Faster-Whisper. No upload, no exception."],
  ["No telemetry", "we don't phone home. No analytics pixel counting your words."],
  ["Your API keys are encrypted at rest", "and FlowType never proxies your requests — you talk to your AI provider directly."],
  ["Works fully offline", "pull the network cable and it still types."],
];

export function Privacy() {
  return (
    <Section id="privacy">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <Eyebrow>Private by architecture</Eyebrow>
          <h2 className="max-w-xl text-3xl font-semibold tracking-tight sm:text-4xl">
            100% on-device. Your audio never touches a server.
          </h2>
          <p className="mt-5 max-w-xl text-[16px] leading-relaxed text-ink-body">
            Every cloud dictation app has to reassure you your voice is safe — SOC 2 badges, HIPAA
            claims, "zero-retention" promises — <em className="text-ink">precisely because they ship
            your audio to their servers.</em> FlowType doesn't need a retention policy. There's
            nothing to retain.
          </p>
          <ul className="mt-7 space-y-4">
            {POINTS.map(([a, b]) => (
              <li key={a} className="flex gap-3">
                <Check className="mt-0.5 h-4 w-4 flex-none text-amber" />
                <span className="text-[15px] leading-snug">
                  <span className="font-medium text-ink">{a} </span>
                  <span className="text-ink-body">— {b}</span>
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-7 text-lg font-medium text-ink">
            Nothing to leak. Nothing to log. Nothing to subpoena.
          </p>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex items-center gap-2 text-sm text-amber transition-opacity hover:opacity-80"
          >
            <GitHubGlyph className="h-4 w-4" /> Read the source →
          </a>
        </Reveal>

        <Reveal delay={120}>
          <PrivacyVisual />
        </Reveal>
      </div>
    </Section>
  );
}

function PrivacyVisual() {
  return (
    <div className="relative mx-auto max-w-md">
      {/* outside: severed cloud + wifi */}
      <div className="mb-5 flex items-center justify-center gap-6 text-ink-muted/60">
        <div className="flex flex-col items-center gap-1">
          <CloudOff className="h-6 w-6" />
          <span className="text-[11px]">no cloud</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <WifiOff className="h-6 w-6" />
          <span className="text-[11px]">no upload</span>
        </div>
      </div>

      {/* the device — everything stays inside this boundary */}
      <div className="card-edge relative rounded-2xl border border-amber/25 bg-surface-2 p-6">
        <div className="absolute -inset-px rounded-2xl [background:radial-gradient(70%_60%_at_50%_0%,hsl(35_91%_55%/0.12),transparent)]" />
        <div className="relative">
          <div className="flex items-center justify-between">
            <span className="text-xs text-ink-muted">Your machine</span>
            <span className="inline-flex items-center gap-1.5 rounded-md border border-amber/30 bg-amber/10 px-2 py-1 text-[11px] font-medium text-amber">
              <Lock className="h-3 w-3" /> local
            </span>
          </div>

          <div className="my-8 grid place-items-center">
            <div className="relative grid h-24 w-24 place-items-center rounded-full border border-amber/30 bg-amber/5">
              <span className="absolute inset-0 rounded-full bg-amber/10 blur-xl animate-pulse-glow" />
              <Lock className="relative h-9 w-9 text-amber" />
            </div>
          </div>

          {/* waveform contained within the boundary */}
          <div className="flex h-8 items-center justify-center gap-[3px]">
            {Array.from({ length: 22 }).map((_, i) => (
              <span
                key={i}
                className="w-[3px] rounded-full bg-amber/70 animate-wave"
                style={{ height: "100%", animationDelay: `${(i % 8) * 100}ms` }}
              />
            ))}
          </div>
          <p className="mt-4 text-center text-[13px] text-ink-muted">
            audio in · text out · never leaves this box
          </p>
        </div>
      </div>
    </div>
  );
}
