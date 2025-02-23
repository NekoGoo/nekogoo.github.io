import { NgClass } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'coc-stat-frame',
  templateUrl: './coc-stat-frame.component.html',
  // styleUrls: ['./coc-stat-frame.component.css'],
  standalone: true,
  imports: [NgClass],
})
export class CocStatFrameComponent implements OnInit {
  @Input() _id = '';
  @Input() label = '';
  @Input() minValue = 0;
  @Input() maxValue? = 0;
  @Input() tt? = '';
  @Input() isTextOnly? = false;
  @Input() statupdown?: boolean;

  value: string;
  statFrameClass: string;
  statBarClass: string;

  constructor() {
    this.value = '';
    this.statFrameClass = '';
    this.statBarClass = '';
  }

  ngOnInit(): void {
    const fMinValue = this.numberWithCommas(this.minValue);

    // must specifically target undefined, not just falsy
    this.value =
      this.maxValue === undefined
        ? `${fMinValue}`
        : `${fMinValue} / ${this.numberWithCommas(this.maxValue)}`;

    this.statFrameClass = this.isTextOnly ? 'stat-frame-blank' : 'stat-frame';
    this.statBarClass = this.isTextOnly ? '' : 'stat-bar';
  }

  // https://sebhastian.com/javascript-format-number-commas
  numberWithCommas(num: number): string {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
}
