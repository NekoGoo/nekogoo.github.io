import { Injectable } from '@angular/core';
import { seedTag, Tag } from '@modules/coc/store/models/engine-parts/tag';

@Injectable({
  providedIn: 'root',
})
export class TagService {
  data: Tag[];

  constructor() {
    this.data = seedTag();
  }
}
