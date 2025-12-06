import { OpeningHero } from "@/components/sections/OpeningHero";
import { HorizontalJourney } from "@/components/sections/HorizontalJourney";
import { ByflySection } from "@/components/sections/ByflySection";
import { ParallaxQuote } from "@/components/sections/ParallaxQuote";
import { WhatWeDoSection } from "@/components/sections/WhatWeDoSection";
import { InteractiveCards } from "@/components/sections/InteractiveCards";
import { StickyTimeline } from "@/components/sections/StickyTimeline";
import { PricingSection } from "@/components/sections/PricingSection";
import { ImmersiveDetails } from "@/components/sections/ImmersiveDetails";
import { FloatingContact } from "@/components/sections/FloatingContact";
import { FinePrintSection } from "@/components/sections/FinePrintSection";
import { ClosingSection } from "@/components/sections/ClosingSection";

export default function Home() {
  return (
    <main className="relative">
      {/* Opening Experience - Full Screen Immersive */}
      <OpeningHero />
      
      {/* Horizontal Scroll Section - The Journey */}
      <HorizontalJourney />
      
      {/* Byfly Section - Story */}
      <ByflySection />
      
      {/* Parallax Quote */}
      <ParallaxQuote />
      
      {/* What We Do Together */}
      <WhatWeDoSection />
      
      {/* Interactive Cards - Who Is It For */}
      <InteractiveCards />
      
      {/* Sticky Timeline - 4 Days */}
      <StickyTimeline />
      
      {/* Pricing */}
      <PricingSection />
      
      {/* Immersive Details */}
      <ImmersiveDetails />
      
      {/* Contact Form */}
      <FloatingContact />
      
      {/* Fine Print - Important Info */}
      <FinePrintSection />
      
      {/* Closing Experience */}
      <ClosingSection />
    </main>
  );
}
