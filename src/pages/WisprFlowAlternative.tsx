import { Nav } from "@/components/landing/Nav";
import { Footer } from "@/components/landing/Footer";
import { PageHero } from "@/components/landing/PageHero";
import { Compare } from "@/components/landing/Compare";
import { FAQ, FAQS } from "@/components/landing/FAQ";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Section, Eyebrow, Reveal, Card, Prose } from "@/components/landing/primitives";
import { Seo, softwareAppLd, faqLd, breadcrumbLd } from "@/components/Seo";
import { Lock, Wallet, Github } from "lucide-react";

const REASONS = [
  {
    icon: Lock,
    title: "Your voice stays on your device",
    body: "Wispr Flow transcribes in the cloud — your audio goes to their servers. FlowType runs Whisper on your machine. Nothing is uploaded, so there's nothing to leak, log, or subpoena.",
  },
  {
    icon: Wallet,
    title: "Free, with no word cap",
    body: "No $15/month, and no ~2,000-words-a-week free tier. The whole app is free, unlimited, with no account and no credit card. Bring your own AI model if you want cleanup — on your key, your cost.",
  },
  {
    icon: Github,
    title: "Open source you can audit",
    body: "\"Your audio stays local\" is a claim you can verify, not a marketing line. FlowType is open source on GitHub — read it, run it, fork it.",
  },
];

export default function WisprFlowAlternative() {
  return (
    <div className="min-h-screen bg-canvas text-foreground">
      <Seo
        title="The Wispr Flow Alternative That Runs Locally (Windows)"
        description="FlowType is a private, local-first Wispr Flow alternative for Windows. On-device transcription, no forced subscription, bring your own AI model. Free to start."
        path="/wispr-flow-alternative"
        jsonLd={[
          softwareAppLd("Windows"),
          faqLd(FAQS),
          breadcrumbLd([
            { name: "FlowType", path: "/" },
            { name: "Wispr Flow alternative", path: "/wispr-flow-alternative" },
          ]),
        ]}
      />
      <Nav />
      <main>
        <PageHero
          eyebrow="Wispr Flow alternative"
          title={
            <>
              A Wispr Flow alternative that keeps
              <br className="hidden sm:block" /> your voice on your device.
            </>
          }
          subtitle="Same “dictate into any app” job — but local, free, open-source, and with no account or word cap. If privacy, cost, and ownership matter to you, FlowType is the stronger fit."
        >
          Free &amp; open-source · On-device transcription · Windows (macOS beta)
        </PageHero>

        <Section>
          <div className="grid gap-5 md:grid-cols-3">
            {REASONS.map((r, i) => (
              <Reveal key={r.title} delay={i * 80}>
                <Card className="h-full">
                  <span className="mb-4 grid h-10 w-10 place-items-center rounded-lg border border-amber/30 bg-amber/10 text-amber">
                    <r.icon className="h-5 w-5" />
                  </span>
                  <h2 className="text-[17px] font-semibold text-ink">{r.title}</h2>
                  <p className="mt-2 text-[14.5px] leading-relaxed text-ink-body">{r.body}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Section>

        <Prose
          eyebrow="The honest take"
          title="FlowType vs Wispr Flow: which should you pick?"
        >
          <p>
            Both apps do the same core job — hold a hotkey, speak, and your words land in whatever
            app you're using. The real difference is <strong>where your voice goes</strong> and what
            you trade for convenience. Wispr Flow is a polished, hosted product with a subscription;
            FlowType is a free, open-source app that runs Whisper on your own machine.
          </p>
          <p>
            <strong>Wispr Flow may be the better choice</strong> if you want a fully managed service
            with a team behind it and cloud sync across devices, and you're comfortable sending audio
            to their servers and paying monthly. That's a reasonable trade — the cloud experience is
            refined and there's nothing to set up.
          </p>
          <p>
            <strong>FlowType is the stronger fit</strong> when privacy, cost, and ownership come
            first. Your audio never leaves the device, there's no subscription and no word cap, and
            the code is open on GitHub for anyone to audit. You can bring your own AI model for
            cleanup and pay only your own usage — or skip AI entirely. On Windows it's shipped and
            stable; on Mac it's an honest, improving beta.
          </p>
        </Prose>

        <Compare />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
