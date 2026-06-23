import React from "react";
import { PackageCheck } from "lucide-react";

import zedIcon from "../public/icons/zed.svg";
import EditorScene from "./EditorScene";

export default function Hero() {
  return (
    <section className="mx-auto w-full max-w-screen-2xl flex min-h-screen flex-col items-center justify-center gap-20 px-5 py-16 sm:px-8 lg:px-10">
      <div className="flex flex-col items-center text-center">
        <p className="mb-6 rounded-full border border-solace-border bg-solace-raised px-4 py-2 text-sm text-solace-muted">
          A violet theme family for modern tools
        </p>

        <h1 className="text-5xl font-semibold leading-[1.03] tracking-normal text-solace-text sm:text-7xl lg:text-[88px]">
          Calm colors for focused work.
        </h1>

        <p className="mt-7 max-w-3xl text-lg leading-8 text-solace-muted sm:text-xl sm:leading-9">
          Solace is a family of violet themes designed for long sessions, soft
          contrast, and digital spaces that feel quiet after midnight.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a
            href="https://github.com/bhavya-dang/Solace"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl bg-solace-violet px-5 text-sm font-medium text-white transition hover:bg-[#9671D8] focus:outline-none focus:ring-2 focus:ring-solace-violet focus:ring-offset-2 focus:ring-offset-solace-dark"
          >
            <img src={zedIcon} alt="Zed" className="size-4" />
            Install for Zed
          </a>

          <a
            href="#ports"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl border border-solace-border bg-solace-raised px-5 text-sm font-medium text-solace-text transition hover:border-solace-violet/70 hover:text-white focus:outline-none focus:ring-2 focus:ring-solace-violet focus:ring-offset-2 focus:ring-offset-solace-dark"
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
