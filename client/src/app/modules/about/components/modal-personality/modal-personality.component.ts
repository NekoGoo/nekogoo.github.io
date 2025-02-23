import { CdkScrollable } from '@angular/cdk/scrolling';
import { Component, OnInit } from '@angular/core';
import { MatDialogContent, MatDialogRef } from '@angular/material/dialog';

import { GooModalHeaderComponent } from '@shared/components/base-layout/goo-modal-header/goo-modal-header.component';
import { GooPillComponent } from '@shared/components/base-layout/goo-pill/goo-pill.component';

@Component({
  selector: 'about-modal-personality',
  templateUrl: './modal-personality.component.html',
  styleUrls: ['./modal-personality.component.scss'],
  standalone: true,
  imports: [
    GooModalHeaderComponent,
    CdkScrollable,
    MatDialogContent,
    GooPillComponent,
  ],
})
export class ModalPersonalityComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<ModalPersonalityComponent>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {}
}
