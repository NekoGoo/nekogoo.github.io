import { createReducer, on } from '@ngrx/store';
import * as TagActionTypes from './tag.actions';
import { initialState, tagAdapter } from './tag.state';

export const tagReducer = createReducer(
  initialState,
  on(TagActionTypes.loadTags, (state, action) => ({
    ...state,
    loading: true,
  })),
  on(TagActionTypes.loadTagsSuccess, (state, { tags }) =>
    tagAdapter.setAll(tags, { ...state, loading: false }),
  ),
  on(TagActionTypes.addTagSuccess, (state, { tag }) =>
    tagAdapter.addOne(tag, state),
  ),
);
