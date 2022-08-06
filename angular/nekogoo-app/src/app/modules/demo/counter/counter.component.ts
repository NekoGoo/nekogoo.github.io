import { Component, OnInit } from '@angular/core';
import { AppState } from '@core/store/app.state';
import {
  decrement,
  increment,
  reset,
} from '@core/store/counter/counter.actions';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
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
