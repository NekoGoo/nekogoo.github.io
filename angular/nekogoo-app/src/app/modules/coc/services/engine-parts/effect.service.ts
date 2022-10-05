import { Injectable } from '@angular/core';
import { Effect, seedEffect } from '@modules/coc/models/engine-parts/effect';

@Injectable({
  providedIn: 'root',
})
export class EffectService {
  data: Effect[];

  constructor() {
    this.data = seedEffect();
  }
}
