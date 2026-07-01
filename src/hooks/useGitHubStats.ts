import { useQuery } from "@tanstack/react-query";
import { GITHUB_OWNER, GITHUB_REPO } from "@/lib/site";

export interface GitHubStats {
  stars: number | null;
  downloads: number | null;
}

/** Live GitHub stars + total release-asset downloads. Honest numbers, no fabrication —
 *  components fall back to badges when a count is null or too small to impress. */
async function fetchStats(): Promise<GitHubStats> {
  const base = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}`;
  let stars: number | null = null;
  let downloads: number | null = null;
  try {
    const repo = await fetch(base, { headers: { Accept: "application/vnd.github+json" } });
    if (repo.ok) stars = (await repo.json()).stargazers_count ?? null;
  } catch {
    /* ignore — badge fallback */
  }
  try {
    const rel = await fetch(`${base}/releases?per_page=100`, {
      headers: { Accept: "application/vnd.github+json" },
    });
    if (rel.ok) {
      const releases = await rel.json();
      downloads = releases.reduce(
        (sum: number, r: { assets?: { download_count?: number }[] }) =>
          sum + (r.assets ?? []).reduce((s, a) => s + (a.download_count ?? 0), 0),
        0,
      );
    }
  } catch {
    /* ignore */
  }
  return { stars, downloads };
}

export function useGitHubStats() {
  return useQuery({
    queryKey: ["github-stats"],
    queryFn: fetchStats,
    staleTime: 1000 * 60 * 30,
    retry: 1,
  });
}
