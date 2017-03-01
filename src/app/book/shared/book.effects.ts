import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { BookApiService } from './book-api.service';

@Injectable()
export class BookEffects {
  constructor(private actions$: Actions, private booksApi: BookApiService) {
  }

  //TODO
  @Effect()
  search$: Observable<Action> = this.actions$
    .ofType('TODO')
    .map((action) => {
      console.log("eff load map", action);
      return {type: 'todo', payload: 'todo'};
    });
}
