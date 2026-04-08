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
        transition: "opacity 0.8s cubic-bezier(.16,1,.3,1), transform 0.8s cubic-bezier(.16,1,.3,1)",
      }}
    >
      <div className="container">
        <div className="mx-auto max-w-lg text-center">
          <p className="text-[13px] font-semibold uppercase tracking-widest text-primary">Open Source</p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            Built in the open
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
            FlowType is free, open source, and community-driven. Contributions, feedback, and ideas are always welcome.
          </p>
          <Button
            className="mt-8 h-11 rounded-full px-6 text-[14px] font-medium"
            variant="outline"
            asChild
          >
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              Contribute on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default OpenSource;
