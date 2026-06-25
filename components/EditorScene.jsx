import React, { useMemo, useState } from "react";

import { swatches, getCodeLines, getSceneClasses } from "../util/helpers.js";
import EditorCodeBlock from "./EditorCodeBlock";
import EditorTopBar from "./EditorTopBar";

export default function EditorScene() {
  const [theme, setTheme] = useState("dark");
  const light = theme === "light";
  const themeName = light ? "Solace Light" : "Solace";
  const codeLines = useMemo(() => getCodeLines(themeName, light), [light]);
  const scene = useMemo(() => getSceneClasses(light), [light]);

  return (
    <div
      id="preview"
      className="hidden w-full max-w-6xl lg:block"
      aria-label="Solace theme preview"
    >
      <div className="absolute left-1/2 top-20 h-40 w-3/5 -translate-x-1/2 rounded-full bg-solace-violet/8 blur-[120px]" />
      <div
        className={`relative mx-auto w-full max-w-6xl rounded-[28px] border p-3 transition-colors duration-300 ${scene.shell}`}
      >
        <div
          className={`overflow-hidden rounded-2xl border transition-colors duration-300 ${scene.frame}`}
        >
          <EditorTopBar
            scene={scene}
            light={light}
            onToggle={() => setTheme(light ? "dark" : "light")}
          />
          <div className="min-h-[420px]">
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
              <EditorCodeBlock
                lines={codeLines}
                light={light}
                codeClassName={scene.code}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
