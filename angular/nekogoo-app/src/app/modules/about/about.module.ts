import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
// import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from '@shared/shared.module';
// import { GooModalHeaderComponent } from 'src/app/layouts/base-layout/goo-modal-header/goo-modal-header.component';
// import { GooPillComponent } from 'src/app/layouts/base-layout/goo-pill/goo-pill.component';
// import { MaterialModule } from '../../shared/material.module';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { ModalAppearanceComponent } from './components/modal-appearance/modal-appearance.component';
import { ModalPersonalityComponent } from './components/modal-personality/modal-personality.component';
import { ModalSpecialComponent } from './components/modal-special/modal-special.component';

@NgModule({
  declarations: [
    AboutComponent,
    ModalAppearanceComponent,
    ModalPersonalityComponent,
    ModalSpecialComponent,
    // GooModalHeaderComponent,
    // GooPillComponent,
  ],
  // imports: [CommonModule, AboutRoutingModule, FlexLayoutModule, MaterialModule],
  imports: [CommonModule, AboutRoutingModule, SharedModule],
})
export class AboutModule {}
