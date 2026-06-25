import React from "react";
import { PackageCheck } from "lucide-react";

import zedIcon from "../public/icons/zed.svg";
import EditorScene from "./EditorScene";

export default function Hero() {
  return (
    <section className="mx-auto w-full max-w-screen-2xl flex flex-col items-center gap-12 px-5 py-12 sm:py-16 sm:px-8 lg:min-h-screen lg:justify-center lg:gap-20 lg:px-10">
      <div className="flex flex-col items-center text-center">
        <p className="mb-6 rounded-full border border-solace-border bg-solace-raised px-4 py-2 text-sm text-solace-muted">
          A violet theme family
        </p>

        <h1 className="text-balance text-4xl font-semibold leading-[1.03] tracking-normal text-solace-text sm:text-7xl lg:text-[88px]">
          Calm colors for focused work.
        </h1>

        <p className="mt-7 max-w-4xl text-pretty text-lg leading-8 text-solace-muted sm:text-xl sm:leading-9">
          Solace is a family of violet themes with soft contrast, built for the
          tools you use every day.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a
            href="https://github.com/bhavya-dang/Solace"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl bg-solace-violet px-5 text-sm font-medium text-white transition active:scale-[0.96] hover:bg-[#9671D8] focus:outline-none focus:ring-2 focus:ring-solace-violet focus:ring-offset-2 focus:ring-offset-solace-dark"
          >
            <img src={zedIcon} alt="Zed" className="size-4" />
            Install for Zed
          </a>

          <a
            href="#ports"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl border border-solace-border bg-solace-raised px-5 text-sm font-medium text-solace-text transition active:scale-[0.96] hover:border-solace-violet/70 hover:text-white focus:outline-none focus:ring-2 focus:ring-solace-violet focus:ring-offset-2 focus:ring-offset-solace-dark"
          >
            <PackageCheck className="size-4" />
            Discover Ports
          </a>
        </div>
      </div>

      <EditorScene />
    </section>
  );
}
