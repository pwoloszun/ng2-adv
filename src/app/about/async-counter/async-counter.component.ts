import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";

import { AppState } from "../../app.reducer";
import { AsyncCounter } from "./shared/async-counter";
import { AsyncDecrementAction, AsyncIncrementAction } from "./shared/async-counter.actions";

@Component({
  selector: 'async-counter',
  templateUrl: './async-counter.component.html'
})
export class AsyncCounterComponent implements OnInit {
  asyncCounter$: Observable<AsyncCounter>;
  asyncCounter: AsyncCounter;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.asyncCounter$ = this.store.select((state: AppState) => {
      return state.asyncCounter.entity;
    });
    this.asyncCounter$.subscribe((ac: AsyncCounter) => {
      this.asyncCounter = ac;
    });
  }

  increment() {
    this.store.dispatch(new AsyncIncrementAction(this.asyncCounter.value));
  }

  decrement() {
    this.store.dispatch(new AsyncDecrementAction(this.asyncCounter.value));
  }
}
