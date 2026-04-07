import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Demo from "@/components/landing/Demo";
import Features from "@/components/landing/Features";
import WhyFlowType from "@/components/landing/WhyFlowType";
import HowItWorks from "@/components/landing/HowItWorks";
import OpenSource from "@/components/landing/OpenSource";
import Footer from "@/components/landing/Footer";

const Index = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Navbar />
    <Hero />
    <Demo />
    <Features />
    <WhyFlowType />
    <HowItWorks />
    <OpenSource />
    <Footer />
  </div>
);

export default Index;
