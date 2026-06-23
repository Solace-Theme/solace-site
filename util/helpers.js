const baseCodeLines = [
  {
    n: 1,
    parts: [
      ["keyword", "const"],
      ["plain", " palette "],
      ["operator", "="],
      ["plain", " createTheme"],
      ["operator", "({"],
    ],
  },
  {
    n: 2,
    parts: [
      ["plain", "  name"],
      ["operator", ":"],
      ["string", ' "Solace Dark"'],
      ["operator", ","],
    ],
  },
  {
    n: 3,
    parts: [
      ["plain", "  surface"],
      ["operator", ":"],
      ["string", ' "#1D1926"'],
      ["operator", ","],
    ],
  },
  {
    n: 4,
    parts: [
      ["plain", "  accent"],
      ["operator", ":"],
      ["string", ' "#8A63D2"'],
      ["operator", ","],
    ],
  },
  {
    n: 5,
    parts: [
      ["plain", "  syntax"],
      ["operator", ":"],
      ["plain", " ["],
      ["string", '"violet"'],
      ["plain", ", "],
      ["string", '"pink"'],
      ["plain", ", "],
      ["string", '"cyan"'],
      ["plain", "]"],
      ["operator", ","],
    ],
  },
  {
    n: 6,
    parts: [
      ["plain", "  contrast"],
      ["operator", ":"],
      ["number", " 0.78"],
      ["operator", ","],
    ],
  },
  {
    n: 7,
    parts: [
      ["plain", "  mood"],
      ["operator", ":"],
      ["function", " keepCalm"],
      ["operator", "(),"],
    ],
  },
  { n: 8, parts: [["operator", "});"]] },
];

export const swatches = [
  ["Violet", "#8A63D2"],
  ["Pink", "#C65AA1"],
  ["Blue", "#6C8ED9"],
  ["Cyan", "#4FA7A3"],
  ["Gold", "#D29B49"],
  ["Green", "#7FA66A"],
];

export const statusStyles = {
  green: "border-solace-green/35 bg-solace-green/10 text-[#B5CCA7]",
  gold: "border-solace-gold/35 bg-solace-gold/10 text-[#E0B66F]",
  muted: "border-solace-border bg-solace-secondary text-solace-muted",
};

export const ports = [
  { name: "Zed", status: "Available", tone: "green", href: "#" },
  { name: "VS Code", status: "Planned", tone: "muted", href: "#" },
  { name: "Zen", status: "Planned", tone: "muted", href: "#" },
  { name: "OpenCode", status: "Planned", tone: "muted", href: "#" },
  { name: "Ghostty", status: "Planned", tone: "muted", href: "#" },
];

export function syntaxClass(kind, light = false) {
  const classes = {
    keyword: "text-solace-violet",
    operator: light ? "text-solace-lightMuted" : "text-solace-muted",
    string: "text-solace-green",
    number: "text-solace-gold",
    function: "text-solace-cyan",
    plain: light ? "text-solace-lightText" : "text-solace-text",
  };
  return classes[kind] ?? classes.plain;
}

export function getSceneClasses(light) {
  if (light) {
    return {
      shell: "border-solace-lightBorder bg-solace-lightSurface",
      frame: "border-solace-lightBorder bg-solace-light",
      topbar: "border-solace-lightBorder bg-[#E1DAEC]",
      sidebar: "border-solace-lightBorder bg-[#E8E2F2]",
      code: "border-solace-lightBorder bg-[#F7F3FB]",
      muted: "text-solace-lightMuted",
      chip: "border-solace-lightBorder bg-[#F7F3FB] text-solace-lightMuted",
      active: "bg-solace-violet/16 text-solace-lightText",
      inactive: "text-solace-lightMuted hover:text-solace-lightText",
    };
  }

  return {
    shell: "border-solace-border bg-[#100D16]",
    frame: "border-solace-border bg-solace-raised",
    topbar: "border-solace-border bg-solace-secondary",
    sidebar: "border-solace-border bg-[#18141F]",
    code: "border-solace-border bg-[#16131D]",
    muted: "text-solace-muted",
    chip: "border-solace-border bg-solace-secondary text-solace-muted",
    active: "bg-solace-violet/16 text-solace-text",
    inactive: "text-solace-muted hover:text-solace-text",
  };
}

export function getCodeLines(themeName, light) {
  return baseCodeLines.map((line) => {
    if (line.n === 2) {
      return {
        ...line,
        parts: [
          ["plain", "  name"],
          ["operator", ":"],
          ["string", ` "${themeName}"`],
          ["operator", ","],
        ],
      };
    }

    if (line.n === 3) {
      return {
        ...line,
        parts: [
          ["plain", "  surface"],
          ["operator", ":"],
          ["string", light ? ' "#E8E2F2"' : ' "#1D1926"'],
          ["operator", ","],
        ],
      };
    }

    return line;
  });
}
