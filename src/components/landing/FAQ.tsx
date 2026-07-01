import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Section, Eyebrow, Reveal } from "./primitives";

export const FAQS: { q: string; a: string }[] = [
  {
    q: "What is FlowType?",
    a: "FlowType is a free, open-source voice-to-text app (also called speech-to-text or dictation) for Windows and Mac. You hold a hotkey, speak, and it transcribes your speech into text on your own device with Whisper, then pastes it into whatever app you're using. Nothing is uploaded — transcription is fully local — and there's no subscription and no account.",
  },
  {
    q: "Is FlowType free?",
    a: "Yes — completely. FlowType is free and open source. There's no subscription, no word or minute cap, no account, and no credit card. Optional AI cleanup uses an API key you bring, billed by your provider at their rates — never through us.",
  },
  {
    q: "Does my audio leave my computer?",
    a: "No. FlowType transcribes your voice on-device with Faster-Whisper. Audio is never uploaded for transcription, so there's nothing to leak or log. It works fully offline.",
  },
  {
    q: "Is FlowType a good Wispr Flow alternative?",
    a: "It's built for exactly the people Wispr Flow under-serves: it does the same \"dictate into any app\" job, but locally, free, open-source, and with no account or word cap. If privacy, cost, and ownership matter more to you than cloud features, FlowType is the stronger fit.",
  },
  {
    q: "Does FlowType work offline?",
    a: "Yes. Because transcription runs on your own machine, FlowType works with no internet connection. (Optional AI cleanup is the only feature that needs a connection — and only if you enable it.)",
  },
  {
    q: "Does FlowType work on Windows?",
    a: "Yes — Windows is the primary, shipped platform. FlowType runs Faster-Whisper locally (CPU int8, with CUDA acceleration when available) and pastes into any app.",
  },
  {
    q: "Does FlowType work on Mac?",
    a: "There's a macOS beta you can download today (default hotkey: Right-Option). It's actively improving — try it and file issues. For production-critical use, know it's still in beta.",
  },
  {
    q: "Can I bring my own AI model?",
    a: "Yes. Connect your own OpenRouter, OpenAI, or Anthropic key to clean up transcripts, and pick any model you like — you're never locked to one provider's model, and you pay only your own usage. You can also skip AI entirely and keep the raw transcript.",
  },
  {
    q: "Is it really private if it's open source?",
    a: "That's why it's private in a way you can trust. Open source means the \"your audio stays local\" claim is verifiable — anyone can audit the code. Your API keys are encrypted at rest, and FlowType never proxies your requests.",
  },
];

export function FAQ() {
  return (
    <Section id="faq">
      <Reveal className="text-center">
        <Eyebrow>Answers</Eyebrow>
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Frequently asked questions</h2>
      </Reveal>

      <Reveal delay={80} className="mx-auto mt-12 max-w-3xl">
        <Accordion type="single" collapsible className="w-full">
          {FAQS.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-hairline">
              <AccordionTrigger className="py-5 text-left text-[16px] font-medium text-ink hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-[15px] leading-relaxed text-ink-body">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Reveal>
    </Section>
  );
}
