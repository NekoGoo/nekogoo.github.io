import { CdkScrollable } from '@angular/cdk/scrolling';
import { Component, Inject, OnInit } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatRow,
  MatRowDef,
  MatTable,
} from '@angular/material/table';

import { Effect } from '@modules/coc/interfaces';

@Component({
  selector: 'coc-info-effects-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
  standalone: true,
  imports: [
    MatDialogTitle,
    CdkScrollable,
    MatDialogContent,
    MatTable,
    MatColumnDef,
    MatHeaderCellDef,
    MatHeaderCell,
    MatCellDef,
    MatCell,
    MatRowDef,
    MatRow,
  ],
})
export class InfoEffectsDetailComponent implements OnInit {
  effectDetails: [string, any][];
  displayedColumns: string[] = ['0', '1'];
  excludedColumns: string[] = ['title', 'dimension'];

  constructor(@Inject(MAT_DIALOG_DATA) public data: Effect) {
    this.effectDetails = Object.entries(data).filter((e) =>
      // filter out entries in the excluded list
      Boolean(!this.excludedColumns.includes(e[0])),
    );
  }

  ngOnInit(): void {}
}
