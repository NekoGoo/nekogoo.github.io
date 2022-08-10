import { AfterViewInit, Component, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';

import {
  AttributeService,
  EffectService,
  TagService,
} from '@modules/coc/services';
import { Attribute, Effect, Tag } from '@modules/coc/store/models';
import {
  createNewGame,
  loadGameMoment,
  loadMainMenu,
  outputText,
} from '@modules/coc/store/play/play.actions';
import { PlayState } from '@modules/coc/store/play/play.state';
import { getMode } from '@modules/coc/store/ui/ui.selectors';

@Component({
  selector: 'coc-layout',
  templateUrl: './coc-layout.component.html',
  styleUrls: ['./coc-layout.component.scss'],
  // TODO: remove below line when styles no longer need to be global to work
  encapsulation: ViewEncapsulation.None,
})
// export class CocLayoutComponent implements OnInit {
export class CocLayoutComponent implements AfterViewInit {
  mode$ = this.store.select(getMode);
  attributes: Attribute[] = this.attributeService.data;
  effects: Effect[] = this.effectService.data;
  tags: Tag[] = this.tagService.data;

  constructor(
    private store: Store<PlayState>,
    private attributeService: AttributeService,
    private effectService: EffectService,
    private tagService: TagService,
  ) {
    // this.attributes = seedAttribute();
    // this.attributes = this.attributeService.data;
    console.log('attributes: ', this.attributes.length);
    console.log('effects: ', this.effects.length);
    console.log('tags: ', this.tags.length);
  }

  // ngOnInit(): void {}

  ngAfterViewInit() {
    console.log('works');

    setTimeout(() => {
      // this.setMode();
      this.setDefaultText();
    }, 1500);
  }

  setMode() {
    // console.log('UI Mode: ', this.mode$);
    this.mode$.subscribe((res) => console.log('UI Mode: ', res));
  }

  setDefaultText() {
    const defaultText = 'The game has successfully loaded.';
    this.store.dispatch(outputText({ maintext: defaultText }));
  }

  loadMainMenu() {
    this.store.dispatch(loadMainMenu());
  }

  createNewGame() {
    this.store.dispatch(createNewGame());
  }

  loadGameMoment() {
    console.log('loadGameMoment');
    const newState: PlayState = {
      momentId: 1,
      momentStep: 1,
    };
    console.log('newState: ', newState);
    this.store.dispatch(loadGameMoment(newState));
  }
}
