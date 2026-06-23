import SyntaxGradientBar from "../components/SyntaxGradientBar";
import React from "react";
export default function Footer() {
  return (
    <footer className="border-t border-solace-border">
      <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-10">
        <SyntaxGradientBar />
        <div className="mt-8 flex flex-col gap-5 text-sm text-solace-muted sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-2">
            <p>Built with a love for violet.</p>
            <p className="text-xs text-solace-muted/70">
              Copyright &copy; {new Date().getFullYear()} Solace. All rights
              reserved.
            </p>
          </div>
          <div className="flex gap-5">
            <a
              className="transition hover:text-solace-text"
              href="https://github.com/bhavya-dang/Solace/"
            >
              GitHub
            </a>
            <a
              className="transition hover:text-solace-text"
              href="https://github.com/bhavya-dang/Solace/issues"
            >
              Issues
            </a>
            <a
              className="transition hover:text-solace-text"
              href="https://github.com/bhavya-dang/Solace/releases"
            >
              Releases
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
