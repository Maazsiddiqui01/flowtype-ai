import { Download, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import useInView from "@/hooks/use-in-view";

const GITHUB_URL = "https://github.com/Maazsiddiqui01/FlowType";

const Hero = () => {
  const { ref, inView } = useInView(0.1);

  return (
    <section ref={ref} className="relative overflow-hidden pb-20 pt-24 md:pb-32 md:pt-36 lg:pb-40 lg:pt-44">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/4">
        <div className="h-[600px] w-[600px] rounded-full bg-primary/[0.07] blur-[120px]" />
      </div>
      <div className="pointer-events-none absolute right-0 top-1/3">
        <div className="h-[300px] w-[300px] rounded-full bg-primary/[0.04] blur-[100px]" />
      </div>

      <div
        className="container relative"
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(32px)",
          transition: "opacity 0.8s cubic-bezier(.16,1,.3,1), transform 0.8s cubic-bezier(.16,1,.3,1)",
        }}
      >
        <div className="mx-auto max-w-2xl text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1.5 text-xs text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Open source &middot; Local-first
          </div>

          <h1 className="text-[clamp(2.25rem,5vw,4rem)] font-extrabold leading-[1.08] tracking-[-0.035em]">
            Dictate. Clean.{" "}
            <span className="text-gradient">Paste.</span>
          </h1>

          <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-muted-foreground md:text-[17px]">
            Press a shortcut, speak naturally, and get polished text — powered by local Whisper and AI cleanup.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              size="lg"
              className="h-11 rounded-xl px-6 text-sm font-medium shadow-lg shadow-primary/20 transition-all duration-200 hover:shadow-xl hover:shadow-primary/30"
              asChild
            >
              <a href={GITHUB_URL + "/releases"} target="_blank" rel="noopener noreferrer">
                <Download className="h-4 w-4" />
                Download for Windows
              </a>
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="h-11 rounded-xl px-6 text-sm font-medium text-muted-foreground transition-colors duration-200 hover:text-foreground"
              asChild
            >
              <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
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
