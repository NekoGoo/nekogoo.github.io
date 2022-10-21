import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'coc-button',
  templateUrl: './coc-button.component.html',
  styleUrls: ['./coc-button.component.scss'],
})
export class CocButtonComponent implements OnInit {
  @Input() _id = '';
  @Input() action: (() => void) | null = null;

  constructor() {}

  ngOnInit(): void {}
}
