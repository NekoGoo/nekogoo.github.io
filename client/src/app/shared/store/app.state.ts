import { isDevMode } from '@angular/core';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';

import { counterFeature, CounterState } from './counter.feature';

export interface AppState {
  counter: CounterState;
}

// Root reducer map (combining features)
export const reducers: ActionReducerMap<AppState> = {
  counter: counterFeature.reducer,
};

// MetaReducers (Optional)
export const metaReducers: MetaReducer<AppState>[] = isDevMode() ? [] : [];
