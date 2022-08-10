import { createSelector } from '@ngrx/store';
import { CocState } from '../coc.state';
import { getCocState } from '../index';
import { UiState } from './ui.state';

// -------- Table / Feature Slice --------

export const getUiState = createSelector(
  getCocState,
  (state: CocState) => state.ui,
);

// -------- Properties --------

export const getMode = createSelector(
  getUiState,
  (state: UiState) => state.mode,
);

export const getSidebarState = createSelector(
  getUiState,
  (state: UiState) => state.sidebar,
);
