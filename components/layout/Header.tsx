"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X, PhoneCall, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface HeaderProps {
  onOpenQuoteModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenQuoteModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = (menu: string) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "py-3 glass-header shadow-md"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            {/* Logo Mark: 4 Rounded Dots matching reference image logo */}
            <div className="grid grid-cols-2 gap-1 p-1.5 bg-blue-600 rounded-xl group-hover:bg-blue-700 transition-colors shadow-sm">
              <span className="w-2 h-2 bg-white rounded-full" />
              <span className="w-2 h-2 bg-white/80 rounded-full" />
              <span className="w-2 h-2 bg-white/80 rounded-full" />
              <span className="w-2 h-2 bg-white rounded-full" />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900 font-heading">
              Roofora
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-700">
            <Link
              href="#home"
              className="hover:text-blue-600 transition-colors py-1"
            >
              Home
            </Link>
            <Link
              href="#about"
              className="hover:text-blue-600 transition-colors py-1"
            >
              About
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <button
                onClick={() => toggleDropdown("services")}
                className="flex items-center gap-1 hover:text-blue-600 transition-colors py-1"
              >
                <span>Services</span>
                <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-transform group-hover:rotate-180" />
              </button>

              <div className="absolute top-full left-0 w-64 mt-2 bg-white rounded-2xl p-3 shadow-xl border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0">
                <Link
                  href="#services"
                  className="block px-3 py-2 rounded-xl text-xs hover:bg-blue-50 text-slate-700 hover:text-blue-900 font-semibold"
                >
                  Roof Replacements
                  <span className="block text-[11px] font-normal text-slate-500">
                    Full tear-off & modern tile/metal install
                  </span>
                </Link>
                <Link
                  href="#services"
                  className="block px-3 py-2 rounded-xl text-xs hover:bg-blue-50 text-slate-700 hover:text-blue-900 font-semibold"
                >
                  Emergency Roof Repairs
                  <span className="block text-[11px] font-normal text-slate-500">
                    24/7 storm damage restoration
                  </span>
                </Link>
                <Link
                  href="#services"
                  className="block px-3 py-2 rounded-xl text-xs hover:bg-blue-50 text-slate-700 hover:text-blue-900 font-semibold"
                >
                  Commercial Metal Roofing
                  <span className="block text-[11px] font-normal text-slate-500">
                    Heavy-duty architectural metal sheet
                  </span>
                </Link>
              </div>
            </div>

            {/* Areas Dropdown */}
            <div className="relative group">
              <button
                onClick={() => toggleDropdown("areas")}
                className="flex items-center gap-1 hover:text-blue-600 transition-colors py-1"
              >
                <span>Areas</span>
                <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute top-full left-0 w-52 mt-2 bg-white rounded-2xl p-3 shadow-xl border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0">
                <div className="px-3 py-1 text-[11px] uppercase tracking-wider font-bold text-slate-400">
                  Service Zones
                </div>
                <div className="space-y-1">
                  <span className="block px-3 py-1.5 rounded-lg text-xs hover:bg-slate-50 text-slate-700">
                    Odessa Central & West
                  </span>
                  <span className="block px-3 py-1.5 rounded-lg text-xs hover:bg-slate-50 text-slate-700">
                    Midland Metro Area
                  </span>
                  <span className="block px-3 py-1.5 rounded-lg text-xs hover:bg-slate-50 text-slate-700">
                    Permian Basin Heights
                  </span>
                </div>
              </div>
            </div>

            <Link
              href="#projects"
              className="hover:text-blue-600 transition-colors py-1"
            >
              Projects
            </Link>
          </nav>

          {/* Right Action CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              onClick={onOpenQuoteModal}
              variant="primary"
              size="md"
              showArrow
            >
              Get Free Quote
            </Button>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-b border-slate-200 px-6 py-6 space-y-4">
          <Link
            href="#home"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-semibold text-slate-800"
          >
            Home
          </Link>
          <Link
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-semibold text-slate-800"
          >
            About Us
          </Link>
          <Link
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-semibold text-slate-800"
          >
            Services
          </Link>
          <Link
            href="#projects"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-semibold text-slate-800"
          >
            Projects
          </Link>
          <div className="pt-2 border-t border-slate-100">
            <Button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              variant="primary"
              size="md"
              className="w-full justify-center"
            >
              Get Free Quote
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
