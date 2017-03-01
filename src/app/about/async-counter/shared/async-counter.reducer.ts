import { AsyncCounter } from "./async-counter";
import { Action, ActionTypes } from "./async-counter.actions";

export interface AsyncCounterState {
  entity: AsyncCounter;
}

export const initialState: AsyncCounterState = {
  entity: {
    value: 100,
    updatedAt: new Date()
  }
};

export function asyncCounterReducer(state: AsyncCounterState = initialState, action: Action): AsyncCounterState {
  switch (action.type) {
    case ActionTypes.ASYNC_INCREMENT:
      return {
        entity: {
          value: null,
          updatedAt: null
        }
      };

    case ActionTypes.ASYNC_INCREMENT_COMPLETE:
      return {
        entity: <AsyncCounter>action.payload
      };

    case ActionTypes.ASYNC_DECREMENT: {
      return {
        entity: {
          value: null,
          updatedAt: null
        }
      };
    }

    default: {
      return state;
    }
  }
}
