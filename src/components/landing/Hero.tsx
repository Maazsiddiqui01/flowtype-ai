import { useEffect, useState } from "react";
import { Lock, ShieldCheck } from "lucide-react";
import { Reveal, DownloadCTA, GitHubGlyph } from "./primitives";
import { GITHUB_URL } from "@/lib/site";

const RAW = "hey can you send me the notes from todays standup";
const POLISHED = "Hey — can you send me the notes from today's standup?";

export function Hero() {
  return (
    <div id="top" className="relative overflow-hidden pt-28 sm:pt-36">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[560px] glow-amber" />
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-60 [mask-image:radial-gradient(60%_50%_at_50%_0%,black,transparent)]" />

      <div className="relative mx-auto max-w-container px-6 text-center">
        <Reveal>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-hairline bg-surface/60 px-3.5 py-1.5 text-[13px] text-ink-body transition-colors hover:border-white/15 hover:text-ink"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-amber" />
            Free &amp; open source — read the code
            <span aria-hidden>→</span>
          </a>
        </Reveal>

        <Reveal delay={60}>
          <h1 className="mx-auto max-w-4xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
            <span className="text-gradient">Speak. It types.</span>
            <br />
            Your voice never leaves your machine.
          </h1>
        </Reveal>

        <Reveal delay={120}>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-[17px] leading-relaxed text-ink-body">
            Free, open-source dictation for every app you use. Hold a hotkey, speak, and FlowType
            transcribes on-device with Whisper — then pastes into whatever you're in. No
            subscription, no account, no upload.
          </p>
        </Reveal>

        <Reveal delay={180}>
          <div className="mt-9 flex flex-col items-center gap-5">
            <DownloadCTA />
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm text-ink-muted transition-colors hover:text-ink-body"
            >
              <GitHubGlyph className="h-4 w-4" />
              View the source on GitHub →
            </a>
          </div>
        </Reveal>

        <Reveal delay={240}>
          <p className="mt-6 text-[13px] text-ink-muted">
            Free &amp; open-source · No account · 100% on-device · macOS beta available
          </p>
        </Reveal>

        <Reveal delay={300} className="mt-14 sm:mt-16">
          <HeroDemo />
        </Reveal>
      </div>
    </div>
  );
}

function HeroDemo() {
  const [text, setText] = useState("");
  const [phase, setPhase] = useState<"typing" | "polished">("typing");

  useEffect(() => {
    const timers: number[] = [];
    let i = 0;
    const start = () => {
      setPhase("typing");
      setText("");
      i = 0;
      const tick = () => {
        i += 1;
        setText(RAW.slice(0, i));
        if (i < RAW.length) timers.push(window.setTimeout(tick, 42 + Math.random() * 40));
        else
          timers.push(
            window.setTimeout(() => {
              setPhase("polished");
              setText(POLISHED);
              timers.push(window.setTimeout(start, 2800));
            }, 550),
          );
      };
      timers.push(window.setTimeout(tick, 500));
    };
    start();
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="mx-auto max-w-2xl">
      <div className="card-edge overflow-hidden rounded-2xl border border-hairline bg-surface-2 text-left">
        <div className="flex items-center gap-1.5 border-b border-hairline px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="ml-3 text-xs text-ink-muted">New message</span>
          <span className="ml-auto inline-flex items-center gap-1.5 rounded-md border border-hairline bg-surface px-2 py-1 text-[11px] text-ink-muted">
            <Lock className="h-3 w-3 text-amber" /> on-device · no upload
          </span>
        </div>

        <div className="min-h-[132px] px-5 py-6">
          <p className="text-[17px] leading-relaxed text-ink">
            {text}
            <span className="ml-0.5 inline-block h-5 w-[2px] translate-y-1 animate-blink bg-amber align-middle" />
          </p>
          {phase === "polished" && (
            <span className="mt-3 inline-flex items-center gap-1.5 rounded-md bg-amber/10 px-2 py-1 text-[11px] font-medium text-amber">
              <ShieldCheck className="h-3 w-3" /> cleaned up locally
            </span>
          )}
        </div>

        <div className="flex items-center gap-4 border-t border-hairline bg-surface px-5 py-3.5">
          <div className="relative">
            <span className="absolute -inset-1 rounded-lg bg-amber/25 blur-md animate-pulse-glow" />
            <kbd className="relative rounded-lg border border-amber/40 bg-amber/10 px-2.5 py-1.5 font-mono text-xs text-amber">
              Ctrl ⇧ Space
            </kbd>
          </div>
          <div className="flex h-8 items-center gap-[3px]">
            {Array.from({ length: 28 }).map((_, i) => (
              <span
                key={i}
                className="w-[3px] origin-center rounded-full bg-amber/80 animate-wave"
                style={{ height: "100%", animationDelay: `${(i % 10) * 90}ms` }}
              />
            ))}
          </div>
          <span className="ml-auto text-xs text-ink-muted">
            {phase === "typing" ? "Listening…" : "Ready"}
          </span>
        </div>
      </div>
    </div>
  );
}
