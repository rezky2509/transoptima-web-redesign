import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import FleetSection from "@/components/FleetSection";
import Benefits from "@/components/Benefits";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      {/* <Ticker /> */}
      <FleetSection />
      <Benefits />
      <CTA />
      <Footer />
    </main>
  );
}
