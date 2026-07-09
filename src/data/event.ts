import type { ConventionEvent } from "../types/models";

import level1 from "../assets/maps/level1.png";
import level2 from "../assets/maps/level2.png";
import level3 from "../assets/maps/level3.png";
import level4 from "../assets/maps/level4.png";

import img1 from "../assets/catalogues/4e14/img1.jpg";
import img2 from "../assets/catalogues/4e14/img2.jpg";
import img3 from "../assets/catalogues/4e14/img3.jpg";


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
            id: "4E14",

            table: "4.E.14",

            artist: "THIS IS 4.E.14",

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

            images: [
              img1,
              img2,
              img3,
            ],
        }

      ]

    }

  ]

};