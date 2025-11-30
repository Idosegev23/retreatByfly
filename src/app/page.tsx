import { OpeningHero } from "@/components/sections/OpeningHero";
import { HorizontalJourney } from "@/components/sections/HorizontalJourney";
import { ParallaxQuote } from "@/components/sections/ParallaxQuote";
import { WhatWeDoSection } from "@/components/sections/WhatWeDoSection";
import { InteractiveCards } from "@/components/sections/InteractiveCards";
import { StickyTimeline } from "@/components/sections/StickyTimeline";
import { ImmersiveDetails } from "@/components/sections/ImmersiveDetails";
import { FloatingContact } from "@/components/sections/FloatingContact";
import { ClosingSection } from "@/components/sections/ClosingSection";

export default function Home() {
  return (
    <main className="relative">
      {/* Opening Experience - Full Screen Immersive */}
      <OpeningHero />
      
      {/* Horizontal Scroll Section - The Journey */}
      <HorizontalJourney />
      
      {/* Parallax Quote */}
      <ParallaxQuote />
      
      {/* What We Do Together */}
      <WhatWeDoSection />
      
      {/* Interactive Cards - Who Is It For */}
      <InteractiveCards />
      
      {/* Sticky Timeline - 5 Days */}
      <StickyTimeline />
      
      {/* Immersive Details with Scroll Velocity */}
      <ImmersiveDetails />
      
      {/* Contact Form */}
      <FloatingContact />
      
      {/* Closing Experience */}
      <ClosingSection />
    </main>
  );
}
