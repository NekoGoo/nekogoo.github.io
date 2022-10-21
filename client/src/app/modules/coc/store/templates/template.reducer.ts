import { createReducer, on } from '@ngrx/store';

import * as TemplateActionTypes from './template.actions';
// import { initialState, templateAdapter } from './template.state';
import { initialState } from './template.state';

export const templateReducer = createReducer(
  initialState,
  on(TemplateActionTypes.loadTemplates, (state, action) => ({
    ...state,
    loading: true,
  })),
  // on(TemplateActionTypes.loadTemplatesSuccess, (state, { templates }) =>
  //   templateAdapter.setAll(templates, { ...state, loading: false }),
  // ),
  // on(TemplateActionTypes.addTemplateSuccess, (state, { template }) =>
  //   templateAdapter.addOne(template, state),
  // ),
);
