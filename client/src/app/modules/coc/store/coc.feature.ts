import {
  createActionGroup,
  createFeature,
  createReducer,
  emptyProps,
  on,
  props,
} from '@ngrx/store';

import { SaveState, UiState } from '../interfaces';
import {
  TemplateTable,
  initialState as templateInitialState,
} from './templates/template.state';

// --- Define State ---
// Game Context (main)
export interface CocState {
  ui: UiState;
  // profile: ProfileState;
  // saveSlots: SaveStateTable;
  templates: TemplateTable;

  // ------------------------
  playState: SaveState;
}

// --- Initial State ---
const initialState: CocState = {
  ui: {
    mode: 'initial',
    headButtons: [],
    footButtons: [],
    sidebar: null,
  },
  templates: templateInitialState,
  playState: {
    momentId: 0,
    momentStep: 0,
  },
};

// --- Define Actions ---
export const CocActions = createActionGroup({
  source: 'CoC',
  events: {
    StartGame: emptyProps(),
    LoadGame: props<{ saveState: SaveState }>(),
    ChangeScene: props<{ sceneId: string }>(),
    // PickUpItem: props<{ item: string }>(),
    // TakeDamage: props<{ amount: number }>(),
    // Heal: props<{ amount: number }>(),
    ResetGame: emptyProps(),
  },
});

// --- Create Reducer ---
const cocReducer = createReducer(
  initialState,

  on(CocActions.startGame, (state) => ({
    ...state,
    playState: {
      momentId: 1,
      momentStep: 0,
    },
  })),

  on(CocActions.loadGame, (state, { saveState }) => ({
    ...state,
    playState: saveState,
  })),

  on(CocActions.changeScene, (state, { sceneId }) => ({
    ...state,
    currentScene: sceneId,
  })),

  // on(CocActions.pickUpItem, (state, { item }) => ({
  //   ...state,
  //   inventory: [...state.inventory, item], // Add item to inventory
  // })),

  // on(CocActions.takeDamage, (state, { amount }) => ({
  //   ...state,
  //   health: Math.max(state.health - amount, 0), // Prevent negative health
  // })),

  // on(CocActions.heal, (state, { amount }) => ({
  //   ...state,
  //   health: Math.min(state.health + amount, 100), // Cap health at 100
  // })),

  on(CocActions.resetGame, () => initialState), // Reset to initial state
);

// --- Create Feature (for store) ---
export const cocFeature = createFeature({
  name: 'coc',
  reducer: cocReducer,
});
