export const priorityConfig = {
  high: {
    colour: "#08a700",
    emoji: "🟢",
    label: "High",
    short: "HIGH",
  },

  medium: {
    colour: "#0094e4",
    emoji: "🔵",
    label: "Medium",
    short: "MED",
  },

  low: {
    colour: "#8300da",
    emoji: "🟣",
    label: "Low",
    short: "LOW",
  },
} as const;

export const priorityColours = {
  high: priorityConfig.high.colour,
  medium: priorityConfig.medium.colour,
  low: priorityConfig.low.colour,
} as const;