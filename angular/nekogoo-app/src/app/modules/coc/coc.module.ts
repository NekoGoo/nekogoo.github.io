import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '@shared/shared.module';
import { metaReducers, reducers } from './store';

import { CocRoutingModule } from './coc-routing.module';
import { CocComponent } from './coc.component';
import { CocButtonComponent } from './components/coc-layout/coc-button/coc-button.component';
import { CocLayoutComponent } from './components/coc-layout/coc-layout.component';
import { CocStatFrameComponent } from './components/coc-layout/coc-stat-frame/coc-stat-frame.component';
import { CocFooterComponent } from './components/coc-layout/footer/footer.component';
import { CocHeaderComponent } from './components/coc-layout/header/header.component';
import { CocSidebarComponent } from './components/coc-layout/sidebar/sidebar.component';
import { CocPlayComponent } from './components/play/play.component';
import { CocProfileComponent } from './components/profile/profile.component';
import { CocNavLayoutComponent } from './components/coc-nav-layout/coc-nav-layout.component';

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
  ],
  imports: [
    SharedModule,
    StoreModule.forFeature('coc', reducers, {
      metaReducers,
    }),
    CocRoutingModule,
  ],
})
export class CocModule {}
