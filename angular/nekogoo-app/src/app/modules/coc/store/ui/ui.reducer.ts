import { createReducer, on } from '@ngrx/store';
import * as PlayActionTypes from './ui.actions';
import { UiModeType, UiState } from './ui.state';

export const initialState: UiState = {
  // mode: 'main-menu',
  mode: UiModeType.Initial,
  headButtons: [],
  footButtons: [],
  sidebar: null,
};

// action props coming in must match interface properties
export const uiReducer = createReducer(
  initialState,
  on(PlayActionTypes.setMode, (state, action) => ({
    ...state,
    mode: action.mode,
  })),
  on(PlayActionTypes.outputText, (state, action) => ({
    ...state,
    mainText: action.maintext,
  })),
  on(PlayActionTypes.setSidebar, (state, action) => ({
    ...state,
    sidebar: action.payload,
  })),

  // on(PlayActionTypes.loadMainMenu, (state) => state - 1),
  // on(PlayActionTypes.createNewGame, (state) => state - 1),
  // on(PlayActionTypes.loadGameMoment, (state, { loadGameMomentResponse }) => ({
  //   ...state,
  //   momentId: loadGameMomentResponse.momentId,
  // })),
  on(PlayActionTypes.loadGameMoment, (state, action) => ({
    ...state,
    // momentId: action.momentId,
    // momentStep: action.momentStep,
    momentId: 1,
    momentStep: 1,
  })),
  // on(PlayActionTypes.viewGameData, (state) => 0),
);
