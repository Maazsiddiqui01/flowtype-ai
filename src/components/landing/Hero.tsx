import { Download, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import useInView from "@/hooks/use-in-view";

const GITHUB_URL = "https://github.com/Maazsiddiqui01/FlowType";

const Hero = () => {
  const { ref, inView } = useInView(0.1);

  return (
    <section ref={ref} className="relative overflow-hidden pb-28 pt-32 md:pb-40 md:pt-44 lg:pb-48 lg:pt-52">
      {/* Single subtle glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/3">
        <div className="h-[500px] w-[500px] rounded-full bg-primary/[0.05] blur-[140px]" />
      </div>

      <div
        className="container relative"
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(24px)",
          transition: "opacity 0.9s cubic-bezier(.16,1,.3,1), transform 0.9s cubic-bezier(.16,1,.3,1)",
        }}
      >
        <div className="mx-auto max-w-xl text-center">
          <p className="mb-6 text-[13px] font-medium text-muted-foreground">
            Open source · Local-first · Windows
          </p>

          <h1 className="text-[clamp(2.5rem,5.5vw,4.25rem)] font-extrabold leading-[1.05] tracking-[-0.04em]">
            Dictate. Clean.{" "}
            <span className="text-gradient">Paste.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-sm text-[15px] leading-relaxed text-muted-foreground">
            Press a shortcut, speak naturally, and get polished text — powered by local Whisper and AI cleanup.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              size="lg"
              className="h-11 rounded-full px-7 text-sm font-medium shadow-lg shadow-primary/20 transition-all duration-200 hover:shadow-xl hover:shadow-primary/25"
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
              className="h-11 rounded-full px-7 text-sm font-medium text-muted-foreground transition-colors duration-200 hover:text-foreground"
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
