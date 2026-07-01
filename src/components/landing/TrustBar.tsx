import { Star, ShieldOff, Github } from "lucide-react";
import { useGitHubStats } from "@/hooks/useGitHubStats";
import { GITHUB_URL } from "@/lib/site";
import { Reveal } from "./primitives";

function fmt(n: number | null | undefined) {
  if (n == null) return null;
  if (n >= 1000) return `${(n / 1000).toFixed(n >= 10000 ? 0 : 1)}k`;
  return `${n}`;
}

export function TrustBar() {
  const { data } = useGitHubStats();
  const stars = fmt(data?.stars);
  const downloads = fmt(data?.downloads);

  const items: { label: string; value: string; icon: JSX.Element }[] = [
    { label: "Open source · MIT", value: "MIT", icon: <Github className="h-4 w-4" /> },
    { label: "100% on-device", value: "No telemetry", icon: <ShieldOff className="h-4 w-4" /> },
    { label: "Windows & macOS", value: "beta", icon: <span className="text-amber">◆</span> },
  ];

  return (
    <div className="border-y border-hairline bg-surface/40">
      <div className="mx-auto max-w-container px-6 py-8">
        <Reveal className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          <p className="text-sm font-medium text-ink-body">Open, auditable, and yours.</p>
          <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3">
            {stars && (
              <Stat icon={<Star className="h-4 w-4 fill-amber text-amber" />} value={stars} label="GitHub stars" />
            )}
            {downloads && downloads !== "0" && (
              <Stat icon={<span className="text-amber">⬇</span>} value={downloads} label="downloads" />
            )}
            <Stat icon={<Github className="h-4 w-4" />} value="MIT" label="open source" />
            <Stat icon={<ShieldOff className="h-4 w-4" />} value="0" label="telemetry / trackers" />
          </div>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-ink-muted underline-offset-4 transition-colors hover:text-ink hover:underline"
          >
            Read the code →
          </a>
        </Reveal>
      </div>
    </div>
  );
}

function Stat({ icon, value, label }: { icon: JSX.Element; value: string; label: string }) {
  return (
    <div className="flex items-center gap-2">
      {icon}
      <span className="font-semibold text-ink">{value}</span>
      <span className="text-sm text-ink-muted">{label}</span>
    </div>
  );
}
