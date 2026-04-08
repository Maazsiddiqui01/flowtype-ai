import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import useInView from "@/hooks/use-in-view";

const GITHUB_URL = "https://github.com/Maazsiddiqui01/FlowType";

const OpenSource = () => {
  const { ref, inView } = useInView();

  return (
    <section
      ref={ref}
      className="py-20 md:py-28"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.8s cubic-bezier(.16,1,.3,1), transform 0.8s cubic-bezier(.16,1,.3,1)",
      }}
    >
      <div className="container">
        <div className="mx-auto max-w-sm text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Open Source
          </p>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight md:text-3xl">
            Built in the open
          </h2>
          <p className="mt-4 text-[14px] leading-relaxed text-muted-foreground">
            Free, open source, and community-driven.
          </p>
          <Button
            className="mt-8 h-10 rounded-full px-6 text-sm font-medium"
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
