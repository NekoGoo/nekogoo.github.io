import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Tag } from '../../interfaces';

export interface TagTable extends EntityState<Tag> {}

// --- Adapters ---

// function sortBySeqNo(e1: Moment, e2: Moment) {
//   return e1.seqNo - e2.seqNo;
// }
export function sortByTitle(a: Tag, b: Tag): number {
  return a.title.localeCompare(b.title);
}

export const templateAdapter: EntityAdapter<Tag> = createEntityAdapter<Tag>({
  sortComparer: sortByTitle,
});

export const initialState: TagTable = templateAdapter.getInitialState({
  loading: false,
});
