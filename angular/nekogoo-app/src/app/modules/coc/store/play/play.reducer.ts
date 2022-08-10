import { createReducer, on } from '@ngrx/store';
import * as PlayActionTypes from './play.actions';
import { PlayState } from './play.state';

export const initialState: PlayState = {
  momentId: 0,
  momentStep: 0,
  mainText:
    "The game is loading. Please be patient. If it doesn't load, make sure JavaScript is enabled then refresh.",
};

export const playReducer = createReducer(
  initialState,
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
  on(PlayActionTypes.outputText, (state, action) => ({
    ...state,
    mainText: action.maintext,
  })),
);
