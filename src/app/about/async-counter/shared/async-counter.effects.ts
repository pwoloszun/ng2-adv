import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { AsyncCounterApiService } from './async-counter-api.service';
import {
  ActionTypes,
  AsyncIncrementAction,
  AsyncIncrementCompleteAction,
} from './async-counter.actions';

@Injectable()
export class AsyncCounterEffects {
  constructor(private actions$: Actions, private asyncCounterApiService: AsyncCounterApiService) {
  }

  @Effect()
  search$: Observable<Action> = this.actions$
    .ofType(ActionTypes.ASYNC_INCREMENT)
    .map((action: AsyncIncrementAction) => {
      return action.payload;
    })
    .switchMap((value) => {
      if (value !== 0 && !value) {
        return Observable.empty();
      }

      return this.asyncCounterApiService.inc(value)
        .map((asyncCounter) => {
          console.log("asyncCounter", asyncCounter);
          return new AsyncIncrementCompleteAction(asyncCounter);
        });
    });
}
