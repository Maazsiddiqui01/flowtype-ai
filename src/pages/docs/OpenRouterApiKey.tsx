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
    title: "Create an OpenRouter account",
    body: (
      <>
        Go to{" "}
        <a href="https://openrouter.ai" target="_blank" rel="noreferrer">
          openrouter.ai
        </a>{" "}
        and sign up — email, Google, or GitHub all work. No payment method is required to use
        free models.
      </>
    ),
  },
  {
    icon: KeyRound,
    title: "Open the Keys page",
    body: (
      <>
        From your account menu, open{" "}
        <a href="https://openrouter.ai/settings/keys" target="_blank" rel="noreferrer">
          Settings → Keys
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
        In FlowType, open <strong>Settings → Cleanup</strong>, pick OpenRouter as the provider,
        paste your key, and choose a model. The status banner switches to{" "}
        <strong>active</strong> once the key works.
      </>
    ),
  },
];

export default function DocsOpenRouterApiKey() {
  return (
    <div className="min-h-screen bg-canvas text-foreground">
      <Seo
        title="How to Get an OpenRouter API Key (2 Minutes) | FlowType"
        description="Step-by-step: create an OpenRouter account, generate an API key, and paste it into FlowType for AI text cleanup — including free models that cost nothing."
        path="/docs/openrouter-api-key"
        jsonLd={[
          breadcrumbLd([
            { name: "FlowType", path: "/" },
            { name: "Docs", path: "/docs/getting-started" },
            { name: "OpenRouter API key", path: "/docs/openrouter-api-key" },
          ]),
        ]}
      />
      <Nav />
      <main>
        <PageHero
          eyebrow="Docs · AI cleanup"
          title="Get an OpenRouter API key."
          subtitle="OpenRouter is the easiest way to power FlowType's optional AI cleanup — one key unlocks hundreds of models, including completely free ones."
          cta={false}
        >
          Takes about 2 minutes · Free models available · Your key, your account
        </PageHero>

        <DocSteps eyebrow="Two-minute setup" title="Create your key in four steps." steps={STEPS} />

        <Prose eyebrow="Good to know" title="What is OpenRouter?">
          <p>
            OpenRouter is a gateway to many AI models behind one account and one API key —
            OpenAI, Anthropic, Google, Meta, Mistral, and more, including a rotating set of
            completely free models. Instead of juggling a separate account per provider, you
            create a single key and pick whichever model you want FlowType to clean your
            transcripts with.
          </p>
          <p>
            Models tagged <strong>:free</strong> cost nothing to use — pick one of those in
            FlowType and AI cleanup runs at zero cost. Paid models bill your OpenRouter balance
            per request, typically a fraction of a cent per dictation. For more detail, see the
            official{" "}
            <a
              href="https://openrouter.ai/docs"
              target="_blank"
              rel="noreferrer"
              className="text-amber transition-opacity hover:opacity-80"
            >
              OpenRouter docs
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
