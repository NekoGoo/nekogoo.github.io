import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from '@core/app-routing.module';
// import { metaReducers, reducers } from '@core/store';
import { counterReducer } from '@core/store/counter/counter.reducer';
import { environment } from '@env';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

// Will contain singleton services
// https://thetombomb.com/posts/app-core-shared-feature-modules
// https://stackoverflow.com/questions/51408210/why-my-path-for-import-angular-core-is-different-to-online-tutorial
// https://www.pluralsight.com/guides/angular-module-declaring-components

// Only import [BrowserModule, BrowserAnimationsModule] once
// All other shared/feature modules will import [CommonModule]
// https://dev.to/sanketmaru/import-once-browser-module-1pie

@NgModule({
  declarations: [],
  imports: [
    AppRoutingModule,
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
  ],
  exports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    StoreModule,
  ],
})
export class CoreModule {}
