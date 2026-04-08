const GITHUB_URL = "https://github.com/Maazsiddiqui01/FlowType";

const Footer = () => (
  <footer className="border-t border-border/20 py-8">
    <div className="container flex flex-col items-center justify-between gap-3 text-[11px] text-muted-foreground/40 sm:flex-row">
      <span>© {new Date().getFullYear()} FlowType</span>
      <div className="flex gap-6">
        <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="transition-colors duration-200 hover:text-muted-foreground">
          GitHub
        </a>
        <a href={GITHUB_URL + "/blob/main/LICENSE"} target="_blank" rel="noopener noreferrer" className="transition-colors duration-200 hover:text-muted-foreground">
          MIT License
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
