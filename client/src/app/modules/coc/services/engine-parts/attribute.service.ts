import { Injectable } from '@angular/core';

import {
  Attribute,
  AttributeSeed,
  DimensionType,
} from '@modules/coc/interfaces';

@Injectable({
  providedIn: 'root',
})
export class AttributeService {
  data: Attribute[];

  constructor() {
    this.data = AttributeSeed;
  }

  seed(dimension: DimensionType = DimensionType.All): Attribute[] {
    let attributes: Attribute[] = [];
    if (dimension === DimensionType.All) {
      attributes = this.data;
    } else {
      attributes = this.data.filter((t) => {
        return t.dimension === dimension;
      });
    }
    return attributes;
  }
}
