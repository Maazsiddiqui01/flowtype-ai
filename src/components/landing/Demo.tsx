import { Play } from "lucide-react";
import useInView from "@/hooks/use-in-view";

const Demo = () => {
  const { ref, inView } = useInView();

  return (
    <section
      id="demo"
      ref={ref}
      className="py-16 md:py-24"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(24px)",
        transition: "opacity 0.7s cubic-bezier(.16,1,.3,1) 0.1s, transform 0.7s cubic-bezier(.16,1,.3,1) 0.1s",
      }}
    >
      <div className="container">
        <div className="mx-auto max-w-2xl">
          <div className="overflow-hidden rounded-2xl border border-border/60 bg-surface glow-primary">
            <div className="relative flex aspect-video cursor-pointer items-center justify-center bg-gradient-to-br from-surface to-surface-elevated transition-colors duration-300 hover:from-surface-elevated hover:to-surface">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary backdrop-blur-sm transition-transform duration-300 hover:scale-105">
                <Play className="ml-0.5 h-5 w-5 fill-current" />
              </div>
            </div>
          </div>
          <p className="mt-4 text-center text-[13px] text-muted-foreground">
            See FlowType in action — press, speak, paste.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Demo;
