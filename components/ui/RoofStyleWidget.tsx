"use client";

import React, { useState } from "react";
import { Sparkles, Image as ImageIcon, Video, Upload, Check, RefreshCw } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface StyleOption {
  id: string;
  name: string;
  gradient: string;
  description: string;
  pricePerSqFt: string;
  durability: string;
  image: string;
}

const STYLES: StyleOption[] = [
  {
    id: "metal",
    name: "Bona Standing Seam",
    gradient: "from-slate-700 to-blue-900",
    description: "Ultra-durable dark cobalt steel panels engineered for storm resistance.",
    pricePerSqFt: "$9 - $14",
    durability: "50+ Years",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "tile",
    name: "Terracotta Clay Tile",
    gradient: "from-amber-700 to-red-900",
    description: "Classic Mediterranean clay tiles with high thermal resistance and elegance.",
    pricePerSqFt: "$12 - $18",
    durability: "75+ Years",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "shingle",
    name: "Architectural Slate",
    gradient: "from-stone-600 to-slate-800",
    description: "High-definition layered asphalt shingles mimicking natural slate stone.",
    pricePerSqFt: "$5 - $8",
    durability: "30+ Years",
    image: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=600&q=80",
  },
];

export const RoofStyleWidget: React.FC = () => {
  const [selectedStyle, setSelectedStyle] = useState<StyleOption>(STYLES[0]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [promptText, setPromptText] = useState("Modern slate roofing with solar integrated finish.");
  const [activeTab, setActiveTab] = useState<"suggest" | "image" | "video">("suggest");

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      const nextIndex = (STYLES.findIndex((s) => s.id === selectedStyle.id) + 1) % STYLES.length;
      setSelectedStyle(STYLES[nextIndex]);
      setIsGenerating(false);
    }, 800);
  };

  return (
    <div className="w-full max-w-md bg-white/90 backdrop-blur-xl rounded-3xl p-5 border border-white/60 shadow-2xl shadow-slate-900/10">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-ping" />
          <h3 className="font-semibold text-slate-900 text-sm tracking-tight">Modern Roof Style</h3>
        </div>
        <div className="flex items-center gap-1 text-xs text-slate-500 font-mono bg-slate-100/80 px-2.5 py-1 rounded-full border border-slate-200/60">
          <Sparkles className="w-3 h-3 text-blue-600" />
          <span>AI Visualizer</span>
        </div>
      </div>

      {/* Swatch Selector */}
      <div className="grid grid-cols-3 gap-2 mb-4">
        {STYLES.map((style) => {
          const isSelected = style.id === selectedStyle.id;
          return (
            <button
              key={style.id}
              onClick={() => setSelectedStyle(style)}
              className={`relative overflow-hidden rounded-xl h-16 border-2 transition-all duration-300 text-left p-2 group ${
                isSelected
                  ? "border-blue-600 ring-2 ring-blue-600/20 shadow-md scale-[1.02]"
                  : "border-slate-200 hover:border-slate-300 opacity-70 hover:opacity-100"
              }`}
            >
              <div
                className={`absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110`}
                style={{ backgroundImage: `url(${style.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
              <span className="relative z-10 block text-[11px] font-semibold text-white leading-tight mt-auto truncate">
                {style.name.split(" ")[0]}
              </span>
              {isSelected && (
                <div className="absolute top-1.5 right-1.5 z-10 w-4 h-4 rounded-full bg-blue-600 text-white flex items-center justify-center">
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* Interactive Input Prompt Box */}
      <div className="bg-slate-50 rounded-2xl p-3 border border-slate-200/80 mb-4">
        <textarea
          value={promptText}
          onChange={(e) => setPromptText(e.target.value)}
          className="w-full text-xs text-slate-700 bg-transparent resize-none focus:outline-none placeholder-slate-400 font-sans"
          rows={2}
          placeholder="Describe your roof material, color, and vibe..."
        />
        <div className="flex items-center justify-between pt-2 border-t border-slate-200/60 mt-1">
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setActiveTab("suggest")}
              className={`text-[11px] font-medium px-2.5 py-1 rounded-full transition-colors ${
                activeTab === "suggest"
                  ? "bg-slate-200 text-slate-900"
                  : "text-slate-500 hover:text-slate-800"
              }`}
            >
              Suggest
            </button>
            <button
              onClick={() => setActiveTab("image")}
              className={`text-[11px] font-medium px-2.5 py-1 rounded-full flex items-center gap-1 transition-colors ${
                activeTab === "image"
                  ? "bg-slate-200 text-slate-900"
                  : "text-slate-500 hover:text-slate-800"
              }`}
            >
              <ImageIcon className="w-3 h-3" /> Image
            </button>
            <button
              onClick={() => setActiveTab("video")}
              className={`text-[11px] font-medium px-2.5 py-1 rounded-full flex items-center gap-1 transition-colors ${
                activeTab === "video"
                  ? "bg-slate-200 text-slate-900"
                  : "text-slate-500 hover:text-slate-800"
              }`}
            >
              <Video className="w-3 h-3" /> Video
            </button>
          </div>

          <button
            onClick={handleGenerate}
            disabled={isGenerating}
            className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-medium px-3.5 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm transition-all active:scale-95 disabled:opacity-50"
          >
            {isGenerating ? (
              <>
                <RefreshCw className="w-3 h-3 animate-spin" />
                <span>Generating...</span>
              </>
            ) : (
              <>
                <span>Generate</span>
                <Sparkles className="w-3 h-3 text-blue-400" />
              </>
            )}
          </button>
        </div>
      </div>

      {/* Selected Style Detail Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedStyle.id}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.2 }}
          className="bg-gradient-to-r from-blue-900 to-slate-900 text-white rounded-2xl p-3.5 flex items-center justify-between"
        >
          <div>
            <div className="text-[11px] text-blue-300 font-medium tracking-wide uppercase">
              Selected Specification
            </div>
            <div className="text-sm font-semibold text-white mt-0.5">{selectedStyle.name}</div>
            <div className="text-xs text-slate-300 mt-1 flex items-center gap-3">
              <span>Cost: <strong className="text-white">{selectedStyle.pricePerSqFt}</strong></span>
              <span>•</span>
              <span>Lifespan: <strong className="text-white">{selectedStyle.durability}</strong></span>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
