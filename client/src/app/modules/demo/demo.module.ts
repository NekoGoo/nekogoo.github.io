import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

import { CounterComponent } from './counter/counter.component';
import { DemoRoutingModule } from './demo-routing.module';
import { FontComponent } from './font/font.component';

@NgModule({
  declarations: [FontComponent, CounterComponent],
  imports: [SharedModule, DemoRoutingModule],
})
export class DemoModule {}
