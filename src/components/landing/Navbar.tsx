import { Github, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const GITHUB_URL = "https://github.com/Maazsiddiqui01/FlowType";

const Navbar = () => (
  <nav className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-lg">
    <div className="container flex h-16 items-center justify-between">
      <a href="/" className="flex items-center gap-2.5">
        <img src={logo} alt="FlowType" className="h-7 w-7 rounded-lg" />
        <span className="text-[15px] font-semibold tracking-tight text-foreground">FlowType</span>
      </a>
      <div className="flex items-center gap-2">
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full p-2 text-muted-foreground transition-colors hover:text-foreground"
        >
          <Github className="h-[18px] w-[18px]" />
        </a>
        <Button size="sm" className="h-9 rounded-full px-4 text-[13px] font-medium" asChild>
          <a href={GITHUB_URL + "/releases"} target="_blank" rel="noopener noreferrer">
            <Download className="mr-1.5 h-3.5 w-3.5" />
            Download
          </a>
        </Button>
      </div>
    </div>
  </nav>
);

export default Navbar;
