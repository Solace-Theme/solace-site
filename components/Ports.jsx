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
          <h2 className="max-w-2xl text-4xl font-semibold leading-tight text-solace-text sm:text-5xl">
            A small ecosystem, kept consistent.
          </h2>
        </div>
        <p className="max-w-md text-base leading-7 text-solace-muted">
          Each port carries the same violet base, accent rhythm, and low-fatigue
          contrast into the tool it belongs to.
        </p>
      </div>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {ports.map((port) => (
          <a
            key={port.name}
            href={port.href}
            className="group rounded-2xl border border-solace-border bg-solace-raised p-5 transition hover:-translate-y-0.5 hover:border-solace-violet/60 hover:bg-solace-secondary focus:outline-none focus:ring-2 focus:ring-solace-violet focus:ring-offset-2 focus:ring-offset-solace-dark"
          >
            <div className="mb-9 flex items-start justify-between">
              <span className="grid size-11 place-items-center rounded-2xl border border-solace-border bg-solace-secondary font-mono text-sm text-solace-text">
                {port.name.slice(0, 2)}
              </span>
              <ArrowUpRight className="size-4 text-solace-muted transition group-hover:text-solace-text" />
            </div>
            <h3 className="text-xl font-medium text-solace-text">
              {port.name}
            </h3>
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
