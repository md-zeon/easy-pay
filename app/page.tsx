import Features from "@/components/Features";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import Security from "@/components/Security";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <Features />

      {/* How it works Section */}
      <HowItWorks />

      {/* Security Section */}
      <Security />

      {/* Pricing Section */}
      <Pricing />
    </>
  );
}
