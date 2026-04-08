import { Keyboard, Mic, FileText } from "lucide-react";
import useInView from "@/hooks/use-in-view";

const steps = [
  { icon: Keyboard, label: "Press shortcut", description: "Hit your global hotkey from any app" },
  { icon: Mic, label: "Speak naturally", description: "Whisper transcribes locally in real-time" },
  { icon: FileText, label: "Get clean text", description: "AI cleans up and pastes to your cursor" },
];

const HowItWorks = () => {
  const { ref, inView } = useInView();

  return (
    <section
      id="how-it-works"
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
          <p className="text-[13px] font-semibold uppercase tracking-widest text-primary">How it works</p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            Three steps. Zero friction.
          </h2>
        </div>

        <div className="mx-auto mt-16 grid max-w-3xl gap-8 md:grid-cols-3">
          {steps.map((s, i) => (
            <div key={s.label} className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                <s.icon className="h-5 w-5 text-primary" strokeWidth={1.5} />
              </div>
              <span className="mb-1 block text-[12px] font-semibold uppercase tracking-widest text-primary">
                Step {i + 1}
              </span>
              <h3 className="text-[15px] font-semibold text-foreground">{s.label}</h3>
              <p className="mt-1.5 text-[13px] leading-relaxed text-muted-foreground">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
