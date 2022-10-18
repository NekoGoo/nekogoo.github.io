import { NgModule } from '@angular/core';
import { EntityDefinitionService } from '@ngrx/data';
import { StoreModule } from '@ngrx/store';

import { SharedModule } from '@shared/shared.module';
import { CocRoutingModule } from './coc-routing.module';
import { CocComponent } from './coc.component';
import { CocButtonComponent } from './components/coc-layout/coc-button/coc-button.component';
import { CocLayoutComponent } from './components/coc-layout/coc-layout.component';
import { CocStatFrameComponent } from './components/coc-layout/coc-stat-frame/coc-stat-frame.component';
import { CocFooterComponent } from './components/coc-layout/footer/footer.component';
import { CocHeaderComponent } from './components/coc-layout/header/header.component';
import { CocSidebarComponent } from './components/coc-layout/sidebar/sidebar.component';
import { CocNavLayoutComponent } from './components/coc-nav-layout/coc-nav-layout.component';
import { metaReducers, reducers } from './store';
import { entityMetadata } from './store/entity-metadata';

import { AttributesInfoComponent } from './pages/info/engine-parts/attributes/attributes.component';
import { EffectsInfoComponent } from './pages/info/engine-parts/effects/effects.component';
import { TagsInfoComponent } from './pages/info/engine-parts/tags/tags.component';
import { CocRoadmapComponent } from './pages/info/roadmap/roadmap.component';
import { CocPlayComponent } from './pages/play/play.component';
import { CocProfileComponent } from './pages/profile/profile.component';

// https://www.npmjs.com/package/ngx-cookie-service
// https://www.optizent.com/blog/cookies-vs-javascript-local-storage-vs-session-storage-difference-and-uses

@NgModule({
  declarations: [
    CocComponent,
    CocLayoutComponent,
    CocHeaderComponent,
    CocSidebarComponent,
    CocFooterComponent,
    CocPlayComponent,
    CocProfileComponent,
    CocButtonComponent,
    CocStatFrameComponent,
    CocNavLayoutComponent,
    CocRoadmapComponent,
    TagsInfoComponent,
    AttributesInfoComponent,
    EffectsInfoComponent,
  ],
  imports: [
    CocRoutingModule,
    SharedModule,
    StoreModule.forFeature('coc', reducers, {
      metaReducers,
    }),
    // EffectsModule.forFeature([]),
  ],
})
export class CocModule {
  constructor(eds: EntityDefinitionService) {
    // Lazy loading NgRx Data (instead of EntityDataModule.forRoot)
    // https://ngrx.io/guide/data/entity-metadata#register-metadata
    eds.registerMetadataMap(entityMetadata);
  }
}
