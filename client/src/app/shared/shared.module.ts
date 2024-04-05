import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
// import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { BaseLayoutComponent } from './components/base-layout/base-layout.component';
import { FooterComponent } from './components/base-layout/footer/footer.component';
import { GooModalHeaderComponent } from './components/base-layout/goo-modal-header/goo-modal-header.component';
import { GooPillComponent } from './components/base-layout/goo-pill/goo-pill.component';
import { HeaderComponent } from './components/base-layout/header/header.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MaterialModule } from './material.module';
import { HomeComponent } from './pages/home/home.component';
import { RoadmapComponent } from './pages/roadmap/roadmap.component';

@NgModule({
  declarations: [
    NotFoundComponent,
    BaseLayoutComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    GooModalHeaderComponent,
    GooPillComponent,
    RoadmapComponent,
  ],
  imports: [
    CommonModule,
    // FlexLayoutModule,
    MaterialModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  exports: [
    CommonModule,
    // FlexLayoutModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // Components
    NotFoundComponent,
    BaseLayoutComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    GooModalHeaderComponent,
    GooPillComponent,
    RoadmapComponent,
  ],
})
export class SharedModule {}
