import { Keyboard, Mic, FileText } from "lucide-react";
import useInView from "@/hooks/use-in-view";

const steps = [
  { icon: Keyboard, label: "Press shortcut", num: "1" },
  { icon: Mic, label: "Speak naturally", num: "2" },
  { icon: FileText, label: "Get clean text", num: "3" },
];

const HowItWorks = () => {
  const { ref, inView } = useInView();

  return (
    <section
      id="how-it-works"
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
          Workflow
        </p>
        <h2 className="mt-4 text-center text-2xl font-semibold tracking-tight md:text-3xl">
          Three steps. Zero friction.
        </h2>

        <div className="mx-auto mt-16 flex max-w-md flex-col gap-8 md:max-w-xl md:flex-row md:items-start md:gap-12">
          {steps.map((s) => (
            <div key={s.label} className="flex flex-1 items-center gap-4 md:flex-col md:items-center md:gap-3 md:text-center">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border/40 bg-surface text-muted-foreground">
                <s.icon className="h-[18px] w-[18px]" strokeWidth={1.5} />
              </div>
              <div>
                <span className="text-[11px] font-medium uppercase tracking-widest text-muted-foreground/60">{s.num}</span>
                <p className="text-[14px] font-medium">{s.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
