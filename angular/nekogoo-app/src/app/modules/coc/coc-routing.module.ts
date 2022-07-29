import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CocComponent } from './coc.component';

const routes: Routes = [{ path: '', component: CocComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CocRoutingModule {}
