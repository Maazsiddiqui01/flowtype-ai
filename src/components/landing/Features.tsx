import { Mic, Sparkles, Keyboard, BookOpen, ShieldCheck } from "lucide-react";
import useInView from "@/hooks/use-in-view";

const features = [
  { icon: Mic, title: "Local Whisper", description: "On-device transcription via OpenAI Whisper. No cloud calls, no latency." },
  { icon: Sparkles, title: "AI Cleanup", description: "Grammar, fillers, and formatting handled automatically before paste." },
  { icon: Keyboard, title: "Global Hotkey", description: "Trigger dictation from any app with a single keyboard shortcut." },
  { icon: BookOpen, title: "Custom Modes", description: "Set up vocabularies and prompts tailored to your workflows." },
  { icon: ShieldCheck, title: "Private by Default", description: "Your voice data never leaves your machine. No exceptions." },
];

const Features = () => {
  const { ref, inView } = useInView();

  return (
    <section
      id="features"
      ref={ref}
      className="bg-surface py-24 md:py-32"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(16px)",
        transition: "opacity 0.8s cubic-bezier(.16,1,.3,1), transform 0.8s cubic-bezier(.16,1,.3,1)",
      }}
    >
      <div className="container">
        <div className="text-center">
          <p className="text-[13px] font-semibold uppercase tracking-widest text-primary">Features</p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            Everything you need, nothing you don't
          </h2>
        </div>

        <div className="mx-auto mt-16 grid max-w-4xl gap-x-12 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title}>
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                <f.icon className="h-5 w-5 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-[15px] font-semibold text-foreground">{f.title}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground">
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
