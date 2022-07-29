import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FontComponent } from './font/font.component';

const routes: Routes = [
  { path: '', redirectTo: 'font', pathMatch: 'full' },
  {
    path: 'font',
    component: FontComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DemoRoutingModule {}
