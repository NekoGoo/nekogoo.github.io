import { CommonModule } from '@angular/common';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { NgModule } from '@angular/core';
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
  exports: [
    CommonModule,
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
    RoadmapComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
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
    RoadmapComponent,
  ],
  providers: [provideHttpClient(withInterceptorsFromDi())],
})
export class SharedModule {}
