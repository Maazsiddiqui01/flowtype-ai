import { Github, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const GITHUB_URL = "https://github.com/Maazsiddiqui01/FlowType";

const Navbar = () => (
  <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl">
    <div className="container flex h-14 items-center justify-between">
      <span className="text-[14px] font-semibold tracking-tight">FlowType</span>
      <div className="flex items-center gap-1.5">
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full p-2 text-muted-foreground/60 transition-colors duration-200 hover:text-foreground"
        >
          <Github className="h-4 w-4" />
        </a>
        <Button size="sm" className="h-7 rounded-full px-3.5 text-[11px] font-medium" asChild>
          <a href={GITHUB_URL + "/releases"} target="_blank" rel="noopener noreferrer">
            <Download className="h-3 w-3" />
            Download
          </a>
        </Button>
      </div>
    </div>
  </nav>
);

export default Navbar;
