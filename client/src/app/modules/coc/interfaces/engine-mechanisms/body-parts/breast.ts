import { BreastSizeType } from '../../appearance-types';

export interface Nipple {
  length: number;
  pierced: boolean;
}

export interface Breast {
  // --- CoC data ---
  size: BreastSizeType;
  nipples: Nipple[]; // list of id's
  rating: number;
  lactationMultiplier: number;
  // Fullness used for lactation....if 75 or greater warning bells start going off!
  // If it reaches 100 it reduces lactation multiplier.
  milkFullness: number;
  fullness: number;
  fuckable: boolean;
}

export interface BreastRow {
  breasts: Breast[]; // list of id's
}
