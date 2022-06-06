import { ButtRatingType } from '@/erpge/flags/appearanceEnums';

class Ass {
  size: number;
  rating: number;
  virgin: boolean;
  analWetness: number;
  analLooseness: number;

  constructor(wetness = 1, looseness = 0, virgin = true) {
    this.size = 0;
    this.rating = ButtRatingType.AVERAGE;
    this.virgin = virgin;
    this.analWetness = wetness;
    this.analLooseness = looseness;
  }
}

export { Ass };
