import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CocRoutingModule } from './coc-routing.module';
import { CocComponent } from './coc.component';

@NgModule({
  declarations: [CocComponent],
  imports: [CommonModule, CocRoutingModule],
})
export class CocModule {}
