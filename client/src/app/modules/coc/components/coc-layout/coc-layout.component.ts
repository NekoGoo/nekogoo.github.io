import { AfterViewInit, Component, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';

import { Attribute, Effect, SaveState, Tag } from '@modules/coc/interfaces';
import {
  AttributeService,
  EffectService,
  TagService,
} from '@modules/coc/services';
import {
  createNewGame,
  loadGameMoment,
  loadMainMenu,
  outputText,
} from '@modules/coc/store/play/play.actions';
import { getMode } from '@modules/coc/store/ui/ui.selectors';
import { CocFooterComponent } from './footer/footer.component';
import { CocHeaderComponent } from './header/header.component';
import { CocSidebarComponent } from './sidebar/sidebar.component';

@Component({
  selector: 'coc-layout',
  templateUrl: './coc-layout.component.html',
  styleUrls: ['./coc-layout.component.css'],
  // TODO: remove below line when styles no longer need to be global to work
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [
    RouterOutlet,
    CocHeaderComponent,
    CocSidebarComponent,
    CocFooterComponent,
  ],
})
// export class CocLayoutComponent implements OnInit {
export class CocLayoutComponent implements AfterViewInit {
  mode$ = this.store.select(getMode);
  attributes: Attribute[] = this.attributeService.data;
  effects: Effect[] = this.effectService.data;
  tags: Tag[] = this.tagService.data;

  constructor(
    private store: Store<SaveState>,
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
    const newState: SaveState = {
      momentId: 1,
      momentStep: 1,
    };
    console.log('newState: ', newState);
    this.store.dispatch(loadGameMoment(newState));
  }
}
