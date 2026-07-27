"use client";

import React, { useState } from "react";
import { X, CheckCircle2, ShieldCheck, Calculator, ArrowRight, ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./Button";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [propertyType, setPropertyType] = useState("Residential");
  const [serviceType, setServiceType] = useState("Roof Replacement");
  const [squareFeet, setSquareFeet] = useState(2400);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    zipCode: "",
  });

  // Calculate instant estimated price
  const estimatedCostMin = Math.round(squareFeet * 4.5);
  const estimatedCostMax = Math.round(squareFeet * 7.2);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setStep(1);
    setSubmitted(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/70 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", duration: 0.5, bounce: 0.1 }}
          className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden z-10 border border-slate-200"
        >
          {/* Header */}
          <div className="bg-slate-900 text-white p-6 sm:p-8 relative">
            <button
              onClick={onClose}
              className="absolute top-6 right-6 w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2">
              <Calculator className="w-4 h-4" />
              <span>Instant Roof Estimate</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Get Your Free Custom Quote
            </h2>
            <p className="text-slate-300 text-sm mt-1">
              Answer 3 simple questions to calculate instant pricing & schedule a free drone inspection.
            </p>

            {/* Step indicator */}
            {!submitted && (
              <div className="flex items-center gap-2 mt-6">
                {[1, 2, 3].map((s) => (
                  <div
                    key={s}
                    className={`h-1.5 rounded-full flex-1 transition-all duration-300 ${
                      s <= step ? "bg-blue-500" : "bg-slate-800"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto">
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Quote Request Submitted!</h3>
                <p className="text-slate-600 text-sm max-w-md mx-auto mb-6">
                  Thank you, <strong>{formData.name || "Customer"}</strong>. Our lead master roofer in your area will review your estimate of <strong>${estimatedCostMin.toLocaleString()} - ${estimatedCostMax.toLocaleString()}</strong> and contact you within 15 minutes.
                </p>
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 max-w-md mx-auto mb-6 text-left text-xs text-slate-600 flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-900 block">100% Price Lock Guarantee</span>
                    Your instant quote includes material warranties up to 50 years and labor guarantees.
                  </div>
                </div>
                <Button variant="primary" onClick={handleReset} showArrow={false}>
                  Close Window
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {step === 1 && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-slate-900 mb-3">
                        Property Type
                      </label>
                      <div className="grid grid-cols-3 gap-3">
                        {["Residential", "Commercial", "Multi-Family"].map((type) => (
                          <button
                            key={type}
                            type="button"
                            onClick={() => setPropertyType(type)}
                            className={`p-3.5 rounded-2xl border text-sm font-medium transition-all ${
                              propertyType === type
                                ? "border-blue-600 bg-blue-50 text-blue-900 ring-2 ring-blue-600/20"
                                : "border-slate-200 hover:border-slate-300 text-slate-700 bg-white"
                            }`}
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-900 mb-3">
                        Service Required
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        {[
                          "Roof Replacement",
                          "Emergency Repair",
                          "Routine Maintenance",
                          "Inspection & Solar Prep",
                        ].map((srv) => (
                          <button
                            key={srv}
                            type="button"
                            onClick={() => setServiceType(srv)}
                            className={`p-3.5 rounded-2xl border text-left text-xs font-medium transition-all ${
                              serviceType === srv
                                ? "border-blue-600 bg-blue-50 text-blue-900 ring-2 ring-blue-600/20"
                                : "border-slate-200 hover:border-slate-300 text-slate-700 bg-white"
                            }`}
                          >
                            {srv}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="flex justify-end pt-4">
                      <Button
                        type="button"
                        onClick={() => setStep(2)}
                        variant="secondary"
                        showArrow
                      >
                        Next Step
                      </Button>
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <label className="text-sm font-semibold text-slate-900">
                          Estimated Roof Area (Sq. Ft.)
                        </label>
                        <span className="text-lg font-bold text-blue-600 font-mono">
                          {squareFeet.toLocaleString()} sq ft
                        </span>
                      </div>
                      <input
                        type="range"
                        min="800"
                        max="8000"
                        step="100"
                        value={squareFeet}
                        onChange={(e) => setSquareFeet(Number(e.target.value))}
                        className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                      />
                      <div className="flex justify-between text-xs text-slate-500 mt-1.5 font-mono">
                        <span>800 sq ft (Small)</span>
                        <span>4,000 sq ft (Medium)</span>
                        <span>8,000+ sq ft (Large)</span>
                      </div>
                    </div>

                    {/* Calculated Live Preview Box */}
                    <div className="bg-slate-900 text-white rounded-2xl p-5 border border-slate-800">
                      <div className="text-xs text-slate-400 uppercase tracking-wide">
                        Live Calculated Price Range
                      </div>
                      <div className="text-3xl font-extrabold text-white font-mono mt-1">
                        ${estimatedCostMin.toLocaleString()} — ${estimatedCostMax.toLocaleString()}
                      </div>
                      <div className="text-xs text-blue-300 mt-1">
                        Includes premium labor, materials tear-off, and lifetime warranty.
                      </div>
                    </div>

                    <div className="flex justify-between items-center pt-4">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900"
                      >
                        <ArrowLeft className="w-4 h-4" /> Back
                      </button>
                      <Button
                        type="button"
                        onClick={() => setStep(3)}
                        variant="secondary"
                        showArrow
                      >
                        Final Step: Contact Details
                      </Button>
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-medium text-slate-700 mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="John Doe"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-slate-700 mb-1">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="(555) 000-0000"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-medium text-slate-700 mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="john@example.com"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-slate-700 mb-1">
                          Zip Code *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.zipCode}
                          onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
                          placeholder="79761"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                        />
                      </div>
                    </div>

                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-3 text-xs text-blue-900 flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
                      <span>We respect your privacy. Zero spam or third-party sales calls.</span>
                    </div>

                    <div className="flex justify-between items-center pt-4">
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900"
                      >
                        <ArrowLeft className="w-4 h-4" /> Back
                      </button>
                      <Button type="submit" variant="secondary" size="md">
                        Submit & Claim Estimate
                      </Button>
                    </div>
                  </motion.div>
                )}
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
