import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AboutComponent } from './modules/home/components/about/about.component';
// import { HomeComponent } from './modules/home/components/home/home.component';
import { PageNotFoundComponent } from './pagenotfound.component';

const routes: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  // {
  //   path: 'home',
  //   loadChildren: () =>
  //     import('./modules/home/home.module').then((m) => m.HomeModule),
  //   data: { showSidebar: false },
  // },
  {
    path: '',
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule),
    data: { showSidebar: false },
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./modules/about/about.module').then((m) => m.AboutModule),
    data: { showSidebar: false },
  },
  {
    path: 'coc',
    loadChildren: () =>
      import('./modules/coc/coc.module').then((m) => m.CocModule),
    data: { header: 'coc' },
  },
  // Wild card route for 404 requests
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  // imports: [RouterModule.forRoot(routes)],
  imports: [RouterModule.forRoot([]), RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
