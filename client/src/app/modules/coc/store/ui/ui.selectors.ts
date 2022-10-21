import { UiState } from '@modules/coc/interfaces/ui';
import { createSelector } from '@ngrx/store';
import { getCocState } from '../index';
import { CocState } from '../play/coc.state';

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
