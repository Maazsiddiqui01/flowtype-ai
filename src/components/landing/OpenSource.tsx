import { Github, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import useInView from "@/hooks/use-in-view";

const GITHUB_URL = "https://github.com/Maazsiddiqui01/FlowType";

const OpenSource = () => {
  const { ref, inView } = useInView();

  return (
    <section ref={ref} className="py-20 md:py-28">
      <div
        className={`container transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      >
        <div className="mx-auto max-w-2xl rounded-2xl border border-border bg-surface p-8 text-center md:p-12">
          <div className="mx-auto mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <Heart className="h-6 w-6" />
          </div>
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            Open Source
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm text-muted-foreground md:text-base">
            FlowType is free and open source. Contributions, issues, and ideas are always welcome.
          </p>
          <Button className="mt-8" size="lg" asChild>
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
              View on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default OpenSource;
