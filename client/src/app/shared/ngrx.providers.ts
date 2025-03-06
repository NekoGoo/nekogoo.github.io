import { isDevMode } from '@angular/core';
// import { provideEntityData, withEffects } from '@ngrx/data';
// import { provideEffects } from '@ngrx/effects';
import { provideState, provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';

// import { metaReducers, reducers } from './store/app.state';
import { counterFeature } from './store/counter.feature';
// import { entityConfig } from './store/entity-metadata';

export const ngrxProviders = [
  // --- NgRx State Management ---
  // provideStore(reducers, { metaReducers }),
  provideStore(), // Root store
  provideState(counterFeature),
  // --- NgRx DevTools (for debugging state changes) ---
  provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
  // --- NgRx Effects & Entity Data ---
  // provideEffects([]), // Add effects here if needed
  // provideEntityData(entityConfig, withEffects()),
];
