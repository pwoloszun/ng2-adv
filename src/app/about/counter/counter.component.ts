import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";

import { AppState } from "../../app.reducer";
import { Counter } from "./shared/counter";
import { DecrementAction, IncrementAction } from "./shared/counter.actions";

@Component({
  selector: 'counter',
  templateUrl: './counter.component.html'
})
export class CounterComponent implements OnInit {
  counter$: Observable<Counter>;
  counter: Counter;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.counter$ = this.store.select((state: AppState) => {
      return state.counter.entity;
    });
    this.counter$.subscribe((c: Counter) => {
      this.counter = c;
    });
  }

  increment() {
    this.store.dispatch(new IncrementAction(new Date()));
  }

  decrement() {
    this.store.dispatch(new DecrementAction(new Date()));
  }
}
