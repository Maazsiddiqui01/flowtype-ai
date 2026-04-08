import { Download, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import useInView from "@/hooks/use-in-view";

const GITHUB_URL = "https://github.com/Maazsiddiqui01/FlowType";

const Hero = () => {
  const { ref, inView } = useInView(0.1);

  return (
    <section ref={ref} className="pb-24 pt-20 md:pb-32 md:pt-28 lg:pb-40 lg:pt-36">
      <div
        className="container"
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(16px)",
          transition: "opacity 0.8s cubic-bezier(.16,1,.3,1), transform 0.8s cubic-bezier(.16,1,.3,1)",
        }}
      >
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1 text-[13px] text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Open source · Local-first · Windows
          </p>

          <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Dictate. Clean. Paste.
          </h1>

          <p className="mx-auto mt-6 max-w-md text-[16px] leading-relaxed text-muted-foreground">
            Press a shortcut, speak naturally, and get polished text — powered by local Whisper and AI cleanup.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              size="lg"
              className="h-12 rounded-full px-8 text-[14px] font-medium"
              asChild
            >
              <a href={GITHUB_URL + "/releases"} target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-4 w-4" />
                Download for Windows
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-12 rounded-full px-8 text-[14px] font-medium text-foreground"
              asChild
            >
              <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                View on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
