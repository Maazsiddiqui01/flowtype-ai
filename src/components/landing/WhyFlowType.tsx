import { Server, Key, Clock, Code } from "lucide-react";
import useInView from "@/hooks/use-in-view";

const differentiators = [
  {
    icon: Server,
    title: "Local-first transcription",
    description: "Whisper runs on your machine — faster, private, always available.",
  },
  {
    icon: Key,
    title: "Bring your own API",
    description: "No subscription lock-in. Use your own keys, pay only for what you use.",
  },
  {
    icon: Clock,
    title: "Built for reliability",
    description: "Long dictation sessions without drops, lag, or silent failures.",
  },
  {
    icon: Code,
    title: "Open source & extensible",
    description: "Inspect, extend, or build on top. No black boxes.",
  },
];

const WhyFlowType = () => {
  const { ref, inView } = useInView();
  const { ref: ref2, inView: inView2 } = useInView();

  return (
    <section className="py-20 md:py-28">
      <div
        ref={ref}
        className="container"
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.8s cubic-bezier(.16,1,.3,1), transform 0.8s cubic-bezier(.16,1,.3,1)",
        }}
      >
        <p className="text-center text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Why FlowType
        </p>
        <h2 className="mt-4 text-center text-2xl font-semibold tracking-tight md:text-3xl">
          Built differently, on purpose
        </h2>

        <div className="mx-auto mt-16 grid max-w-3xl gap-y-10 gap-x-12 sm:grid-cols-2">
          {differentiators.map((d) => (
            <div key={d.title} className="group">
              <d.icon className="mb-3 h-[18px] w-[18px] text-muted-foreground transition-colors duration-200 group-hover:text-foreground" strokeWidth={1.5} />
              <h3 className="text-[14px] font-semibold leading-snug">{d.title}</h3>
              <p className="mt-1.5 text-[13px] leading-relaxed text-muted-foreground">
                {d.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div
        ref={ref2}
        className="container mt-20"
        style={{
          opacity: inView2 ? 1 : 0,
          transform: inView2 ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.8s cubic-bezier(.16,1,.3,1) 0.1s, transform 0.8s cubic-bezier(.16,1,.3,1) 0.1s",
        }}
      >
        <div className="mx-auto max-w-md text-center">
          <p className="text-[13px] leading-relaxed text-muted-foreground/80">
            Most dictation tools trade control for convenience. FlowType takes a different path — local processing, open source, full ownership.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyFlowType;
