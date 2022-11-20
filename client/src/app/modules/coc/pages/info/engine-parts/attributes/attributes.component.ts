import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import {
  Attribute,
  AttributeType,
  AttributeTypes,
  DimensionTypes,
} from '@modules/coc/interfaces';
import { AttributeService } from '@modules/coc/services';
import { InfoAttributesDetailComponent } from './detail/detail.component';

@Component({
  selector: 'coc-info-attributes',
  templateUrl: './attributes.component.html',
  styleUrls: ['./attributes.component.scss'],
})
export class InfoAttributesComponent implements OnInit {
  attributes!: Attribute[];
  displayedColumns: string[] = ['type', 'title', 'description'];
  attributeTypes: string[];

  constructor(
    private attributeService: AttributeService,
    public dialog: MatDialog,
  ) {
    // this.attributes = this.attributeService.data;
    this.attributes = this.attributeService.seed(DimensionTypes.CoC);
    // https://bobbyhadz.com/blog/typescript-get-all-enum-names
    this.attributeTypes = Object.keys(AttributeTypes).filter((v) =>
      Number.isNaN(Number(v)),
    );
  }

  ngOnInit(): void {}

  openDetailDialog(row: Attribute): void {
    // const dialogRef = this.dialog.open(DialogComponent, {});
    // dialogRef.afterClosed().subscribe((result) => {
    //   console.log('The dialog was closed');
    // });

    this.dialog.open(InfoAttributesDetailComponent, {
      width: '580px',
      data: row,
    });
  }

  // https://fonts.google.com/icons?icon.set=Material+Icons
  attributeIcon(type: AttributeType): string {
    let text = '';
    if (type === AttributeTypes.Primary) {
      text = 'filter_1';
    } else if (type === AttributeTypes.Secondary) {
      text = 'filter_2';
    } else if (type === AttributeTypes.Tertiary) {
      text = 'filter_3';
    } else if (type === AttributeTypes.Sexual) {
      text = 'filter_vintage';
    } else if (type === AttributeTypes.Offensive) {
      text = 'gps_not_fixed';
    } else if (type === AttributeTypes.Defensive) {
      text = 'tonality';
    }
    return text;
  }

  attributeText(type: AttributeType): string {
    let text = '';
    if (type === AttributeTypes.Primary) {
      text = 'Primary';
    } else if (type === AttributeTypes.Secondary) {
      text = 'Secondary';
    } else if (type === AttributeTypes.Tertiary) {
      text = 'Tertiary';
    } else if (type === AttributeTypes.Sexual) {
      text = 'Sexual';
    } else if (type === AttributeTypes.Offensive) {
      text = 'Offensive';
    } else if (type === AttributeTypes.Defensive) {
      text = 'Defensive';
    }
    return text;
  }
}
