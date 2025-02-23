import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatToolbar, MatToolbarRow } from '@angular/material/toolbar';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'coc-nav-layout',
  templateUrl: './coc-nav-layout.component.html',
  styleUrls: ['./coc-nav-layout.component.css'],
  // TODO: remove below line when styles no longer need to be global to work
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [MatToolbar, MatToolbarRow, MatButton, RouterLink, RouterOutlet],
})
export class CocNavLayoutComponent implements OnInit {
  // constructor() {}

  ngOnInit(): void {}
}
