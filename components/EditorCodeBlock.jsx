import React from "react";

import { syntaxClass } from "../util/helpers";

export default function EditorCodeBlock({
  lines,
  light,
  compact,
  codeClassName,
}) {
  const padding = compact ? "px-3 py-2.5" : "p-4";
  const fontSize = compact ? "text-[12px]" : "text-sm sm:text-[15px]";
  const lineHeight = compact ? "leading-5" : "leading-7";
  const colGap = compact ? "gap-3" : "gap-4";

  return (
    <div
      className={`overflow-x-auto ${compact ? "" : "rounded-2xl border"} ${padding} font-mono ${fontSize} ${lineHeight} transition-colors duration-300 ${codeClassName}`}
    >
      {lines.map((line) => (
        <div
          key={line.n}
          className={`grid min-w-max grid-cols-[2ch_1fr] ${colGap}`}
        >
          <span
            className={`select-none text-right ${light ? "text-solace-lightMuted/60" : "text-solace-muted/55"}`}
          >
            {line.n}
          </span>
          <span className="whitespace-pre">
            {line.parts.map(([kind, value], index) => (
              <span key={index} className={syntaxClass(kind, light)}>
                {value}
              </span>
            ))}
          </span>
        </div>
      ))}
    </div>
  );
}
