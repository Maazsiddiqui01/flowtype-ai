import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import useInView from "@/hooks/use-in-view";

const GITHUB_URL = "https://github.com/Maazsiddiqui01/FlowType";

const OpenSource = () => {
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
        <div className="mx-auto max-w-xs text-center">
          <h2 className="text-lg font-semibold tracking-tight md:text-xl">
            Open source
          </h2>
          <p className="mt-3 text-[13px] leading-relaxed text-muted-foreground">
            Free to use. Free to extend.
          </p>
          <Button
            className="mt-8 h-9 rounded-full px-5 text-[13px] font-medium"
            variant="outline"
            asChild
          >
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
              <Github className="h-3.5 w-3.5" />
              View on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default OpenSource;
