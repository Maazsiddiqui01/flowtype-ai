import { Download, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import useInView from "@/hooks/use-in-view";

const GITHUB_URL = "https://github.com/Maazsiddiqui01/FlowType";

const Hero = () => {
  const { ref, inView } = useInView(0.1);

  return (
    <section ref={ref} className="relative pb-32 pt-36 md:pb-44 md:pt-52 lg:pb-52 lg:pt-60">
      <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/3">
        <div className="h-[420px] w-[420px] rounded-full bg-primary/[0.04] blur-[160px]" />
      </div>

      <div
        className="container relative"
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(16px)",
          transition: "opacity 1s cubic-bezier(.16,1,.3,1), transform 1s cubic-bezier(.16,1,.3,1)",
        }}
      >
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-[clamp(2.75rem,6vw,4.5rem)] font-extrabold leading-[1.02] tracking-[-0.045em]">
            Dictate. Clean.{" "}
            <span className="text-gradient">Paste.</span>
          </h1>

          <p className="mx-auto mt-5 max-w-xs text-[15px] leading-[1.7] text-muted-foreground">
            Press a shortcut, speak, get polished text. Local Whisper. AI cleanup. Nothing else.
          </p>

          <div className="mt-10 flex items-center justify-center gap-3">
            <Button
              size="lg"
              className="h-10 rounded-full px-6 text-[13px] font-medium shadow-lg shadow-primary/15"
              asChild
            >
              <a href={GITHUB_URL + "/releases"} target="_blank" rel="noopener noreferrer">
                <Download className="h-3.5 w-3.5" />
                Download for Windows
              </a>
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="h-10 rounded-full px-6 text-[13px] font-medium text-muted-foreground hover:text-foreground"
              asChild
            >
              <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
                <Github className="h-3.5 w-3.5" />
                GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
