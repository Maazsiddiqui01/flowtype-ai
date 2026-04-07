import { Mic, Sparkles, Keyboard, BookOpen, ShieldCheck } from "lucide-react";
import useInView from "@/hooks/use-in-view";

const features = [
  {
    icon: Mic,
    title: "Local Whisper Transcription",
    description: "Runs OpenAI's Whisper locally — no cloud, no latency, no data leaving your machine.",
  },
  {
    icon: Sparkles,
    title: "AI Cleanup",
    description: "Automatically fixes grammar, removes filler words, and formats your text cleanly.",
  },
  {
    icon: Keyboard,
    title: "Global Hotkey Dictation",
    description: "Press a shortcut from anywhere — FlowType captures and transcribes instantly.",
  },
  {
    icon: BookOpen,
    title: "Vocabulary & Modes",
    description: "Custom vocabularies and transcription modes tuned for your workflow.",
  },
  {
    icon: ShieldCheck,
    title: "Privacy-First",
    description: "Everything runs locally. Your voice data never touches an external server.",
  },
];

const Features = () => {
  const { ref, inView } = useInView();

  return (
    <section id="features" ref={ref} className="py-20 md:py-28">
      <div
        className={`container transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      >
        <h2 className="text-center text-2xl font-bold tracking-tight md:text-3xl">
          Features
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-center text-sm text-muted-foreground">
          Everything you need for fast, private, AI-powered dictation.
        </p>

        <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="group rounded-xl border border-border bg-surface p-6 transition-colors hover:border-primary/40 hover:bg-surface-elevated"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
