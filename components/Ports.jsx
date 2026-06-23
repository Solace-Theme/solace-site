import React from "react";

import { ArrowUpRight, Check, CircleDot, Clock3 } from "lucide-react";
import { ports, statusStyles } from "../util/helpers";

export default function Ports() {
  return (
    <section
      id="ports"
      className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28"
    >
      <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
        <div>
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.18em] text-solace-violet">
            Ports
          </p>
          <h2 className="max-w-full text-4xl font-semibold leading-tight text-solace-text sm:text-5xl">
            Available for all your favourite tools.
          </h2>
        </div>
      </div>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {ports.map((port) => (
          <a
            key={port.name}
            href={port.href}
            className="group rounded-2xl bg-solace-raised border border-transparent p-5 transition-all duration-200 hover:border-solace-violet/60"
          >
            <div className="mb-9 flex items-start justify-between">
              <img src={port.icon} alt={port.name} className="size-10" />

              <ArrowUpRight className="size-4 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </div>

            <h3 className="text-xl font-medium">{port.name}</h3>

            <div
              className={`mt-4 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs ${statusStyles[port.tone]}`}
            >
              {port.tone === "green" ? (
                <Check className="size-3" />
              ) : port.tone === "gold" ? (
                <Clock3 className="size-3" />
              ) : (
                <CircleDot className="size-3" />
              )}
              {port.status}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
