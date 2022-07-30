// import { CommonModule } from '@angular/common';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { BaseLayoutComponent } from '@shared/components/base-layout/base-layout.component';
import { FooterComponent } from '@shared/components/base-layout/footer/footer.component';
import { GooModalHeaderComponent } from '@shared/components/base-layout/goo-modal-header/goo-modal-header.component';
import { GooPillComponent } from '@shared/components/base-layout/goo-pill/goo-pill.component';
import { HeaderComponent } from '@shared/components/base-layout/header/header.component';
import { HomeComponent } from '@shared/components/home/home.component';
import { NotFoundComponent } from '@shared/components/not-found/not-found.component';
import { MaterialModule } from '@shared/material.module';

@NgModule({
  declarations: [
    NotFoundComponent,
    BaseLayoutComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    GooModalHeaderComponent,
    GooPillComponent,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    // Components
    NotFoundComponent,
    BaseLayoutComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    GooModalHeaderComponent,
    GooPillComponent,
  ],
})
export class SharedModule {}
