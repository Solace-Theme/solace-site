import React from "react";
import { Sparkles } from "lucide-react";

export default function Header() {
  return (
    <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-6 sm:px-8 lg:px-10">
      <a
        href="#"
        className="group flex items-center gap-3"
        aria-label="Solace home"
      >
        <span className="grid size-9 place-items-center rounded-xl border border-solace-border bg-solace-raised text-solace-violet shadow-soft-violet">
          <Sparkles className="size-4" strokeWidth={1.8} />
        </span>
        <span className="text-[15px] font-medium tracking-[0.18em] text-solace-text">
          SOLACE
        </span>
      </a>
    </header>
  );
}
