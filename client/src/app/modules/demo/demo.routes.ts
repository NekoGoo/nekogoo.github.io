import { Routes } from '@angular/router';

import { CounterComponent } from './counter/counter.component';
import { FontComponent } from './font/font.component';

export const demoRoutes: Routes = [
  {
    path: '',
    children: [
      // { path: '', redirectTo: 'font', pathMatch: 'full' },
      { path: '', redirectTo: 'ngrx', pathMatch: 'full' },
      {
        path: 'font',
        component: FontComponent,
      },
      {
        path: 'ngrx',
        component: CounterComponent,
      },
    ],
  },
];
