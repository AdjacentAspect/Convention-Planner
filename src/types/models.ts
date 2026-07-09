export type BoothPriority =
  | "red"
  | "yellow"
  | "green"
  | "grey"
  | "black";

export interface BoothBounds {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface WishlistItem {
  id: string;
  name: string;
  purchased: boolean;
}

export interface Booth {

  id: string;

  table: string;

  artist: string;

  priority: BoothPriority;

  visited: boolean;

  notes: string;

  bounds: BoothBounds;

  wishlist: WishlistItem[];

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