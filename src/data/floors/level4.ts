import img0 from "../../assets/catalogues/4e13/img0.jpg";
import img1 from "../../assets/catalogues/4e14/img1.jpg";
import img2 from "../../assets/catalogues/4e14/img2.jpg";
import img3 from "../../assets/catalogues/4e14/img3.jpg";

import type { Booth } from "../../types/models";

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

    images: [
      img0
    ],
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

    images: [
      img1,
      img2,
      img3,
    ],
  },
];