"use client";

import React from "react";
import { Shield, Sparkles, Building2, Hammer, Home, Award } from "lucide-react";

export const PartnerBar: React.FC = () => {
  const PARTNERS = [
    { name: "Apex Roofing Group", icon: Building2 },
    { name: "CertainTeed Certified", icon: Shield },
    { name: "GAF Master Elite", icon: Award },
    { name: "Owens Corning Partner", icon: Home },
    { name: "BonaSheet Metals", icon: Hammer },
    { name: "SolarRoof Pro", icon: Sparkles },
  ];

  return (
    <section className="py-8 bg-white border-y border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4 text-center">
        <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
          Trusted by Top Material Manufacturers & 100K+ Property Owners
        </span>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap gap-12 sm:gap-16 items-center">
          {[...PARTNERS, ...PARTNERS].map((partner, index) => {
            const Icon = partner.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-2.5 text-slate-400 hover:text-slate-700 transition-colors cursor-pointer select-none"
              >
                <Icon className="w-5 h-5" />
                <span className="text-sm font-bold tracking-tight font-heading">
                  {partner.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
