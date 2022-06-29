// import { createStore } from "redux";
// import { useSelector } from "react-redux";

// import {Provider} from "react-redux"

// import reduces from '../../states'
// import Test from "./test";

// console.log(reduces)

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "ADD":
//       state += 1;
//       store.getState();
//       break;
//     case "SUBTRACT":
//       state -= action.value;
//       break;
//   }
//   return state;
// };

// const store = createStore(reducer, 1);

// store.subscribe(() => {
//   console.log("Store Updated", store.getState());
// });

// store.dispatch({
//   type: "ADD",
//   // payload: 1
// });

// function TestButton() {
//   return (
//     <Provider store={store}>
//       <Test key='test'/>
//     </Provider>
//   );
// }

// export default TestButton;
