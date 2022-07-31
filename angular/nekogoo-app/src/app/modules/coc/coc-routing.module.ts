import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CocComponent } from './coc.component';
import { CocLayoutComponent } from './components/coc-layout/coc-layout.component';
import { CocPlayComponent } from './components/play/play.component';
import { CocProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  {
    path: '',
    component: CocComponent,
  },
  {
    path: 'profile',
    component: CocProfileComponent,
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CocRoutingModule {}
