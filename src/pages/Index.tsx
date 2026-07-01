import { Nav } from "@/components/landing/Nav";
import { Hero } from "@/components/landing/Hero";
import { TrustBar } from "@/components/landing/TrustBar";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Features } from "@/components/landing/Features";
import { Privacy } from "@/components/landing/Privacy";
import { Compare } from "@/components/landing/Compare";
import { DownloadSection } from "@/components/landing/Download";
import { OpenSource } from "@/components/landing/OpenSource";
import { FAQ } from "@/components/landing/FAQ";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";
import { DOWNLOAD } from "@/lib/site";
import { useOS } from "@/hooks/useOS";

const Index = () => {
  const os = useOS();
  const primary = os === "mac" ? DOWNLOAD.mac : DOWNLOAD.windows;
  return (
    <div className="min-h-screen bg-canvas text-foreground">
      <Nav />
      <main>
        <Hero />
        <TrustBar />
        <HowItWorks />
        <Features />
        <Privacy />
        <Compare />
        <DownloadSection />
        <OpenSource />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />

      {/* Sticky mobile download button (lifts long-page conversion). */}
      <a
        href={primary.url}
        className="fixed inset-x-4 bottom-4 z-50 flex h-12 items-center justify-center rounded-xl bg-white text-sm font-semibold text-black shadow-lg md:hidden"
      >
        Download free for {primary.label}
        {primary.status === "beta" && <span className="ml-2 text-xs opacity-60">(beta)</span>}
      </a>
    </div>
  );
};

export default Index;
