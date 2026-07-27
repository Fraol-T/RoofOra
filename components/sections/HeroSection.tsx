"use client";

import React from "react";
import Image from "next/image";
import { Star, ShieldCheck, CheckCircle, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { RoofStyleWidget } from "@/components/ui/RoofStyleWidget";

interface HeroSectionProps {
  onOpenQuoteModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenQuoteModal }) => {
  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-24 hero-gradient overflow-hidden">
      {/* Subtle background glow accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-amber-300/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          
          {/* Left Column: Hero Copy & AI Widget */}
          <div className="lg:col-span-6 space-y-8">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-slate-200/80 shadow-sm text-xs font-semibold text-slate-700">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              <span>Trusted Roofing Experts</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1] font-heading">
                Smart Roofing for <br />
                <span className="text-slate-900">Modern Homes.</span>
              </h1>
              <p className="text-base sm:text-lg text-slate-600 max-w-lg leading-relaxed font-body">
                Our expert roofing services are designed to protect your home with quality, energy efficiency, and precision craftsmanship.
              </p>
            </div>

            {/* CTA Button */}
            <div>
              <Button
                onClick={onOpenQuoteModal}
                variant="primary"
                size="lg"
                showArrow
              >
                Get Started Now
              </Button>
            </div>

            {/* Interactive Roof Style Widget (Embedded overlay matching screenshot layout) */}
            <div className="pt-4">
              <RoofStyleWidget />
            </div>
          </div>

          {/* Right Column: Hero Visual & Tooltips */}
          <div className="lg:col-span-6 relative mt-4 lg:mt-0">
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white/80 bg-slate-900 aspect-[4/3] sm:aspect-[16/11]">
              <Image
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
                alt="Modern home with blue metal standing seam roof"
                fill
                priority
                className="object-cover object-center transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />

              {/* Floating Tooltip Marker 1: "Bona Sheet Roofing" */}
              <div className="absolute top-1/3 left-1/3 z-20 transition-transform hover:scale-105">
                <div className="relative group">
                  <div className="flex items-center gap-2 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-lg border border-white/80 text-xs font-semibold text-slate-800">
                    <span className="w-2 h-2 rounded-full bg-blue-600" />
                    <span>Bona Sheet Roofing</span>
                  </div>
                </div>
              </div>

              {/* Floating Rating Widget Card at bottom of Hero Image */}
              <div className="absolute bottom-6 right-6 z-20 max-w-xs bg-white/90 backdrop-blur-md rounded-2xl p-3.5 shadow-xl border border-white/80 flex items-center gap-3">
                {/* Avatars */}
                <div className="flex -space-x-2 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80"
                    alt="Client Avatar"
                    width={32}
                    height={32}
                    className="w-8 h-8 rounded-full border-2 border-white object-cover"
                  />
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80"
                    alt="Client Avatar"
                    width={32}
                    height={32}
                    className="w-8 h-8 rounded-full border-2 border-white object-cover"
                  />
                  <Image
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80"
                    alt="Client Avatar"
                    width={32}
                    height={32}
                    className="w-8 h-8 rounded-full border-2 border-white object-cover"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-1 text-amber-500 text-xs font-bold">
                    <Star className="w-3.5 h-3.5 fill-amber-400 stroke-amber-400" />
                    <span>4.9 / 5</span>
                  </div>
                  <div className="text-[11px] font-medium text-slate-600 leading-tight">
                    Based on 240+ Verified Reviews
                  </div>
                </div>
              </div>
            </div>

            {/* Sub-card floating badge */}
            <div className="mt-4 bg-white/80 backdrop-blur-md rounded-2xl p-4 border border-slate-200/80 shadow-md flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">50-Year Material Warranty</div>
                  <div className="text-[11px] text-slate-500">Certified master installer status</div>
                </div>
              </div>
              <Button onClick={onOpenQuoteModal} variant="ghost" size="sm" showArrow={true}>
                Explore
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
