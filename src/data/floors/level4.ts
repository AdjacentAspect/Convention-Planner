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
    id: "4E13",
    table: "4.E.13",
    priority: "low",
    bounds: {
      x: 65.15,
      y: 32.99,
      width: 1.39,
      height: 0.98,
    }
  }),

  createBooth({
    id: "4E14",
    table: "4.E.14",
    priority: "high",
    bounds: {
      x: 65.18,
      y: 34.19,
      width: 1.38,
      height: 1.08,
    }
  })
];