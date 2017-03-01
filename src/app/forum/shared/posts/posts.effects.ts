import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { PostsApiService } from './posts-api.service';

@Injectable()
export class PostsEffects {
  constructor(private actions$: Actions, private postsApiService: PostsApiService) {
  }

  // TODO
  // @Effect()
  // fetch$: Observable<Action> = this.actions$.ofType(ActionTypes.FETCH)

}
