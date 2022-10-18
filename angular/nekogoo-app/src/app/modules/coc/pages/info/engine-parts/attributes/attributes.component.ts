import { Component, OnInit } from '@angular/core';

import {
  Attribute,
  AttributeType,
  DimensionType,
} from '@modules/coc/interfaces';
import { AttributeService } from '@modules/coc/services';

@Component({
  selector: 'coc-info-attributes',
  templateUrl: './attributes.component.html',
  styleUrls: ['./attributes.component.scss'],
})
export class AttributesInfoComponent implements OnInit {
  attributes!: Attribute[];
  displayedColumns: string[] = ['type', 'title', 'description'];

  constructor(private attributeService: AttributeService) {
    // this.attributes = this.attributeService.data;
    this.attributes = this.attributeService.seed(DimensionType.CoC);
  }

  // https://fonts.google.com/icons?icon.set=Material+Icons
  attributeIcon(type: AttributeType): string {
    let text = '';
    if (type === AttributeType.Primary) {
      text = 'filter_1';
    } else if (type === AttributeType.Secondary) {
      text = 'filter_2';
    } else if (type === AttributeType.Tertiary) {
      text = 'filter_3';
    } else if (type === AttributeType.Sexual) {
      text = 'filter_vintage';
    } else if (type === AttributeType.Offensive) {
      text = 'gps_not_fixed';
    } else if (type === AttributeType.Defensive) {
      text = 'tonality';
    }
    return text;
  }

  attributeText(type: AttributeType): string {
    let text = '';
    if (type === AttributeType.Primary) {
      text = 'Primary';
    } else if (type === AttributeType.Secondary) {
      text = 'Secondary';
    } else if (type === AttributeType.Tertiary) {
      text = 'Tertiary';
    } else if (type === AttributeType.Sexual) {
      text = 'Sexual';
    } else if (type === AttributeType.Offensive) {
      text = 'Offensive';
    } else if (type === AttributeType.Defensive) {
      text = 'Defensive';
    }
    return text;
  }

  ngOnInit(): void {}
}
