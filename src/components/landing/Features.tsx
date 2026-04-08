import { Mic, Sparkles, Keyboard, BookOpen, ShieldCheck } from "lucide-react";
import useInView from "@/hooks/use-in-view";

const features = [
  {
    icon: Mic,
    title: "Local Whisper",
    description: "Runs OpenAI's Whisper on your machine. No cloud, no latency.",
  },
  {
    icon: Sparkles,
    title: "AI Cleanup",
    description: "Fixes grammar, removes fillers, formats automatically.",
  },
  {
    icon: Keyboard,
    title: "Global Hotkey",
    description: "Trigger dictation from anywhere with one shortcut.",
  },
  {
    icon: BookOpen,
    title: "Custom Modes",
    description: "Vocabularies and modes tailored to how you work.",
  },
  {
    icon: ShieldCheck,
    title: "Private by Default",
    description: "Your voice never leaves your computer.",
  },
];

const Features = () => {
  const { ref, inView } = useInView();

  return (
    <section
      id="features"
      ref={ref}
      className="py-20 md:py-28"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.8s cubic-bezier(.16,1,.3,1), transform 0.8s cubic-bezier(.16,1,.3,1)",
      }}
    >
      <div className="container">
        <p className="text-center text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Features
        </p>
        <h2 className="mt-4 text-center text-2xl font-semibold tracking-tight md:text-3xl">
          Built for speed and privacy
        </h2>

        <div className="mx-auto mt-16 grid max-w-3xl gap-y-10 gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="group">
              <f.icon className="mb-3 h-[18px] w-[18px] text-muted-foreground transition-colors duration-200 group-hover:text-foreground" strokeWidth={1.5} />
              <h3 className="text-[14px] font-semibold leading-snug">{f.title}</h3>
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
