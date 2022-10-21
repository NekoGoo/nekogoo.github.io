import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'about-modal-special',
  templateUrl: './modal-special.component.html',
  styleUrls: ['./modal-special.component.scss'],
})
export class ModalSpecialComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<ModalSpecialComponent>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {}
}
