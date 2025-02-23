import { CdkScrollable } from '@angular/cdk/scrolling';
import { Component, Inject, OnInit } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogContent,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatTooltip } from '@angular/material/tooltip';

import { GooModalHeaderComponent } from '@shared/components/base-layout/goo-modal-header/goo-modal-header.component';
import { GooPillComponent } from '@shared/components/base-layout/goo-pill/goo-pill.component';

export interface DialogData {
  name: string;
  animal: string;
}

@Component({
  selector: 'about-modal-appearance',
  templateUrl: './modal-appearance.component.html',
  styleUrls: ['./modal-appearance.component.scss'],
  standalone: true,
  imports: [
    GooModalHeaderComponent,
    CdkScrollable,
    MatDialogContent,
    GooPillComponent,
    MatTooltip,
  ],
})
export class ModalAppearanceComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ModalAppearanceComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {}
}
