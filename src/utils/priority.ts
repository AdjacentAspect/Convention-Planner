export const priorityConfig = {
  high: {
    colour: "#ef4444",
    emoji: "🔴",
    label: "High",
    short: "HIGH",
  },

  medium: {
    colour: "#facc15",
    emoji: "🟡",
    label: "Medium",
    short: "MED",
  },

  low: {
    colour: "#22c55e",
    emoji: "🟢",
    label: "Low",
    short: "LOW",
  },
} as const;

export const priorityColours = {
  high: priorityConfig.high.colour,
  medium: priorityConfig.medium.colour,
  low: priorityConfig.low.colour,
} as const;