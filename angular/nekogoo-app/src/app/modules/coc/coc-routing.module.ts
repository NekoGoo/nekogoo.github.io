import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CocComponent } from './coc.component';
import { CocLayoutComponent } from './components/coc-layout/coc-layout.component';
import { CocPlayComponent } from './components/play/play.component';
import { CocProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: '',
    component: CocComponent,
  },
  {
    path: 'play',
    component: CocLayoutComponent,
    children: [
      {
        path: '',
        component: CocPlayComponent,
      },
    ],
  },
  {
    path: 'profile',
    component: CocProfileComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CocRoutingModule {}
