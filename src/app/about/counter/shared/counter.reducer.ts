import { Counter } from "./counter";
import { Action, ActionTypes } from "./counter.actions";

export interface CounterState {
  entity: Counter;
}

export const initialState: CounterState = {
  entity: {
    value: 0,
    updatedAt: new Date()
  }
};

export function counterReducer(state: CounterState = initialState, action: Action): CounterState {
  switch (action.type) {
    case ActionTypes.INCREMENT:
      return {
        entity: {
          value: state.entity.value + 1,
          updatedAt: action.payload
        }
      };

    case ActionTypes.DECREMENT: {
      return {
        entity: {
          value: state.entity.value - 1,
          updatedAt: action.payload
        }
      };
    }

    default: {
      return state;
    }
  }
}
