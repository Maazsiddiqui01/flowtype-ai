import { Mic, Wand2, KeyRound, Check } from "lucide-react";
import { Section, Eyebrow, Reveal } from "./primitives";

const GROUPS = [
  {
    icon: Mic,
    kicker: "Speak",
    title: "Works everywhere you already type",
    items: [
      ["Any app", "Editors, browsers, chat, docs, terminals — if the cursor blinks, FlowType types there."],
      ["Push-to-talk", "Hold a key, talk, release. No mode-switching, no ceremony."],
      ["Whisper-grade accuracy", "On-device Faster-Whisper, tuned for real speech, not lab conditions."],
      ["Offline", "No connection needed to transcribe. Ever."],
    ],
  },
  {
    icon: Wand2,
    kicker: "Refine",
    title: "Polished output, your rules",
    items: [
      ["Bring your own AI", "Plug in OpenRouter, OpenAI, or Anthropic to clean filler and format — on your key, your cost."],
      ["Or don't", "Prefer the raw transcript? Skip cleanup entirely. Zero AI, zero external calls."],
      ["Per-app modes", "Different cleanup for a code editor vs. an email draft."],
      ["Technical mode", "Understands code, product names, and dev jargon without mangling them."],
    ],
  },
  {
    icon: KeyRound,
    kicker: "Own",
    title: "No lock-in, nothing rented",
    items: [
      ["No account", "Nothing to sign up for, nothing to lose access to."],
      ["No subscription", "No monthly fee, no word cap, no per-seat billing."],
      ["No model lock-in", "You pick the model, not us — ride every future improvement."],
      ["Open source", "The whole app is on GitHub. Audit the privacy claim yourself."],
    ],
  },
];

export function Features() {
  return (
    <Section id="features">
      <Reveal className="text-center">
        <Eyebrow>Features</Eyebrow>
        <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
          Everything the paid apps do. On your machine. For free.
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-5 lg:grid-cols-3">
        {GROUPS.map((g, gi) => (
          <Reveal key={g.kicker} delay={gi * 90}>
            <div className="card-edge h-full rounded-xl border border-hairline bg-surface p-6">
              <div className="mb-5 flex items-center gap-2.5">
                <span className="grid h-9 w-9 place-items-center rounded-lg border border-hairline bg-surface-2 text-amber">
                  <g.icon className="h-[18px] w-[18px]" />
                </span>
                <span className="text-[12.5px] font-medium uppercase tracking-[0.14em] text-ink-muted">
                  {g.kicker}
                </span>
              </div>
              <h3 className="text-[17px] font-semibold leading-snug text-ink">{g.title}</h3>
              <ul className="mt-5 space-y-4">
                {g.items.map(([name, desc]) => (
                  <li key={name} className="flex gap-3">
                    <Check className="mt-0.5 h-4 w-4 flex-none text-amber" />
                    <span className="text-[14.5px] leading-snug">
                      <span className="font-medium text-ink">{name}. </span>
                      <span className="text-ink-body">{desc}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
