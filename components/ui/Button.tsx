"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "dark" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  showArrow?: boolean;
  arrowDarkBg?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  showArrow = true,
  arrowDarkBg = false,
  children,
  className,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none";

  const sizeStyles = {
    sm: "px-4 py-2 text-sm gap-2",
    md: "px-5 py-2.5 text-base gap-2.5",
    lg: "px-7 py-3.5 text-lg gap-3",
  };

  const variantStyles = {
    primary:
      "bg-slate-900 text-white hover:bg-slate-800 shadow-md hover:shadow-lg",
    secondary:
      "bg-blue-600 text-white hover:bg-blue-700 shadow-md shadow-blue-500/20 hover:shadow-blue-500/30",
    dark: "bg-black text-white hover:bg-slate-900 border border-slate-800",
    outline:
      "bg-white/80 text-slate-800 border border-slate-300 hover:bg-slate-100 hover:border-slate-400 backdrop-blur-sm",
    ghost: "bg-transparent text-slate-700 hover:bg-slate-100/80",
  };

  return (
    <button
      className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
      {...props}
    >
      <span>{children}</span>
      {showArrow && (
        <span
          className={cn(
            "flex items-center justify-center rounded-full transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5",
            size === "sm" ? "w-5 h-5" : size === "md" ? "w-6 h-6" : "w-7 h-7",
            arrowDarkBg
              ? "bg-slate-800 text-white"
              : variant === "primary" || variant === "dark"
              ? "bg-blue-600 text-white"
              : "bg-slate-900 text-white"
          )}
        >
          <ArrowUpRight className={size === "sm" ? "w-3 h-3" : "w-3.5 h-3.5"} />
        </span>
      )}
    </button>
  );
};
