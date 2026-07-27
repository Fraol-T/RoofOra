"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Star, Shield, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface ProjectsSectionProps {
  onOpenQuoteModal: () => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onOpenQuoteModal }) => {
  const [selectedFilter, setSelectedFilter] = useState("all");

  return (
    <section id="projects" className="py-20 lg:py-28 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold mb-3">
              <span className="w-2 h-2 rounded-full bg-blue-600" />
              <span>Project Excellence</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight font-heading">
              Your Reliable Partner for Every Project.
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-3 font-body">
              We believe true excellence lies in the details. From personalized service to top-quality workmanship, we protect your most valuable investment.
            </p>
          </div>
          <div>
            <Button onClick={onOpenQuoteModal} variant="primary" size="md" showArrow>
              Get Free Quote
            </Button>
          </div>
        </div>

        {/* Feature Cards Grid matching screenshot top-right layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Card 1: 825+ Projects Completed (Solar Roof visual) */}
          <div className="lg:col-span-5 relative rounded-3xl overflow-hidden shadow-xl min-h-[420px] bg-slate-900 border border-slate-200 group">
            <Image
              src="https://images.unsplash.com/photo-1508873696983-2df515122519?auto=format&fit=crop&w=800&q=80"
              alt="Solar metal standing seam roofing installation"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent" />
            
            {/* Top Stat Badge */}
            <div className="absolute top-6 left-6 z-10 bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl shadow-lg border border-white/80">
              <div className="text-2xl font-extrabold text-slate-900 font-heading">825+</div>
              <div className="text-[11px] font-medium text-slate-600">Projects Completed</div>
            </div>

            {/* Bottom Satisfied Client Pill */}
            <div className="absolute bottom-6 left-6 right-6 z-10 bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-white/80 flex items-center justify-between">
              <div className="flex -space-x-2">
                <Image
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80"
                  alt="Client"
                  width={36}
                  height={36}
                  className="w-9 h-9 rounded-full border-2 border-white object-cover"
                />
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80"
                  alt="Client"
                  width={36}
                  height={36}
                  className="w-9 h-9 rounded-full border-2 border-white object-cover"
                />
                <Image
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80"
                  alt="Client"
                  width={36}
                  height={36}
                  className="w-9 h-9 rounded-full border-2 border-white object-cover"
                />
              </div>
              <div className="text-right">
                <div className="text-xs font-bold text-slate-900">+180K Clients</div>
                <div className="text-[11px] text-slate-500">Total Satisfied Worldwide</div>
              </div>
            </div>
          </div>

          {/* Card 2: 90% Energy Efficient Roofing (Roofer on ladder visual) */}
          <div className="lg:col-span-7 relative rounded-3xl overflow-hidden shadow-xl min-h-[420px] bg-slate-900 border border-slate-200 group">
            <Image
              src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80"
              alt="Roofer carrying material on ladder"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />

            {/* Content overlay */}
            <div className="absolute bottom-8 left-8 right-8 z-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="max-w-md">
                <div className="inline-block bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
                  High Energy Efficiency
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                  90% Energy Reduction
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-2 font-body leading-relaxed">
                  We provide durable, reflective, energy efficient roofing designed to withstand harsh Texas heat and reduce utility bills.
                </p>
              </div>

              <div>
                <Button onClick={onOpenQuoteModal} variant="secondary" size="md" showArrow>
                  Explore Options
                </Button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
