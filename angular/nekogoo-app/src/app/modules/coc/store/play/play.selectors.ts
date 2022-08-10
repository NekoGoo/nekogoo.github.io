import { createSelector } from '@ngrx/store';
import { CocState } from '../coc.state';
import { getCocState } from '../index';
import { PlayState } from './play.state';

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

// export const getMomentId = (state: PlayState) => state.momentId;
// export const getMomentStep = (state: PlayState) => state.momentStep;
// export const getMainText = (state: PlayState) => state.mainText;

// export const getPlayState = (state: CocState) => state.playState;

export const getPlayState = createSelector(
  getCocState,
  (state: CocState) => state.playState,
);

export const getMomentId = createSelector(
  getPlayState,
  (state: PlayState) => state.momentId,
);

export const getMomentStep = createSelector(
  getPlayState,
  (state: PlayState) => state.momentStep,
);

export const getMainText = createSelector(
  getPlayState,
  (state: PlayState) => state.mainText,
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
