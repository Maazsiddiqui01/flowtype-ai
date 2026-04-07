const GITHUB_URL = "https://github.com/Maazsiddiqui01/FlowType";

const Footer = () => (
  <footer className="border-t border-border py-8">
    <div className="container flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground sm:flex-row">
      <span>© {new Date().getFullYear()} FlowType. MIT License.</span>
      <div className="flex gap-6">
        <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-foreground">
          GitHub
        </a>
        <a href={GITHUB_URL + "/blob/main/LICENSE"} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-foreground">
          License
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
