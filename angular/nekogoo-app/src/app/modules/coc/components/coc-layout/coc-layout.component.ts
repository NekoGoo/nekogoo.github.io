import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'coc-layout',
  templateUrl: './coc-layout.component.html',
  styleUrls: ['./coc-layout.component.scss'],
  // TODO: remove below line when styles no longer need to be global to work
  encapsulation: ViewEncapsulation.None,
})
export class CocLayoutComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
