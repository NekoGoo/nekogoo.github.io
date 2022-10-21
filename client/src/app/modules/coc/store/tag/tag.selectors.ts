import { createSelector } from '@ngrx/store';

import { getCocState } from '../index';
import { CocState } from '../play/coc.state';
import { TagTable, templateAdapter } from './tag.state';

export const { selectAll, selectEntities, selectIds, selectTotal } =
  templateAdapter.getSelectors();

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

// export const getMomentId = (state: TagTable) => state.momentId;
// export const getMomentStep = (state: TagTable) => state.momentStep;
// export const getMainText = (state: TagTable) => state.mainText;

// export const getTagTable = (state: CocState) => state.playState;

export const getTagTable = createSelector(
  getCocState,
  (state: CocState) => state.templates,
);

export const getSaveSlots = createSelector(
  getTagTable,
  (state: TagTable) => state.entities,
);

// export const getMomentStep = createSelector(
//   getTagTable,
//   (state: TagTable) => state.momentStep,
// );

// export const getMainText = createSelector(
//   getTagTable,
//   (state: TagTable) => state.mainText,
// );

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
