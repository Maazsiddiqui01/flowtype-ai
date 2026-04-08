import useInView from "@/hooks/use-in-view";

const Demo = () => {
  const { ref, inView } = useInView();

  return (
    <section
      id="demo"
      ref={ref}
      className="pb-28 md:pb-36"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(16px)",
        transition: "opacity 0.9s cubic-bezier(.16,1,.3,1), transform 0.9s cubic-bezier(.16,1,.3,1)",
      }}
    >
      <div className="container">
        <div className="mx-auto max-w-2xl">
          <div className="overflow-hidden rounded-xl border border-border/30">
            <div className="flex aspect-video items-center justify-center bg-surface/40">
              <p className="text-[13px] text-muted-foreground/40">Demo coming soon</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;
