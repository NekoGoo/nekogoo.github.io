import { SaveState } from './save.state';
import { TemplateTable } from './template';
import { UiState } from './ui';

// --- Game Context (main) ---
export interface CocState {
  ui: UiState;
  // profile: ProfileState;
  // saveSlots: SaveStateTable;
  templates: TemplateTable;

  // ------------------------
  playState: SaveState;
}
