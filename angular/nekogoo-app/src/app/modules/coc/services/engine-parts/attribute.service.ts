import { Injectable } from '@angular/core';
import {
  Attribute,
  seedAttribute,
} from '@modules/coc/models/engine-parts/attribute';

@Injectable({
  providedIn: 'root',
})
export class AttributeService {
  data: Attribute[];

  constructor() {
    this.data = seedAttribute();
  }
}
