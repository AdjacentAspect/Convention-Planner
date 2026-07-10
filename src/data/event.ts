import type { ConventionEvent } from "../types/models";

import level1 from "../assets/maps/level1.png";
import level2 from "../assets/maps/level2.png";
import level3 from "../assets/maps/level3.png";
import level4 from "../assets/maps/level4.png";

import { level1Booths } from "./floors/level1";
import { level2Booths } from "./floors/level2";
import { level3Booths } from "./floors/level3";
import { level4Booths } from "./floors/level4";

export const currentEvent: ConventionEvent = {
  id: "smash2026",
  name: "SMASH! Sydney",
  venue: "ICC Sydney",
  year: 2026,

  floors: [
    {
      id: "1",
      name: "Level 1",
      image: level1,
      booths: level1Booths,
    },
    {
      id: "2",
      name: "Level 2",
      image: level2,
      booths: level2Booths,
    },
    {
      id: "3",
      name: "Level 3",
      image: level3,
      booths: level3Booths,
    },
    {
      id: "4",
      name: "Level 4",
      image: level4,
      booths: level4Booths,
    },
  ],
};