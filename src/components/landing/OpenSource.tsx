import { Section, Reveal, GitHubGlyph } from "./primitives";
import { GITHUB_URL, GITHUB_OWNER, GITHUB_REPO } from "@/lib/site";

const POINTS = [
  ["Auditable", "every line, public."],
  ["Yours to run", "no server we can turn off, no plan we can sunset."],
  ["Community-built", "issues, PRs, and stars welcome."],
];

export function OpenSource() {
  return (
    <Section>
      <Reveal>
        <div className="card-edge overflow-hidden rounded-2xl border border-hairline bg-surface">
          <div className="grid gap-8 p-8 sm:p-12 lg:grid-cols-[1.3fr_1fr] lg:items-center">
            <div>
              <h2 className="max-w-xl text-3xl font-semibold tracking-tight sm:text-[34px]">
                Open source, because "trust me" isn't a privacy policy.
              </h2>
              <p className="mt-5 max-w-xl text-[16px] leading-relaxed text-ink-body">
                FlowType is on GitHub in full. That's not a footnote — it's the whole point. When we
                say your audio stays on your machine, you don't have to believe us. You can read the
                code, run it yourself, fork it, or file an issue.
              </p>
              <div className="mt-7 grid gap-3 sm:grid-cols-3">
                {POINTS.map(([a, b]) => (
                  <div key={a} className="rounded-lg border border-hairline bg-surface-2 p-4">
                    <p className="text-sm font-semibold text-ink">{a}</p>
                    <p className="mt-1 text-[13px] text-ink-body">{b}</p>
                  </div>
                ))}
              </div>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex h-11 items-center gap-2.5 rounded-lg bg-white px-5 text-sm font-semibold text-black transition-transform hover:-translate-y-0.5"
              >
                <GitHubGlyph className="h-[18px] w-[18px]" /> View FlowType on GitHub
              </a>
            </div>

            {/* terminal-ish clone card */}
            <div className="rounded-xl border border-hairline bg-canvas p-5 font-mono text-[13px]">
              <div className="mb-3 flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              </div>
              <p className="text-ink-muted">
                <span className="text-amber">$</span> git clone
              </p>
              <p className="break-all text-ink-body">
                &nbsp;&nbsp;github.com/{GITHUB_OWNER}/{GITHUB_REPO}
              </p>
              <p className="mt-2 text-ink-muted">
                <span className="text-amber">$</span> <span className="text-ink-body">uv run python -m flowtype</span>
              </p>
              <p className="mt-3 text-ink-muted"># it's all right there.</p>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
