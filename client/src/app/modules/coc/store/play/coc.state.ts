import { SaveState, UiState } from '../../interfaces';
import { TemplateTable } from '../templates/template.state';

// --- Game Context (main) ---
export interface CocState {
  ui: UiState;
  // profile: ProfileState;
  // saveSlots: SaveStateTable;
  templates: TemplateTable;

  // ------------------------
  playState: SaveState;
}
