import { Component, OnInit } from '@angular/core';

import { Tag, TagType } from '@modules/coc/interfaces';
import { TagService } from '@modules/coc/services';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss'],
})
export class TagsComponent implements OnInit {
  tags!: Tag[];
  displayedColumns: string[] = ['type', 'title', 'description'];

  constructor(private tagService: TagService) {
    this.tags = this.tagService.data;
  }

  tagType(type: TagType): string {
    let text = '';
    if (type === TagType.Species) {
      text = 'Species';
    } else if (type === TagType.Effect) {
      text = 'Effect';
    } else if (type === TagType.Location) {
      text = 'Location';
    }
    return text;
  }

  ngOnInit(): void {}
}
