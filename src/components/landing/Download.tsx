import { Download as DL } from "lucide-react";
import { Section, Eyebrow, Reveal, WindowsGlyph, AppleGlyph, BetaTag } from "./primitives";
import { DOWNLOAD, GITHUB_URL } from "@/lib/site";

export function DownloadSection() {
  return (
    <Section id="download">
      <Reveal className="text-center">
        <Eyebrow>Get FlowType</Eyebrow>
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Download and hold a key.</h2>
        <p className="mx-auto mt-3 max-w-xl text-[16px] text-ink-body">
          Free and open-source on both platforms. No account, no telemetry, no upload.
        </p>
      </Reveal>

      <div className="mx-auto mt-12 grid max-w-3xl gap-5 sm:grid-cols-2">
        <Reveal>
          <PlatformCard
            glyph={<WindowsGlyph className="h-7 w-7 text-ink" />}
            name="Windows"
            tag={<span className="text-[12px] text-ink-muted">shipped</span>}
            body="Runs local with Faster-Whisper — CPU int8, with CUDA acceleration when you have it."
            href={DOWNLOAD.windows.url}
            cta="Download for Windows"
            sub=".exe · from GitHub Releases"
          />
        </Reveal>
        <Reveal delay={90}>
          <PlatformCard
            glyph={<AppleGlyph className="h-7 w-7 text-ink" />}
            name="macOS"
            tag={<BetaTag />}
            body="The Mac build is here and improving. Default hotkey: Right-Option. Apple Silicon."
            href={DOWNLOAD.mac.url}
            cta="Download for macOS"
            sub=".dmg · beta · from GitHub Releases"
          />
        </Reveal>
      </div>

      <p className="mt-8 text-center text-[13px] text-ink-muted">
        Prefer to build from source?{" "}
        <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="text-amber hover:opacity-80">
          Clone the repo →
        </a>
      </p>
    </Section>
  );
}

function PlatformCard({
  glyph,
  name,
  tag,
  body,
  href,
  cta,
  sub,
}: {
  glyph: JSX.Element;
  name: string;
  tag: JSX.Element;
  body: string;
  href: string;
  cta: string;
  sub: string;
}) {
  return (
    <div className="card-edge flex h-full flex-col rounded-xl border border-hairline bg-surface p-6">
      <div className="flex items-center gap-3">
        {glyph}
        <h3 className="text-lg font-semibold text-ink">{name}</h3>
        <span className="ml-auto">{tag}</span>
      </div>
      <p className="mt-4 flex-1 text-[14.5px] leading-relaxed text-ink-body">{body}</p>
      <a
        href={href}
        className="mt-6 inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-white text-sm font-semibold text-black transition-transform hover:-translate-y-0.5"
      >
        <DL className="h-4 w-4" /> {cta}
      </a>
      <p className="mt-2.5 text-center text-[12px] text-ink-muted">{sub}</p>
    </div>
  );
}
