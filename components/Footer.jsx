import SyntaxGradientBar from "./SyntaxGradientBar";
import React from "react";

const footerLinks = (
  <div className="flex gap-5">
    <a
      className="py-2 transition hover:text-solace-violet"
      href="https://github.com/bhavya-dang/Solace/"
    >
      GitHub
    </a>
    <a
      className="py-2 transition hover:text-solace-violet"
      href="https://github.com/bhavya-dang/Solace/issues"
    >
      Issues
    </a>
    <a
      className="py-2 transition hover:text-solace-violet"
      href="https://github.com/bhavya-dang/Solace/releases"
    >
      Releases
    </a>
  </div>
);

export default function Footer() {
  return (
    <footer>
      <SyntaxGradientBar />
      <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-10">
        <div className="mt-8 flex flex-col gap-5 text-sm text-solace-muted sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-2">
            <p>Built with love for violet.</p>
            <p className="text-xs text-solace-muted/70">
              Copyright &copy; {new Date().getFullYear()} Solace. All rights
              reserved.
            </p>
          </div>
          {footerLinks}
        </div>
      </div>
    </footer>
  );
}
