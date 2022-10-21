import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Attribute } from '@modules/coc/interfaces';

@Component({
  selector: 'coc-info-attributes-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class AttributesInfoDetailComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: Attribute) {}

  ngOnInit(): void {}
}
