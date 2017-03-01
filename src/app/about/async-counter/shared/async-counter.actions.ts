import { Action } from '@ngrx/store';

import { type } from '../../../util';
import { AsyncCounter } from "./async-counter";

export const ActionTypes = {
  ASYNC_INCREMENT: type('AsyncCounter/INCREMENT'),
  ASYNC_INCREMENT_COMPLETE: type('AsyncCounter/INCREMENT_COMPLETE'),
  ASYNC_DECREMENT: type('AsyncCounter/DECREMENT'),
};

export class AsyncIncrementAction implements Action {
  type = ActionTypes.ASYNC_INCREMENT;

  constructor(public payload: number) {
  }
}

export class AsyncIncrementCompleteAction implements Action {
  type = ActionTypes.ASYNC_INCREMENT_COMPLETE;

  constructor(public payload: AsyncCounter) {
  }
}

export class AsyncDecrementAction implements Action {
  type = ActionTypes.ASYNC_DECREMENT;

  constructor(public payload: number) {
  }
}

export type Action =
  AsyncIncrementAction | AsyncDecrementAction | AsyncIncrementCompleteAction;
