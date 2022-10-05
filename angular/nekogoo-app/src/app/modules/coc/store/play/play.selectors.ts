import { SaveState } from '@modules/coc/interfaces';
import { createSelector } from '@ngrx/store';
import { getCocState } from '../index';
import { CocState } from './coc.state';

// export interface FeatureState {
//   counter: number;
// }

// export interface AppState {
//   feature: FeatureState;
// }

// export const selectFeature = (state: AppState) => state.feature;

// export const selectFeatureCount = createSelector(
//   selectFeature,
//   (state: FeatureState) => state.counter,
// );

// export const getMomentId = (state: SaveState) => state.momentId;
// export const getMomentStep = (state: SaveState) => state.momentStep;
// export const getMainText = (state: SaveState) => state.mainText;

// export const getSaveState = (state: CocState) => state.playState;

export const getSaveState = createSelector(
  getCocState,
  (state: CocState) => state.playState,
);

export const getMomentId = createSelector(
  getSaveState,
  (state: SaveState) => state.momentId,
);

export const getMomentStep = createSelector(
  getSaveState,
  (state: SaveState) => state.momentStep,
);

export const getMainText = createSelector(
  getSaveState,
  (state: SaveState) => state.mainText,
);

// -------- Other --------

export interface FeatureState {
  counter: number;
}

export interface AppState {
  feature: FeatureState;
}

export const selectFeature = (state: AppState) => state.feature;

export const selectFeatureCount = createSelector(
  selectFeature,
  (state: FeatureState) => state.counter,
);
