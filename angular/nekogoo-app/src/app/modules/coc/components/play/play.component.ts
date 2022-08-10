import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { EMPTY, Observable } from 'rxjs';

import { getMainText } from '@modules/coc/store/play/play.selectors';
import { PlayState } from '@modules/coc/store/play/play.state';
import { getMode } from '@modules/coc/store/ui/ui.selectors';

@Component({
  selector: 'coc-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss'],
})
export class CocPlayComponent implements OnInit {
  mainText$ = this.store.select(getMainText);
  tooltipText$: Observable<string>;
  mode$ = this.store.select(getMode);

  constructor(private store: Store<PlayState>) {
    this.tooltipText$ = EMPTY;
  }

  ngOnInit(): void {}
}
