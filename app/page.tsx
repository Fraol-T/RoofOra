"use client";

import React, { useState } from "react";
import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { PartnerBar } from "@/components/sections/PartnerBar";
import { AboutSection } from "@/components/sections/AboutSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Testimonials } from "@/components/sections/Testimonials";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Footer } from "@/components/layout/Footer";
import { QuoteModal } from "@/components/ui/QuoteModal";

export default function Home() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const handleOpenQuoteModal = () => {
    setIsQuoteModalOpen(true);
  };

  const handleCloseQuoteModal = () => {
    setIsQuoteModalOpen(false);
  };

  return (
    <main className="flex-1 relative">
      {/* Header */}
      <Header onOpenQuoteModal={handleOpenQuoteModal} />

      {/* Main Sections */}
      <HeroSection onOpenQuoteModal={handleOpenQuoteModal} />
      <PartnerBar />
      <AboutSection onOpenQuoteModal={handleOpenQuoteModal} />
      <ProjectsSection onOpenQuoteModal={handleOpenQuoteModal} />
      <HowItWorks onOpenQuoteModal={handleOpenQuoteModal} />
      <Testimonials />
      <CtaBanner onOpenQuoteModal={handleOpenQuoteModal} />

      {/* Footer */}
      <Footer />

      {/* Interactive Free Quote Request Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={handleCloseQuoteModal}
      />
    </main>
  );
}
