// import {
//   ActionReducer,
//   ActionReducerMap,
//   createFeatureSelector,
//   createSelector,
//   MetaReducer
// } from '@ngrx/store';
// import { environment } from '../../../../environments/environment';

import { environment } from '@env';
import {
  ActionReducerMap,
  createFeatureSelector,
  MetaReducer,
} from '@ngrx/store';

import { CocState } from './coc.state';
import { playReducer } from './play/play.reducer';
import { uiReducer } from './ui/ui.reducer';

// https://ultimatecourses.com/blog/ngrx-store-understanding-state-selectors
export const getCocState = createFeatureSelector<CocState>('coc');

export const reducers: ActionReducerMap<CocState> = {
  ui: uiReducer,
  playState: playReducer,
};

// Old example of logging: https://github.com/ngrx/platform/blob/127ccc99663442ea1a902e459ae9fb1041fd7f80/example-app/app/reducers/index.ts
export const metaReducers: MetaReducer<CocState>[] = !environment.production
  ? []
  : [];
