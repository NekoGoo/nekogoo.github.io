import { createAction, props } from '@ngrx/store';

import { CocState } from '../play/coc.state';
import { TagTable } from './tag.state';

export const loadTags = createAction('[CoC Tag] Load Game Tags');
export const loadTagsSuccess = createAction(
  '[CoC Tag] Load Game Tags Successful',
  props<CocState>(),
);
export const addTagSuccess = createAction(
  '[CoC Tag] Add Game Tag Successful',
  // props<Tag>(),
  props<TagTable>(),
);

export const loadMainMenu = createAction('[CoC Tag] Load Main Menu');
export const createNewGame = createAction('[CoC Tag] Create New Game');
export const loadGameMoment = createAction(
  '[CoC Tag] Load Game Moment',
  //   props<{ loadGameMomentResponse: { momentId: number } }>(),
  props<TagTable>(),
);
export const viewGameData = createAction('[CoC Tag] View Game Data');

export const outputText = createAction(
  '[CoC Tag] Output Main Text',
  props<{ maintext: string }>(),
);
