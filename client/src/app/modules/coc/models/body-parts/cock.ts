export class Cock {
  cockType: number;
  cockLength: number;
  cockThickness: number;
  knotMultiplier: number;
  pierced: boolean;
  sock: string;

  constructor(length = 5, thickness = 1, type = 0) {
    this.cockType = type;
    this.cockLength = length;
    this.cockThickness = thickness;
    this.knotMultiplier = 1; // for dog and dragon cocks
    this.pierced = false;
    this.sock = ''; // e.g. cockring
  }

  get area(): number {
    return this.cockLength * this.cockThickness;
  }

  increaseCock(amount: number, hyperHappy = false): number {
    let growthAmount = amount;
    // Diminishing returns!
    if (!hyperHappy) {
      if (this.cockLength >= 30 && this.cockLength < 50) growthAmount *= 0.8;
      else if (this.cockLength >= 50 && this.cockLength < 70)
        growthAmount *= 0.6;
      else if (this.cockLength >= 70 && this.cockLength < 90)
        growthAmount *= 0.5;
      else if (this.cockLength >= 90 && this.cockLength < 120)
        growthAmount *= 0.4;
      else if (this.cockLength >= 120) growthAmount *= 0.3;
    }
    // Apply growth
    this.cockLength += growthAmount;
    // Apply hard cap
    if (this.cockLength > 240) this.cockLength = 240;
    return this.cockLength;
  }

  thickenCock(amount: number, hyperHappy = false): number {
    let growthAmount = amount;
    // Diminishing returns!
    if (!hyperHappy) {
      if (this.cockThickness >= 6 && this.cockThickness < 10)
        growthAmount *= 0.8;
      else if (this.cockThickness >= 10 && this.cockThickness < 14)
        growthAmount *= 0.6;
      else if (this.cockThickness >= 14 && this.cockThickness < 18)
        growthAmount *= 0.5;
      else if (this.cockThickness >= 18 && this.cockThickness < 24)
        growthAmount *= 0.4;
      else if (this.cockThickness >= 24) growthAmount *= 0.3;
    }
    // Apply growth
    this.cockThickness += growthAmount;
    // Apply hard cap
    if (this.cockThickness > 40) this.cockThickness = 40;
    return this.cockThickness;
  }
}
