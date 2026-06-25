import React from "react";
import { Moon, Sun } from "lucide-react";

export default function EditorThemeToggle({ light, onToggle, compact }) {
  const visibleSize = compact ? "size-8" : "size-10";
  const iconSize = compact ? "size-3" : "size-4";
  const rounded = compact ? "rounded-lg" : "rounded-xl";
  const hitArea = compact
    ? "before:absolute before:-inset-1.5 before:content-['']"
    : "";

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={`Switch to ${light ? "dark" : "light"} theme`}
      className={`group relative flex ${visibleSize} items-center justify-center ${rounded} border transition duration-200 hover:scale-105 active:scale-[0.96] focus:outline-none focus:ring-2 focus:ring-solace-violet ${hitArea} ${
        light
          ? "border-[#E1D8F0] bg-[#F5F1FB] hover:bg-black/5"
          : "border-solace-border bg-solace-raised hover:bg-white/5 hover:border-solace-violet/70"
      }`}
    >
      <div className={`relative ${iconSize}`}>
        <Sun
          className={`absolute inset-0 ${iconSize} text-solace-gold ${
            light
              ? "opacity-100 scale-100 blur-0"
              : "opacity-0 scale-[0.25] blur-sm"
          } group-hover:rotate-12`}
          style={{
            transition:
              "opacity 0.3s cubic-bezier(0.2, 0, 0, 1), transform 0.3s cubic-bezier(0.2, 0, 0, 1), filter 0.3s cubic-bezier(0.2, 0, 0, 1)",
          }}
        />
        <Moon
          className={`absolute inset-0 ${iconSize} text-solace-violet ${
            light
              ? "opacity-0 scale-[0.25] blur-sm"
              : "opacity-100 scale-100 blur-0"
          } group-hover:-rotate-12`}
          style={{
            transition:
              "opacity 0.3s cubic-bezier(0.2, 0, 0, 1), transform 0.3s cubic-bezier(0.2, 0, 0, 1), filter 0.3s cubic-bezier(0.2, 0, 0, 1)",
          }}
        />
      </div>
    </button>
  );
}
