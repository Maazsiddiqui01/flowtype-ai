import { Keyboard, Mic, FileText } from "lucide-react";
import useInView from "@/hooks/use-in-view";

const steps = [
  { icon: Keyboard, label: "Press shortcut" },
  { icon: Mic, label: "Speak naturally" },
  { icon: FileText, label: "Get clean text" },
];

const HowItWorks = () => {
  const { ref, inView } = useInView();

  return (
    <section
      id="how-it-works"
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
          Workflow
        </p>
        <h2 className="mt-3 text-center text-2xl font-bold tracking-tight md:text-3xl">
          Three steps. Zero friction.
        </h2>

        <div className="mx-auto mt-14 flex max-w-xl flex-col items-stretch gap-4 md:flex-row md:items-center md:gap-0">
          {steps.map((s, i) => (
            <div key={s.label} className="flex flex-1 items-center gap-4 md:flex-col md:gap-3 md:text-center">
              <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-border/60 bg-surface md:mx-auto">
                <s.icon className="h-5 w-5 text-primary/80" strokeWidth={1.5} />
                <span className="absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                  {i + 1}
                </span>
              </div>
              <span className="text-sm font-medium">{s.label}</span>
              {i < steps.length - 1 && (
                <div className="hidden h-px flex-1 bg-gradient-to-r from-border/80 to-transparent md:block md:mx-4" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
