import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { DimensionType, Tag, TagType } from '@modules/coc/interfaces';
import { TagService } from '@modules/coc/services';
import { InfoTagsDetailComponent } from './detail/detail.component';

@Component({
  selector: 'coc-info-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss'],
})
export class InfoTagsComponent implements OnInit {
  tags!: Tag[];
  displayedColumns: string[] = ['type', 'title', 'description'];
  tagTypes: string[];

  constructor(private tagService: TagService, public dialog: MatDialog) {
    // this.tags = this.tagService.data;
    this.tags = this.tagService.seed(DimensionType.CoC);
    // https://bobbyhadz.com/blog/typescript-get-all-enum-names
    this.tagTypes = Object.keys(TagType).filter((v) => Number.isNaN(Number(v)));
  }

  ngOnInit(): void {}

  openDetailDialog(row: Tag): void {
    this.dialog.open(InfoTagsDetailComponent, {
      width: '580px',
      data: row,
    });
  }

  // https://fonts.google.com/icons?icon.set=Material+Icons
  tagIcon(type: TagType): string {
    let text = '';
    if (type === TagType.Attribute) {
      text = 'insights';
    } else if (type === TagType.Effect) {
      text = 'lens_blur';
    } else if (type === TagType.Item) {
      text = 'ad_units';
    } else if (type === TagType.Location) {
      text = 'explore';
    } else if (type === TagType.Skill) {
      text = 'grain';
    } else if (type === TagType.Moment) {
      text = 'shutter_speed';
    } else if (type === TagType.Story) {
      text = 'history_edu';
    } else if (type === TagType.Character) {
      text = 'attribution';
    } else if (type === TagType.Relationship) {
      text = 'groups';
    } else if (type === TagType.Species) {
      text = 'diversity_2';
    }
    return text;
  }

  tagText(type: TagType): string {
    let text = '';
    if (type === TagType.Attribute) {
      text = 'Attribute';
    } else if (type === TagType.Effect) {
      text = 'Tag';
    } else if (type === TagType.Item) {
      text = 'Item';
    } else if (type === TagType.Location) {
      text = 'Location';
    } else if (type === TagType.Skill) {
      text = 'Skill';
    } else if (type === TagType.Moment) {
      text = 'Moment';
    } else if (type === TagType.Story) {
      text = 'Story';
    } else if (type === TagType.Character) {
      text = 'Character';
    } else if (type === TagType.Relationship) {
      text = 'Relationship';
    } else if (type === TagType.Species) {
      text = 'Species';
    }
    return text;
  }
}
