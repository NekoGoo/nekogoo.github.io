import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Effect } from '@modules/coc/interfaces';

@Component({
  selector: 'coc-info-effects-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
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
