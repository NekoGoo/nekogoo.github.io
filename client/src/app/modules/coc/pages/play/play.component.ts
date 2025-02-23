import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { EMPTY, Observable } from 'rxjs';

import { SaveState } from '@modules/coc/interfaces';
import { getMainText } from '@modules/coc/store/play/play.selectors';
import { getMode } from '@modules/coc/store/ui/ui.selectors';

@Component({
  selector: 'coc-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss'],
  standalone: true,
  imports: [AsyncPipe],
})
export class CocPlayComponent implements OnInit {
  mainText$ = this.store.select(getMainText);
  tooltipText$: Observable<string>;
  mode$ = this.store.select(getMode);

  constructor(private store: Store<SaveState>) {
    this.tooltipText$ = EMPTY;
  }

  ngOnInit(): void {}
}
