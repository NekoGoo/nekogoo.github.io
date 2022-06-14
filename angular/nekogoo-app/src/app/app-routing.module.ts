import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './pagenotfound.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  // {
  //   path: 'composer-list',
  //   component: ComposerListComponent,
  // },
  // {
  //   path: 'contact',
  //   component: ContactComponent,
  // },
  {
    path: 'about',
    component: AboutComponent,
    // loadChildren: () => import('./about/about.component').then((m) => m.AboutComponent),
  },
  // Wild Card Route for 404 request
  { path: '**', component: PageNotFoundComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
