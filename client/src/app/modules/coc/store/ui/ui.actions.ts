import { createAction, props } from '@ngrx/store';

import { UiModeType, UiState } from '@modules/coc/interfaces/ui';
import { CocSidebarState } from '@modules/coc/interfaces/ui/coc-sidebar';

export const updateMode = createAction('[CoC UI] Update Display Mode');
export const createNewGame = createAction('[CoC UI] Create New Game');
export const loadGameMoment = createAction(
  '[CoC UI] Load Game Moment',
  //   props<{ loadGameMomentResponse: { momentId: number } }>(),
  props<UiState>(),
);
export const viewGameData = createAction('[CoC UI] View Game Data');

export const setMode = createAction(
  '[CoC UI] Update Mode',
  // props<{ mode: string }>(),
  props<{ mode: UiModeType }>(),
);

export const outputText = createAction(
  '[CoC UI] Output Main Text',
  props<{ maintext: string }>(),
);

export const setSidebar = createAction(
  '[CoC UI] Set Sidebar State',
  props<{ payload: CocSidebarState }>(),
);
