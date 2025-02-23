import { CdkScrollable } from '@angular/cdk/scrolling';
import { Component, OnInit } from '@angular/core';
import { MatDialogContent, MatDialogRef } from '@angular/material/dialog';
import { MatTooltip } from '@angular/material/tooltip';

import { GooModalHeaderComponent } from '@shared/components/base-layout/goo-modal-header/goo-modal-header.component';
import { GooPillComponent } from '@shared/components/base-layout/goo-pill/goo-pill.component';

@Component({
  selector: 'about-modal-special',
  templateUrl: './modal-special.component.html',
  // styleUrls: ['./modal-special.component.css'],
  standalone: true,
  imports: [
    GooModalHeaderComponent,
    CdkScrollable,
    MatDialogContent,
    GooPillComponent,
    MatTooltip,
  ],
})
export class ModalSpecialComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<ModalSpecialComponent>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {}
}
