import React, { useState } from "react";
import { Moon, Sun } from "lucide-react";

import MiniPreview from "../components/MiniPreview.jsx";
import {
  swatches,
  getCodeLines,
  syntaxClass,
  getSceneClasses,
} from "../util/helpers.js";

export default function EditorScene() {
  const [theme, setTheme] = useState("dark");
  const light = theme === "light";
  const themeName = light ? "Solace Light" : "Solace";
  const codeLines = getCodeLines(themeName, light);
  const scene = getSceneClasses(light);

  return (
    <div
      id="preview"
      className="w-full max-w-6xl"
      aria-label="Solace theme preview"
    >
      <div className="absolute inset-x-6 top-10 h-64 rounded-full bg-solace-violet/15 blur-3xl" />
      <div
        className={`relative mx-auto w-full max-w-6xl rounded-[28px] border p-3 shadow-soft-violet transition-colors duration-300 ${scene.shell}`}
      >
        <div
          className={`overflow-hidden rounded-[22px] border transition-colors duration-300 ${scene.frame}`}
        >
          <div
            className={`flex items-center justify-between border-b px-4 py-3 transition-colors duration-300 ${scene.topbar}`}
          >
            <div className="flex items-center gap-2">
              <span className="size-3 rounded-full bg-[#C65AA1]" />
              <span className="size-3 rounded-full bg-[#D29B49]" />
              <span className="size-3 rounded-full bg-[#7FA66A]" />
            </div>
            <p className={`font-mono text-xs ${scene.muted}`}>
              solace.config.ts
            </p>
            <button
              type="button"
              onClick={() => setTheme(light ? "dark" : "light")}
              aria-label={`Switch to ${light ? "dark" : "light"} theme`}
              className={`
                flex size-8 items-center justify-center rounded-xl
                transition-all duration-200
                hover:bg-white/5
                hover:scale-105
                active:scale-95
                focus:outline-none
                focus:ring-2
                ${
                  light
                    ? "border-[#E1D8F0] bg-[#F5F1FB]"
                    : "border-solace-border bg-solace-raised"
                }
                focus:ring-solace-violet
                  hover:border-solace-violet/70
                ${light ? "hover:bg-black/5" : ""}
              `}
            >
              {light ? (
                <Sun className="size-4 text-solace-gold transition-transform duration-300 hover:rotate-12" />
              ) : (
                <Moon className="size-4 text-solace-violet transition-transform duration-300 hover:-rotate-12" />
              )}
            </button>
          </div>
          {/* <div className="grid min-h-[420px] grid-cols-1 sm:grid-cols-[112px_1fr]">*/}
          <div className="min-h-[420px]">
            {/* {" "}
            <aside
              className={`hidden border-r p-4 transition-colors duration-300 sm:block ${scene.sidebar}`}
            >
              <p
                className={`mb-4 font-mono text-[11px] uppercase tracking-[0.14em] ${scene.muted}`}
              >
                Themes
              </p>
              {["Dark", "Light"].map((item) => {
                const itemTheme = item.toLowerCase();

                return (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setTheme(itemTheme)}
                    className={`mb-2 w-full rounded-xl px-3 py-2 text-left font-mono text-xs transition focus:outline-none focus:ring-2 focus:ring-solace-violet ${
                      theme === itemTheme ? scene.active : scene.inactive
                    }`}
                    aria-pressed={theme === itemTheme}
                  >
                    {item}
                  </button>
                );
              })}
              {["Soft", "Dusk"].map((item) => (
                <div
                  key={item}
                  className={`mb-2 rounded-xl px-3 py-2 font-mono text-xs opacity-45 ${scene.muted}`}
                >
                  {item}
                </div>
              ))}
            </aside>*/}
            <div className="p-4 sm:p-6">
              <div className="mb-5 flex flex-wrap gap-2">
                {swatches.map(([name, color]) => (
                  <span
                    key={name}
                    className={`flex items-center gap-2 rounded-full border px-3 py-1.5 font-mono text-[11px] transition-colors duration-300 ${scene.chip}`}
                  >
                    <span
                      className="size-2.5 rounded-full"
                      style={{ background: color }}
                    />
                    {name}
                  </span>
                ))}
              </div>
              <div
                className={`overflow-x-auto rounded-2xl border p-4 font-mono text-sm leading-7 transition-colors duration-300 sm:text-[15px] ${scene.code}`}
              >
                {codeLines.map((line) => (
                  <div
                    key={line.n}
                    className="grid min-w-max grid-cols-[2ch_1fr] gap-4"
                  >
                    <span
                      className={`select-none text-right ${light ? "text-solace-lightMuted/60" : "text-solace-muted/55"}`}
                    >
                      {line.n}
                    </span>
                    <span className="whitespace-pre">
                      {line.parts.map(([kind, value], index) => (
                        <span
                          key={`${line.n}-${index}`}
                          className={syntaxClass(kind, light)}
                        >
                          {value}
                        </span>
                      ))}
                    </span>
                  </div>
                ))}
              </div>
              {/* <div className="mt-5 grid grid-cols-2 gap-3">
                <MiniPreview
                  theme="dark"
                  active={theme === "dark"}
                  onSelect={() => setTheme("dark")}
                />
                <MiniPreview
                  theme="light"
                  active={theme === "light"}
                  onSelect={() => setTheme("light")}
                />
              </div>*/}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
