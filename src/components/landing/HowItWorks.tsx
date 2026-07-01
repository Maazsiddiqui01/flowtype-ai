import { Keyboard, Mic, ArrowDownToLine } from "lucide-react";
import { Section, Eyebrow, Reveal } from "./primitives";

const STEPS = [
  {
    n: "1",
    icon: Keyboard,
    title: "Hold the hotkey",
    body: "Press and hold your key from any app — your editor, browser, Slack, a terminal. No window to open, no button to find.",
  },
  {
    n: "2",
    icon: Mic,
    title: "Speak",
    body: "FlowType captures your voice and transcribes it on your machine with Faster-Whisper. Nothing is uploaded. Works with Wi-Fi off.",
  },
  {
    n: "3",
    icon: ArrowDownToLine,
    title: "Release. It's typed.",
    body: "Your words paste straight into wherever your cursor is — cleaned up by your own AI model if you want, or left exactly as spoken.",
  },
];

export function HowItWorks() {
  return (
    <Section id="how">
      <Reveal className="text-center">
        <Eyebrow>How it works</Eyebrow>
        <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
          Dictate in three seconds flat.
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {STEPS.map((s, i) => (
          <Reveal key={s.n} delay={i * 90}>
            <div className="card-edge relative h-full rounded-xl border border-hairline bg-surface p-6">
              <div className="mb-5 flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-lg border border-amber/30 bg-amber/10 text-amber">
                  <s.icon className="h-[18px] w-[18px]" />
                </span>
                <span className="font-mono text-sm text-ink-muted">0{s.n}</span>
              </div>
              <h3 className="text-lg font-semibold text-ink">{s.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-body">{s.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
