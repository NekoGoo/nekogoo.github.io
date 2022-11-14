import { BreastSizeType } from '../appearance-types';

export interface Nipple {
  id: string;
  length: number;
  pierced: boolean;
}

export interface Breast {
  id: string;
  // --- CoC data ---
  size: BreastSizeType;
  nipples: string[]; // list of id's
  rating: number;
  lactationMultiplier: number;
  // Fullness used for lactation....if 75 or greater warning bells start going off!
  // If it reaches 100 it reduces lactation multiplier.
  milkFullness: number;
  fuckable: boolean;
}

export interface BreastRow {
  id: string;
  breasts: string[]; // list of id's
}
