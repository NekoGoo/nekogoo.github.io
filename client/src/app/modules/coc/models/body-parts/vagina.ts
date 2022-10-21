export class Vagina {
  type: number;
  clitLength: number;
  vaginalWetness: number;
  vaginalLooseness: number;
  virgin: boolean;
  clitPierced: number;
  labiaPierced: number;

  constructor(wetness = 1, looseness = 0, virgin = true, type = 0) {
    this.type = type;
    this.clitLength = 0.25;
    this.vaginalWetness = wetness;
    this.vaginalLooseness = looseness;
    this.virgin = virgin;
    this.clitPierced = 0;
    this.labiaPierced = 0;
  }
}
