"use client";

import React, { useState } from "react";
import Image from "next/image";
import { CheckCircle2, ArrowUpRight, Users, Award, Shield } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface AboutSectionProps {
  onOpenQuoteModal: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenQuoteModal }) => {
  const [showDetailModal, setShowDetailModal] = useState(false);

  return (
    <section id="about" className="py-20 lg:py-28 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold mb-3">
              <span className="w-2 h-2 rounded-full bg-blue-600" />
              <span>Who We Are</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight max-w-3xl font-heading">
              At Roofora Roofing, we specialize in reliable roof repairs, replacements, and maintenance.
            </h2>
          </div>
          <div>
            <Button
              onClick={() => setShowDetailModal(true)}
              variant="outline"
              size="md"
              showArrow
            >
              Read More
            </Button>
          </div>
        </div>

        {/* Layout Grid matching reference image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Image with 100K+ metric card */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/3] bg-slate-900 border border-slate-200">
              <Image
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80"
                alt="Craftsman working on modern tile roofing"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* 100K+ Active User Metric Card */}
            <div className="bg-white rounded-3xl p-6 shadow-md border border-slate-200/80 flex items-center gap-5">
              <div className="w-14 h-14 rounded-2xl bg-blue-600 text-white flex items-center justify-center text-xl font-bold font-heading shrink-0 shadow-lg shadow-blue-500/20">
                100K+
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900 font-heading">Active Users</h4>
                <p className="text-xs text-slate-500 font-body">
                  Satisfied home & business owners across Odessa & West Texas.
                </p>
              </div>
            </div>
          </div>

          {/* Center Column: Engineer photo */}
          <div className="lg:col-span-4 relative rounded-3xl overflow-hidden shadow-xl min-h-[380px] bg-slate-900 border border-slate-200">
            <Image
              src="https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=800&q=80"
              alt="Roofora site engineer inspector"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <div className="inline-block bg-blue-600 text-white text-[11px] font-bold px-2.5 py-1 rounded-md mb-2">
                Certified Engineers
              </div>
              <p className="text-xs text-slate-200 leading-relaxed font-body">
                Every project is supervised by licensed structural specialists to guarantee safety standards.
              </p>
            </div>
          </div>

          {/* Right Column: Paragraph & Stat Counters */}
          <div className="lg:col-span-3 flex flex-col justify-between bg-white rounded-3xl p-6 lg:p-8 shadow-md border border-slate-200/80">
            <div>
              <p className="text-sm text-slate-600 leading-relaxed font-body mb-8">
                Trust our experienced team to keep your home safe, stylish, and well-protected — no matter the weather.
              </p>
            </div>

            <div className="space-y-6 pt-6 border-t border-slate-100">
              {/* Stat 1 */}
              <div>
                <div className="text-4xl lg:text-5xl font-extrabold text-slate-900 font-heading tracking-tight">
                  92%
                </div>
                <div className="text-xs font-semibold text-slate-500 mt-1 uppercase tracking-wider">
                  Feel More Relaxed
                </div>
                <div className="w-full h-1.5 bg-slate-100 rounded-full mt-2 overflow-hidden">
                  <div className="h-full bg-blue-600 rounded-full w-[92%]" />
                </div>
              </div>

              {/* Stat 2 */}
              <div>
                <div className="text-4xl lg:text-5xl font-extrabold text-slate-900 font-heading tracking-tight">
                  98%
                </div>
                <div className="text-xs font-semibold text-slate-500 mt-1 uppercase tracking-wider">
                  Feel More Balanced
                </div>
                <div className="w-full h-1.5 bg-slate-100 rounded-full mt-2 overflow-hidden">
                  <div className="h-full bg-slate-900 rounded-full w-[98%]" />
                </div>
              </div>

              <div className="pt-2">
                <Button onClick={onOpenQuoteModal} variant="secondary" size="sm" className="w-full justify-center">
                  Schedule Free Assessment
                </Button>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Read More Detail Modal */}
      {showDetailModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-3 font-heading">About Roofora Roofing</h3>
            <p className="text-sm text-slate-600 mb-4 leading-relaxed font-body">
              Founded with a commitment to unmatched craftsmanship and customer care, Roofora has grown into West Texas's leading residential and commercial roofing specialist. We combine traditional roofing integrity with modern AI design visualizers and drone inspection technology.
            </p>
            <div className="space-y-2 mb-6 text-xs text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                <span>Fully Licensed, Bonded & Insured up to $5,000,000</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                <span>HAAG Certified Roof Inspectors</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                <span>Zero Out-of-Pocket Insurance Claim Support</span>
              </div>
            </div>
            <Button onClick={() => setShowDetailModal(false)} variant="primary" size="sm" showArrow={false}>
              Close Overview
            </Button>
          </div>
        </div>
      )}
    </section>
  );
};
