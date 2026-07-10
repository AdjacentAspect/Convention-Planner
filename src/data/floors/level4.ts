import type { Booth } from "../../types/models";
import { getBoothImages } from "../getBoothImages";

export function createBooth(
  booth: Omit<Booth, "visited" | "images">
): Booth {
  return {
    ...booth,
    visited: false,
    images: getBoothImages(booth.id),
  };
}

export const level4Booths: Booth[] = [

  createBooth({
    id: "4A04",
    table: "4.A.04",
    priority: "medium",
    bounds: {
      x: 55.95,
      y: 22.18,
      width: 1.42,
      height: 1.09,
    }
  }),
  
  createBooth({
    id: "4A09",
    table: "4.A.09",
    priority: "high",
    bounds: {
      x: 55.94,
      y: 28.17,
      width: 1.42,
      height: 1.09,
    }
  }),

  createBooth({
    id: "4A11",
    table: "4.A.11",
    priority: "medium",
    bounds: {
      x: 55.94,
      y: 30.57,
      width: 1.4,
      height: 1.08,
    }
  }),
  
  createBooth({
    id: "4B05",
    table: "4.B.05",
    priority: "medium",
    bounds: {
      x: 57.42,
      y: 23.36,
      width: 1.46,
      height: 1.12,
    }
  }),
  
  createBooth({
    id: "4B16",
    table: "4.B.16",
    priority: "medium",
    bounds: {
      x: 57.46,
      y: 36.64,
      width: 1.43,
      height: 1.08,
    }
  }),
    
  createBooth({
    id: "4C02",
    table: "4.C.02",
    priority: "medium",
    bounds: {
      x: 60.38,
      y: 19.79,
      width: 1.42,
      height: 1.08,
    }
  }),

  createBooth({
    id: "4D02",
    table: "4.D.02",
    priority: "high",
    bounds: {
      x: 61.9,
      y: 19.78,
      width: 1.39,
      height: 1.09,
    }
  }),
  
  createBooth({
    id: "4D03",
    table: "4.D.03",
    priority: "high",
    bounds: {
      x: 61.89,
      y: 20.97,
      width: 1.42,
      height: 1.08,
    }
  }),
  
  createBooth({
    id: "4D11",
    table: "4.D.11",
    priority: "high",
    bounds: {
      x: 61.89,
      y: 30.55,
      width: 1.42,
      height: 1.09,
    }
  }),
  
  createBooth({
    id: "4D12",
    table: "4.D.12",
    priority: "low",
    bounds: {
      x: 61.89,
      y: 31.76,
      width: 1.42,
      height: 1.07,
    }
  }),
    
  createBooth({
    id: "4D13",
    table: "4.D.13",
    priority: "high",
    bounds: {
      x: 61.9,
      y: 32.94,
      width: 1.41,
      height: 1.08,
    }
  }),
    
  createBooth({
    id: "4E01",
    table: "4.E.01",
    priority: "high",
    bounds: {
      x: 65.17,
      y: 18.59,
      width: 1.42,
      height: 1.1,
    }
  }),
  
  createBooth({
    id: "4E03",
    table: "4.E.03",
    priority: "high",
    bounds: {
      x: 65.16,
      y: 20.96,
      width: 1.44,
      height: 1.1,
    }
  }),

  createBooth({
    id: "4E13",
    table: "4.E.13",
    priority: "low",
    bounds: {
      x: 65.19,
      y: 32.97,
      width: 1.42,
      height: 1.11,
    }
  }),

  createBooth({
    id: "4E14",
    table: "4.E.14",
    priority: "high",
    bounds: {
      x: 65.19,
      y: 34.18,
      width: 1.42,
      height: 1.11,
    }
  }),

  createBooth({
    id: "4G03",
    table: "4.G.03",
    priority: "medium",
    bounds: {
      x: 70.18,
      y: 20.95,
      width: 1.41,
      height: 1.13,
    }
  }),
  
  createBooth({
    id: "4H03",
    table: "4.H.03",
    priority: "high",
    bounds: {
      x: 71.68,
      y: 20.98,
      width: 1.4,
      height: 1.08,
    }
  }),

  createBooth({
    id: "4H09",
    table: "4.H.09",
    priority: "high",
    bounds: {
      x: 71.69,
      y: 28.16,
      width: 1.41,
      height: 1.1,
    }
  }),

  createBooth({
    id: "4I01",
    table: "4.I.01",
    priority: "high",
    bounds: {
      x: 75.23,
      y: 18.59,
      width: 1.4,
      height: 1.1,
    }
  }),
    
  createBooth({
    id: "4I14",
    table: "4.I.14",
    priority: "low",
    bounds: {
      x: 75.22,
      y: 34.13,
      width: 1.42,
      height: 1.16,
    }
  }),
  
  createBooth({
    id: "4I15",
    table: "4.I.15",
    priority: "low",
    bounds: {
      x: 75.22,
      y: 35.41,
      width: 1.42,
      height: 1.14,
    }
  }),
  
  createBooth({
    id: "4J01",
    table: "4.J.01",
    priority: "medium",
    bounds: {
      x: 76.72,
      y: 18.6,
      width: 1.42,
      height: 1.09,
    }
  }),

  createBooth({
    id: "4J03",
    table: "4.J.03",
    priority: "medium",
    bounds: {
      x: 76.72,
      y: 20.99,
      width: 1.41,
      height: 1.09,
    }
  }),
  
  createBooth({
    id: "4K03",
    table: "4.K.03",
    priority: "high",
    bounds: {
      x: 79.81,
      y: 20.97,
      width: 1.43,
      height: 1.1,
    }
  }),

  createBooth({
    id: "4K04",
    table: "4.K.04",
    priority: "high",
    bounds: {
      x: 79.83,
      y: 22.19,
      width: 1.4,
      height: 1.07,
    }
  }),
  
  createBooth({
    id: "4K08",
    table: "4.K.08",
    priority: "high",
    bounds: {
      x: 79.82,
      y: 26.96,
      width: 1.42,
      height: 1.07,
    }
  }),
    
  createBooth({
    id: "4L11",
    table: "4.L.11",
    priority: "medium",
    bounds: {
      x: 81.33,
      y: 30.52,
      width: 1.42,
      height: 1.13,
    }
  }),
];