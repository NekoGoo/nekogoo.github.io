import { Injectable } from '@angular/core';

import {
  DimensionType,
  DimensionTypes,
  Effect,
  EffectSeed,
} from '@modules/coc/interfaces';

@Injectable({
  providedIn: 'root',
})
export class EffectService {
  data: Effect[];

  constructor() {
    this.data = EffectSeed;
  }

  seed(dimension: DimensionType = DimensionTypes.All): Effect[] {
    let effects: Effect[] = [];
    if (dimension === DimensionTypes.All) {
      effects = this.data;
    } else {
      effects = this.data.filter((t) => {
        return t.dimension === dimension;
      });
    }
    return effects;
  }
}
