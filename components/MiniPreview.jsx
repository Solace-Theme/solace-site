// switched to using the sun/moon icons for variant switch
// keeping for backup purposes
import React from "react";

import { Moon, Sun } from "lucide-react";
export default function MiniPreview({ theme, active, onSelect }) {
  const light = theme === "light";

  return (
    <button
      type="button"
      onClick={onSelect}
      className={`rounded-2xl border p-3 text-left transition hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-solace-violet ${
        light
          ? "border-solace-lightBorder bg-solace-light text-solace-lightText"
          : "border-solace-border bg-solace-secondary text-solace-text"
      } ${active ? "ring-2 ring-solace-violet/80" : ""}`}
      aria-pressed={active}
    >
      <div className="mb-3 flex items-center justify-between">
        <span className="text-xs font-medium">
          {light ? "Solace Light" : "Solace Dark"}
        </span>
        {light ? (
          <Sun className="size-3.5 text-solace-gold" />
        ) : (
          <Moon className="size-3.5 text-solace-violet" />
        )}
      </div>
      <div className="space-y-2">
        <span className="block h-2 rounded-full bg-solace-violet/70" />
        <span className="block h-2 w-4/5 rounded-full bg-solace-cyan/70" />
        <span className="block h-2 w-3/5 rounded-full bg-solace-pink/70" />
      </div>
    </button>
  );
}
