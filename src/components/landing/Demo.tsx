import { Play } from "lucide-react";
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
        transform: inView ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.8s cubic-bezier(.16,1,.3,1), transform 0.8s cubic-bezier(.16,1,.3,1)",
      }}
    >
      <div className="container">
        <div className="mx-auto max-w-2xl">
          <div className="overflow-hidden rounded-2xl border border-border/40 bg-surface/60">
            <div className="relative flex aspect-video cursor-pointer items-center justify-center bg-surface transition-colors duration-300 hover:bg-surface-elevated">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-border/60 text-muted-foreground transition-all duration-300 hover:border-primary/40 hover:text-primary">
                <Play className="ml-0.5 h-4 w-4 fill-current" />
              </div>
            </div>
          </div>
          <p className="mt-5 text-center text-[13px] text-muted-foreground/70">
            See FlowType in action
          </p>
        </div>
      </div>
    </section>
  );
};

export default Demo;
