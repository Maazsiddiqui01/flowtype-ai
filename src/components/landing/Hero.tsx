import { Download, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import useInView from "@/hooks/use-in-view";

const GITHUB_URL = "https://github.com/Maazsiddiqui01/FlowType";

const Hero = () => {
  const { ref, inView } = useInView();

  return (
    <section ref={ref} className="relative overflow-hidden py-24 md:py-32 lg:py-40">
      {/* Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="h-[480px] w-[480px] rounded-full bg-primary/20 blur-[128px]" />
      </div>

      <div
        className={`container relative text-center transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        style={{ transitionTimingFunction: "cubic-bezier(.16,1,.3,1)" }}
      >
        <h1 className="mx-auto max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="text-gradient">FlowType</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-foreground/90 md:text-xl">
          Dictate, clean, and paste — without babysitting the app.
        </p>
        <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground md:text-base">
          Local Whisper transcription with AI-powered cleanup. Private, fast, and open source.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" asChild>
            <a href={GITHUB_URL + "/releases"} target="_blank" rel="noopener noreferrer">
              <Download className="h-5 w-5" />
              Download for Windows
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild>
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

export default Hero;
