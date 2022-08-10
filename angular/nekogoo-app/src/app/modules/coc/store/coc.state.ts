import { PlayState } from './play/play.state';
import { UiState } from './ui/ui.state';

export interface CocState {
  ui: UiState;
  playState: PlayState;
}

// -------- Experimental --------

export interface MockCocState {
  ui: {
    mode: string;
    mainText?: string;
  };

  playState: {
    // --- Current Game State ---
    momentId: number;
    momentStep: number;
    player?: string;

    // --- UI ---
    mainText?: string;
  };
}
