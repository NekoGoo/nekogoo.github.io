import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CocComponent } from './coc.component';
import { CocLayoutComponent } from './components/coc-layout/coc-layout.component';
import { CocNavLayoutComponent } from './components/coc-nav-layout/coc-nav-layout.component';
import { CocRoadmapComponent } from './pages/info/roadmap/roadmap.component';
import { CocPlayComponent } from './pages/play/play.component';
import { CocProfileComponent } from './pages/profile/profile.component';

const routes: Routes = [
  {
    path: '',
    component: CocNavLayoutComponent,
    children: [
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
      {
        path: 'info/roadmap',
        component: CocRoadmapComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CocRoutingModule {}
