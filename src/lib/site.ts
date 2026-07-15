// Central config for FlowType's marketing site — links, copy constants, keyword-mapped
// metadata. Download links point at real GitHub Releases assets.

export const GITHUB_OWNER = "Maazsiddiqui01";
export const GITHUB_REPO = "FlowType";
export const GITHUB_URL = `https://github.com/${GITHUB_OWNER}/${GITHUB_REPO}`;
export const RELEASES_URL = `${GITHUB_URL}/releases`;
export const ISSUES_URL = `${GITHUB_URL}/issues`;
export const LICENSE_URL = `${GITHUB_URL}/blob/main/LICENSE`;

export const DOWNLOAD = {
  windows: {
    label: "Windows",
    url: `${GITHUB_URL}/releases/download/v0.1.15/FlowType-Beta-0.1.15.exe`,
    ext: ".exe",
    status: "shipped" as const,
  },
  mac: {
    label: "macOS",
    url: `${GITHUB_URL}/releases/download/v0.1.15/FlowType-0.1.15-macos-arm64.dmg`,
    ext: ".dmg",
    status: "beta" as const,
  },
};

export const NAV_LINKS = [
  { label: "How it works", href: "#how" },
  { label: "Features", href: "#features" },
  { label: "Privacy", href: "#privacy" },
  { label: "vs Wispr Flow", href: "#compare" },
  { label: "FAQ", href: "#faq" },
];
