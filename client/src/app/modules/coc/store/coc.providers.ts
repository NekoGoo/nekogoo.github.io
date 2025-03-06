import { provideState } from '@ngrx/store';
// import { provideEffects } from '@ngrx/effects';

import { cocFeature } from './coc.feature';

// --- NgRx Providers for Feature Store ---
export const cocStoreProviders = [
  // --- NgRx State Management ---
  provideState(cocFeature),
  // --- NgRx Effects & Entity Data ---
  // provideEffects([]), // Add feature effects if needed
];
