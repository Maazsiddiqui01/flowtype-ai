import { Nav } from "@/components/landing/Nav";
import { Footer } from "@/components/landing/Footer";
import { PageHero } from "@/components/landing/PageHero";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Privacy } from "@/components/landing/Privacy";
import { FAQ, FAQS } from "@/components/landing/FAQ";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Section, Reveal, Card, WindowsGlyph } from "@/components/landing/primitives";
import { Seo, softwareAppLd, faqLd, breadcrumbLd } from "@/components/Seo";
import { Cpu, WifiOff, MousePointerClick } from "lucide-react";

const POINTS = [
  { icon: Cpu, title: "Runs on your PC", body: "Faster-Whisper transcribes locally — CPU int8, with CUDA acceleration when you have an NVIDIA GPU." },
  { icon: WifiOff, title: "Works offline", body: "No internet needed to transcribe. Your words never leave the machine." },
  { icon: MousePointerClick, title: "Types into any app", body: "Editors, browsers, Slack, docs, terminals — hold Ctrl+Shift+Space and dictate wherever the cursor is." },
];

export default function VoiceToTextWindows() {
  return (
    <div className="min-h-screen bg-canvas text-foreground">
      <Seo
        title="Voice to Text for Windows — Free, Local, Private | FlowType"
        description="Free voice to text for Windows that runs offline. On-device Whisper transcription, no account, no subscription. Hold a hotkey and dictate into any app."
        path="/voice-to-text-windows"
        jsonLd={[
          softwareAppLd("Windows"),
          faqLd(FAQS.slice(0, 6)),
          breadcrumbLd([
            { name: "FlowType", path: "/" },
            { name: "Voice to text for Windows", path: "/voice-to-text-windows" },
          ]),
        ]}
      />
      <Nav />
      <main>
        <PageHero
          eyebrow={
            <span className="inline-flex items-center gap-1.5">
              <WindowsGlyph className="h-3.5 w-3.5" /> For Windows
            </span>
          }
          title="Voice to text for Windows that runs offline."
          subtitle="Free, private dictation for Windows. Hold a hotkey, speak, and FlowType types it into any app — transcribed on your own PC with Whisper, never the cloud."
        >
          Windows 10 &amp; 11 · Free &amp; open-source · No account
        </PageHero>

        <Section>
          <div className="grid gap-5 md:grid-cols-3">
            {POINTS.map((p, i) => (
              <Reveal key={p.title} delay={i * 80}>
                <Card className="h-full">
                  <span className="mb-4 grid h-10 w-10 place-items-center rounded-lg border border-amber/30 bg-amber/10 text-amber">
                    <p.icon className="h-5 w-5" />
                  </span>
                  <h2 className="text-[17px] font-semibold text-ink">{p.title}</h2>
                  <p className="mt-2 text-[14.5px] leading-relaxed text-ink-body">{p.body}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Section>

        <HowItWorks />
        <Privacy />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
