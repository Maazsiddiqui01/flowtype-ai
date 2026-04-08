import useInView from "@/hooks/use-in-view";

const Demo = () => {
  const { ref, inView } = useInView();

  return (
    <section
      id="demo"
      ref={ref}
      className="pb-24 md:pb-32"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(16px)",
        transition: "opacity 0.8s cubic-bezier(.16,1,.3,1), transform 0.8s cubic-bezier(.16,1,.3,1)",
      }}
    >
      <div className="container">
        <div className="mx-auto max-w-3xl">
          <div className="overflow-hidden rounded-2xl border border-border bg-surface">
            <div className="flex aspect-video items-center justify-center">
              <p className="text-sm text-muted-foreground">Demo coming soon</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;
