import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { MatDialogTitle } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'goo-modal-header',
  templateUrl: './goo-modal-header.component.html',
  styleUrls: ['./goo-modal-header.component.scss'],
  standalone: true,
  imports: [MatDialogTitle, MatIconButton, MatIcon],
})
export class GooModalHeaderComponent implements OnInit {
  @Input() msg = '';
  @Output() closeFunc = new EventEmitter<string>();

  // constructor() {}

  onNoClick(): void {
    // this.dialogRef.close();
    // this.closeFunc.emit('complete');
    this.closeFunc.emit();
  }

  ngOnInit(): void {}
}
