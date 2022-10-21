import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EntityDataModule } from '@ngrx/data';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from '@env';
import { SharedModule } from '@shared/shared.module';
import { counterReducer } from '@shared/store/counter/counter.reducer';
// import { metaReducers, reducers } from '@shared/store';
import { entityConfig } from '@shared/store/entity-metadata';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Only import [BrowserModule, BrowserAnimationsModule] once
// All other shared/feature modules will import [CommonModule]
// https://dev.to/sanketmaru/import-once-browser-module-1pie

@NgModule({
  declarations: [AppComponent],
  imports: [
    // --- Core imports ---
    BrowserModule,
    BrowserAnimationsModule,
    // StoreModule.forRoot({}, {}),
    // StoreModule.forRoot(reducers, {
    //   metaReducers,
    // }),
    StoreModule.forRoot({ counter: counterReducer }),
    // Instrumentation must be imported after StoreModule (config is optional)
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    EffectsModule.forRoot([]),
    EntityDataModule.forRoot(entityConfig),
    // --- Routing imports ---
    AppRoutingModule,
    // --- Shared imports ---
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
