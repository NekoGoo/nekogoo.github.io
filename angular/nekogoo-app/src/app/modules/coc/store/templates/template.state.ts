import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

import { Template } from '@modules/coc/interfaces';

export interface TemplateTable extends EntityState<Template> {}

// --- Adapters ---

export function sortByTitle(a: Template, b: Template): number {
  return a.title.localeCompare(b.title);
}

export const templateAdapter: EntityAdapter<Template> =
  createEntityAdapter<Template>({
    sortComparer: sortByTitle,
  });

export const initialState: TemplateTable = templateAdapter.getInitialState({
  loading: false,
});
