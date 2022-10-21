import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'goo-modal-header',
  templateUrl: './goo-modal-header.component.html',
  styleUrls: ['./goo-modal-header.component.scss'],
})
export class GooModalHeaderComponent implements OnInit {
  @Input() msg = '';
  @Output() closeFunc = new EventEmitter<string>();

  constructor() {}

  onNoClick(): void {
    // this.dialogRef.close();
    // this.closeFunc.emit('complete');
    this.closeFunc.emit();
  }

  ngOnInit(): void {}
}
