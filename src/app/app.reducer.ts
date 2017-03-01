import {
  ActionReducer,
  combineReducers
} from '@ngrx/store';
import { routerReducer, RouterState } from '@ngrx/router-store';

import { compose } from '@ngrx/core/compose';
import { storeFreeze } from 'ngrx-store-freeze';

import { counterReducer, CounterState } from "./about/counter/shared/counter.reducer";
import { asyncCounterReducer, AsyncCounterState } from "./about/async-counter/shared/async-counter.reducer";

export interface AppState {
  //TODO book state
  //TODO PostsState;
  //TODO CommentsState;
  counter: CounterState;
  asyncCounter: AsyncCounterState;
  router: RouterState;
}

const reducersMap = {
  //TODO bookReducer
  //TODO postsReducer
  //TODO commentsReducer
  counter: counterReducer,
  asyncCounter: asyncCounterReducer,
  router: routerReducer
};

// development: storeFreeze prevents state from being mutated(throws exceptions)
export const appReducer: ActionReducer<AppState> = compose(storeFreeze, combineReducers)(reducersMap);

// production
// export const appReducer: ActionReducer<AppState> = combineReducers(reducersMap);
