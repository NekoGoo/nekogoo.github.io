import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CocComponent } from './coc.component';
import { CocLayoutComponent } from './components/coc-layout/coc-layout.component';
import { CocNavLayoutComponent } from './components/coc-nav-layout/coc-nav-layout.component';

import { AttributesInfoComponent } from './pages/info/engine-parts/attributes/attributes.component';
import { EffectsInfoComponent } from './pages/info/engine-parts/effects/effects.component';
import { TagsInfoComponent } from './pages/info/engine-parts/tags/tags.component';
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
      {
        path: 'info/attributes',
        component: AttributesInfoComponent,
      },
      {
        path: 'info/effects',
        component: EffectsInfoComponent,
      },
      {
        path: 'info/tags',
        component: TagsInfoComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CocRoutingModule {}
