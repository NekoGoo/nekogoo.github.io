import { createAction, props } from '@ngrx/store';

import { Template } from '@modules/coc/interfaces';
import { CocState } from '../play/coc.state';
import { TemplateTable } from './template.state';

export const loadTemplates = createAction('[CoC Template] Load Game Templates');
export const loadTemplatesSuccess = createAction(
  '[CoC Template] Load Game Templates Successful',
  props<CocState>(),
);
export const addTemplateSuccess = createAction(
  '[CoC Template] Add Game Template Successful',
  props<Template>(),
);

export const loadMainMenu = createAction('[CoC Template] Load Main Menu');
export const createNewGame = createAction('[CoC Template] Create New Game');
export const loadGameMoment = createAction(
  '[CoC Template] Load Game Moment',
  //   props<{ loadGameMomentResponse: { momentId: number } }>(),
  props<TemplateTable>(),
);
export const viewGameData = createAction('[CoC Template] View Game Data');

export const outputText = createAction(
  '[CoC Template] Output Main Text',
  props<{ maintext: string }>(),
);
