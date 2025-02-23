import { KeyValuePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { CocButton } from '@modules/coc/interfaces';
import { CocButtonComponent } from '../coc-button/coc-button.component';

@Component({
  selector: 'coc-header',
  templateUrl: './header.component.html',
  // styleUrls: ['./header.component.css'],
  standalone: true,
  imports: [CocButtonComponent, KeyValuePipe],
})
export class CocHeaderComponent implements OnInit {
  headButtons: { [key: string]: CocButton };

  constructor() {
    this.headButtons = {};
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
    this.headButtons = {
      buttonMain: {
        title: 'Main Menu',
        visible: true,
      },
      buttonData: {
        title: 'Data',
        visible: true,
      },
      buttonLevel: {
        title: 'Level Up',
        visible: true,
      },
      buttonStats: {
        title: 'Stats',
        visible: true,
      },
      buttonPerks: {
        title: 'Perks',
        visible: true,
      },
      buttonAppearance: {
        title: 'Appearance',
        visible: true,
      },
    };
  }

  mainMenu(): void {
    this.headButtons = {
      buttonMain: {
        title: 'New Game',
        visible: true,
      },
      buttonData: {
        title: 'Data',
        visible: true,
      },
    };
  }
}
