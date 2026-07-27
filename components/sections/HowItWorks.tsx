"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronDown, Calendar, ShieldCheck, Hammer, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";

interface HowItWorksProps {
  onOpenQuoteModal: () => void;
}

interface StepItem {
  id: string;
  number: string;
  title: string;
  description: string;
  image: string;
  icon: React.ElementType;
}

const STEPS: StepItem[] = [
  {
    id: "step1",
    number: "01",
    title: "Book Your Service",
    description: "From booking to completion, we ensure a seamless experience. Pick a convenient time for a free site evaluation.",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=600&q=80",
    icon: Calendar,
  },
  {
    id: "step2",
    number: "02",
    title: "Get a Free Assessment",
    description: "Our certified inspectors conduct a comprehensive 21-point drone inspection and provide an itemized fixed-price quote.",
    image: "https://images.unsplash.com/photo-1508873696983-2df515122519?auto=format&fit=crop&w=600&q=80",
    icon: ShieldCheck,
  },
  {
    id: "step3",
    number: "03",
    title: "We Get to Work",
    description: "Our skilled master team installs premium materials with minimal disruption, concluding with a full property cleanup.",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&q=80",
    icon: Hammer,
  },
];

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenQuoteModal }) => {
  const [activeStep, setActiveStep] = useState<string>("step1");

  return (
    <section className="py-20 lg:py-28 bg-slate-50 relative border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Visual Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] bg-slate-900 border border-slate-200">
              <AnimatePresence mode="wait">
                {STEPS.map((step) => {
                  if (step.id !== activeStep) return null;
                  return (
                    <motion.div
                      key={step.id}
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.4 }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={step.image}
                        alt={step.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                      
                      <div className="absolute bottom-6 left-6 right-6 text-white">
                        <div className="flex items-center gap-2 text-blue-400 text-xs font-mono font-bold uppercase tracking-wider mb-1">
                          <span>Step {step.number}</span>
                        </div>
                        <h4 className="text-xl font-bold font-heading">{step.title}</h4>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>

          {/* Right Column: Accordion */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold mb-3">
                <span className="w-2 h-2 rounded-full bg-blue-600" />
                <span>How It Works</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
                Trusted Hands for Your Home's Protection.
              </h2>
              <p className="text-sm text-slate-600 mt-3 max-w-xl font-body">
                We care for your home the way you would — with honesty, dedication, and unmatched skill to start with a strong, dependable roof.
              </p>
            </div>

            {/* Accordion Steps List */}
            <div className="space-y-4 pt-4">
              {STEPS.map((step) => {
                const isOpen = activeStep === step.id;
                const Icon = step.icon;

                return (
                  <div
                    key={step.id}
                    className={`rounded-2xl border transition-all duration-300 ${
                      isOpen
                        ? "bg-white border-blue-600/30 shadow-lg ring-1 ring-blue-600/10"
                        : "bg-white/60 hover:bg-white border-slate-200"
                    }`}
                  >
                    <button
                      onClick={() => setActiveStep(step.id)}
                      className="w-full p-5 text-left flex items-center justify-between gap-4"
                    >
                      <div className="flex items-center gap-4">
                        <span
                          className={`w-10 h-10 rounded-xl flex items-center justify-center font-mono text-sm font-bold transition-colors ${
                            isOpen
                              ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                              : "bg-slate-100 text-slate-600"
                          }`}
                        >
                          {step.number}
                        </span>
                        <span className="text-lg font-bold text-slate-900 font-heading">
                          {step.title}
                        </span>
                      </div>

                      <ChevronDown
                        className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${
                          isOpen ? "rotate-180 text-blue-600" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 pb-5 pt-1 text-sm text-slate-600 font-body border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                            <p className="max-w-md">{step.description}</p>
                            <Button
                              onClick={onOpenQuoteModal}
                              variant="secondary"
                              size="sm"
                              showArrow
                              className="shrink-0"
                            >
                              Get Started
                            </Button>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
