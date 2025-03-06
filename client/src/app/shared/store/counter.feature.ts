import {
  createActionGroup,
  createFeature,
  createReducer,
  emptyProps,
  on,
  props,
} from '@ngrx/store';

// Define state
export interface CounterState {
  count: number;
}

// Define initial state
const initialState: CounterState = { count: 0 };

// Define action group
export const CounterActions = createActionGroup({
  source: 'Counter',
  events: {
    Increment: emptyProps(),
    Decrement: emptyProps(),
    Reset: emptyProps(),
    SetCount: props<{ value: number }>(),
  },
});

// Create reducer
const counterReducer = createReducer(
  initialState,
  on(CounterActions.increment, (state) => ({ count: state.count + 1 })),
  on(CounterActions.decrement, (state) => ({ count: state.count - 1 })),
  on(CounterActions.reset, () => initialState),
  on(CounterActions.setCount, (state, { value }) => ({ count: value })),
);

// Create feature (for root store)
export const counterFeature = createFeature({
  name: 'counter',
  reducer: counterReducer,
});
