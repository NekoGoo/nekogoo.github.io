import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './core/components/home/home.component';
import { NotFoundComponent } from './core/components/not-found/not-found.component';
import { BaseLayoutComponent } from './layouts/base-layout/base-layout.component';
import { FooterComponent } from './layouts/base-layout/footer/footer.component';
// import { GooModalHeaderComponent } from './layouts/base-layout/goo-modal-header/goo-modal-header.component';
// import { GooPillComponent } from './layouts/base-layout/goo-pill/goo-pill.component';
import { HeaderComponent } from './layouts/base-layout/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    BaseLayoutComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    // GooPillComponent,
    // GooModalHeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
