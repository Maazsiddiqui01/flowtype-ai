import useInView from "@/hooks/use-in-view";

const HowItWorks = () => {
  const { ref, inView } = useInView();

  return (
    <section
      id="how-it-works"
      ref={ref}
      className="py-24 md:py-32"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(16px)",
        transition: "opacity 0.9s cubic-bezier(.16,1,.3,1), transform 0.9s cubic-bezier(.16,1,.3,1)",
      }}
    >
      <div className="container">
        <div className="mx-auto max-w-sm text-center">
          <h2 className="text-lg font-semibold tracking-tight md:text-xl">
            How it works
          </h2>
          <div className="mt-8 flex items-center justify-center gap-3 text-[14px]">
            <span className="font-medium">Press shortcut</span>
            <span className="text-muted-foreground/30">→</span>
            <span className="font-medium">Speak</span>
            <span className="text-muted-foreground/30">→</span>
            <span className="font-medium">Paste</span>
          </div>
          <p className="mt-4 text-[13px] leading-relaxed text-muted-foreground">
            That's it. No windows to manage, no buttons to click.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
