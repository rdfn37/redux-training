// import { Actions } from "@twilio/flex-ui-core";

const INCREMENT = "INCREMENT";

const initialState = {
  currentValue: 0,
};

// Plugin Actions
export class Actions {
  static increment = () => ({ type: INCREMENT });
}

// Define How Actions Influence State
export function reduce(state = initialState, action) {
  switch (action.type) {
    case INCREMENT: {
      return {
        ...state,
        currentValue: state.currentValue + 1,
      };
    }

    default:
      return state;
  }
}
