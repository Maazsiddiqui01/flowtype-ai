import { Mic, Sparkles, Keyboard, BookOpen, ShieldCheck } from "lucide-react";
import useInView from "@/hooks/use-in-view";

const features = [
  { icon: Mic, title: "Local Whisper", description: "On-device transcription. No cloud, no latency." },
  { icon: Sparkles, title: "AI Cleanup", description: "Grammar, fillers, formatting — handled automatically." },
  { icon: Keyboard, title: "Global Hotkey", description: "One shortcut from anywhere. No app switching." },
  { icon: BookOpen, title: "Custom Modes", description: "Vocabularies tailored to how you work." },
  { icon: ShieldCheck, title: "Private", description: "Your voice stays on your machine." },
];

const Features = () => {
  const { ref, inView } = useInView();

  return (
    <section
      id="features"
      ref={ref}
      className="py-24 md:py-32"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(16px)",
        transition: "opacity 0.9s cubic-bezier(.16,1,.3,1), transform 0.9s cubic-bezier(.16,1,.3,1)",
      }}
    >
      <div className="container">
        <h2 className="text-center text-lg font-semibold tracking-tight md:text-xl">
          What it does
        </h2>

        <div className="mx-auto mt-14 grid max-w-2xl gap-x-16 gap-y-10 sm:grid-cols-2">
          {features.map((f) => (
            <div key={f.title}>
              <f.icon className="mb-2.5 h-4 w-4 text-muted-foreground/60" strokeWidth={1.5} />
              <h3 className="text-[14px] font-medium">{f.title}</h3>
              <p className="mt-1 text-[13px] leading-relaxed text-muted-foreground">
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
