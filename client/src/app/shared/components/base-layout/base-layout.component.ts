import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.scss'],
  standalone: true,
  imports: [HeaderComponent, RouterOutlet, FooterComponent],
})
export class BaseLayoutComponent implements OnInit {
  // title: string;

  // constructor() {}

  ngOnInit(): void {}
}
