import React from "react";

export default function SyntaxGradientBar() {
  return (
    <div
      className="h-2 w-full rounded-full"
      style={{
        background:
          "linear-gradient(90deg, #8A63D2 0%, #C65AA1 20%, #6C8ED9 40%, #4FA7A3 60%, #D29B49 80%, #7FA66A 100%)",
      }}
      aria-hidden="true"
    />
  );
}
