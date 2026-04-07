import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Demo from "@/components/landing/Demo";
import Features from "@/components/landing/Features";
import HowItWorks from "@/components/landing/HowItWorks";
import OpenSource from "@/components/landing/OpenSource";
import Footer from "@/components/landing/Footer";

const Index = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Navbar />
    <Hero />
    <Demo />
    <Features />
    <HowItWorks />
    <OpenSource />
    <Footer />
  </div>
);

export default Index;
