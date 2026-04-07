import { Keyboard, Mic, FileText, ArrowRight } from "lucide-react";
import useInView from "@/hooks/use-in-view";

const steps = [
  { icon: Keyboard, title: "Press Shortcut", description: "Hit your global hotkey from any app." },
  { icon: Mic, title: "Speak", description: "Say what you need — FlowType listens." },
  { icon: FileText, title: "Get Clean Text", description: "AI-cleaned text is pasted instantly." },
];

const HowItWorks = () => {
  const { ref, inView } = useInView();

  return (
    <section id="how-it-works" ref={ref} className="py-20 md:py-28">
      <div
        className={`container transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      >
        <h2 className="text-center text-2xl font-bold tracking-tight md:text-3xl">
          How it works
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-center text-sm text-muted-foreground">
          Three steps. No setup headaches.
        </p>

        <div className="mx-auto mt-12 flex max-w-3xl flex-col items-center gap-6 md:flex-row md:gap-4">
          {steps.map((s, i) => (
            <div key={s.title} className="flex items-center gap-4 md:flex-1 md:flex-col md:gap-0 md:text-center">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary md:mx-auto">
                <s.icon className="h-6 w-6" />
              </div>
              <div className="md:mt-4">
                <span className="text-xs font-medium text-primary">Step {i + 1}</span>
                <h3 className="font-semibold">{s.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{s.description}</p>
              </div>
              {i < steps.length - 1 && (
                <ArrowRight className="hidden h-5 w-5 shrink-0 text-muted-foreground md:block md:absolute" style={{ display: "none" }} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
