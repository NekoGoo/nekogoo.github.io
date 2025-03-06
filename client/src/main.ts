import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import {
  PreloadAllModules,
  provideRouter,
  withPreloading,
} from '@angular/router';

import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { ngrxProviders } from './app/shared/ngrx.providers';

bootstrapApplication(AppComponent, {
  providers: [
    // Core Angular & Animations
    provideHttpClient(withInterceptorsFromDi()),
    provideAnimations(),
    // Angular Router with Preloading
    provideRouter(routes, withPreloading(PreloadAllModules)),
    // Data Store
    ...ngrxProviders,
  ],
}).catch((err) => console.error(err));
