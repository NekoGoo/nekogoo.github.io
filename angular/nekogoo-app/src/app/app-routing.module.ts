import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '@core/components/not-found/not-found.component';
import { HomeComponent } from './core/components/home/home.component';
import { BaseLayoutComponent } from './layouts/base-layout/base-layout.component';

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
        path: 'coc',
        loadChildren: () =>
          import('./modules/coc/coc.module').then((m) => m.CocModule),
      },
      {
        path: 'demo',
        loadChildren: () =>
          import('./modules/demo/demo.module').then((m) => m.DemoModule),
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
