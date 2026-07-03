import { Helmet } from "react-helmet-async";

const SITE = "https://flowtype.dev";
const OG_IMAGE = `${SITE}/og.png`;
const GH = "https://github.com/Maazsiddiqui01/FlowType";

export function Seo({
  title,
  description,
  path,
  jsonLd,
}: {
  title: string;
  description: string;
  path: string;
  jsonLd?: object[];
}) {
  const url = `${SITE}${path}`;
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="FlowType" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={OG_IMAGE} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={OG_IMAGE} />
      {jsonLd?.map((obj, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(obj)}
        </script>
      ))}
    </Helmet>
  );
}

export const softwareAppLd = (os = "Windows, macOS") => ({
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "FlowType",
  applicationCategory: "UtilitiesApplication",
  applicationSubCategory: "Voice to Text / Dictation",
  operatingSystem: os,
  description:
    "Free, open-source, local-first voice-to-text dictation. Hold a hotkey, speak, and FlowType transcribes on-device with Whisper and pastes into any app. No subscription, no account, no upload.",
  url: SITE + "/",
  downloadUrl: GH + "/releases",
  softwareVersion: "0.1.14",
  license: GH + "/blob/main/LICENSE",
  image: OG_IMAGE,
  isAccessibleForFree: true,
  featureList: [
    "On-device speech-to-text with Faster-Whisper (no audio upload)",
    "Push-to-talk hotkey dictation into any application",
    "Works fully offline",
    "Optional AI cleanup with your own OpenRouter, OpenAI, or Anthropic key",
    "Open source (MIT); no account or subscription",
  ],
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  author: { "@type": "Organization", name: "FlowType" },
});

export const websiteLd = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "FlowType",
  url: SITE + "/",
  description:
    "Free, local, open-source voice-to-text dictation for Windows and Mac.",
});

export const howToLd = () => ({
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to dictate text with FlowType",
  description:
    "Turn your voice into typed text in any app with FlowType, transcribed on your own device.",
  totalTime: "PT10S",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Hold the hotkey",
      text: "From any app, press and hold your FlowType hotkey (Ctrl+Shift+Space on Windows, Right-Option on macOS).",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Speak",
      text: "Say what you want to write. FlowType transcribes your speech on your own device with Faster-Whisper — nothing is uploaded.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Release",
      text: "Let go of the hotkey and the text pastes straight into whatever app your cursor is in, optionally cleaned up by your own AI model.",
    },
  ],
});

export const organizationLd = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "FlowType",
  url: SITE + "/",
  sameAs: [GH],
});

export const faqLd = (faqs: { q: string; a: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
});

export const breadcrumbLd = (items: { name: string; path: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((it, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: it.name,
    item: SITE + it.path,
  })),
});
