export const priorityConfig = {
  high: {
    colour: "#04ff00",
    emoji: "🟢",
    label: "High",
  },

  medium: {
    colour: "#00ccff",
    emoji: "🔵",
    label: "Medium",
  },

  low: {
    colour: "#8400ff",
    emoji: "🟣",
    label: "Low",
  },
} as const;

export const priorityColours = {
  high: priorityConfig.high.colour,
  medium: priorityConfig.medium.colour,
  low: priorityConfig.low.colour,
} as const;