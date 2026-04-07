import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import useInView from "@/hooks/use-in-view";

const GITHUB_URL = "https://github.com/Maazsiddiqui01/FlowType";

const OpenSource = () => {
  const { ref, inView } = useInView();

  return (
    <section
      ref={ref}
      className="py-16 md:py-24"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(24px)",
        transition: "opacity 0.7s cubic-bezier(.16,1,.3,1), transform 0.7s cubic-bezier(.16,1,.3,1)",
      }}
    >
      <div className="container">
        <div className="mx-auto max-w-lg text-center">
          <p className="text-xs font-medium uppercase tracking-[0.15em] text-primary">
            Open Source
          </p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">
            Built in the open
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            FlowType is free, open source, and community-driven.
            Contributions and ideas are always welcome.
          </p>
          <Button
            className="mt-8 h-10 rounded-xl px-5 text-sm font-medium"
            variant="outline"
            asChild
          >
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4" />
              Contribute on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default OpenSource;
