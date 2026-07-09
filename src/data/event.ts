import type { ConventionEvent } from "../types/models";

import level1 from "../assets/maps/level1.png";
import level2 from "../assets/maps/level2.png";
import level3 from "../assets/maps/level3.png";
import level4 from "../assets/maps/level4.png";

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

      booths: []

    },

    {

      id: "2",

      name: "Level 2",

      image: level2,

      booths: []

    },

    {

      id: "3",

      name: "Level 3",

      image: level3,

      booths: []

    },

    {

      id: "4",

      name: "Level 4",

      image: level4,

      booths: [

        {
            id: "4E13",

            table: "4.E.13",

            artist: "Unknown",

            priority: "red",

            visited: false,

            notes: "",

            bounds: {
                x: 40,
                y: 30,
                width: 8,
                height: 6,
            },

            wishlist: [],

            images: [],
        }

      ]

    }

  ]

};