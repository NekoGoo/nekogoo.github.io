import { CocButton } from './coc-button';
import { CocSidebarState } from './coc-sidebar';

export enum UiModeType {
  Initial = 'initial',
  // --- CoC Header ---
  MainMenu = 'main-menu',
  NewGame = 'new-game',
  Moment = 'moment',
  Data = 'data',
  LevelUp = 'level-up',
  Stats = 'stats',
  Perks = 'perks',
  Appearance = 'appearance',
  // --- CoC Footer ---
  Credits = 'credits',
  Instructions = 'instructions',
  DebugInfo = 'debug-info',
  Settings = 'settings',
}

export interface UiState {
  // mode: string; // UiModeType
  mode: UiModeType;
  mainText?: string;

  headButtons: CocButton[];
  footButtons: CocButton[];
  sidebar: CocSidebarState | null;
}
