import { Server, Key, Clock, Code } from "lucide-react";
import useInView from "@/hooks/use-in-view";

const differentiators = [
  {
    icon: Server,
    title: "Local-first transcription",
    description: "Many tools rely on cloud APIs for every word. FlowType runs Whisper on your machine — faster, private, always available.",
  },
  {
    icon: Key,
    title: "Bring your own API",
    description: "No subscription lock-in. Use your own API keys for AI cleanup and pay only for what you use.",
  },
  {
    icon: Clock,
    title: "Built for reliability",
    description: "Designed to handle long dictation sessions without drops, lag, or silent failures.",
  },
  {
    icon: Code,
    title: "Open source & extensible",
    description: "Inspect the code, extend it, or build on top of it. No black boxes, no vendor dependencies.",
  },
];

const WhyFlowType = () => {
  const { ref, inView } = useInView();
  const { ref: ref2, inView: inView2 } = useInView();

  return (
    <section
      className="py-16 md:py-24"
    >
      {/* Differentiator cards */}
      <div
        ref={ref}
        className="container"
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(24px)",
          transition: "opacity 0.7s cubic-bezier(.16,1,.3,1), transform 0.7s cubic-bezier(.16,1,.3,1)",
        }}
      >
        <p className="text-center text-xs font-medium uppercase tracking-[0.15em] text-primary">
          Why FlowType
        </p>
        <h2 className="mt-3 text-center text-2xl font-bold tracking-tight md:text-3xl">
          Built differently, on purpose
        </h2>

        <div className="mx-auto mt-14 grid max-w-4xl gap-6 sm:grid-cols-2">
          {differentiators.map((d) => (
            <div
              key={d.title}
              className="group rounded-2xl border border-border/40 bg-surface/50 p-6 transition-colors duration-200 hover:border-border/70 hover:bg-surface"
            >
              <d.icon className="mb-3.5 h-5 w-5 text-primary/70" strokeWidth={1.5} />
              <h3 className="text-[15px] font-semibold leading-snug">{d.title}</h3>
              <p className="mt-1.5 text-[13px] leading-relaxed text-muted-foreground">
                {d.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Narrative positioning */}
      <div
        ref={ref2}
        className="container mt-16 md:mt-20"
        style={{
          opacity: inView2 ? 1 : 0,
          transform: inView2 ? "translateY(0)" : "translateY(24px)",
          transition: "opacity 0.7s cubic-bezier(.16,1,.3,1) 0.1s, transform 0.7s cubic-bezier(.16,1,.3,1) 0.1s",
        }}
      >
        <div className="mx-auto max-w-lg text-center">
          <p className="text-sm leading-relaxed text-muted-foreground">
            Most dictation tools trade control for convenience — cloud-only processing, fixed subscriptions, closed ecosystems.
            FlowType takes a different path: local processing, open source, and full ownership of your setup.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            It's not about more features. It's about the right tradeoffs — speed over complexity,
            privacy over convenience, ownership over lock-in.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyFlowType;
