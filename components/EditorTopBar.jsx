import React from "react";

import EditorThemeToggle from "./EditorThemeToggle";

export default function EditorTopBar({ scene, light, onToggle, compact }) {
  const padding = compact ? "px-3 py-2" : "px-4 py-3";

  return (
    <div
      className={`flex items-center justify-between border-b ${padding} transition-colors duration-300 ${scene.topbar}`}
    >
      <div className="flex items-center gap-1.5">
        <span className="size-2.5 rounded-full bg-[#C65AA1]" />
        <span className="size-2.5 rounded-full bg-[#D29B49]" />
        <span className="size-2.5 rounded-full bg-[#7FA66A]" />
      </div>
      <p className={`font-mono text-[10px] ${scene.muted}`}>
        solace.config.ts
      </p>
      <EditorThemeToggle light={light} onToggle={onToggle} compact={compact} />
    </div>
  );
}
