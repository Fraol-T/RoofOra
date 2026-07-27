"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Star, Quote, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  quote: string;
  rating: number;
  featured?: boolean;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Marjorie Jenkins",
    role: "Property Manager",
    company: "Westland Real Estate",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
    quote: "They inspected my roof and gave me a fair estimate. Exceptional craftsmanship, work was completed ahead of schedule!",
    rating: 5,
  },
  {
    id: "2",
    name: "Marcus Vance",
    role: "CEO",
    company: "Global Tech Ltd",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80",
    quote: "Guide for bespoke installation service and unmatched in roofing excellence. That's our promise to you.",
    rating: 5,
    featured: true,
  },
  {
    id: "3",
    name: "Elena Rostova",
    role: "Digital Studio Director",
    company: "Apex Creative",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
    quote: "The quality of standing seam metal materials and attention to detail were impressive. Worth every penny.",
    rating: 5,
  },
  {
    id: "4",
    name: "David Miller",
    role: "UX Architect",
    company: "Permian Energy",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80",
    quote: "Prompt, clean, professional installation. The AI roof preview widget was spot on with the final result!",
    rating: 5,
  },
  {
    id: "5",
    name: "Sarah Chen",
    role: "Business Owner",
    company: "Odessa Commerce",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    quote: "Smooth communication, clean job, and they made our commercial roof look brand new. 10/10 service.",
    rating: 5,
  },
];

export const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(1); // Marcus Vance featured default

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[activeIndex];

  return (
    <section className="py-20 lg:py-28 bg-white border-t border-slate-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold mb-3">
            <span className="w-2 h-2 rounded-full bg-blue-600" />
            <span>Our Testimonial</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-heading">
            What Our Clients Say About Us
          </h2>
        </div>

        {/* Testimonials Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Side Card Left */}
          <div className="hidden lg:block lg:col-span-3 space-y-6">
            {[TESTIMONIALS[0], TESTIMONIALS[3]].map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveIndex(TESTIMONIALS.findIndex((t) => t.id === item.id))}
                className="bg-slate-50 hover:bg-slate-100/80 p-5 rounded-2xl border border-slate-200/80 cursor-pointer transition-all card-hover"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-full object-cover border border-white"
                  />
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">{item.name}</h4>
                    <p className="text-[11px] text-slate-500">{item.role}</p>
                  </div>
                </div>
                <p className="text-xs text-slate-600 italic line-clamp-3">"{item.quote}"</p>
              </div>
            ))}
          </div>

          {/* Featured Center Spotlight Card */}
          <div className="lg:col-span-6 bg-slate-900 text-white rounded-3xl p-8 sm:p-10 shadow-2xl relative border border-slate-800 text-center">
            <Quote className="w-12 h-12 text-blue-500/20 absolute top-6 left-6" />

            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="relative z-10 space-y-6"
              >
                {/* Avatar */}
                <div className="relative w-20 h-20 mx-auto rounded-full overflow-hidden border-4 border-blue-600 shadow-xl">
                  <Image
                    src={current.avatar}
                    alt={current.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Stars */}
                <div className="flex justify-center items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 stroke-amber-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-base sm:text-lg text-slate-200 italic font-body max-w-lg mx-auto leading-relaxed">
                  "{current.quote}"
                </p>

                {/* Client Info */}
                <div>
                  <h3 className="text-lg font-bold text-white font-heading">{current.name}</h3>
                  <p className="text-xs text-blue-400 font-medium">{current.role}, {current.company}</p>
                </div>

                {/* Key Metrics Pill Row matching screenshot */}
                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-slate-800/80 max-w-sm mx-auto">
                  <div className="bg-slate-800/60 p-3 rounded-2xl">
                    <div className="text-xl font-bold text-white font-heading">98%</div>
                    <div className="text-[11px] text-slate-400">Client Satisfaction</div>
                  </div>
                  <div className="bg-slate-800/60 p-3 rounded-2xl">
                    <div className="text-xl font-bold text-white font-heading">4+ Years</div>
                    <div className="text-[11px] text-slate-400">Project Warranty</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Slider Controls */}
            <div className="flex justify-center items-center gap-3 mt-8">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-slate-700 text-white flex items-center justify-center transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-slate-700 text-white flex items-center justify-center transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Side Card Right */}
          <div className="hidden lg:block lg:col-span-3 space-y-6">
            {[TESTIMONIALS[2], TESTIMONIALS[4]].map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveIndex(TESTIMONIALS.findIndex((t) => t.id === item.id))}
                className="bg-slate-50 hover:bg-slate-100/80 p-5 rounded-2xl border border-slate-200/80 cursor-pointer transition-all card-hover"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-full object-cover border border-white"
                  />
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">{item.name}</h4>
                    <p className="text-[11px] text-slate-500">{item.role}</p>
                  </div>
                </div>
                <p className="text-xs text-slate-600 italic line-clamp-3">"{item.quote}"</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
