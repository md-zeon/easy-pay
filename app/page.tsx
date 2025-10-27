import Benefits from "@/components/Benefits";
import CTA from "@/components/CTA";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import Security from "@/components/Security";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <Features />

      {/* Benefits Section */}
      <Benefits />

      {/* How it works Section */}
      <HowItWorks />

      {/* Security Section */}
      <Security />

      {/* Pricing Section */}
      <Pricing />

      {/* Testimonial Section */}
      <Testimonial />

      {/* Call To Action Section */}
      <CTA />
    </>
  );
}
