import img0 from "../../assets/catalogues/4e13/img0.jpg";
import img1 from "../../assets/catalogues/4e14/img1.jpg";
import img2 from "../../assets/catalogues/4e14/img2.jpg";
import img3 from "../../assets/catalogues/4e14/img3.jpg";

import type { Booth } from "../../types/models";

export const level4Booths: Booth[] = [
  {
    id: "4E13",

    table: "4.E.13",

    priority: "low",

    visited: false,
    

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
    id: "4E14",

    table: "4.E.14",

    priority: "high",

    visited: false,

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