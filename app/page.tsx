import HeroSection from "@/components/sections/HeroSection";
import MomentoHistoricoSection from "@/components/sections/MomentoHistoricoSection";
import DesafioSection from "@/components/sections/DesafioSection";
import GoobyUniverseSection from "@/components/sections/GoobyUniverseSection";
import DemoSection from "@/components/sections/DemoSection";
import VisionNegocioSection from "@/components/sections/VisionNegocioSection";
import SliderSection from "@/components/sections/SliderSection";
import CTASection from "@/components/sections/CTASection";
import Navbar from "@/components/ui/Navbar";
import CustomCursor from "@/components/ui/CustomCursor";

function SectionDivider() {
  return (
    <div className="flex items-center justify-center py-16 md:py-24">
      <div className="w-px h-20 bg-gradient-to-b from-transparent via-[var(--color-gold-dim)]/30 to-transparent" />
    </div>
  );
}

export default function Page() {
  return (
    <>
      <Navbar />
      <CustomCursor />
      <main className="bg-[var(--color-void)]">
        <HeroSection />
        <SectionDivider />
        <MomentoHistoricoSection />
        <SectionDivider />
        <DesafioSection />
        <SectionDivider />
        <GoobyUniverseSection />
        <SectionDivider />
        <DemoSection />
        <SectionDivider />
        <VisionNegocioSection />
        <SectionDivider />
        <SliderSection />
        <SectionDivider />
        <CTASection />
      </main>
    </>
  );
}
