import { Play } from "lucide-react";
import useInView from "@/hooks/use-in-view";

const Demo = () => {
  const { ref, inView } = useInView();

  return (
    <section id="demo" ref={ref} className="py-20 md:py-28">
      <div
        className={`container transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      >
        <h2 className="text-center text-2xl font-bold tracking-tight md:text-3xl">
          See it in action
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-center text-sm text-muted-foreground">
          Press a key, speak, get clean text — that's the entire workflow.
        </p>

        <div className="mx-auto mt-10 max-w-3xl overflow-hidden rounded-xl border border-border bg-surface">
          <div className="relative flex aspect-video items-center justify-center bg-surface-elevated">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/20 text-primary transition-transform hover:scale-110">
              <Play className="h-7 w-7 fill-current" />
            </div>
            <p className="absolute bottom-4 text-xs text-muted-foreground">
              Video demo coming soon
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;
