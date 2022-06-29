import { combineReducers } from "redux";
// import counter from "./counterReducer";

import { reduce as CounterReducer } from "./CounterState"
import { reduce as CustomTaskListReducer } from "./CustomTaskListState";

// Register your redux store under a unique namespace
export const namespace = "redux-test";

// Combine the reducers
export default combineReducers({
  customTaskList: CustomTaskListReducer,
  counter: CounterReducer,
});
