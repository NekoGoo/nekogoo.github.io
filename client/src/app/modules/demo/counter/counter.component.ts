import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatCard } from '@angular/material/card';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppState } from '@shared/store/app.state';
import {
  decrement,
  increment,
  reset,
} from '@shared/store/counter/counter.actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
  standalone: true,
  imports: [MatCard, MatButton, AsyncPipe],
})
export class CounterComponent implements OnInit {
  count$: Observable<number>;

  constructor(private store: Store<AppState>) {
    this.count$ = store.select('counter');
  }

  ngOnInit(): void {}

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }
}
