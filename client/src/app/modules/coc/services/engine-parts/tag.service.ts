import { Injectable } from '@angular/core';

// import { seedTag, Tag } from '@modules/coc/models/engine-parts/tag';
import {
  DimensionType,
  DimensionTypes,
  Tag,
  TagSeed,
} from '@modules/coc/interfaces';

@Injectable({
  providedIn: 'root',
})
export class TagService {
  data: Tag[];

  constructor() {
    // this.data = seedTag();
    this.data = TagSeed;
  }

  seed(dimension: DimensionType = DimensionTypes.All): Tag[] {
    let tags: Tag[] = [];
    if (dimension === DimensionTypes.All) {
      tags = this.data;
    } else {
      tags = this.data.filter((t) => {
        return t.dimension === dimension;
      });
    }
    return tags;
  }
}
