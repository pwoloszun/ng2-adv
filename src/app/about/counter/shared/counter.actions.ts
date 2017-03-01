import { Action } from '@ngrx/store';

import { type } from '../../../util';

export const ActionTypes = {
  INCREMENT: type('Counter/INCREMENT'),
  DECREMENT: type('Counter/DECREMENT'),
};

export class IncrementAction implements Action {
  type = ActionTypes.INCREMENT;

  constructor(public payload: Date) {
  }
}

export class DecrementAction implements Action {
  type = ActionTypes.DECREMENT;

  constructor(public payload: Date) {
  }
}

export type Action = IncrementAction | DecrementAction;
