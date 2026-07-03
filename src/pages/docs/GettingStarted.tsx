import { Nav } from "@/components/landing/Nav";
import { Footer } from "@/components/landing/Footer";
import { PageHero } from "@/components/landing/PageHero";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Section, Reveal, Card, Prose, SmartLink } from "@/components/landing/primitives";
import { DocSteps } from "@/components/docs/DocsBlocks";
import { Seo, breadcrumbLd, howToLd } from "@/components/Seo";
import { DOWNLOAD, RELEASES_URL } from "@/lib/site";
import { MonitorDown, Keyboard, Mic, ArrowDownToLine, Activity, Settings2 } from "lucide-react";

const STEPS = [
  {
    icon: MonitorDown,
    title: "Download and install",
    body: (
      <>
        Grab the{" "}
        <a href={DOWNLOAD.windows.url}>Windows installer (.exe)</a> from{" "}
        <a href={RELEASES_URL} target="_blank" rel="noreferrer">
          GitHub Releases
        </a>{" "}
        and run it — no admin rights needed. On a Mac, use the{" "}
        <a href={DOWNLOAD.mac.url}>macOS beta (.dmg)</a>.
      </>
    ),
  },
  {
    icon: Keyboard,
    title: "Hold the hotkey",
    body: (
      <>
        Click into any text field — an email, a doc, Slack — then press and hold{" "}
        <strong>Ctrl+Shift+Space</strong> (<strong>Right-Option</strong> on Mac).
      </>
    ),
  },
  {
    icon: Mic,
    title: "Speak",
    body: "Say what you want to write, naturally. FlowType transcribes on your own machine while you talk — nothing is uploaded, and it works offline.",
  },
  {
    icon: ArrowDownToLine,
    title: "Release — it's typed",
    body: "Let go of the hotkey and your words paste right where your cursor is, cleaned up by your own AI model if you've connected one.",
  },
];

const ORIENT = [
  {
    icon: Activity,
    title: "The pill at the bottom of your screen",
    body: "That thin line is FlowType's HUD. Hover it for a hint, and it becomes a compact level meter while you record so you know you're being heard. It hides itself over fullscreen video and games.",
  },
  {
    icon: Settings2,
    title: "Where settings live",
    body: "Open FlowType from the system tray icon (menu bar on Mac). Hotkeys, microphone, transcription model, cleanup modes, vocabulary, and history all live there — changes apply instantly.",
  },
];

export default function DocsGettingStarted() {
  return (
    <div className="min-h-screen bg-canvas text-foreground">
      <Seo
        title="Get Started with FlowType — Install, Hotkey & First Dictation"
        description="Install FlowType on Windows or Mac and dictate your first message in about two minutes. Hold Ctrl+Shift+Space, speak, release — free, local voice typing in any app."
        path="/docs/getting-started"
        jsonLd={[
          howToLd(),
          breadcrumbLd([
            { name: "FlowType", path: "/" },
            { name: "Get started", path: "/docs/getting-started" },
          ]),
        ]}
      />
      <Nav />
      <main>
        <PageHero
          eyebrow="Docs · Getting started"
          title="Up and dictating in two minutes."
          subtitle="Download FlowType, hold one hotkey, and speak — your words are typed into whatever app you're in, transcribed on your own machine."
        >
          Windows 10 &amp; 11 · macOS beta · Free &amp; open-source · No account
        </PageHero>

        <DocSteps
          eyebrow="First dictation"
          title="From download to dictating in four steps."
          steps={STEPS}
        />

        <Section>
          <div className="grid gap-5 md:grid-cols-2">
            {ORIENT.map((p, i) => (
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

        <Prose eyebrow="Optional next step" title="Cleaner text with your own AI key">
          <p>
            Out of the box FlowType pastes exactly what you said — no key, no account, fully
            offline. If you'd like it to tidy filler words and punctuation, connect an API key
            from a provider under <strong>Settings → Cleanup</strong>. It takes about two
            minutes:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <SmartLink
                href="/docs/openrouter-api-key"
                className="text-amber transition-opacity hover:opacity-80"
              >
                Get an OpenRouter API key
              </SmartLink>{" "}
              — one key, hundreds of models, free options available.
            </li>
            <li>
              <SmartLink
                href="/docs/openai-api-key"
                className="text-amber transition-opacity hover:opacity-80"
              >
                Get an OpenAI API key
              </SmartLink>{" "}
              — GPT models, pay-as-you-go.
            </li>
            <li>
              <SmartLink
                href="/docs/anthropic-api-key"
                className="text-amber transition-opacity hover:opacity-80"
              >
                Get an Anthropic API key
              </SmartLink>{" "}
              — Claude models, fast and precise.
            </li>
          </ul>
        </Prose>

        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
