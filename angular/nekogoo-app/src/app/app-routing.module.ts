import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { BaseLayoutComponent } from '@shared/components/base-layout/base-layout.component';
import { NotFoundComponent } from '@shared/components/not-found/not-found.component';
import { HomeComponent } from '@shared/pages/home/home.component';
import { RoadmapComponent } from '@shared/pages/roadmap/roadmap.component';

const routes: Routes = [
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
          import('./modules/about/about.module').then((m) => m.AboutModule),
      },
      {
        path: 'demo',
        loadChildren: () =>
          import('./modules/demo/demo.module').then((m) => m.DemoModule),
      },
      {
        path: 'coc',
        loadChildren: () =>
          import('./modules/coc/coc.module').then((m) => m.CocModule),
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

@NgModule({
  // imports: [RouterModule.forRoot(routes)],
  imports: [
    RouterModule.forRoot(routes, {
      paramsInheritanceStrategy: 'always',
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
