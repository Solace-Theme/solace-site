import React from "react";

import { Github, PackageCheck } from "lucide-react";
import EditorScene from "./EditorScene";

export default function Hero() {
  return (
    <section className="mx-auto grid w-full max-w-7xl gap-14 px-5 pb-20 pt-12 sm:px-8 sm:pt-20 lg:grid-cols-[0.9fr_1.1fr] lg:px-10 lg:pb-28">
      <div className="flex flex-col justify-center">
        <p className="mb-6 w-fit rounded-full border border-solace-border bg-solace-raised px-4 py-2 text-sm text-solace-muted">
          A violet theme family for modern tools
        </p>
        <h1 className="max-w-4xl text-5xl font-semibold leading-[1.03] tracking-normal text-solace-text sm:text-7xl lg:text-[88px]">
          Calm colors for focused work.
        </h1>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-solace-muted sm:text-xl sm:leading-9">
          Solace is a family of violet themes designed for long sessions, soft
          contrast, and digital spaces that feel quiet after midnight.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a
            href="https://github.com/"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl bg-solace-violet px-5 text-sm font-medium text-white transition hover:bg-[#9671D8] focus:outline-none focus:ring-2 focus:ring-solace-violet focus:ring-offset-2 focus:ring-offset-solace-dark"
          >
            <Github className="size-4" />
            GitHub
          </a>
          <a
            href="#ports"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl border border-solace-border bg-solace-raised px-5 text-sm font-medium text-solace-text transition hover:border-solace-violet/70 hover:text-white focus:outline-none focus:ring-2 focus:ring-solace-violet focus:ring-offset-2 focus:ring-offset-solace-dark"
          >
            <PackageCheck className="size-4" />
            Install for Zed
          </a>
        </div>
      </div>
      <EditorScene />
    </section>
  );
}
