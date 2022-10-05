import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';

import { Template, TemplateTable } from '@modules/coc/interfaces';

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
