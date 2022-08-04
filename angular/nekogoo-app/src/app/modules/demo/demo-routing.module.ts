import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CounterComponent } from './counter/counter.component';
import { FontComponent } from './font/font.component';

const routes: Routes = [
  {
    path: '',
    children: [
      // { path: '', redirectTo: 'font', pathMatch: 'full' },
      { path: '', redirectTo: 'ngrx', pathMatch: 'full' },
      {
        path: 'font',
        component: FontComponent,
      },
      {
        path: 'ngrx',
        component: CounterComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DemoRoutingModule {}
