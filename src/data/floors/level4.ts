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
      x: 20,
      y: 20,
      width: 8,
      height: 6,
    },
  }),

  createBooth({
    id: "4E14",
    table: "4.E.14",
    priority: "high",
    bounds: {
      x: 40,
      y: 30,
      width: 8,
      height: 6,
    },
  })
];