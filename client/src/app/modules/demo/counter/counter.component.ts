import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatCard } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { CounterActions, counterFeature } from '@shared/store/counter.feature';
import { CounterDialogComponent } from './counter-dialog.component';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
  standalone: true,
  imports: [MatCard, MatButton, AsyncPipe],
})
export class CounterComponent implements OnInit {
  count$: Observable<number>;

  constructor(
    private store: Store,
    private dialog: MatDialog,
  ) {
    this.count$ = store.select(counterFeature.selectCount);
  }

  ngOnInit(): void {}

  increment() {
    this.store.dispatch(CounterActions.increment());
  }

  decrement() {
    this.store.dispatch(CounterActions.decrement());
  }

  reset() {
    this.store.dispatch(CounterActions.reset());
  }

  // setCount(value: number) {
  //   this.store.dispatch(CounterActions.setCount({ value }));
  // }

  setCount() {
    const dialogRef = this.dialog.open(CounterDialogComponent, {
      width: '300px',
      data: { count: 0 },
    });

    dialogRef.afterClosed().subscribe((result: number) => {
      if (result !== undefined) {
        this.store.dispatch(CounterActions.setCount({ value: result }));
      }
    });
  }
}
