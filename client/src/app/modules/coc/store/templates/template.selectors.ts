import { createSelector } from '@ngrx/store';

import { CocState, TemplateTable } from '@modules/coc/interfaces';
import { getCocState } from '../index';
import { templateAdapter } from './template.state';

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

// export const getMomentId = (state: TemplateTable) => state.momentId;
// export const getMomentStep = (state: TemplateTable) => state.momentStep;
// export const getMainText = (state: TemplateTable) => state.mainText;

// export const getTemplateTable = (state: CocState) => state.playState;

export const getTemplateTable = createSelector(
  getCocState,
  (state: CocState) => state.templates,
);

export const getSaveSlots = createSelector(
  getTemplateTable,
  (state: TemplateTable) => state.entities,
);

export const getMomentStep = createSelector(
  getTemplateTable,
  (state: TemplateTable) => state.momentStep,
);

export const getMainText = createSelector(
  getTemplateTable,
  (state: TemplateTable) => state.mainText,
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
