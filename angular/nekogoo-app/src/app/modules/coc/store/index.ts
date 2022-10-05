import { environment } from '@env';
import {
  ActionReducerMap,
  createFeatureSelector,
  MetaReducer,
} from '@ngrx/store';
import { templateReducer } from './templates/template.reducer';

import { CocState } from '../interfaces';
import { playReducer } from './play/play.reducer';
import { uiReducer } from './ui/ui.reducer';

// --- Store used for Selectors ---
// https://ultimatecourses.com/blog/ngrx-store-understanding-state-selectors
export const getCocState = createFeatureSelector<CocState>('coc');

// --- Reducers used in ReducerMap ---
export const reducers: ActionReducerMap<CocState> = {
  ui: uiReducer,
  playState: playReducer,
  templates: templateReducer,
};

// Old example of logging: https://github.com/ngrx/platform/blob/127ccc99663442ea1a902e459ae9fb1041fd7f80/example-app/app/reducers/index.ts
export const metaReducers: MetaReducer<CocState>[] = !environment.production
  ? []
  : [];
