import {
  AnalLoosenessType,
  AnalWetnessType,
  HipRatingType,
} from '../../appearance-types';

export interface Ass {
  size: number;

  // --- CoC data ---
  rating: HipRatingType;
  virgin: boolean;

  wetness: AnalWetnessType;
  looseness: AnalLoosenessType;
  // Used to determine thickness of knot relative to normal thickness
  // Used during sex to determine how full it currently is.  For multi-dick sex.
  fullness: number;
}
