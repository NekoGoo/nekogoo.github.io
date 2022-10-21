import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'about-modal-personality',
  templateUrl: './modal-personality.component.html',
  styleUrls: ['./modal-personality.component.scss'],
})
export class ModalPersonalityComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<ModalPersonalityComponent>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {}
}
