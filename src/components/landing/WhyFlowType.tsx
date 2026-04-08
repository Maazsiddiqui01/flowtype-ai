import { Server, Key, Clock, Code } from "lucide-react";
import useInView from "@/hooks/use-in-view";

const points = [
  { icon: Server, title: "Local-first transcription", text: "Whisper runs on your machine — fast, private, and always available, even offline." },
  { icon: Key, title: "Bring your own API", text: "No subscription lock-in. Use your own API keys for AI cleanup and pay only for what you use." },
  { icon: Clock, title: "Built for reliability", text: "Designed to handle long dictation sessions without drops, lag, or silent failures." },
  { icon: Code, title: "Open source & extensible", text: "Inspect the code, extend it, or build on top of it. No black boxes, no vendor lock-in." },
];

const WhyFlowType = () => {
  const { ref, inView } = useInView();

  return (
    <section
      ref={ref}
      className="py-24 md:py-32"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(16px)",
        transition: "opacity 0.8s cubic-bezier(.16,1,.3,1), transform 0.8s cubic-bezier(.16,1,.3,1)",
      }}
    >
      <div className="container">
        <div className="text-center">
          <p className="text-[13px] font-semibold uppercase tracking-widest text-primary">Why FlowType</p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            Built differently, on purpose
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-[15px] leading-relaxed text-muted-foreground">
            Most dictation tools trade control for convenience. FlowType takes a different path.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-3xl gap-8 sm:grid-cols-2">
          {points.map((p) => (
            <div key={p.title} className="rounded-2xl border border-border p-6">
              <p.icon className="mb-3 h-5 w-5 text-primary" strokeWidth={1.5} />
              <h3 className="text-[15px] font-semibold text-foreground">{p.title}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyFlowType;
