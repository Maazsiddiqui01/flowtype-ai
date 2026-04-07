import { Github, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const GITHUB_URL = "https://github.com/Maazsiddiqui01/FlowType";

const Navbar = () => (
  <nav className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
    <div className="container flex h-16 items-center justify-between">
      <span className="text-xl font-bold tracking-tight text-foreground">FlowType</span>
      <div className="flex items-center gap-4">
        <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-foreground">
          <Github className="h-5 w-5" />
        </a>
        <Button size="sm" asChild>
          <a href={GITHUB_URL + "/releases"} target="_blank" rel="noopener noreferrer">
            <Download className="h-4 w-4" />
            Download
          </a>
        </Button>
      </div>
    </div>
  </nav>
);

export default Navbar;
