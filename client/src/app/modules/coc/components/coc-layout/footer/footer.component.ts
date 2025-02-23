import { KeyValuePipe, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { CocButton } from '@modules/coc/interfaces';
import { CocButtonComponent } from '../coc-button/coc-button.component';

@Component({
  selector: 'coc-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  standalone: true,
  imports: [NgFor, NgIf, CocButtonComponent, KeyValuePipe],
})
export class CocFooterComponent implements OnInit {
  footButtons: { [key: string]: CocButton };

  constructor() {
    this.footButtons = {};
    this.initial();

    setTimeout(() => {
      this.mainMenu();
    }, 1500);
  }

  ngOnInit(): void {}

  // https://stackoverflow.com/questions/52793944/angular-keyvalue-pipe-sort-properties-iterate-in-order
  // https://stackoverflow.com/questions/54091011/disable-the-default-keyvalue-pipe-sort-in-angular
  originalOrder(): number {
    return 0;
  }

  initial(): void {
    this.footButtons = {
      button0: {
        title: 'Button 0',
        visible: true,
      },
      button1: {
        title: 'Button 1',
        visible: true,
      },
      button2: {
        title: 'Button 2',
        visible: true,
      },
      button3: {
        title: 'Button 3',
        visible: true,
      },
      button4: {
        title: 'Button 4',
        visible: true,
      },
      // --- Row 2 ---
      button5: {
        title: 'Button 5',
        visible: true,
      },
      button6: {
        title: 'Button 6',
        visible: true,
      },
      button7: {
        title: 'Button 7',
        visible: true,
      },
      button8: {
        title: 'Button 8',
        visible: true,
      },
      button9: {
        title: 'Button 9',
        visible: true,
      },
      // --- Row 3 ---
      button10: {
        title: 'Button 10',
        visible: true,
      },
      button11: {
        title: 'Button 11',
        visible: true,
      },
      button12: {
        title: 'Button 12',
        visible: true,
      },
      button13: {
        title: 'Button 13',
        visible: true,
      },
      button14: {
        title: 'Button 14',
        visible: true,
      },
    };
  }

  mainMenu(): void {
    this.footButtons = {
      button0: {
        title: 'Button 0',
        visible: false,
      },
      button1: {
        title: 'Image Credits',
        visible: true,
      },
      button2: {
        title: 'Credits',
        visible: true,
      },
      button3: {
        title: 'Button 3',
        visible: false,
      },
      button4: {
        title: 'Instructions',
        visible: true,
      },
      // --- Row 2 ---
      button5: {
        title: 'Debug Info',
        visible: true,
      },
      button6: {
        title: 'Button 6',
        visible: false,
      },
      button7: {
        title: 'Button 7',
        visible: false,
      },
      button8: {
        title: 'Settings',
        visible: true,
      },
      button9: {
        title: 'Button 9',
        visible: false,
      },
    };
  }
}
