class Breast {
  size: number;
  rating: number;
  lactationMultiplier: number;
  milkFullness: number;
  fuckable: boolean;
  nipples: number;
  nippleLength: number;
  pierced: boolean;

  constructor(size = 0, nipples = 1) {
    this.size = size;
    this.rating = 0;
    this.nipples = nipples;
    this.nippleLength = 0.25;
    this.lactationMultiplier = 0;
    this.milkFullness = 0; // Goes up to 100
    this.fuckable = false;
    this.pierced = false;
  }
}

export { Breast };
