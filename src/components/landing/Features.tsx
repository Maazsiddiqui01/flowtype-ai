import { Mic, Sparkles, Keyboard, BookOpen, ShieldCheck } from "lucide-react";
import useInView from "@/hooks/use-in-view";

const features = [
  {
    icon: Mic,
    title: "Local Whisper",
    description: "Runs OpenAI's Whisper on your machine. No cloud calls, no latency.",
  },
  {
    icon: Sparkles,
    title: "AI Cleanup",
    description: "Fixes grammar, removes fillers, and formats text automatically.",
  },
  {
    icon: Keyboard,
    title: "Global Hotkey",
    description: "Trigger dictation from anywhere with a single shortcut.",
  },
  {
    icon: BookOpen,
    title: "Custom Modes",
    description: "Vocabularies and modes tailored to how you work.",
  },
  {
    icon: ShieldCheck,
    title: "Private by Default",
    description: "Your voice never leaves your computer. Period.",
  },
];

const Features = () => {
  const { ref, inView } = useInView();

  return (
    <section
      id="features"
      ref={ref}
      className="py-16 md:py-24"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(24px)",
        transition: "opacity 0.7s cubic-bezier(.16,1,.3,1), transform 0.7s cubic-bezier(.16,1,.3,1)",
      }}
    >
      <div className="container">
        <p className="text-center text-xs font-medium uppercase tracking-[0.15em] text-primary">
          Features
        </p>
        <h2 className="mt-3 text-center text-2xl font-bold tracking-tight md:text-3xl">
          Built for speed and privacy
        </h2>

        <div className="mx-auto mt-14 grid max-w-4xl gap-px overflow-hidden rounded-2xl border border-border/60 bg-border/60 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`bg-surface p-7 transition-colors duration-200 hover:bg-surface-elevated ${
                i >= 3 ? "lg:col-span-1" : ""
              }`}
            >
              <f.icon className="mb-4 h-5 w-5 text-primary/80" strokeWidth={1.5} />
              <h3 className="text-[15px] font-semibold leading-snug">{f.title}</h3>
              <p className="mt-1.5 text-[13px] leading-relaxed text-muted-foreground">
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
