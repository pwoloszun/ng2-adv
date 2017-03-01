import { Injectable } from '@angular/core';
import { Observable } from "rxjs";

import { AsyncCounter } from "./async-counter";

@Injectable()
export class AsyncCounterApiService {

  inc(value: number): Observable<AsyncCounter> {
    let asyncCounter: AsyncCounter = {
      value: value + 10,
      updatedAt: new Date()
    };

    let instant$ = Observable.of(asyncCounter);
    return Observable.timer(1200)
      .switchMapTo(instant$);
  }

}
