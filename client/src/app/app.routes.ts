import { Routes } from '@angular/router';

import { BaseLayoutComponent } from '@shared/components/base-layout/base-layout.component';
import { NotFoundComponent } from '@shared/components/not-found/not-found.component';
import { HomeComponent } from '@shared/pages/home/home.component';
import { RoadmapComponent } from '@shared/pages/roadmap/roadmap.component';

export const routes: Routes = [
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: '',
    component: BaseLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'about',
        loadChildren: () =>
          import('./modules/about/about.routes').then((m) => m.aboutRoutes),
      },
      {
        path: 'demo',
        loadChildren: () =>
          import('./modules/demo/demo.routes').then((m) => m.demoRoutes),
      },
      {
        path: 'coc',
        loadChildren: () =>
          import('./modules/coc/coc.routes').then((m) => m.cocRoutes),
      },
      {
        path: 'roadmap',
        component: RoadmapComponent,
      },
    ],
  },
  // Wild card route for 404 requests
  { path: '**', component: NotFoundComponent },
];
