import { enableProdMode, importProvidersFrom } from '@angular/core';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { EntityDataModule } from '@ngrx/data';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { SharedModule } from '@shared/shared.module';
import { counterReducer } from '@shared/store/counter/counter.reducer';
import { entityConfig } from '@shared/store/entity-metadata';
import { AppRoutingModule } from './app/app-routing.module';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      // --- Core imports ---
      BrowserModule,
      // StoreModule.forRoot({}, {}),
      // StoreModule.forRoot(reducers, {
      //   metaReducers,
      // }),
      StoreModule.forRoot({ counter: counterReducer }),
      // Instrumentation must be imported after StoreModule (config is optional)
      StoreDevtoolsModule.instrument({
        maxAge: 25, // Retains last 25 states
        logOnly: environment.production, // Restrict extension to log-only mode
        connectInZone: true,
      }),
      EffectsModule.forRoot([]),
      EntityDataModule.forRoot(entityConfig),
      // --- Routing imports ---
      AppRoutingModule,
      // --- Shared imports ---
      SharedModule,
    ),
    provideAnimations(),
  ],
}).catch((err) => console.error(err));
