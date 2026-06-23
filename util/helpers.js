const baseCodeLines = [
  {
    n: 1,
    parts: [["comment", "// Solace theme tokens for focused interfaces"]],
  },
  {
    n: 2,
    parts: [
      ["keyword", "type"],
      ["plain", " ThemeMode "],
      ["operator", "="],
      ["string", ' "dark"'],
      ["plain", " "],
      ["operator", "|"],
      ["plain", " "],
      ["string", ' "light"'],
      ["operator", ";"],
    ],
  },
  {
    n: 3,
    parts: [
      ["keyword", "interface"],
      ["plain", " SolaceTheme "],
      ["operator", "{"],
    ],
  },
  {
    n: 4,
    parts: [
      ["plain", "  "],
      ["keyword", "readonly"],
      ["plain", " name"],
      ["operator", ":"],
      ["plain", " "],
      ["type", "string"],
      ["operator", ";"],
    ],
  },
  {
    n: 5,
    parts: [
      ["plain", "  mode"],
      ["operator", ":"],
      ["plain", " "],
      ["type", "ThemeMode"],
      ["operator", ";"],
    ],
  },
  {
    n: 6,
    parts: [
      ["plain", "  surface"],
      ["operator", ":"],
      ["plain", " "],
      ["type", "string"],
      ["operator", ";"],
    ],
  },
  {
    n: 7,
    parts: [
      ["plain", "  accents"],
      ["operator", ":"],
      ["plain", " "],
      ["type", "string"],
      ["operator", "[];"],
    ],
  },
  {
    n: 8,
    parts: [
      ["plain", "  calm"],
      ["operator", ":"],
      ["plain", " "],
      ["type", "boolean"],
      ["operator", ";"],
    ],
  },
  { n: 9, parts: [["operator", "}"]] },
  {
    n: 10,
    parts: [
      ["keyword", "const"],
      ["plain", " solace"],
      ["operator", ":"],
      ["plain", " "],
      ["type", "SolaceTheme"],
      ["plain", " "],
      ["operator", "="],
      ["plain", " "],
      ["function", "createTheme"],
      ["operator", "({"],
    ],
  },
  {
    n: 11,
    parts: [
      ["plain", "  name"],
      ["operator", ":"],
      ["plain", " "],
      ["string", ' "Solace Dark"'],
      ["operator", ","],
    ],
  },
  {
    n: 12,
    parts: [
      ["plain", "  mode"],
      ["operator", ":"],
      ["plain", " "],
      ["string", ' "dark"'],
      ["operator", ","],
    ],
  },
  {
    n: 13,
    parts: [
      ["plain", "  surface"],
      ["operator", ":"],
      ["plain", " "],
      ["string", ' "#1D1926"'],
      ["operator", ","],
    ],
  },
  {
    n: 14,
    parts: [
      ["plain", "  accents"],
      ["operator", ":"],
      ["plain", " ["],
      ["string", '"violet"'],
      ["operator", ","],
      ["plain", " "],
      ["string", '"pink"'],
      ["operator", ","],
      ["plain", " "],
      ["string", '"cyan"'],
      ["operator", ","],
      ["plain", " "],
      ["string", '"gold"'],
      ["plain", "]"],
      ["operator", ","],
    ],
  },
  {
    n: 15,
    parts: [
      ["plain", "  contrast"],
      ["operator", ":"],
      ["plain", " "],
      ["number", "0.78"],
      ["operator", ","],
      ["plain", " calm"],
      ["operator", ":"],
      ["plain", " "],
      ["boolean", "true"],
      ["operator", ","],
    ],
  },
  {
    n: 16,
    parts: [
      ["plain", "  selection"],
      ["operator", ":"],
      ["plain", " "],
      ["function", "mix"],
      ["operator", "("],
      ["string", '"#8A63D2"'],
      ["operator", ","],
      ["plain", " "],
      ["number", "0.42"],
      ["operator", "),"],
    ],
  },
  { n: 17, parts: [["operator", "});"]] },
  {
    n: 18,
    parts: [
      ["keyword", "export"],
      ["plain", " "],
      ["keyword", "function"],
      ["plain", " applySolace"],
      ["operator", "("],
      ["plain", "target"],
      ["operator", ":"],
      ["plain", " "],
      ["type", "HTMLElement"],
      ["operator", ") {"],
    ],
  },
  {
    n: 19,
    parts: [
      ["plain", "  "],
      ["keyword", "if"],
      ["plain", " "],
      ["operator", "("],
      ["plain", "solace.calm"],
      ["operator", ")"],
      ["plain", " target.dataset.theme "],
      ["operator", "="],
      ["plain", " solace.name"],
      ["operator", ";"],
    ],
  },
  { n: 20, parts: [["operator", "}"]] },
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
  {
    name: "Zed",
    icon: "/icons/zed.svg",
    accent: "#CB74E8",
    surface: "#CB74E820",
    status: "Available",
    tone: "green",
    href: "#",
  },
  {
    name: "Visual Studio Code",
    icon: "/icons/visual-studio-code.svg",
    accent: "#3EA6FF",
    surface: "#3EA6FF20",
    status: "Planned",
    tone: "muted",
    href: "#",
  },
  {
    name: "Zen",
    icon: "/icons/zen-browser.svg",
    accent: "#E2D7F7",
    surface: "#E2D7F720",
    status: "Planned",
    tone: "muted",
    href: "#",
  },
  {
    name: "OpenCode",
    icon: "/icons/opencode.svg",
    accent: "#63B8B0",
    surface: "#63B8B020",
    status: "Planned",
    tone: "muted",
    href: "#",
  },
  {
    name: "Ghostty",
    icon: "/icons/ghostty.svg",
    accent: "#D59A5D",
    surface: "#D59A5D20",
    status: "Planned",
    tone: "muted",
    href: "#",
  },
];

export function syntaxClass(kind, light = false) {
  const classes = {
    boolean: "text-solace-gold",
    comment: light ? "text-solace-lightMuted/70" : "text-solace-muted/70",
    keyword: "text-solace-violet",
    operator: light ? "text-solace-lightMuted" : "text-solace-muted",
    string: "text-solace-green",
    number: "text-solace-gold",
    function: "text-solace-cyan",
    type: "text-solace-blue",
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
    if (line.n === 11) {
      return {
        ...line,
        parts: [
          ["plain", "  name"],
          ["operator", ":"],
          ["plain", " "],
          ["string", ` "${themeName}`],
          ["operator", ","],
        ],
      };
    }

    if (line.n === 12) {
      return {
        ...line,
        parts: [
          ["plain", "  mode"],
          ["operator", ":"],
          ["plain", " "],
          ["string", light ? ' "light"' : ' "dark"'],
          ["operator", ","],
        ],
      };
    }

    if (line.n === 13) {
      return {
        ...line,
        parts: [
          ["plain", "  surface"],
          ["operator", ":"],
          ["plain", " "],
          ["string", light ? ' "#E8E2F2"' : ' "#1D1926"'],
          ["operator", ","],
        ],
      };
    }

    return line;
  });
}
