import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDivider } from '@angular/material/divider';
import { Subscription, interval } from 'rxjs';

interface DemoFontStyle {
  class: string;
  title: string;
}

@Component({
  selector: 'app-demo-font',
  templateUrl: './font.component.html',
  styleUrls: ['./font.component.scss'],
  standalone: true,
  imports: [MatDivider, NgFor],
})
export class FontComponent implements OnInit {
  subDemoHMR: Subscription | undefined;
  demoFontStyles?: DemoFontStyle[];

  ngOnInit(): void {
    console.log('testing testing');
    this.subDemoHMR = interval(1000).subscribe((value) => {
      console.log('values', String(value));
    });
    this.demoFontStyles = [
      { class: 'bubble-bobble', title: 'Bubble Bobble' },
      { class: 'candy-pop', title: 'Candy Pop' },
      { class: 'candy-shop', title: 'Candy Shop' },
      { class: 'chocolate-bar', title: 'Chocolate Bar' },
      { class: 'gummy', title: 'Gummy' },
      // { class: 'gummy-book', title: 'Gummy Book' },
      { class: 'reglisse-back', title: 'Reglisse Back' },
      { class: 'reglisse-fill', title: 'Reglisse Fill' },
      { class: 'reglisse-regular', title: 'Reglisse Regular' },
      // --- Caskaydia Cove ---
      // {
      //   class: 'caskaydia-cove-mono-windows',
      //   title: 'Caskaydia Cove Nerd Font Mono Windows',
      // },
      // { class: 'caskaydia-cove-mono', title: 'Caskaydia Cove Nerd Font Mono' },
      // {
      //   class: 'caskaydia-cove-windows',
      //   title: 'Caskaydia Cove Nerd Font Windows',
      // },
      // { class: 'caskaydia-cove', title: 'Caskaydia Cove Nerd Font' },
    ];
  }

  ngOnDestroy(): void {
    this.subDemoHMR?.unsubscribe();
  }
}
