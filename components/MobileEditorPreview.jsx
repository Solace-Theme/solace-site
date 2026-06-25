import React, { useMemo, useState } from "react";

import { getCodeLines, getSceneClasses } from "../util/helpers";
import EditorCodeBlock from "./EditorCodeBlock";
import EditorTopBar from "./EditorTopBar";

const previewLineNumbers = [1, 2, 3, 4, 10, 15, 17];

export default function MobileEditorPreview() {
  const [theme, setTheme] = useState("dark");
  const light = theme === "light";
  const themeName = light ? "Solace Light" : "Solace";
  const scene = useMemo(() => getSceneClasses(light), [light]);
  const allLines = useMemo(() => getCodeLines(themeName, light), [light]);
  const lines = useMemo(
    () => allLines.filter((l) => previewLineNumbers.includes(l.n)),
    [allLines],
  );

  return (
    <div
      className={`w-full max-w-sm rounded-2xl border p-2 transition-colors duration-300 ${scene.shell}`}
    >
      <div
        className={`overflow-hidden rounded-lg border transition-colors duration-300 ${scene.frame}`}
      >
        <EditorTopBar
          scene={scene}
          light={light}
          onToggle={() => setTheme(light ? "dark" : "light")}
          compact
        />
        <div className="p-0">
          <EditorCodeBlock
            lines={lines}
            light={light}
            compact
            codeClassName={scene.code}
          />
        </div>
      </div>
    </div>
  );
}
