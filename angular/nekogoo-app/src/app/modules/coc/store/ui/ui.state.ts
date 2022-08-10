import { CocButton } from '../models/mechanisms/coc-button';
import { CocSidebarState } from '../models/mechanisms/coc-sidebar';

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
  // readonly mode: string; // UiModeType
  readonly mode: UiModeType;

  readonly headButtons: CocButton[];
  readonly footButtons: CocButton[];
  readonly sidebar: CocSidebarState | null;
}
