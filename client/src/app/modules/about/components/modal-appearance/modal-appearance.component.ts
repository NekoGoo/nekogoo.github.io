import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  name: string;
  animal: string;
}

@Component({
  selector: 'about-modal-appearance',
  templateUrl: './modal-appearance.component.html',
  styleUrls: ['./modal-appearance.component.scss'],
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
