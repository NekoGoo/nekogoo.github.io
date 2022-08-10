import { createAction, props } from '@ngrx/store';
import { PlayState } from './play.state';

export const loadMainMenu = createAction('[CoC Play] Load Main Menu');
export const createNewGame = createAction('[CoC Play] Create New Game');
export const loadGameMoment = createAction(
  '[CoC Play] Load Game Moment',
  //   props<{ loadGameMomentResponse: { momentId: number } }>(),
  props<PlayState>(),
);
export const viewGameData = createAction('[CoC Play] View Game Data');

export const outputText = createAction(
  '[CoC Play] Output Main Text',
  props<{ maintext: string }>(),
);
