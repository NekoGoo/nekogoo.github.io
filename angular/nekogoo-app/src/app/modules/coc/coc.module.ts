import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

import { CocRoutingModule } from './coc-routing.module';
import { CocComponent } from './coc.component';
import { CocLayoutComponent } from './components/coc-layout/coc-layout.component';
import { CocFooterComponent } from './components/coc-layout/footer/footer.component';
import { CocHeaderComponent } from './components/coc-layout/header/header.component';
import { CocMainStageComponent } from './components/coc-layout/main-stage/main-stage.component';
import { CocSidebarComponent } from './components/coc-layout/sidebar/sidebar.component';
import { CocPlayComponent } from './components/play/play.component';
import { CocProfileComponent } from './components/profile/profile.component';

@NgModule({
  declarations: [
    CocComponent,
    CocLayoutComponent,
    CocHeaderComponent,
    CocSidebarComponent,
    CocMainStageComponent,
    CocFooterComponent,
    CocPlayComponent,
    CocProfileComponent,
  ],
  imports: [CocRoutingModule, SharedModule],
})
export class CocModule {}
