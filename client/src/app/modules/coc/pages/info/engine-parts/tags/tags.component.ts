import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import {
  DimensionTypes,
  Tag,
  TagType,
  TagTypes,
} from '@modules/coc/interfaces';
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
    this.tags = this.tagService.seed(DimensionTypes.CoC);
    // https://bobbyhadz.com/blog/typescript-get-all-enum-names
    this.tagTypes = Object.keys(TagTypes).filter((v) =>
      Number.isNaN(Number(v)),
    );
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
    if (type === TagTypes.Attribute) {
      text = 'insights';
    } else if (type === TagTypes.Effect) {
      text = 'lens_blur';
    } else if (type === TagTypes.Item) {
      text = 'ad_units';
    } else if (type === TagTypes.Location) {
      text = 'explore';
    } else if (type === TagTypes.Skill) {
      text = 'grain';
    } else if (type === TagTypes.Moment) {
      text = 'shutter_speed';
    } else if (type === TagTypes.Story) {
      text = 'history_edu';
    } else if (type === TagTypes.Character) {
      text = 'attribution';
    } else if (type === TagTypes.Relationship) {
      text = 'groups';
    } else if (type === TagTypes.Species) {
      text = 'diversity_2';
    }
    return text;
  }

  tagText(type: TagType): string {
    let text = '';
    if (type === TagTypes.Attribute) {
      text = 'Attribute';
    } else if (type === TagTypes.Effect) {
      text = 'Tag';
    } else if (type === TagTypes.Item) {
      text = 'Item';
    } else if (type === TagTypes.Location) {
      text = 'Location';
    } else if (type === TagTypes.Skill) {
      text = 'Skill';
    } else if (type === TagTypes.Moment) {
      text = 'Moment';
    } else if (type === TagTypes.Story) {
      text = 'Story';
    } else if (type === TagTypes.Character) {
      text = 'Character';
    } else if (type === TagTypes.Relationship) {
      text = 'Relationship';
    } else if (type === TagTypes.Species) {
      text = 'Species';
    }
    return text;
  }
}
