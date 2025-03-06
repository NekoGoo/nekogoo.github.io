import { CommonModule } from '@angular/common';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  exports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  providers: [provideHttpClient(withInterceptorsFromDi())],
})
export class SharedModule {}
