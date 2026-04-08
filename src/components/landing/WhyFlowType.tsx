import useInView from "@/hooks/use-in-view";

const points = [
  { title: "Local-first", text: "Transcription stays on your machine. Fast, private, offline-capable." },
  { title: "No lock-in", text: "Bring your own API keys. Pay for what you use, nothing more." },
  { title: "Reliable", text: "Built for long sessions without drops or silent failures." },
  { title: "Open source", text: "Read the code, extend it, own it. No black boxes." },
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
        transition: "opacity 0.9s cubic-bezier(.16,1,.3,1), transform 0.9s cubic-bezier(.16,1,.3,1)",
      }}
    >
      <div className="container">
        <h2 className="text-center text-lg font-semibold tracking-tight md:text-xl">
          Why FlowType
        </h2>
        <p className="mx-auto mt-3 max-w-sm text-center text-[13px] leading-relaxed text-muted-foreground">
          Most tools trade control for convenience. FlowType doesn't.
        </p>

        <div className="mx-auto mt-14 grid max-w-lg gap-8">
          {points.map((p) => (
            <div key={p.title} className="flex gap-4">
              <div className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-muted-foreground/40" />
              <div>
                <h3 className="text-[14px] font-medium">{p.title}</h3>
                <p className="mt-0.5 text-[13px] leading-relaxed text-muted-foreground">{p.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyFlowType;
