"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

interface CtaBannerProps {
  onOpenQuoteModal: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onOpenQuoteModal }) => {
  return (
    <section className="py-16 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-[2.5rem] overflow-hidden bg-gradient-to-r from-blue-700 via-blue-600 to-slate-900 text-white p-8 sm:p-12 lg:p-16 shadow-2xl">
          {/* Background overlay image */}
          <div className="absolute inset-0 z-0 opacity-25">
            <Image
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80"
              alt="Roofing craftsman background"
              fill
              className="object-cover"
            />
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Copy */}
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-blue-300 animate-pulse" />
                <span>Roof Care That Stands</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight font-heading">
                Roof Care That Stands <br className="hidden sm:block" />
                the Test of Time.
              </h2>

              <p className="text-sm sm:text-base text-blue-100 max-w-xl font-body leading-relaxed">
                At our roofing company, we believe in delivering quality that lasts. Our expert team uses top-grade materials engineered to withstand severe weather.
              </p>

              <div>
                <Button
                  onClick={onOpenQuoteModal}
                  variant="primary"
                  size="lg"
                  showArrow
                  className="bg-white text-slate-900 hover:bg-slate-100"
                >
                  Get Free Quote
                </Button>
              </div>
            </div>

            {/* Right Tags */}
            <div className="lg:col-span-4 flex flex-wrap lg:flex-col items-start lg:items-end gap-3">
              {["Modern Roofs", "Emergency Repair", "Commercial Metal", "Solar Integration"].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-white tracking-wide"
                >
                  {tag}
                </span>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
