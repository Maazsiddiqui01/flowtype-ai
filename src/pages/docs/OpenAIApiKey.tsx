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
    title: "Create an OpenAI platform account",
    body: (
      <>
        Go to{" "}
        <a href="https://platform.openai.com" target="_blank" rel="noreferrer">
          platform.openai.com
        </a>{" "}
        and sign up, or sign in with an existing OpenAI account. This is the developer
        platform — separate from a ChatGPT subscription.
      </>
    ),
  },
  {
    icon: KeyRound,
    title: "Open the API keys page",
    body: (
      <>
        From the dashboard, open{" "}
        <a href="https://platform.openai.com/api-keys" target="_blank" rel="noreferrer">
          API keys
        </a>{" "}
        in the left sidebar.
      </>
    ),
  },
  {
    icon: Copy,
    title: "Create a secret key and copy it",
    body: (
      <>
        Click <strong>Create new secret key</strong>, name it something like "FlowType", and
        copy the key right away — it's only shown once.
      </>
    ),
  },
  {
    icon: Settings2,
    title: "Paste it into FlowType",
    body: (
      <>
        In FlowType, open <strong>Settings → Cleanup</strong>, pick OpenAI as the provider,
        paste your key, and choose a model. The status banner switches to{" "}
        <strong>active</strong> once the key works.
      </>
    ),
  },
];

export default function DocsOpenAIApiKey() {
  return (
    <div className="min-h-screen bg-canvas text-foreground">
      <Seo
        title="How to Get an OpenAI API Key (2 Minutes) | FlowType"
        description="Step-by-step: create an OpenAI platform account, generate a secret API key, and paste it into FlowType for AI text cleanup with a small, cheap GPT model."
        path="/docs/openai-api-key"
        jsonLd={[
          breadcrumbLd([
            { name: "FlowType", path: "/" },
            { name: "Docs", path: "/docs/getting-started" },
            { name: "OpenAI API key", path: "/docs/openai-api-key" },
          ]),
        ]}
      />
      <Nav />
      <main>
        <PageHero
          eyebrow="Docs · AI cleanup"
          title="Get an OpenAI API key."
          subtitle="Use your own OpenAI account to power FlowType's optional AI cleanup — billed by OpenAI at API rates, never through us."
          cta={false}
        >
          Takes about 2 minutes · Pay-as-you-go · Your key, your account
        </PageHero>

        <DocSteps eyebrow="Two-minute setup" title="Create your key in four steps." steps={STEPS} />

        <Prose eyebrow="Good to know" title="Billing, and which model to pick">
          <p>
            OpenAI API usage is <strong>pay-as-you-go</strong> and separate from ChatGPT Plus —
            you'll need to add a payment method under Billing before your key will serve
            requests. There's no subscription: you only pay for what FlowType actually cleans.
          </p>
          <p>
            For cleanup, a small fast model is all you need. The{" "}
            <strong>gpt-4o-mini / gpt-5-mini</strong> class is ideal — each cleaned dictation
            costs a tiny fraction of a cent, so even heavy daily use adds up to pennies. For
            more detail, see the official{" "}
            <a
              href="https://platform.openai.com/docs"
              target="_blank"
              rel="noreferrer"
              className="text-amber transition-opacity hover:opacity-80"
            >
              OpenAI docs
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
