import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import WisprFlowAlternative from "./pages/WisprFlowAlternative.tsx";
import VoiceToTextWindows from "./pages/VoiceToTextWindows.tsx";
import VoiceToTextMac from "./pages/VoiceToTextMac.tsx";
import DocsGettingStarted from "./pages/docs/GettingStarted.tsx";
import DocsOpenRouterApiKey from "./pages/docs/OpenRouterApiKey.tsx";
import DocsOpenAIApiKey from "./pages/docs/OpenAIApiKey.tsx";
import DocsAnthropicApiKey from "./pages/docs/AnthropicApiKey.tsx";
import { ScrollToTop } from "@/components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter basename={import.meta.env.BASE_URL}>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/wispr-flow-alternative" element={<WisprFlowAlternative />} />
            <Route path="/voice-to-text-windows" element={<VoiceToTextWindows />} />
            <Route path="/voice-to-text-mac" element={<VoiceToTextMac />} />
            <Route path="/docs/getting-started" element={<DocsGettingStarted />} />
            <Route path="/docs/openrouter-api-key" element={<DocsOpenRouterApiKey />} />
            <Route path="/docs/openai-api-key" element={<DocsOpenAIApiKey />} />
            <Route path="/docs/anthropic-api-key" element={<DocsAnthropicApiKey />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
