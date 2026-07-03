import { Link } from "react-router-dom";
import { Logo } from "./Nav";
import { GitHubGlyph, SmartLink } from "./primitives";
import { DOWNLOAD, GITHUB_URL, RELEASES_URL, ISSUES_URL, LICENSE_URL } from "@/lib/site";

const COLS = [
  {
    title: "Product",
    links: [
      { label: "Download (Windows)", href: DOWNLOAD.windows.url },
      { label: "Download (macOS beta)", href: DOWNLOAD.mac.url },
      { label: "Features", href: "#features" },
      { label: "vs Wispr Flow", href: "#compare" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    title: "Open source",
    links: [
      { label: "GitHub", href: GITHUB_URL },
      { label: "Releases", href: RELEASES_URL },
      { label: "Report an issue", href: ISSUES_URL },
      { label: "License (MIT)", href: LICENSE_URL },
    ],
  },
  {
    title: "Use cases",
    links: [
      { label: "Voice to text for Windows", href: "/voice-to-text-windows" },
      { label: "Voice to text for Mac", href: "/voice-to-text-mac" },
      { label: "Wispr Flow alternative", href: "/wispr-flow-alternative" },
      { label: "Local speech to text", href: "/#privacy" },
    ],
  },
  {
    title: "Docs",
    links: [
      { label: "Get started", href: "/docs/getting-started" },
      { label: "OpenRouter API key", href: "/docs/openrouter-api-key" },
      { label: "OpenAI API key", href: "/docs/openai-api-key" },
      { label: "Anthropic API key", href: "/docs/anthropic-api-key" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-hairline">
      <div className="mx-auto max-w-container px-6 py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]">
          <div>
            <Link to="/" className="flex items-center gap-2.5">
              <Logo />
              <span className="text-[16px] font-semibold text-ink">FlowType</span>
            </Link>
            <p className="mt-3 max-w-xs text-[13.5px] leading-relaxed text-ink-muted">
              Local voice-to-text. Hold a hotkey, speak, and it types — on your machine, never the cloud.
            </p>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-lg border border-hairline px-3 py-2 text-sm text-ink-body transition-colors hover:border-white/15 hover:text-ink"
            >
              <GitHubGlyph className="h-4 w-4" /> Star on GitHub
            </a>
          </div>

          {COLS.map((c) => (
            <div key={c.title}>
              <p className="text-[12.5px] font-semibold uppercase tracking-[0.12em] text-ink-muted">
                {c.title}
              </p>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <SmartLink
                      href={l.href}
                      className="text-[13.5px] text-ink-body transition-colors hover:text-ink"
                    >
                      {l.label}
                    </SmartLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-hairline pt-6 text-[12.5px] text-ink-muted sm:flex-row">
          <p>© {new Date().getFullYear()} FlowType. Free &amp; open-source. Your audio never leaves your device.</p>
          <p>Built with Faster-Whisper.</p>
        </div>
      </div>
    </footer>
  );
}
