import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { CommentsApiService } from './comments-api.service';

@Injectable()
export class CommentsEffects {
  constructor(private actions$: Actions, private commentsApiService: CommentsApiService) {
  }

  //TODO
  // @Effect()
  // fetchByPostId$: Observable<Action> = this.actions$
  //   .ofType(ActionTypes.FETCH_BY_POST_ID)

}
