import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { DemoRoutingModule } from './demo-routing.module';
import { FontComponent } from './font/font.component';

@NgModule({
  declarations: [FontComponent],
  imports: [CommonModule, DemoRoutingModule, FlexLayoutModule],
})
export class DemoModule {}
