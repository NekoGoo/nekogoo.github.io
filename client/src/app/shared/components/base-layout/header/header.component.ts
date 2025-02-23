import { Component, OnInit } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatToolbar, MatToolbarRow } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [MatToolbar, MatToolbarRow, MatButton, RouterLink],
})
export class HeaderComponent implements OnInit {
  // constructor() {}

  ngOnInit(): void {}
}
