import type { Booth } from "../../types/models";

import { getBoothImages } from "../getBoothImages";

const boothTemplate: Pick<Booth, "priority" | "visited"> = {
  priority: "low",
  visited: false,
};

export const level4Booths: Booth[] = [
  {
    ...boothTemplate,

    id: "4E13",

    table: "4.E.13",

    bounds: {
      x: 20,
      y: 20,
      width: 8,
      height: 6,
    },

      images: getBoothImages("4e13"),
  },

  {
    ...boothTemplate,

    id: "4E14",

    table: "4.E.14",

    priority: "high",

    bounds: {
      x: 40,
      y: 30,
      width: 8,
      height: 6,
    },

    images: getBoothImages("4e14"),
  },
];