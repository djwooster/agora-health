import { Nav } from "@/components/nav";
import { Hero } from "@/components/sections/hero";
import { TrustBar } from "@/components/sections/trust-bar";
import { HowItWorks } from "@/components/sections/how-it-works";
import { DrawOptions } from "@/components/sections/draw-options";
import { Biomarkers } from "@/components/sections/biomarkers";
import { DashboardPreview } from "@/components/sections/dashboard-preview";
import { Pricing } from "@/components/sections/pricing";
import { FAQ } from "@/components/sections/faq";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <TrustBar />
        <HowItWorks />
        <DrawOptions />
        <Biomarkers />
        <DashboardPreview />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
