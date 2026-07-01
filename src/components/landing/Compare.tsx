import { Check, X } from "lucide-react";
import { Section, Eyebrow, Reveal, DownloadCTA } from "./primitives";

type Cell = boolean | string;
const ROWS: { label: string; flow: Cell; wispr: Cell }[] = [
  { label: "Price", flow: "Free", wispr: "$15/mo" },
  { label: "Free tier", flow: "Unlimited — the whole app", wispr: "~2,000 words / week" },
  { label: "Transcription", flow: "On-device (local)", wispr: "Cloud" },
  { label: "Audio leaves your device", flow: "Never", wispr: "Yes" },
  { label: "Account required", flow: false, wispr: true },
  { label: "Bring your own AI model", flow: true, wispr: false },
  { label: "Open source / auditable", flow: true, wispr: false },
  { label: "Works offline", flow: true, wispr: false },
  { label: "Windows", flow: true, wispr: true },
  { label: "macOS", flow: "Beta", wispr: true },
];

function renderCell(v: Cell, positive: boolean) {
  if (typeof v === "string")
    return <span className={positive ? "font-semibold text-ink" : "text-ink-muted"}>{v}</span>;
  return v ? (
    <Check className="mx-auto h-[18px] w-[18px] text-amber" />
  ) : (
    <X className="mx-auto h-[18px] w-[18px] text-ink-muted/50" />
  );
}

export function Compare() {
  return (
    <Section id="compare">
      <Reveal className="text-center">
        <Eyebrow>The comparison</Eyebrow>
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">FlowType vs. Wispr Flow</h2>
        <p className="mx-auto mt-3 max-w-2xl text-[16px] text-ink-body">
          Same "dictate into any app." Opposite philosophy. They rent you speed and hold your audio.
          FlowType gives you speed <span className="text-ink">and</span> ownership — for $0.
        </p>
      </Reveal>

      <Reveal delay={80} className="mx-auto mt-12 max-w-3xl">
        <div className="card-edge overflow-hidden rounded-xl border border-hairline bg-surface">
          <table className="w-full text-left text-[14.5px]">
            <thead>
              <tr className="border-b border-hairline">
                <th className="px-5 py-4 font-medium text-ink-muted"> </th>
                <th className="px-5 py-4 text-center">
                  <span className="font-semibold text-ink">FlowType</span>
                </th>
                <th className="px-5 py-4 text-center font-medium text-ink-muted">Wispr Flow</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((r, i) => (
                <tr key={r.label} className={i % 2 ? "bg-white/[0.015]" : ""}>
                  <td className="px-5 py-3.5 text-ink-body">{r.label}</td>
                  <td className="px-5 py-3.5 text-center">{renderCell(r.flow, true)}</td>
                  <td className="px-5 py-3.5 text-center">{renderCell(r.wispr, false)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-center text-[12px] leading-relaxed text-ink-muted">
          Wispr Flow pricing and free-tier cap per its published plans (Pro $15/mo, or $12/mo billed
          annually; free tier ~2,000 words/week), current as of publication. Comparison reflects
          on-device vs. cloud architecture.
        </p>
        <div className="mt-8 flex justify-center">
          <DownloadCTA size="md" />
        </div>
      </Reveal>
    </Section>
  );
}
