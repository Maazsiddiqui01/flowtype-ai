import { Nav } from "@/components/landing/Nav";
import { Footer } from "@/components/landing/Footer";
import { PageHero } from "@/components/landing/PageHero";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Prose } from "@/components/landing/primitives";
import { DocSteps, KeyReassurance } from "@/components/docs/DocsBlocks";
import { Seo, breadcrumbLd } from "@/components/Seo";
import { UserPlus, KeyRound, Copy, Settings2 } from "lucide-react";

const STEPS = [
  {
    icon: UserPlus,
    title: "Create an Anthropic Console account",
    body: (
      <>
        Go to{" "}
        <a href="https://console.anthropic.com" target="_blank" rel="noreferrer">
          console.anthropic.com
        </a>{" "}
        and sign up. The Console is Anthropic's developer platform — separate from a Claude
        chat subscription.
      </>
    ),
  },
  {
    icon: KeyRound,
    title: "Open the API keys page",
    body: (
      <>
        From the Console, open{" "}
        <a href="https://console.anthropic.com/settings/keys" target="_blank" rel="noreferrer">
          Settings → API keys
        </a>
        .
      </>
    ),
  },
  {
    icon: Copy,
    title: "Create a key and copy it",
    body: (
      <>
        Click <strong>Create Key</strong>, name it something like "FlowType", and copy the key
        that appears — it's only shown once.
      </>
    ),
  },
  {
    icon: Settings2,
    title: "Paste it into FlowType",
    body: (
      <>
        In FlowType, open <strong>Settings → Cleanup</strong>, pick Anthropic as the provider,
        paste your key, and choose a Claude model. The status banner switches to{" "}
        <strong>active</strong> once the key works.
      </>
    ),
  },
];

export default function DocsAnthropicApiKey() {
  return (
    <div className="min-h-screen bg-canvas text-foreground">
      <Seo
        title="How to Get an Anthropic API Key (2 Minutes) | FlowType"
        description="Step-by-step: create an Anthropic Console account, generate a Claude API key, and paste it into FlowType for fast AI text cleanup with a small Claude model."
        path="/docs/anthropic-api-key"
        jsonLd={[
          breadcrumbLd([
            { name: "FlowType", path: "/" },
            { name: "Docs", path: "/docs/getting-started" },
            { name: "Anthropic API key", path: "/docs/anthropic-api-key" },
          ]),
        ]}
      />
      <Nav />
      <main>
        <PageHero
          eyebrow="Docs · AI cleanup"
          title="Get an Anthropic API key."
          subtitle="Use your own Anthropic account to power FlowType's optional AI cleanup with Claude — billed by Anthropic at API rates, never through us."
          cta={false}
        >
          Takes about 2 minutes · Pay-as-you-go · Your key, your account
        </PageHero>

        <DocSteps eyebrow="Two-minute setup" title="Create your key in four steps." steps={STEPS} />

        <Prose eyebrow="Good to know" title="Which Claude model to pick">
          <p>
            Cleanup is a quick, lightweight job, so a <strong>small, fast Claude model</strong>{" "}
            — the Haiku class — is the sweet spot: near-instant responses and a tiny fraction
            of a cent per dictation. Save the bigger models for work that actually needs them.
          </p>
          <p>
            API usage is billed per request to your Anthropic account, so you'll need billing
            set up in the Console before your key will serve requests. For more detail, see the
            official{" "}
            <a
              href="https://docs.anthropic.com"
              target="_blank"
              rel="noreferrer"
              className="text-amber transition-opacity hover:opacity-80"
            >
              Anthropic docs
            </a>
            .
          </p>
        </Prose>

        <KeyReassurance />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
