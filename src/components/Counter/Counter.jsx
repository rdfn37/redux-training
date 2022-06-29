import React from "react";
import PropTypes from "prop-types";

import {CounterComponentStyles} from './Counter.Styles'

const Counter = (props) => {
  console.log("Counter props ", props);

  return (
    <CounterComponentStyles>
      <h1>Counter</h1>
      <h2>{props.currentValue}</h2>
      <div>
        <button onClick={props.increment}>+</button>
        <button>-</button>
      </div>
    </CounterComponentStyles>
  );
};

Counter.displayName = "Counter";

Counter.propTypes = {
  currentValue: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
};

export default Counter;
