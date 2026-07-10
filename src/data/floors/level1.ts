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

export const level1Booths: Booth[] = [
  
  createBooth({
    id: "1A04",
    table: "1.A.04",
    priority: "high",
    bounds: {
      x: 19.65,
      y: 29.7,
      width: 1.43,
      height: 1.27,
    }
  }),
    
  createBooth({
    id: "1B05",
    table: "1.B.05",
    priority: "high",
    bounds: {
      x: 21.15,
      y: 31.07,
      width: 1.42,
      height: 1.21,
    }
  }),

  createBooth({
    id: "1C07",
    table: "1.C.07",
    priority: "medium",
    bounds: {
      x: 25.22,
      y: 33.74,
      width: 1.39,
      height: 1.23,
    }
  }),
  
  createBooth({
    id: "1E02",
    table: "1.E.02",
    priority: "medium",
    bounds: {
      x: 30.73,
      y: 17.54,
      width: 1.41,
      height: 1.2,
    }
  }),
   
  createBooth({
    id: "1E07",
    table: "1.E.07",
    priority: "medium",
    bounds: {
      x: 30.73,
      y: 24.21,
      width: 1.43,
      height: 1.24,
    }
  }),
    
  createBooth({
    id: "1F04",
    table: "1.F.04",
    priority: "medium",
    bounds: {
      x: 32.23,
      y: 20.2,
      width: 1.42,
      height: 1.21,
    }
  }),
    
  createBooth({
    id: "1G15",
    table: "1.G.15",
    priority: "high",
    bounds: {
      x: 36.97,
      y: 35.03,
      width: 1.41,
      height: 1.28,
    }
  }),

  createBooth({
    id: "1I09",
    table: "1.I.09",
    priority: "medium",
    bounds: {
      x: 43.26,
      y: 26.89,
      width: 1.42,
      height: 1.24,
    }
  }),

  createBooth({
    id: "1J05",
    table: "1.J.05",
    priority: "medium",
    bounds: {
      x: 44.78,
      y: 21.56,
      width: 1.4,
      height: 1.2,
    }
  }),
  
  createBooth({
    id: "1J06",
    table: "1.J.06",
    priority: "medium",
    bounds: {
      x: 44.78,
      y: 22.9,
      width: 1.4,
      height: 1.17,
    }
  }),
  
  createBooth({
    id: "1J10",
    table: "1.J.10",
    priority: "medium",
    bounds: {
      x: 44.77,
      y: 28.25,
      width: 1.4,
      height: 1.2,
    }
  }),
    
  createBooth({
    id: "1J11",
    table: "1.J.11",
    priority: "medium",
    bounds: {
      x: 44.78,
      y: 29.59,
      width: 1.41,
      height: 1.19,
    }
  }),

  createBooth({
    id: "1M01",
    table: "1.M.01",
    priority: "high",
    bounds: {
      x: 55.67,
      y: 16.17,
      width: 1.41,
      height: 1.23,
    }
  }),
   
  createBooth({
    id: "1O09",
    table: "1.O.09",
    priority: "medium",
    bounds: {
      x: 61.8,
      y: 26.9,
      width: 1.44,
      height: 1.23,
    }
  }),
  
  createBooth({
    id: "1P08",
    table: "1.P.08",
    priority: "low",
    bounds: {
      x: 63.31,
      y: 25.57,
      width: 1.43,
      height: 1.21,
    }
  }),
    
  createBooth({
    id: "1Q04",
    table: "1.Q.04",
    priority: "low",
    bounds: {
      x: 68.16,
      y: 20.21,
      width: 1.41,
      height: 1.21,
    }
  }),
  
  createBooth({
    id: "1R05",
    table: "1.R.05",
    priority: "low",
    bounds: {
      x: 69.63,
      y: 21.52,
      width: 1.43,
      height: 1.24,
    }
  }),

  createBooth({
    id: "1R06",
    table: "1.R.06",
    priority: "high",
    bounds: {
      x: 69.67,
      y: 22.88,
      width: 1.38,
      height: 1.23,
    }
  }),
  
  createBooth({
    id: "1T14",
    table: "1.T.14",
    priority: "medium",
    bounds: {
      x: 75.82,
      y: 33.59,
      width: 1.4,
      height: 1.3,
    }
  }),
    
  createBooth({
    id: "1U05",
    table: "1.U.05",
    priority: "high",
    bounds: {
      x: 80.58,
      y: 21.51,
      width: 1.43,
      height: 1.25,
    }
  }),
  
  createBooth({
    id: "1U08",
    table: "1.U.08",
    priority: "medium",
    bounds: {
      x: 80.59,
      y: 25.55,
      width: 1.4,
      height: 1.24,
    }
  }),


  
  createBooth({
    id: "240",
    table: "240",
    priority: "medium",
    bounds: {
      x: 77.22,
      y: 43.27,
      width: 1.46,
      height: 2.14,
    }
  }),

  createBooth({
    id: "410",
    table: "410",
    priority: "low",
    bounds: {
      x: 26.89,
      y: 57.07,
      width: 2.97,
      height: 4.37,
    }
  }),
];