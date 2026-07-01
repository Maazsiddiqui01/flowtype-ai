import { Nav } from "@/components/landing/Nav";
import { Footer } from "@/components/landing/Footer";
import { PageHero } from "@/components/landing/PageHero";
import { Privacy } from "@/components/landing/Privacy";
import { FAQ, FAQS } from "@/components/landing/FAQ";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Section, Reveal, Card, AppleGlyph } from "@/components/landing/primitives";
import { Seo, softwareAppLd, faqLd, breadcrumbLd } from "@/components/Seo";
import { FlaskConical, Cpu, MessageSquare } from "lucide-react";

const POINTS = [
  { icon: Cpu, title: "On-device on Apple Silicon", body: "Transcribes locally with Whisper on your Mac. Your audio never leaves the machine." },
  { icon: FlaskConical, title: "Beta — and honest about it", body: "The Mac build works today and is improving fast. Default hotkey is Right-Option. Expect rough edges." },
  { icon: MessageSquare, title: "Shape it with us", body: "Try it, then tell us what breaks. Issues and feedback go straight into the next build." },
];

export default function VoiceToTextMac() {
  return (
    <div className="min-h-screen bg-canvas text-foreground">
      <Seo
        title="Voice to Text for Mac — Local Dictation (Beta) | FlowType"
        description="FlowType brings free, on-device voice to text to Mac (beta). Local Whisper transcription, no cloud, no account. Download the macOS beta and dictate into any app."
        path="/voice-to-text-mac"
        jsonLd={[
          softwareAppLd("macOS"),
          faqLd(FAQS.slice(0, 6)),
          breadcrumbLd([
            { name: "FlowType", path: "/" },
            { name: "Voice to text for Mac", path: "/voice-to-text-mac" },
          ]),
        ]}
      />
      <Nav />
      <main>
        <PageHero
          eyebrow={
            <span className="inline-flex items-center gap-1.5">
              <AppleGlyph className="h-3.5 w-3.5" /> For macOS · beta
            </span>
          }
          title="Voice to text for Mac that runs on-device."
          subtitle="Free, private dictation is coming to the Mac. The macOS beta transcribes locally with Whisper — hold Right-Option, speak, and it types into any app. It's early, and improving fast."
        >
          Apple Silicon · Beta · Free &amp; open-source
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

        <Privacy />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
