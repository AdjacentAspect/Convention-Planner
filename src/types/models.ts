export type BoothPriority =
  | "high"
  | "medium"
  | "low"
  | "none";

export interface BoothBounds {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface Booth {

  id: string;

  table: string;

  priority: BoothPriority;

  visited: boolean;

  bounds: BoothBounds;

  images: string[];
}

export interface Floor {

  id: string;

  name: string;

  image: string;

  booths: Booth[];
}

export interface ConventionEvent {

  id: string;

  name: string;

  venue: string;

  year: number;

  floors: Floor[];
}

export interface UserProgress {
  visitedBooths: string[];
}